package com.dimple.framework.lucene;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 * @Author: BlueCitizens
 * @Date: 2022/8/17 15:35
 * @Description:
 */
@Component
@Order(value = 1)
public class BlogRunner implements ApplicationRunner {
    @Autowired
    private ILuceneService service;

    @Override
    public void run(ApplicationArguments arg0) throws Exception {
        service.synBlogCreatIndex();
    }
}
