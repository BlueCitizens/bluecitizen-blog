package com.dimple.project.demo.mapper;

import com.dimple.project.demo.domain.Doll;
import com.dimple.project.demo.domain.DollQuery;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @Author: BlueCitizens
 * @Date: 2020/3/26 16:26
 */
@Mapper
public interface GrifonMapper {
    List<Doll> selectDollList(DollQuery dollQuery);
    List<String> selectAllDollName();
}
