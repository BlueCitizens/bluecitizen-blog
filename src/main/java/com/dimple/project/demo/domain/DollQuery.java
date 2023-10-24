package com.dimple.project.demo.domain;

import lombok.Data;

import java.io.Serializable;
import java.sql.Time;

/**
 * @Author: BlueCitizens
 * @Date: 2020/3/26 16:19
 */
@Data
public class DollQuery implements Serializable {
    private String doll_name;
    private String build_time;
    private String doll_type;
    private String value;
}
