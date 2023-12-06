<template>
  <div class="link-content home-content">
    <Preloader :is-loaded="isLoaded"></Preloader>
    <CommonBanner v-on:loadBannerPic="getValue" :carouselList="carouselList"
                  :is-showing-banner="isShowingBanner"
                  :home-pic-index="homePicIndex"></CommonBanner>
    <Row class="home-layout-content">
      <Col :xs="24" :sm="24" :md="24" :lg="17" :xl="17">
        <div class="layout-left" style="margin-top: 5px">
          <div class="header" style="font-family: seto,sans-serif;font-size: 25px">
          </div>
          <SocialSection
              :page-id="-1000"
              :allowComment="true"
              :commentList="list"/>
        </div>
      </Col>
      <Col :xs="24" :sm="24" :md="24" :lg="7">
        <div class="layout-right">
          <Recommend style="margin:15px 15px 0 15px"/>
          <Hot style="margin:15px 15px 0 15px"/>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import Recommend from "../../views/Recommend";
import Hot from "../../views/Hot";
import SocialSection from "../../views/comment/SocialSection";
import {listComment, listCarousel} from "@/api"
import Preloader from "../transition/Preloader";
import CommonBanner from "../../views/CommonBanner";

export default {
  name: "LinkContent",
  data() {
    return {
      carouselList: [],
      homePicIndex: this.$store.state.home_pic_index,
      isLoaded: false,
      isShowingBanner: true,
      list: [],
      pageId: -1000
    }
  },
  beforeMount() {
    listCarousel().then(response => {
      this.carouselList = response.data;
    });
  },
  created() {
    listComment(this.pageId).then(resposne => {
      this.list = resposne.data;
    });
  },
  methods: {
    getValue(data) {
      this.isLoaded = data;
    },
  },
  components: {
    CommonBanner,
    Preloader,
    Recommend, Hot, SocialSection
  },
}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
</style>
