package com.dimple.framework.lucene;

import com.dimple.project.blog.domain.Blog;
import com.dimple.project.front.domain.BlogQuery;
import com.dimple.project.front.mapper.FrontMapper;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

/**
 * @Author: BlueCitizens
 * @Date: 2022/8/17 16:57
 * @Description:
 */
@Service
public class ILuceneService {

    LuceneDao luceneDao;
    FrontMapper frontMapper;

    public ILuceneService(LuceneDao luceneDao, FrontMapper frontMapper) {
        this.luceneDao = luceneDao;
        this.frontMapper = frontMapper;

    }

    public void synBlogCreatIndex() throws IOException {
        // 获取要索引的条目
        BlogQuery blogQuery = new BlogQuery();
        List<Blog> blogList = frontMapper.selectBlogList(blogQuery);
//        List<Blog> allBlog = new ArrayList<>();
        // 再插入productList
        luceneDao.createBlogIndex(blogList);
    }
}
