<template>
  <div class="timeline-content layout-content">
    <Space direction="vertical" size="large" type="flex">
      <Input search enter-button="GO" placeholder="关键词检索" size="large" maxlength="50" v-model="keyStr"
             @on-search="search"/>
      <p>Powered by Lucene</p>
    </Space>
    <Table :columns="columns1" :data="results" @on-row-click="gotoPostDetail"></Table>
    <!--    <List header="Header" footer="Footer" border size="large">
          <ListItem v-for="(result,key) in results" :key="key">{{ result.title }}</ListItem>
        </List>-->
  </div>
</template>

<script>
import {searchBlogInfo} from "@/api";

export default {
  name: "SearchContent",
  data() {
    return {
      columns1: [
        /*{
          title: '标题',
          key: 'id'
        },*/
        {
          title: '搜索结果',
          key: 'title',
          render: (h, params) => {
            return h("div", {
              domProps: {
                innerHTML: params.row.title//渲染html内容
              }
            })
          }
          //return: <a href={`${params.row.url}`} target='_blank'>{params.row.cleanTitle}</a>  直接渲染标签
        }
      ],
      keyStr: '',
      results: []
    }
  },
  methods: {
    gotoPostDetail(post) {
      this.$router.push({
        name: "article",
        params: {id: post.id},
      });
    },
    search() {
      let keyStr = this.keyStr
      if (keyStr === "" || keyStr === null) {
        this.$Notice.info({
          title: "请输入搜索词"

        });
      }
      searchBlogInfo({keyStr: this.keyStr}).then(response => {
        if (response.code === 200) {
          this.$Notice.success({
            title: "查找到" + response.rows.length + "条结果",

          });
          this.results = response.rows
        } else {
          this.$Notice.error({
            title: '系统开小差了哦',
          })
        }
      })
    },
  },
}
</script>

<style scoped>

</style>
