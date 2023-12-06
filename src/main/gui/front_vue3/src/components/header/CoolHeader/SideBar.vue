<template>
    <div class="side-bar" @touchmove.stop.prevent :class="{ open: show }">
        <div class="main-area">
            <div class="top-wrapper" @touchmove.stop>
                <div class="top-area">
                    <!--<div class="site-info">
                        <h1 class="site-name">{{$store.state.settings.F_Title}}</h1>
                        <h1 class="site-desc">{{ $store.state.settings.F_Title_Desc }}</h1>
                    </div>-->
                </div>
                <div class="sidebar-menus">
                    <ul class="nav-menu metro">
                        <!-- 类别导航 -->
                        <li>
                            <router-link to="/">
                                <div class="nav-metro"><i
                                        class="fa fa-home"></i><span>主页</span></div>
                            </router-link>
                        </li>
                        <li v-for="item in menus">
                            <router-link v-if="item.target === false" :to="item.url">
                                <div class="nav-metro"><i
                                        :class="['fa ',item.icon]"></i><span>{{item.title}}</span></div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/articles">
                                <div class="nav-metro"><i class="fa fa-bookmark"></i><span>文章</span></div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/notes">
                                <div class="nav-metro"><i class="fa fa-pencil-square"></i><span>笔记</span></div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/essays">
                                <div class="nav-metro"><i class="fa fa-envira"></i><span>随笔</span></div>
                            </router-link>
                        </li>
                    </ul>
                    <!--<div class="sidebar-toc-list" ref="list" v-show="false">
                        <div class="site-nav">
                            <p>
                                <Icon type="ios-list-box"/>
                                文章目录
                            </p>
                        </div>
                        <div id="sidebar-toc" class="list" @click.prevent></div>
                    </div>-->
                </div>
            </div>
            <!--<div class="sidebar-operate-area" @click.stop>
                <ButtonGroup size="small">
                    <Button style="width:30px;" :icon="isDark ? 'ios-sunny' : 'ios-moon'" ghost
                            @click="toggleTheme">
                    </Button>
                    <Button style="width:40px;" icon="ios-log-in" @click="toIndex" ghost>
                    </Button>
                </ButtonGroup>
            </div>-->
        </div>
        <div class="mask" @click.prevent="toggleSideBar"></div>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex';

    export default {
        name: 'side-bar',
        props: {
            categories: {
                Type: Array,
                default: []
            },
            menus: {
                Type: Array,
                default: []
            }
        },
        data() {
            return {
                show: false,
                showNav: false
            };
        },
        beforeRouteUpdate(to, from, next) {
            next();
        },
        computed: {
            ...mapState({
                siteTheme: state => state.base.siteTheme
            }),
            isDark: function () {
                return this.siteTheme === 'dark';
            },
            showToc: function () {
                return (this.$route.name === 'article' ||
                    this.$route.name === 'book' ||
                    this.$route.name === 'book/note' ||
                    this.$route.name === 'movie' ||
                    this.$route.name === 'album'
                );
            }
        },
        methods: {
            ...mapMutations({
                updateSiteTheme: 'base/UPDATE_SITE_THEME'
            }),
            //跳转到后台首页
            toIndex() {
                window.open("http://admin.bianxiaofeng.com", '_blank')
            },
            rootRouterLink(category) {
                let router = {};
                router.name = category.category_type;
                return router;
            },
            routerLink(category) {
                let router = {};
                router.name = "articles/category";
                router.params = {};
                router.params['id'] = category.id;
                return router;
            },
            toggleSideBar() {
                this.show = !this.show;
                this.showNav = !(this.$route.name === 'article' ||
                    this.$route.name === 'book' ||
                    this.$route.name === 'book/note' ||
                    this.$route.name === 'movie' ||
                    this.$route.name === 'album'
                );
            },
            toggleTheme() {
                this.updateSiteTheme(this.siteTheme === 'dark' ? 'default' : 'dark');
            }
        },
        watch: {
            show: function (val, oldval) {
                /*this.$store.dispatch('isBarShow',val);*/
                this.$parent.$refs.menu_btn.checked = val;
                console.log("sidebar: " + oldval + "=>" + val)
            }
        }
    };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
    @import "./stylus/sidebar.styl";
</style>
<style scoped>
    .metro {
        width: 290px;
        margin-left: 13px;
        margin-top: 60px;
    }

    .nav-metro {
        text-align: center;
        width: 110px;
        height: 110px;
        color: rgba(255, 255, 255, 0.9);
    }

    .metro li {
        position: relative;
        text-align: center;
        margin: 0 10px 10px 0;
        width: 110px;
        height: 110px;
        color: #ffffff;
        float: left;
        -webkit-transition: .2s -webkit-transform, 1s opacity;
        -ms-transition: .2s -ms-transform, 1s opacity;
        transition: .2s transform, 1s opacity;
        cursor: pointer;
    }

    .metro li i {
        font-size: 34px;
        margin: 25px 0 0;
    }

    .metro li span {
        color: rgba(255, 255, 255, 0.9);
        position: absolute;
        left: 40px;
        bottom: 15px;
        font-size: 14px;
    }

    .metro li:first-child {
        background: #00b6de;
    }

    .metro li:nth-child(2) {
        background: #56dea7;
    }

    .metro li:nth-child(3) {
        background: #ff7659;
    }

    .metro li:nth-child(4) {
        background: #0087cc;
    }

    .metro li:nth-child(5) {
        background: #f26175;
    }

    .metro li:nth-child(6) {
        background: #ff8abc;
    }

    .metro li:nth-child(n+7) {
        width: 70px;
        height: 60px;
        background: #9e7ac2;
    }

    .metro li:active {
        -webkit-transform: scale(0.95);
        -ms-transform: scale(0.95);
        transform: scale(0.95);
    }

    .metro li:nth-child(n+7) i {
        font-size: 20px;
        margin: 22px auto 0 -60px;
    }

</style>
