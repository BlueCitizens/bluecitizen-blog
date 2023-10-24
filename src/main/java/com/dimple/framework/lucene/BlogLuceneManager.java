package com.dimple.framework.lucene;

import com.dimple.project.blog.domain.Blog;
import com.github.pagehelper.PageInfo;
import lombok.extern.slf4j.Slf4j;
import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.index.Term;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.*;
import org.apache.lucene.search.highlight.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @Author: BlueCitizens
 * @Date: 2022/8/17 23:20
 * @Description:
 */
@Slf4j
@Service
public class BlogLuceneManager {
    @Autowired
    private Analyzer analyzer;

    @Autowired
    private SearcherManager searcherManager;

    // 模糊匹配,匹配词
//    String keyStr = queryParam.get("searchKeyStr");
    public List<Blog> searchBlog(String keyStr) throws IOException, ParseException, InvalidTokenOffsetsException {
        searcherManager.maybeRefresh();
        IndexSearcher indexSearcher = searcherManager.acquire();
        BooleanQuery.Builder builder = new BooleanQuery.Builder();
        QueryParser queryParser;
        Query query = null;
//        String keyStr = "配置";
        if (keyStr != null) {
            // 输入空格,不进行模糊查询
            if (!"".equals(keyStr.replaceAll(" ", ""))) {
                queryParser = new QueryParser("title", analyzer);
                query = queryParser.parse(keyStr);
                builder.add(query, BooleanClause.Occur.MUST);
            }
        }
        Sort sort = new Sort();
        sort.setSort(new SortField("sort_id", SortField.Type.LONG, false));
        TopDocs topDocs = indexSearcher.search(builder.build(), 10, sort);
//        pageInfo.setTotal(topDocs.totalHits);
        ScoreDoc[] hits = topDocs.scoreDocs;
        Highlighter highlighter = new Highlighter(new SimpleHTMLFormatter("<B style=\"color: red\">", "</B>"),   //高亮格式，用<B>标签包裹
                new QueryScorer(query));
        Fragmenter fragmenter = new SimpleFragmenter(100);   //高亮后的段落范围在100字内
        highlighter.setTextFragmenter(fragmenter);
        List<Blog> blogList = new ArrayList<>();
        for (ScoreDoc hit : hits) {

            Document doc = indexSearcher.doc(hit.doc);
            String title = highlighter.getBestFragment(analyzer, "title", doc.get("title"));
            log.info(doc.toString());
            Blog blog = new Blog();
            blog.setId(Long.valueOf(doc.get("id")));
            blog.setTitle(title);
            blogList.add(blog);
        }
        return blogList;
    }

}
