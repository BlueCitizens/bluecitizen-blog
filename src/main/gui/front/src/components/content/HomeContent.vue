<template>
    <div class="home-content">
        <!-- PRELOADER -->
        <!--<div :class="isLoaded?'preloader hide-preloader':'preloader'">

            <div class="spinner"></div>

        </div>-->
        <Preloader :is-loaded="isLoaded"></Preloader>
        <!-- /PRELOADER -->
        <div id="banner-block">
            <row id="banner-card">
                <HomeBanner v-on:loadBannerPic="getValue" :carouselList="carouselList" :is-showing-banner="isShowingBanner"
                            :home-pic-index="homePicIndex"></HomeBanner>
            </row>
        </div>
        <!--<div class="banner" style="margin-bottom:20px;">
            <div class="bracket"></div>
            <div class="target">
                &lt;!&ndash;<HomeBanner :carouselList="carouselList"></HomeBanner>&ndash;&gt;
            </div>
        </div>-->
        <Row class="home-layout-content">
            <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="17">
                <div class="layout-left">
                    <!--<affix>
                    &lt;!&ndash; 文章 &ndash;&gt;
                    <SectionTitle mainTitle="文章" subTitle="Article" :menus="articlesTitleMenus" :to="'/articles'"
                                  :withRefresh="false"
                                  :withTimeSelect="false"
                                  @refresh="refreshArticles"
                                  @menusControl="articlesMenusControl">
                    </SectionTitle>
                    </affix>-->
                  <Card>
                    <p slot="title">最近动态</p>
                    <ArticleListCell v-for="article in articles" :article="article" :key="article.id"></ArticleListCell>
                  </Card>
                    <!--<affix :offset-top="45">
                    <SectionTitle mainTitle="阅读" subTitle="Reading" :menus="booksTitleMenus" :to="'/articles'"
                                  v-if="books.length>0"
                                  :withRefresh="true"
                                  :withTimeSelect="false"
                                  @refresh="refreshBooks"
                                  @menusControl="booksMenusControl">
                    </SectionTitle>
                    </affix>-->
                </div>
            </Col>
            <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="7">
                <div class="layout-right" v-if="showPage">
                    <About/>
                    <TagWall style="margin-top:15px;"/>
<!--                    <Recommend style="margin-top:15px;"/>-->
<!--                    <Hot style="margin-top:15px;"/>-->
                    <FriendLinks style="margin-top:15px;"/>
                </div>
            </Col>
        </Row>
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
    import BookCell from "../../views/book/BookCell";
    import Preloader from "../transition/Preloader";


    export default {
        name: 'home-content',
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
            /*hideBanner() {
                let banner_height = document.getElementById('banner-block').getBoundingClientRect().height;
                let banner_botm = document.getElementById('banner-block').getBoundingClientRect().bottom;
                if (banner_botm > banner_height / 2 && this.isShowingBanner === true) {
                    this.isShowingBanner = false;
                    console.log(this.isShowingBanner)
                } else if (banner_botm < banner_height / 2 && this.isShowingBanner === false) {
                    this.isShowingBanner = true;
                }
            },*/
            /*onePageScroll() {
                let banner_height = document.getElementById('banner-block').getBoundingClientRect().height;
                let banner_botm = document.getElementById('banner-block').getBoundingClientRect().bottom;
                if (banner_botm < banner_height / 2 && this.isShowingBanner === true) {
                    this.isShowingBanner = !this.isShowingBanner;
                    document.getElementById('banner-card').style.opacity = '0.3';
                } else if (banner_botm > banner_height / 2 && this.isShowingBanner === false) {
                    this.isShowingBanner = !this.isShowingBanner;
                    document.getElementById('banner-card').style.opacity = '1';
                }
                /!*this.isShowingBanner = !this.isShowingBanner;
                if(document.documentElement.scrollTop !== 2000){
                    window.scrollTo({
                        top: 2000,
                        behavior: "smooth"
                    });
                    document.getElementById('banner-block').hidden;
                }*!/
            },*/
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
            Preloader, SectionTitle, ArticleListCell, About, TagWall, FriendLinks, Hot, Recommend, HomeBanner, BookCell
        }
    };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
    .home-content
        width auto
        margin-top 0

        #banner-block
            height 620px
            margin: 0 0 20px 0

        #banner-card
            transition 0.5s;

        /*.banner
            position relative
            width 100%
            overflow hidden

            .bracket
                margin-top 30%
                @media only screen and (max-width: $responsive-sm)
                    margin-top 38%

            .target
                position absolute
                top 0
                bottom 0
                left 0
                right 0*/

        .thumb-cards
            margin-top 15px
</style>
