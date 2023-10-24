package com.dimple.project.demo.domain;

import lombok.Data;

import java.io.Serializable;

/**
 * @Author: BlueCitizens
 * @Date: 2020/3/26 16:41
 */
@Data
public class Doll implements Serializable {
    private String doll_id;
    private String doll_name;
    private String star;
    private String doll_type;
    private int isReform;
    private String build_time;
    private String value;

    public String getDoll_id() {
        return doll_id;
    }

    public void setDoll_id(String doll_id) {
        this.doll_id = doll_id;
    }

    public String getDoll_name() {
        return doll_name;
    }

    public void setDoll_name(String doll_name) {
        this.doll_name = doll_name;
    }

    public String getStar() {
        return star;
    }

    public void setStar(String star) {
        this.star = star;
    }

    public String getDoll_type() {
        return doll_type;
    }

    public void setDoll_type(String doll_type) {
        this.doll_type = doll_type;
    }

    public int getIsReform() {
        return isReform;
    }

    public void setIsReform(int isReform) {
        this.isReform = isReform;
    }

    public String getBuild_time() {
        return build_time;
    }

    public void setBuild_time(String build_time) {
        this.build_time = build_time;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
