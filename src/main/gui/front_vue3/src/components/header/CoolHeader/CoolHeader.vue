<template>
  <div class="cool-header">
<!--    <head-room :speed="200" :zIndex="1003">
      &lt;!&ndash; header &ndash;&gt;
      <div class="nav-header">
        <div id="mobile-menu">
          &lt;!&ndash;<Drawer title="Basic Drawer" :closable="false" v-model="isDrawerOpen" placement="left">
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
          </Drawer>&ndash;&gt;
          <div class="header d-lg-flex justify-content-between">
            <div class="header-wthree">
              <h1>
                <router-link class="navbar-brand logo" to="/">
                  <span>BlueCitizens&nbsp;bloG</span>
                </router-link>
              </h1>
            </div>
            <div class="nav_w3ls">
              <input class="menu-btn" type="checkbox" id="menu-btn" ref="menu_btn"
                     @click="showMobileMenu"/>
              <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            </div>
          </div>
        </div>
        <div id="browser-menu">
          <div class="header d-lg-flex justify-content-between">
            <div class="header-wthree">
              <h1>
                <router-link class="navbar-brand editContent logo" to="/">
                  <span>BlueCitizens&nbsp;bloG</span>
                </router-link>
              </h1>
            </div>
            <div class="nav_w3ls">
              <nav>
                <ul class="menu">
                  <li class="dropdown">
                    <a class="nav-link dropbtn"><i class="fa fa-file-archive-o"></i>
                      <Icon class="ivu-icon-ios-arrow-down nav-arrow"/>
                    </a>
                    <div class="dropdown-content">
                      <router-link to="/articles" class="nav-link">文章</router-link>
                      <router-link to="/notes" class="nav-link">笔记</router-link>
                      <router-link to="/essays" class="nav-link">随笔</router-link>
                    </div>
                  </li>
                  <li v-for="item in menus">
                    <router-link v-if="item.target === false" class="nav-link" :to="item.url">
                      {{ item.title }}
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/search" class="nav-link">
                      <Icon type="ios-search" />
                    </router-link>
                  </li>
                  &lt;!&ndash;<li class="nav-item">
                      <Button style="margin: 5px" :icon="isDark ? 'ios-sunny' : 'ios-moon'"
                              @click="toggleTheme">
                      </Button>
                      &lt;!&ndash;<Button icon="ios-log-in" @click="toIndex">
                      </Button>&ndash;&gt;
                  </li>&ndash;&gt;
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      &lt;!&ndash; //header &ndash;&gt;
    </head-room>-->
    <div mdui-headroom style="position: fixed; top: 0; left: 0; right: 0;">
      <mdui-button>Button</mdui-button>
    </div>

    <side-bar :categories="categories" :menus="menus" ref="sidebar"></side-bar>
  </div>
</template>

<script>
// import {headroom} from 'vue-headroom';
import 'mdui/mdui.css';
import 'mdui';
import {mapState, mapMutations, mapActions} from 'vuex';
import {loadFromLocal} from '@/utils';
import SideBar from "./SideBar.vue";

export default {
  name: "HomeHeader",
  data() {
    return {
      isDrawerOpen: false,
      searchKeyWords: '',
      searchResult: [],
      showMobileSearchView: false,
      checkM: false,
    };
  },
  mounted() {
    if (!this.$store.state.base.categories) this.getCategories();
    if (!this.$store.state.base.menus) this.getMenus();
    // 获取皮肤信息
    this.checkTheme();
  },
  computed: {
    ...mapState({
      categories: state => state.base.categories,
      menus: state => state.base.menus,
      siteTheme: state => state.base.siteTheme
    }),
    /*...mapGetters(['isBarShow']),*/
    isDark: function () {
      return this.siteTheme === 'dark';
    }
  },
  methods: {
    ...mapMutations({
      updateSiteTheme: 'base/UPDATE_SITE_THEME'
    }),
    ...mapActions({
      getCategories: 'base/GET_CATEGORIES',
      getMenus: 'base/GET_MENUS'
    }),
    //跳转到后台首页
    toIndex() {
      window.open("http://admin.bianxiaofeng.com", '_blank')
    },
    //切换主题
    toggleTheme() {
      console.log(this.siteTheme);
      this.updateSiteTheme(this.siteTheme === 'dark' ? 'default' : 'dark');
    },
    checkTheme() {
      const theme = loadFromLocal('siteConfig', 'theme', 'default');
      this.updateSiteTheme(theme);
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
    showMobileMenu() {
      // 显示手机端的菜单
      let sidebar = this.$refs.sidebar;
      sidebar.toggleSideBar();
    },
    showSearchView() {
      this.showMobileSearchView = !this.showMobileSearchView;
    },
  },
  /*watch: {
      isBarShow: function () {
          console.log("nms")
      }
  },*/
  components: {
    // 'head-room': headroom,
    'side-bar': SideBar,
    // 'search-view': SearchView
  }
}
</script>

<style scoped>

/* header */
.justify-content-between {
  -webkit-box-pack: justify !important;
  -ms-flex-pack: justify !important;
  justify-content: space-between !important;
}

header {
  background: #fff;
}

.header .exact-active-link {
  color: #9b9b9b;
}

.header li:last-child a {
  border-right: none;
}

.header li a:hover,
.header .menu-btn:hover,
li.nav-item.active a {
  /*background-color: #a6b9d4;*/
  /*color: #fff;*/
}

.header .logo {
  font-size: 20px;
  padding: 15px 20px;
  text-decoration: none;
  font-weight: 600;
}

.header .logo span {
  font-family: Arual, sans-serif;
  font-weight: bolder;
  margin-right: 10px;
  background: black;
  /*background: linear-gradient(to right, blue, #e2638b, rebeccapurple);*/
  text-shadow: 0 0 0px #4e4e4e,
  0 0 5px #4e4e4e,
  0 0 10px #4e4e4e;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  color: transparent
}

.header-wthree {
  float: left;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
  text-align: center;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  float: right;
  padding: 20px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #4e4e4e;
  display: block;
  height: 5px;
  position: relative;
  transition: background .2s ease-out;
  width: 25px;
  border-radius: 5px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #4e4e4e;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
  border-radius: 5px;
}

.header .menu-icon .navicon:before {
  top: 10px;
}

.header .menu-icon .navicon:after {
  top: -10px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn {
  overflow: hidden;
}

.header .menu-btn:checked ~ .menu {
  max-height: 500px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

.nav-header {
  background: rgba(248, 248, 248, 0.5);
  transition: All 0.3s ease;
  box-shadow: 0 1px 5px 1px rgba(69, 65, 78, 0.1);
}

.nav-header:hover {
  background: #e6e6e6;
}

.nav-link {
  padding-top: 10px;
  height: 40px;
  font-size: 16px;
  letter-spacing: 1px;
  color: #4e4e4e;
  text-shadow: 0 0 0px #4e4e4e,
  0 0 1px #9b9b9b,
  0 0 3px #9b9b9b,
  0 0 5px #9b9b9b;
  background: transparent;
  border: none;
  text-align: center;
  text-transform: capitalize;
  position: relative;
  overflow: hidden;
}

.nav-link:after {
  border-radius: 50px;
  position: absolute;
  -webkit-transition: .3s;
  transition: .3s;
  content: '';
  width: 0;
  left: 50%;
  bottom: 0;
  height: 5px;
}

.nav-link:hover:after {
  width: 100%;
  left: 0;
  transition: 0.3s all;
  -webkit-transition: 0.3s all;
  -moz-transition: 0.3s all;
  -o-transition: 0.3s all;
  -ms-transition: 0.3s all;
  background: #4e4e4e;
}

.dropdown {
  color: #000000;
}

.dropdown-content {
  border-radius: 10px;
  display: none;
  position: absolute;
  min-width: 120px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 99;
  background: #fff;
  top: 40px;
  padding: 10px;
}

/*.dropdown-content a {
  color: #6fb9b9;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}*/

/*.dropdown-content a:hover {
     background-color: #6fb9b9;
 }*/

.dropdown:hover .dropdown-content {
  display: block;
}


.dropdown .nav-arrow {
  color: #000000;
  transition: 0.3s all;
  -webkit-transition: 0.3s all;
  -moz-transition: 0.3s all;
  -o-transition: 0.3s all;
  -ms-transition: 0.3s all;
}

.dropdown:hover .nav-arrow {
  transform: rotate(180deg);
}

/* 48em = 768px */

@media (min-width: 1024px) {
  .header li {
    float: left;
    margin-right: 5px;
  }

  .header li:last-child {
    margin-right: 0;
  }

  .nav_w3ls {
    margin-top: 5px;
    margin-bottom: 5px;
    float: right;
  }

  .header .menu-icon {
    display: none;
  }

  #mobile-menu {
    display: none;
  }
}


@media screen and (max-width: 1024px) {
  #browser-menu {
    display: none
  }

  #mobile-menu {
    display: block
  }
}

/*
@media screen and (max-width:568px) {
    .header .logo {
        font-size: 0.8em;
    }
}
@media screen and (max-width:375px) {

    .header .logo {
        font-size: 0.7em;
    }
}*/


</style>
