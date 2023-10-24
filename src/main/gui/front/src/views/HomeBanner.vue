<template>
  <div class="banner-content">
    <Row class="row">
      <div class="slideshow" style="height: 620px">
        <div v-images-loaded="initBanner" class="slides banner-img">
          <div v-for="(item,index) in carouselList" v-if="index === homePicIndex"
               :class="isLoaded?'slide slide--current slide-img loaded':'slide slide--current slide-img'">
            <!--                             class="slide slide&#45;&#45;current slide-img">-->
            <img style="width:100%;" :src="item.headerImg" :title="item.title" alt="ERR">
          </div>
        </div>
        <div class="slides slides--titles">
          <div v-for="(item,index) in carouselList"
               v-bind:class="index === 0?'slide slide--current':'slide'">
            <h2 class="slide__title">{{ item.title }}</h2>
            <p class="slide__desc">{{ item.description }}</p>
            <!--<a class="slide__link" v-bind:href="`article/${item.id}`">详情</a>-->
            <!--<button class="slide__link btn btn-outline-info btn-rounded"
                    v-bind:href="`article/${item.id}`">查看更多
            </button>-->
          </div>
        </div>
        <nav class="coolslide">
          <a>
            <div class="double-down" @click="onePageScroll"></div>
          </a>
        </nav>
      </div>
    </Row>
  </div>
</template>

<script>

import anime from "animejs"
import {scrollTop} from '@/utils';
import imagesLoaded from 'vue-images-loaded'

export default {
  directives: {
    imagesLoaded,
  },
  name: "HomeBanner",
  props: {
    carouselList: {
      type: Array,
      default: undefined
    },
    homePicIndex: undefined
  },
  beforeUpdate() {
    this.carouselList_max = this.carouselList.length - 1;
    console.log("length" + this.carouselList_max);
  },
  updated() {

    this.$nextTick(() => {
      /*this.go();*/

      /*imagesLoaded('.slide__img', {background: true}, () => document.body.classList.remove('loading'));*/
    });
  },
  mounted() {

  },
  data() {
    return {
      slidesTotal: 0,
      DOM: {
        carouselList_max: 0,
        slides: null,
        titles: null,
        titlesSlides: null,
        nav: null,
      },
      interval: null,
      isLoaded: false,
      description: 'bluecitizens@hotmail/163',
      url: 'https://www.bing.com',
      socials: [
        {name: "GitHub", logo: null, url: "https://github.com/BlueCitizens"},
        {name: "BiliBili", logo: null, url: "https://space.bilibili.com/3718581"},
      ],
      settings: {
        animation: {
          slides: {
            duration: 500,
            easing: 'easeOutQuint'
          },
          shape: {
            duration: 0,
            easing: {in: 'easeOutQuint', out: 'easeOutQuad'}
          }
        },
      }
    }
  },
  watch: {
    /*            isLoaded: {
                    handler(val) {
                        if (val === false) {
                            this.isLoaded = false;
                        } else if (val === true) {
                            this.isLoaded = true;
                        } else {
                            this.isLoaded = false;
                        }
                    }
                }*/
  },
  methods: {
    //图片加载完后初始化Banner，数据绑定传值到home
    initBanner() {
      if (this.isLoaded === false) {
        let _this = this;
        setTimeout(function () {
          _this.isLoaded = true;
          _this.$emit('loadBannerPic', _this.isLoaded);
          _this.init();
        }, 500);
      }

    },
    changeHomePic(max) {
      this.$store.dispatch("changeHomePic", max);
    },
    onePageScroll: function () {
      /*window.scrollTo({
          top: 620,
          left: 0,
          behavior: "smooth"
      })*/
      const sTop = document.documentElement.scrollTop || document.body.scrollTop;
      scrollTop(window, sTop, 620, 300);
    },

    init() {
      this.DOM.slides = Array.from(document.querySelectorAll('.slides--titles > .slide'));
      this.slidesTotal = this.DOM.slides.length;
      this.DOM.nav = document.querySelector('.coolslide');
      this.DOM.titles = document.querySelector('.slides--titles');
      this.DOM.titlesSlides = Array.from(this.DOM.titles.querySelectorAll('.slide'));
      this.current = 0;
      this.initEvents();
    },

    initEvents() {
      this.interval = window.setInterval(() => this.navigate('next'), 2000);
    },

    removeBanner() {
      window.clearInterval(this.interval);
    },

    navigate(dir = 'next') {
      /* if (this.isAnimating) return false;
       this.isAnimating = true;*/

      const animateSlides = () => {
        return new Promise((resolve) => {
          const currentTitleSlide = this.DOM.titlesSlides[this.current];
          anime({
            targets: currentTitleSlide.children,
            duration: this.settings.animation.slides.duration,
            easing: this.settings.animation.slides.easing,
            translateY: [0, dir === 'next' ? 50 : -50],
            opacity: [0.5, 0],
            complete: () => {
              currentTitleSlide.classList.remove('slide--current');
              this.isAnimating = false;
              resolve();
            }
          });
          //控制前后
          this.current = dir === 'next' ?
              this.current < this.slidesTotal - 1 ? this.current + 1 : 0 :
              this.current > 0 ? this.current - 1 : this.slidesTotal - 1;

          const newTitleSlide = this.DOM.titlesSlides[this.current];
          newTitleSlide.classList.add('slide--current');
          anime({
            targets: newTitleSlide.children,
            duration: this.settings.animation.slides.duration * 1.5,
            easing: this.settings.animation.slides.easing,
            translateY: [dir === 'next' ? -50 : 50, 0],
            opacity: [0, 1]
          });
        });
      };
      animateSlides();
    },
  },

  beforeDestroy() {
    this.removeBanner();
    this.changeHomePic(this.carouselList_max);
  }
}
</script>

<style scoped>

.banner-content {
  overflow: hidden;
  text-align: center;
  background: rgba(0, 0, 0, 0);
  box-shadow: 0 0 20px rgb(78, 78, 78);
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}

.banner-content .double-down {
  border-radius: 100%;
  box-shadow: 0 0 0 #e8e8e8,
  0 0 5px #ffffff,
  0 0 8px #ffffff;
  height: 28px;
  width: 28px;
  font-size: 40px;
  margin: 100px auto 0 auto;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  background-color: rgba(255, 255, 255, 0.95);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  animation: myAngle 2s infinite;
  -moz-animation: myAngle 2s infinite; /* Firefox */
  -webkit-animation: myAngle 2s infinite; /* Safari and Chrome */
  -o-animation: myAngle 2s infinite; /* Opera */
}

@keyframes myAngle {
  0% {
    margin-top: 530px
  }
  25% {
    margin-top: 500px
  }
  50% {
    margin-top: 530px
  }
  75% {
    margin-top: 500px
  }
  100% {
    margin-top: 530px
  }
}

.slideshow {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.slides {
  position: absolute;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.slide--current {
  opacity: 1;
  pointer-events: auto;
}

.slide-img {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -200px;
  left: -200px;
  width: calc(100% + 400px);
  height: calc(100% + 400px);
  background-size: cover;
  background-position: 50% 50%;
  filter: brightness(90%);

  -webkit-transform: scale(1.5);
  -o-transform: scale(1.5);
  -moz-transform: scale(1.5);
  transform: scale(1.5);
  transition: all 1.8s ease;
  -moz-transition: all 1.8s ease; /* Firefox 4 */
  -webkit-transition: all 1.8s ease; /* Safari and Chrome */
  -o-transition: all 1.8s ease; /* Opera */

}

.slide-img.loaded {
  /*animation: homePic 1s;*/
  top: -200px;
  transform: scale(1);
  -moz-transform: scale(1);
  -webkit-transform: scale(1);
  -o-transform: scale(1);


}

@keyframes homePic {
  30% {
    top: -50px;
  }
  70% {
    top: -250px;
  }
  100% {
    top: -200px;
  }
}

.slide__title {
  position: relative;
  margin: 0;
  cursor: default;
  text-align: center;

  padding: 30px;
  font-family: zcool, serif;
  font-size: 55px;
  text-transform: unset;

  color: #ffffff;
  filter: brightness(105%);
  text-shadow: 0 0 0px #4e4e4e,
  0 0 3px #4e4e4e,
  0 0 5px #4e4e4e,
  0 0 10px #dddddd;
}

.slide__desc {
  position: relative;
  font-size: 1.5em;
  margin: 0 0 2em 0;
  cursor: default;
  color: #ffffff;
  padding: 0 1em;
  text-align: center;
}

.slide__link {
  position: relative;
  font-size: 2em;
  font-weight: bold;
  padding: 1em 2em;
  display: block;
  color: #83dbdb;
}

@media screen and (max-width: 55em) {
  .slide__desc {
    font-size: 1em;
  }

  .slide__link {
    font-size: 0.85em;
  }
}

</style>
