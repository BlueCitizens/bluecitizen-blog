package com.dimple.project.system.controller;

import com.dimple.common.utils.spring.SpringUtils;
import com.dimple.framework.web.domain.AjaxResult;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: BlueCitizens
 * @Date: 2021/3/28 21:02
 * @Description:
 */
@RestController
public class ImTestController {

    @GetMapping("/testToken")
    public AjaxResult testToken() {
        AjaxResult ajax = AjaxResult.success();
        // 生成令牌
        //String token = sysLoginService.login("test", "123", "code", "abc");
        SpringUtils.getBean("threadPoolTaskExecutor");
        System.out.println("emmmmmm?");
        //ajax.put(Constants.TOKEN, token);
        return ajax;
    }
}

