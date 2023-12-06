<template>
  <div class="link-content home-content">
    <Preloader :is-loaded="isLoaded"></Preloader>
    <CommonBanner v-on:loadBannerPic="getValue" :carouselList="carouselList"
                  :is-showing-banner="isShowingBanner"
                  :home-pic-index="homePicIndex"></CommonBanner>
    <Row class="home-layout-content">
      <div class="card card-body" style="margin-top: 15px">
        <Divider orientation="left">
          <div class="header" style=";">
            <h4>
              本站友链
            </h4>
          </div>
        </Divider>
        <Row :lg="5">
          <Col v-for="link in list" :xs="24" :sm="12" :md="6" :lg="6">
            <Card style="text-align: center">
              <img class="card-img-top" :src="link.headerImg"
                   alt="avatar">
              <div class="card-body">
                <p class="card-category text-info mb-1"><a :href="link.url"
                                                           @click="updateCount(link.id)">{{ link.url }}</a>
                </p>
                <h4 :title="link.title" class="link-title">
                  {{ link.title }}
                </h4>
                <p class="link-desc" :title="link.description">{{ link.description }}</p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      <!--<Row>
          <Col v-for="link in list" :xs="8" :sm="8" :md="7" :lg="7" :xl="7">
              <a :href="link.url" style="color:#333;" @click="updateCount(link.id)">
                  <Card style="height: 10rem;margin: 0.8rem 0.8rem 0.8rem 0">
                      <div slot="title">
                          <Avatar :src="link.headerImg"/>
                          <span class="link-title" :title="link.title" style="">{{link.title}}</span>
                      </div>
                      <div class="link-desc" :title="link.description" style="">
                          {{link.description}}
                      </div>
                  </Card>
              </a>
          </Col>
      </Row>-->
      <div class="card card-body">
        <Divider orientation="left">
          <div class="header" style=";">
            <h4>
              本博客信息
            </h4>
          </div>
        </Divider>
        <div class="desc">
          地址：bckun.top <br>
          名称：BlueCitizen' bloG<br>
          描述：BC君的博客<br>
          图片：https://pic.imgdb.cn/item/61b6e7cf2ab3f51d91315184.jpg
        </div>
        <Divider orientation="left">
          <div class="header" style=";">
            <h4>
              友链申请
            </h4>
          </div>
        </Divider>
        <div style="width: 80%">
          <Form ref="form" :model="form" :rules="rules" :label-width="120">
            <FormItem prop="url" label="地址">
              <Input v-model="form.url" placeholder="网站地址">
                <Tooltip content="输入网址自动查询" placement="top" slot="append">
                  <Button @click="searchSiteInfo()" icon="ios-search"></Button>
                </Tooltip>
              </Input>
            </FormItem>
            <FormItem prop="title" label="站名">
              <Input v-model="form.title"
                     placeholder="字数尽量少">
              </Input>
            </FormItem>
            <FormItem prop="headerImg" label="头图">
              <Input v-model="form.headerImg"
                     placeholder="网站头图url">
              </Input>
            </FormItem>
            <FormItem prop="description" label="描述">
              <Input type="textarea" v-model="form.description"
                     placeholder="网站简介">
              </Input>
            </FormItem>
            <FormItem prop="email" label="邮箱">
              <Input v-model="form.email"
                     placeholder="返回申请结果">
              </Input>
            </FormItem>
            <FormItem>
              <Button :type="buttonType" :loading="loading" @click="handleSubmit()">提交申请</Button>
            </FormItem>
          </Form>
          <div class="desc">
            友链需管理员审核，申请后不会立即显示，请耐心等待。
          </div>
        </div>
      </div>
      <!--            <Col :xs="24" :sm="24" :md="24" :lg="7">
                      <div class="layout-right">
                          <Recommend style="margin:15px 15px 0 15px"/>
                          <Hot style="margin:15px 15px 0 15px"/>
                      </div>
                  </Col>-->
    </Row>
  </div>
</template>

<script>
import {listFriendLinks, insertFriendLink, updateLinkCount, listCarousel} from "@/api"
import Recommend from "../../views/Recommend";
import Hot from "../../views/Hot";
import {mapState} from "vuex";
import CommonBanner from "../../views/CommonBanner";
import Preloader from "../transition/Preloader";

export default {
  name: "LinkContent",
  components: {
    Preloader,
    CommonBanner,
    Recommend, Hot
  },
  data() {
    return {
      carouselList: [],
      homePicIndex: this.$store.state.home_pic_index,
      isLoaded: false,
      isShowingBanner: true,
      list: [],
      form: {},
      loading: false,
      rules: {
        url: [
          {required: true, message: "邮箱地址不能为空", trigger: "blur"},
          {type: 'url', message: '请输入正确的网址', trigger: 'change'},
          {min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'change'}
        ],
        title: [
          {required: true, message: "网站名不能为空", trigger: "blur"},
          {min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'change'}
        ],
        headerImg: [
          {required: true, message: "网站图标不能为空", trigger: "blur"},
          {type: 'url', message: '请输入正确的网站图标地址', trigger: 'change'},
          {min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'change'}
        ],
        description: [
          {required: true, message: "描述不能为空", trigger: "blur"},
          {min: 1, max: 100, message: '长度在 1 到 500 个字符', trigger: 'change'}
        ],
        email: [
          {required: true, message: "邮箱不能为空", trigger: "blur"},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: 'change'},
          {min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'change'}
        ]
      },
    }
  },
  computed: {
    ...mapState({
      siteTheme: state => state.base.siteTheme
    }),
    buttonType: function () {
      return this.siteTheme === 'dark' ? 'warning' : 'primary';
    },
  },
  beforeMount() {
    listCarousel().then(response => {
      this.carouselList = response.data;
    });
  },
  created() {
    listFriendLinks().then(response => {
      this.list = response.data;
    });
  },
  methods: {
    getValue(data) {
      this.isLoaded = data;
    },
    updateCount(id) {
      updateLinkCount(id);
    },
    searchSiteInfo() {
      this.$Notice.warning({
        title: '网站信息查询失败,请手动输入',
      });
    },
    handleSubmit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.loading = true;
          let obj = JSON.parse(JSON.stringify(this.form));
          insertFriendLink(obj).then(response => {
            if (response.code === 200) {
              this.$Notice.success({
                title: '申请成功,请耐心等待审核!',
              });
              this.form = {};
            } else {
              this.$Notice.error({
                title: '申请失败，请联系站长',
              })
            }
            this.loading = false;
          });
        } else {
          this.$Notice.error({
            title: '校验失败',
          });
          this.loading = false;
        }
      });
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/theme.styl";

.header
  display -webkit-box

.ivu-divider
  h4
    font-size 18px

body.dark
  .link-content
    .link-title, .link-desc
      color $dark-info-color

    .ivu-card-bordered, .ivu-card-head
      border 1px solid $dark-border-color

    .ivu-form-item-label
    .ivu-input
    .ivu-input-group-append
      background $dark-background-color
      color $dark-desc-color

    .ivu-card
      background-color $dark-cell-background-color

    .desc
      background $dark-background-color
      color $dark-info-color

    .ivu-divider
      color $dark-info-color

      &:before, &:after
        border-top 1px solid $dark-border-color!important

      h4
        color $dark-title-color

.ivu-card-body
  padding 7px !important


.link-title
  overflow hidden
  width 80%
  font-weight bold
  font-size 1.2rem
  display inline-block
  line-height inherit
  text-overflow ellipsis
  white-space nowrap

.link-desc
  /*padding-bottom 3px*/
  overflow hidden
  display inline
  text-overflow ellipsis
  display -webkit-box
  -webkit-box-orient vertical
  -webkit-line-clamp 3

</style>
