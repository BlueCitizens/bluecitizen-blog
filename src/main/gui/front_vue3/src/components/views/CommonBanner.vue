<template>
  <div class="common-banner">
    <Row class="row">
      <div class="slideshow" style="height: 400px">
        <div v-images-loaded="initBanner" class="slides banner-img">
          <div v-for="(item,index) in carouselList" v-if="index === homePicIndex"
               :class="isLoaded?'slide slide--current slide-img loaded':'slide slide--current slide-img'">
            <img style="width:100%;" :src="item.headerImg" :title="item.title" alt="ERR">
          </div>
        </div>
        <div class="slides slides--titles">
          <div class="slide slide--current"><h2 class="slide__title">{{ bannerTitle }}</h2></div>
        </div>
      </div>
    </Row>
  </div>
</template>

<script>
import imagesLoaded from 'vue-images-loaded'

export default {
  directives: {
    imagesLoaded,
  },
  name: "CommonBanner",
  props: {
    bannerTitle: undefined,
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

    init() {
      this.DOM.slides = Array.from(document.querySelectorAll('.slides--titles > .slide'));
      this.slidesTotal = this.DOM.slides.length;
      this.DOM.nav = document.querySelector('.coolslide');
      this.DOM.titles = document.querySelector('.slides--titles');
      this.DOM.titlesSlides = Array.from(this.DOM.titles.querySelectorAll('.slide'));
      this.current = 0;
    },
  },

  beforeDestroy() {
    this.changeHomePic(this.carouselList_max);
  }
}
</script>

<style scoped>
.common-banner {
  overflow: hidden;
  box-shadow: 0 0 20px rgb(78, 78, 78);
}

/*.banner-content {
  text-align: center;
  background: rgba(0, 0, 0, 0);
  box-shadow: 0 0 20px rgb(78, 78, 78);
  margin: 0 0 0 0;
  padding: 0 0 5px 0;
}*/

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

  transform: scale(0.9);
  -moz-transform: scale(0.9);
  -webkit-transform: scale(0.9);
  -o-transform: scale(0.9);
  transition: all 1.8s ease;
  -moz-transition: all 1.8s ease; /* Firefox 4 */
  -webkit-transition: all 1.8s ease; /* Safari and Chrome */
  -o-transition: all 1.8s ease; /* Opera */

}

.slide-img.loaded {
  /*animation: homePic 1.5s;*/
  top: -200px;
  -webkit-transform: scale(1.2);
  -o-transform: scale(1.2);
  -moz-transform: scale(1.2);
  transform: scale(1.2);

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

  font-family: seto, serif;
  font-size: 35px;
  text-transform: unset;

  color: #ffffff;
  filter: brightness(105%);
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
