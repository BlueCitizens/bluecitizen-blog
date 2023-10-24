package com.dimple.project.demo.controller;

import com.dimple.framework.aspectj.lang.annotation.VLog;
import com.dimple.framework.web.domain.AjaxResult;
import com.dimple.project.blog.domain.Blog;
import com.dimple.project.demo.domain.Doll;
import com.dimple.project.demo.domain.DollQuery;
import com.dimple.project.demo.service.GrifonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @Author: BlueCitizens
 * @Date: 2020/3/26 16:19
 */
@RestController
@RequestMapping("f")
public class GrifonController {
    @Autowired
    GrifonService grifonService;

    @GetMapping("/grifon/build")
    public AjaxResult selectDoll(DollQuery dollQuery) {
        List<Doll> dollList = grifonService.selectDollList(dollQuery);
        return AjaxResult.success(dollList);
    }

    @GetMapping("/grifon/all/name")
    public AjaxResult selectAllDollName(){
        List<String> dollNameList = grifonService.selectAllDollName();
        return AjaxResult.success(dollNameList);
    }
}
