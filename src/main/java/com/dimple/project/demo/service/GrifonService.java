package com.dimple.project.demo.service;

import com.dimple.project.demo.domain.Doll;
import com.dimple.project.demo.domain.DollQuery;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author: BlueCitizens
 * @Date: 2020/3/26 16:27
 */
@Service
public interface GrifonService {
    List<Doll> selectDollList(DollQuery dollQuery);
    List<String> selectAllDollName();
}
