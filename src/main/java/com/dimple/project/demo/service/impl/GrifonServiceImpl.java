package com.dimple.project.demo.service.impl;

import com.dimple.project.demo.domain.Doll;
import com.dimple.project.demo.domain.DollQuery;
import com.dimple.project.demo.mapper.GrifonMapper;
import com.dimple.project.demo.service.GrifonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author: BlueCitizens
 * @Date: 2020/3/26 16:27
 */
@Service
public class GrifonServiceImpl implements GrifonService {
    @Autowired
    GrifonMapper grifonMapper;

    @Override
    public List<Doll> selectDollList(DollQuery dollQuery){
        System.out.println(dollQuery);
        return grifonMapper.selectDollList(dollQuery);
    }

    @Override
    public List<String> selectAllDollName() {
        return grifonMapper.selectAllDollName();
    }
}
