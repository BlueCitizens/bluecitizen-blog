<template>
  <div class="project-content home-content">
    <Preloader :is-loaded="isLoaded"></Preloader>
    <CommonBanner v-on:loadBannerPic="getValue" :carouselList="carouselList"
                  :is-showing-banner="isShowingBanner"
                  :home-pic-index="homePicIndex"></CommonBanner>
    <Row class="home-layout-content">
      <div class="card card-body" style="margin-top: 15px">
        <Row :lg="5">
          <Col v-for="book in books" :xs="24" :sm="12" :md="6" :lg="6">
            <DemoCell :book="book" :key="book.id"></DemoCell>
          </Col>
        </Row>
      </div>
    </Row>
    <!--<div class='loader'>
        <div class='loader_overlay'></div>
        <div class='loader_cogs'>
            <div class='loader_cogs__top'>
                <div class='top_part'></div>
                <div class='top_part'></div>
                <div class='top_part'></div>
                <div class='top_hole'></div>
            </div>
            <div class='loader_cogs__left'>
                <div class='left_part'></div>
                <div class='left_part'></div>
                <div class='left_part'></div>
                <div class='left_hole'></div>
            </div>
            <div class='loader_cogs__bottom'>
                <div class='bottom_part'></div>
                <div class='bottom_part'></div>
                <div class='bottom_part'></div>
                <div class='bottom_hole'></div>
            </div>
            <p>暂无内容</p>
        </div>
    </div>-->
<!--    <div class="row row-projects">-->
<!--      <div class="col-sm-6 col-lg-3" v-for="book in books">-->
<!--        <DemoCell :book="book" :key="book.id"></DemoCell>-->
<!--      </div>-->
<!--      &lt;!&ndash;<div class="col-sm-6 col-lg-3">-->
<!--          <div class="card">-->
<!--              <div class="p-2">-->
<!--                  <img class="card-img-top rounded" alt="Product 1">-->
<!--              </div>-->
<!--              <div class="card-body pt-2">-->
<!--                  <h4 class="mb-1 fw-bold">少女前线工具(自家用)</h4>-->
<!--                  <p class="text-muted small mb-2">Last updated: Yesterday 3:12 AM</p>-->
<!--                  <div class="avatar-group">-->
<!--                      contributed by-->
<!--                      <div class="avatar avatar-sm">-->
<!--                          <img src="./../../assets/avatar.jpg" alt="..."-->
<!--                               class="avatar-img rounded-circle border border-white">-->
<!--                      </div>-->
<!--                  </div>-->
<!--              </div>-->
<!--          </div>-->
<!--      </div>-->
<!--      <div class="col-sm-6 col-lg-3">-->
<!--          <div class="card">-->
<!--              <div class="p-2">-->
<!--                  <img class="card-img-top rounded" src="./../../assets/background.jpeg" alt="Product 1">-->
<!--              </div>-->
<!--              <div class="card-body pt-2">-->
<!--                  <h4 class="mb-1 fw-bold">undefined</h4>-->
<!--                  <p class="text-muted small mb-2">Last updated: Yesterday 3:12 AM</p>-->
<!--                  <div class="avatar-group">-->
<!--                      <div class="avatar avatar-sm">-->
<!--                          <img src="./../../assets/avatar.jpg" alt="..."-->
<!--                               class="avatar-img rounded-circle border border-white">-->
<!--                      </div>-->
<!--                  </div>-->
<!--              </div>-->
<!--          </div>-->
<!--      </div>&ndash;&gt;-->
<!--    </div>-->
  </div>
</template>

<script type="text/ecmascript-6">
import {
  mapState,
  mapActions
} from 'vuex';

import SectionTitle from "../../views/SectionTitle";
import ArticleListCell from "../../views/article/ArticleListCell";
import About from "../../views/About";
import TagWall from "../../views/TagWall";
import FriendLinks from "../../views/FriendLinks";
import Hot from "../../views/Hot";
import Recommend from "../../views/Recommend";
import HomeBanner from "../../views/HomeBanner";
import {listCarousel} from '@/api'
import DemoCell from "../../views/demo/DemoCell";
import Preloader from "../transition/Preloader";
import CommonBanner from "../../views/CommonBanner";


export default {
  name: "ProjectContent",
  data() {
    return {
      isLoaded: false,
      io: null,
      homePicIndex: this.$store.state.home_pic_index,
      isShowingBanner: true,
      scrollDirect: 'down',
      carouselList: [],
      // 文章
      mostComment: undefined,
      hot: undefined,
      recommend: undefined,
      articlesTitleMenus: [
        /*{title: "最多评论", selected: false, method: 'mostComment'},
        {title: "最热", selected: false, method: 'hot'},
        {title: "推荐", selected: false, method: 'recommend'}*/
      ],
      mostCommentBooks: undefined,
      hotBooks: undefined,
      recommendBooks: undefined,
      booksTitleMenus: [
        /*{title: '最多评论', selected: false, method: 'mostComment'},
        {title: '最热', selected: false, method: 'hot'},
        {title: '推荐', selected: false, method: 'recommend'}*/
      ],
    };
  },
  computed: {
    ...mapState({
      articles: state => state.home.articles,
      books: state => state.home.books,
    }),
    showPage: function () {
      return this.$store.state.home.articles.length > 0;
    }
  },
  beforeMount() {
    listCarousel().then(response => {
      this.carouselList = response.data;
    });
    if (this.$store.state.home.articles.length === 0) {
      this.getArticlesBaseInfo({
        is_recommend: this.recommend,
        is_hot: this.hot,
        ordering: this.mostComment,
        pageSize: 10,
        pageNum: 1
      });
    }
    if (this.$store.state.home.books.length === 0) {
      this.getBooksBaseInfo({
        is_recommend: this.recommend,
        is_hot: this.hot,
        ordering: this.mostComment,
        pageSize: 10,
        pageNum: 1
      });
    }
  },
  mounted() {
    // 更新首页meta信息
    // this.updateHomeMeta();
    //window.addEventListener('scroll',this.onePageScroll);

    /*const options = {
        root: null,
        threshold: [0.5]
    };
    let userAgent = navigator.userAgent;
    if (userAgent.indexOf("IE") > -1 || userAgent.indexOf("Edge") > -1) {
        console.log('IE/Edge不兼容');
    } else {
        this.io = new IntersectionObserver(this.hideBanner, options);
        this.io.observe(document.getElementById('banner-block'));
    }*/
    // window.addEventListener('scroll', this.onePageScroll)
  },
  updated() {
  },
  beforeDestroy() {
    /*this.io.unobserve(document.getElementById('banner-block'));
    this.io.disconnect();*/
    // window.removeEventListener('scroll', this.onePageScroll);
  },
  methods: {
    ...mapActions({
      getArticlesBaseInfo: 'home/GET_ARTICLES_BASE_INFO',
      getBooksBaseInfo: 'home/GET_BOOKS_BASE_INFO',
    }),
    getValue(data){
      this.isLoaded = data;
    },
    refreshArticles() {
      this.mostComment = undefined;
      this.hot = undefined;
      this.recommend = undefined;
      this.getArticlesBaseInfo();
    },
    articlesMenusControl(params) {
      switch (params[0]) {
        case 'mostComment':
          this.mostComment = params[1] ? 'commentCount' : undefined;
          break;
        case 'hot':
          this.hot = params[1] ? 'click' : undefined;
          break;
        case 'recommend':
          this.recommend = params[1] ? true : undefined;
          break;
      }
      // 排序条件
      let orderings = [];
      if (this.mostComment !== undefined) {
        orderings.push(this.mostComment);
      }
      if (this.hot !== undefined) {
        orderings.push(this.hot);
      }
      this.getArticlesBaseInfo({
        support: this.recommend,
        orderByColumn: orderings.toString(),
        isAsc: this.timeSorted ? 'asc' : 'desc',
        pageNum: 1,
        pageSize: 10
      });
    },
    refreshBooks() {
      this.mostCommentBooks = undefined;
      this.hotBooks = undefined;
      this.recommendBooks = undefined;
      this.getBooksBaseInfo({
        params: {
          is_recommend: this.recommendBooks,
          is_hot: this.hotBooks,
          ordering: this.mostCommentBooks,
          limit: 10,
          offset: 0
        }
      });
    },
    booksMenusControl(params) {
      switch (params[0]) {
        case 'mostComment':
          this.mostCommentBooks = params[1] ? 'commentCount' : undefined;
          break;
        case 'hot':
          this.hotBooks = params[1] ? 'click' : undefined;
          break;
        case 'recommend':
          this.recommendBooks = params[1] ? true : undefined;
          break;
      }
      // 排序条件
      let orderings = [];
      if (this.mostCommentBooks !== undefined) {
        orderings.push(this.mostCommentBooks);
      }
      if (this.hot !== undefined) {
        orderings.push(this.hotBooks);
      }
      this.getBooksBaseInfo({
        params: {
          support: this.recommend,
          orderByColumn: orderings.toString(),
          isAsc: this.timeSorted ? 'asc' : 'desc',
          pageNum: 1,
          pageSize: 10,
          orderByColumn: 'b.create_time'
        }
      });
    }
  },
  components: {
    DemoCell,
    Preloader,
    SectionTitle,
    ArticleListCell,
    About,
    TagWall,
    FriendLinks,
    Hot,
    Recommend,
    HomeBanner,
    CommonBanner,
  }
};
</script>

<style scoped>

.row-projects {
  margin-right: -10px;
  margin-left: -10px;
}

.row-projects [class^="col-"] {
  padding: 0 10px;
}

/*主要CSS*/
.project-content {

}

h1 {
  text-transform: uppercase;
  font-size: 30px;
  color: #576e81;
  margin: 30px 0px 0px 0px;
}

h2 {
  font-weight: normal;
  font-size: 18px;
  color: #F98DB9;
  margin: 10px 0px 0px 0px;
}

p {
  margin: 0 auto;
}

.loader {
  height: 250px;
  position: relative;
  margin: auto;
  width: 400px;
  z-index: 10;
}

.loader_overlay {
  width: 150px;
  height: 150px;
  background: transparent;
  box-shadow: 0px 0px 0px 1000px rgba(255, 255, 255, 0.67), 0px 0px 19px 0px rgba(0, 0, 0, 0.16) inset;
  border-radius: 100%;
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.loader_cogs {
  z-index: -2;
  width: 100px;
  height: 100px;
  top: -120px !important;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.loader_cogs p {
  color: black;
  position: absolute;
  left: -100px;
  font-size: 30px;
  width: 300px;
}

.loader_cogs__top {
  position: relative;
  width: 100px;
  height: 100px;
  -webkit-transform-origin: 50px 50px;
  transform-origin: 50px 50px;
  -webkit-animation: rotate 10s infinite linear;
  animation: rotate 10s infinite linear;
}

.loader_cogs__top div:nth-of-type(1) {
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}

.loader_cogs__top div:nth-of-type(2) {
  -webkit-transform: rotate(60deg);
  transform: rotate(60deg);
}

.loader_cogs__top div:nth-of-type(3) {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.loader_cogs__top div.top_part {
  width: 100px;
  border-radius: 10px;
  position: absolute;
  height: 100px;
  background: #f98db9;
}

.loader_cogs__top div.top_hole {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: white;
  position: absolute;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.loader_cogs__left {
  position: relative;
  width: 80px;
  -webkit-transform: rotate(16deg);
  transform: rotate(16deg);
  top: 28px;
  -webkit-transform-origin: 40px 40px;
  transform-origin: 40px 40px;
  -webkit-animation: rotate_left 10s .1s infinite reverse linear;
  animation: rotate_left 10s .1s infinite reverse linear;
  left: -24px;
  height: 80px;
}

.loader_cogs__left div:nth-of-type(1) {
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}

.loader_cogs__left div:nth-of-type(2) {
  -webkit-transform: rotate(60deg);
  transform: rotate(60deg);
}

.loader_cogs__left div:nth-of-type(3) {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.loader_cogs__left div.left_part {
  width: 80px;
  border-radius: 6px;
  position: absolute;
  height: 80px;
  background: #97ddff;
}

.loader_cogs__left div.left_hole {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: white;
  position: absolute;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.loader_cogs__bottom {
  position: relative;
  width: 60px;
  top: -65px;
  -webkit-transform-origin: 30px 30px;
  transform-origin: 30px 30px;
  -webkit-animation: rotate_left 10.2s .4s infinite linear;
  animation: rotate_left 10.2s .4s infinite linear;
  -webkit-transform: rotate(4deg);
  transform: rotate(4deg);
  left: 79px;
  height: 60px;
}

.loader_cogs__bottom div:nth-of-type(1) {
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}

.loader_cogs__bottom div:nth-of-type(2) {
  -webkit-transform: rotate(60deg);
  transform: rotate(60deg);
}

.loader_cogs__bottom div:nth-of-type(3) {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.loader_cogs__bottom div.bottom_part {
  width: 60px;
  border-radius: 5px;
  position: absolute;
  height: 60px;
  background: #ffcd66;
}

.loader_cogs__bottom div.bottom_hole {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: white;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

/* Animations */
@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rotate_left {
  from {
    -webkit-transform: rotate(16deg);
    transform: rotate(16deg);
  }
  to {
    -webkit-transform: rotate(376deg);
    transform: rotate(376deg);
  }
}

@keyframes rotate_left {
  from {
    -webkit-transform: rotate(16deg);
    transform: rotate(16deg);
  }
  to {
    -webkit-transform: rotate(376deg);
    transform: rotate(376deg);
  }
}

@-webkit-keyframes rotate_right {
  from {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
  }
  to {
    -webkit-transform: rotate(364deg);
    transform: rotate(364deg);
  }
}

@keyframes rotate_right {
  from {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
  }
  to {
    -webkit-transform: rotate(364deg);
    transform: rotate(364deg);
  }
}
</style>
