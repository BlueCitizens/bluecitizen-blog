package com.dimple.framework.lucene;

import com.dimple.project.blog.domain.Blog;
import lombok.extern.slf4j.Slf4j;
import org.apache.lucene.document.*;
import org.apache.lucene.index.IndexWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * @Author: BlueCitizens
 * @Date: 2022/8/17 16:58
 * @Description:
 */
@Slf4j
@Component
public class LuceneDao {
    @Autowired
    private IndexWriter indexWriter;

    public void createBlogIndex(List<Blog> blogList) throws IOException {
        List<Document> docs = new ArrayList<Document>();
        for (Blog p : blogList) {
            Document doc = new Document();
            Long id = p.getId();
            doc.add(new StoredField("id", id));
//            doc.add(new LongPoint("id", id));
            doc.add(new NumericDocValuesField("sort_id", id));
            doc.add(new TextField("title", p.getTitle(), Field.Store.YES));
            log.info(doc.toString());
//            doc.add(new StringField("category", p.getCategory().getTitle(), Field.Store.YES));
//            // 存储到索引库
//            doc.add(new TextField("content", p.getContent(), Field.Store.YES));
            docs.add(doc);
        }
        indexWriter.addDocuments(docs);
        indexWriter.commit();
    }
}
