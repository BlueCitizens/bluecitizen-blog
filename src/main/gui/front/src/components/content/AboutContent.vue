<template>
  <div class="article-content layout-content">
    <!-- PRELOADER -->
    <!--<div :class="isLoaded?'preloader hide-preloader':'preloader'">

        <div class="spinner"></div>

    </div>-->
    <Preloader :is-loaded="isLoaded"></Preloader>
    <!-- /PRELOADER -->

    <!-- IMAGE CONTAINER -->
    <div class="image-container">

      <div v-images-loaded="init" :class="['background-img', isLoaded?'loaded':null]"><img
          src="https://pic.imgdb.cn/item/5e8d961f504f4bcb04240544.png" alt=""></div>

    </div>
    <!-- /IMAGE CONTAINER -->


    <!-- CONTENT AREA -->
    <div class="content-area">


      <!-- CONTENT AREA INNER -->
      <div class="content-area-inner">


        <!-- INTRO -->
        <section id="intro">


          <!-- CONTAINER MID -->
          <div class="container-mid">


            <!-- ANIMATION CONTAINER -->
            <div :class="['animation-container animation-fade-down',isFaded?'run-animation':null]">

              <h1>I‘m&nbsp;BlueCitizen,</h1>

            </div>
            <!-- /ANIMATION CONTAINER -->


            <!-- ANIMATION CONTAINER -->
            <div :class="['animation-container animation-fade-left',isFaded?'run-animation':null]">
              <p class="subline">BlueCitizen是我的常用网名。如果你想知道它的来历，你可以在无聊的时候试着和我聊聊。</p>
            </div>
            <!-- /ANIMATION CONTAINER -->

            <!-- ANIMATION CONTAINER -->
            <div :class="['animation-container animation-fade-up',isFaded?'run-animation':null]">

              <a href="#about">了解更多</a>

            </div>
            <!-- /ANIMATION CONTAINER -->


            <!-- /CONTAINER MID -->
          </div>

        </section>
        <!-- /INTRO -->


        <!-- ABOUT -->
        <section id="about">


          <h3 class="headline scroll-animated-from-left">Who Am I</h3>
          <div class="holder">
            <span class="load-text">現在公開可能な情報</span>
            <span class="load-caret">現在公開可能な情報</span>
          </div>

          <p class="scroll-animated-from-right">软件相关专业（已毕业）。数据相关研究生在读。</p>
          <p class="scroll-animated-from-right">GPA和技术都很菜。各种故事里的路人。</p>
          <p class="scroll-animated-from-right">擅长三天打鱼两天晒网。<span
              style="color: #707070;font-size: small;padding-left: 10px;padding-right: 8px">拖延症晚期患者</span></p>
          <p class="headline scroll-animated-from-right">大二病未毕业。遂与正常人的沟通能力逐年丧失。</p>
          <p class="scroll-animated-from-right">精神上的比企谷，现实中的材木座。<span
              style="color: #707070;font-size: small;padding-left: 10px;padding-right: 8px">最终明白，我连材木座都不如</span>
          </p>
          <p class="headline scroll-animated-from-right">兴趣广泛，皆无造诣。只得追番打机虚度光阴。</p>
          <p class="headline scroll-animated-from-right">真实肥仔，该即刻减肥了。<span
              style="color: #707070;font-size: small;padding-left: 10px;padding-right: 8px">大概吧</span></p>
        </section>
        <!-- /ABOUT -->

        <!-- SERVICE -->
        <section id="service">
          <h3 class="headline scroll-animated-from-left">Change Log</h3>

          <!-- SERVICE LIST -->
          <ul class="services-list">

            <li class="scroll-animated-from-right">
              2022.08.22 增加全文搜索功能，支持按标题关键字检索
            </li>
            <li class="scroll-animated-from-right">
              2022.03.14 优化和调整视觉效果，修改部分排版和样式
            </li>
            <li class="scroll-animated-from-right">
              2020.11.31 增加少女前线工具，支持人形数据按建造时间筛选，支持关键字查询
            </li>
            <li class="scroll-animated-from-right">
              2019.12.22 网站域名解析到bckun.top
            </li>


          </ul>
          <!-- /SERVICE LIST -->


        </section>
        <!-- /SERVICE -->


        <!-- WORK -->
        <section id="work">


          <h3 class="headline scroll-animated-from-left">References</h3>


          <!-- SHOWCASE -->
          <div class="showcase">


            <!-- ITEM -->
            <div class="item scroll-animated-from-right">


              <!-- LIGHTBOX LINK -->
              <a data-featherlight="#item-1-lightbox">


                <!-- INFO -->
                <div class="info">


                  <!-- CONTAINER MID -->
                  <div class="container-mid">

                    <h5>View UI 视图更新</h5>
                    <p>一套基于 Vue.js 的高质量 UI 组件库</p>

                  </div>
                  <!-- /CONTAINER MID -->


                </div>
                <!-- /INFO -->

              </a>
              <!-- /LIGHTBOX LINK -->


              <!-- LIGHTBOX -->
              <div id="item-1-lightbox" class="work-lightbox">


                <img class="img-responsive" src="./../../assets/iview.png" alt="image">

              </div>
              <!-- /LIGHTBOX -->


            </div>
            <!-- /ITEM -->

            <!-- ITEM -->
            <div class="item scroll-animated-from-right">


              <!-- LIGHTBOX LINK -->
              <a data-featherlight="#item-2-lightbox">


                <!-- INFO -->
                <div class="info">


                  <!-- CONTAINER MID -->
                  <div class="container-mid">

                    <h5>Element UI</h5>
                    <p>A Desktop UI Toolkit for Web</p>

                  </div>
                  <!-- /CONTAINER MID -->


                </div>

              </a>
              <!-- /LIGHTBOX LINK -->


              <!-- LIGHTBOX -->
              <div id="item-2-lightbox" class="work-lightbox">

                <img class="img-responsive" src="./../../assets/elui.svg" alt="image">

              </div>
              <!-- /LIGHTBOX -->


            </div>
            <!-- /ITEM -->


            <!-- ITEM -->
            <div class="item scroll-animated-from-right">


              <!-- LIGHTBOX LINK -->
              <a data-featherlight="#item-3-lightbox">


                <!-- INFO -->
                <div class="info">


                  <!-- CONTAINER MID -->
                  <div class="container-mid">

                    <h5>redis.io</h5>
                    <p>an open source, in-memory data structure store</p>

                  </div>
                  <!-- /CONTAINER MID -->


                </div>
                <!-- /INFO -->

              </a>
              <!-- /LIGHTBOX LINK -->


              <!-- LIGHTBOX -->
              <div id="item-3-lightbox" class="work-lightbox">

                <img class="img-responsive" src="./../../assets/redis.png" alt="image">

              </div>
              <!-- /LIGHTBOX -->


            </div>
            <!-- /ITEM -->


            <!-- ITEM -->
            <div class="item scroll-animated-from-right">


              <!-- LIGHTBOX LINK -->
              <a data-featherlight="#item-4-lightbox">


                <!-- INFO -->
                <div class="info">


                  <!-- CONTAINER MID -->
                  <div class="container-mid">

                    <h5>QINIU七牛云</h5>
                    <p>国内领先的企业级云服务商</p>

                  </div>
                  <!-- /CONTAINER MID -->


                </div>
                <!-- /INFO -->

              </a>
              <!-- /LIGHTBOX LINK -->

              <!-- LIGHTBOX -->
              <div id="item-4-lightbox" class="work-lightbox">

                <img class="img-responsive"
                     src="http://cdn.huodongxing.com/file/20140701/114AC2FA1B9FE2A47634B83F042DC75815/30312508880435467.png"
                     alt="image">

              </div>
              <!-- /LIGHTBOX -->


            </div>
            <!-- /ITEM -->


          </div>
          <!-- /SHOWCASE -->


        </section>
        <!-- /WORK -->


        <!-- CONTACT -->
        <section id="contact">


          <h3 class="headline scroll-animated-from-left">Contact Me.</h3>


          <!-- CONTACT LIST -->
          <ul class="contact-list">

            <li class="scroll-animated-from-right"><i class="fa fa-envelope-o" aria-hidden="true"></i>bluecitizens@163.com
            </li>

          </ul>
          <!-- /CONTACT LIST -->


          <!-- CONTACT FORM
          <form id="contact-form" action="assets/php/contact.php" method="post">


              <input id="contact-form-name" type="text" name="name"
                     class="form-control scroll-animated-from-right" placeholder="* Your Name">

              <input id="contact-form-email" type="text" name="email"
                     class="form-control scroll-animated-from-right" placeholder="* Your Email">

               PHANTOM ELEMENT ( HONEYPOT CAPTCHA FOR SECURITY )
              <div class="fhp-input"><input id="contact-form-company" type="text" name="company"
                                            class="form-control"></div>
               /PHANTOM ELEMENT ( HONEYPOT CAPTCHA FOR SECURITY )

              <textarea id="contact-form-message" name="message"
                        class="form-control scroll-animated-from-right"
                        placeholder="* Your Message"></textarea>

              <button type="submit" class="form-control scroll-animated-from-right">Send Mail</button>

              <div class="success-message">* The Email was Sent Successfully!</div>


          </form>
           /CONTACT FORM-->


        </section>
        <!-- /CONTACT -->


        <!--&lt;!&ndash; FOOTER &ndash;&gt;
        <section id="footer">


            &lt;!&ndash; SOCIAL ICONS &ndash;&gt;
            <ul class="social-icons scroll-animated-from-right">


                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>


            </ul>
            &lt;!&ndash; /SOCIAL ICONS &ndash;&gt;
        </section>-->
        <!-- /FOOTER -->
      </div>
      <!-- /CONTENT AREA INNER -->


    </div>
    <!-- /CONTENT AREA -->
  </div>
</template>

<script>
import scrollReveal from 'scrollreveal';
import Preloader from "../transition/Preloader";
import imagesLoaded from 'vue-images-loaded'

export default {
  directives: {
    imagesLoaded,
  },
  name: "AboutContent",
  components: {
    Preloader,
  },
  data() {
    return {
      isLoaded: false,
      isFaded: false,
      scrollReveal: scrollReveal()
    };
  },
  mounted() {

  },
  updated() {

  },
  methods: {
    init() {
      let _this = this;
      setTimeout(function () {
        _this.isFaded = true;
      }, 500);
      setTimeout(function () {
        _this.reveal();
      }, 500);
      this.isLoaded = true;
    },
    reveal() {
      this.scrollReveal.reveal('.scroll-animated-from-right', {
        // 动画的时长
        duration: 800,
        // 延迟时间
        delay: 100,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: 'right',
        // 回滚的时候是否再次触发动画
        reset: false,
        // 在移动端是否使用动画
        mobile: true,
        // 滚动的距离，单位可以用%，rem等
        distance: '200px',
        // 其他可用的动画效果
        opacity: 0,
        easing: 'ease-out',
        scale: 1,
        viewFactor: 0.4,
      })
      this.scrollReveal.reveal('.scroll-animated-from-left', {
        // 动画的时长
        duration: 1000,
        // 延迟时间
        delay: 50,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: 'left',
        // 回滚的时候是否再次触发动画
        reset: false,
        // 在移动端是否使用动画
        mobile: true,
        // 滚动的距离，单位可以用%，rem等
        distance: '100px',
        // 其他可用的动画效果
        opacity: 0,
        easing: 'ease-in-out',
        scale: 1,
        viewFactor: 0.4,
      })
    }
  },
}
</script>

<style scoped>

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Citrica-Regular, sans-serif;
  font-weight: normal;
  padding-top: 2rem;
  letter-spacing: .05em;

  color: #000;;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 3.9rem;
}

h3 {
  font-size: 3.4rem;
}

h4 {
  font-size: 2.9rem;
}

h5 {
  font-size: 2.4rem;
}

h6 {
  font-size: 1.9rem;
}

p {
  font-size: 1.8rem;
}

.tlinks {
  text-indent: -9999px;
  height: 0;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
}

a,
a:hover,
a:focus {
  cursor: pointer;
  -webkit-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
  text-decoration: none;
}

a:hover {
  color: #111;
}

/** 3. Image Container
*******************************************************************/

.image-container {
  position: fixed;
  top: 0;
  left: 0;

  width: 32%;
  height: 100%;
}

.image-container .background-img {
  position: absolute;
  z-index: 1;
  left: -100%;
  top: 65px;
  opacity: 0;

  width: 100%;
  height: 70%;

  -webkit-transition: all 2s ease;
  -o-transition: all 2s ease;
  transition: all 2s ease;

  overflow: hidden;
}

.image-container .background-img img {
  position: absolute;
  right: -160px;
  height: 100%;
}

.image-container .background-img.loaded {
  opacity: 1;
  left: 0
}

@media (max-width: 1200px) {
  .image-container {
    position: relative;
    z-index: 10;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;
  }
}


/** 4. Content Area
*******************************************************************/

.content-area {
  position: relative;
  left: 0;

  width: 100%;
}

.content-area .content-area-inner {
  position: relative;
  left: 30%;

  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  width: 70%;
  padding: 0 20px;
}

.content-area .content-area-inner section {
  max-width: 520px;
  margin: 0 auto 18vh auto;
}

.content-area .content-area-inner section:last-child {
  margin-bottom: 10vh;
}

.content-area .content-area-inner section h3.headline {
  margin-bottom: 1.2em;
}

@media (max-width: 1200px) {
  .content-area .content-area-inner {
    left: 0;

    width: 100%;
    padding: 0 20px;
  }
}


/** 5. Content Area --> Intro
*******************************************************************/


#intro {
  position: relative;

  height: 100vh;
  margin-bottom: 0;
}

#intro .container-mid {
  position: absolute;
  top: 40%;

  width: 100%;

  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

#intro .container-mid p.subline {
  font-size: 1.5rem;
  line-height: 2.5em;

  margin-top: 1em;
  margin-bottom: 1em;
}

#intro .container-mid a {
  font-size: 1.2rem;
  line-height: 2.92em;

  position: relative;

  display: inline-block;
  overflow: hidden;

  padding: 0 2em;

  -webkit-transition: .2s ease;
  -o-transition: .2s ease;
  transition: .2s ease;

  color: #000000;
  border-radius: 100px;
  background: none;
}

#intro .container-mid a:before {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  content: '';

  border-radius: 100px;
  background: #eaeaea;
}

#intro .container-mid a:after {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  width: 0;
  height: 100%;

  content: '';
  -webkit-transition: .2s ease;
  -o-transition: .2s ease;
  transition: .2s ease;

  background: #bebebe;
}

#intro .container-mid a:hover:after {
  width: 100%;
}

#intro .container-mid a i {
  font-size: .85em;

  margin-left: .7em;
}

#intro .animation-container {
  -webkit-transition: 1.5s ease;
  -o-transition: 1.5s ease;
  transition: 1.5s ease;
}

#intro .animation-container.animation-fade {
  opacity: 0;
}

#intro .animation-container.animation-fade.run-animation {
  opacity: 1;
}

#intro .animation-container.animation-fade-up {
  -webkit-transform: translateY(20vh);
  -ms-transform: translateY(20vh);
  transform: translateY(20vh);

  opacity: 0;
}

#intro .animation-container.animation-fade-up.run-animation {
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);

  opacity: 1;
}

#intro .animation-container.animation-fade-down {
  -webkit-transform: translateY(-20vh);
  -ms-transform: translateY(-20vh);
  transform: translateY(-20vh);

  opacity: 0;
}

#intro .animation-container.animation-fade-down.run-animation {
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);

  opacity: 1;
}

#intro .animation-container.animation-fade-left {
  -webkit-transform: translateX(20vh);
  -ms-transform: translateX(20vh);
  transform: translateX(20vh);

  opacity: 0;
}

#intro .animation-container.animation-fade-left.run-animation {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);

  opacity: 1;
}

#intro .animation-container.animation-fade-right {
  -webkit-transform: translateX(-20vh);
  -ms-transform: translateX(-20vh);
  transform: translateX(-20vh);

  opacity: 0;
}

#intro .animation-container.animation-fade-right.run-animation {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);

  opacity: 1;
}

@media (max-width: 1200px) {
  #intro {
    height: auto;
  }

  #intro .container-mid {
    position: relative;
    top: 0;

    margin: 15vh 0;

    -webkit-transform: translate(0);
    -ms-transform: translate(0);
    transform: translate(0);
  }
}


/** 6. Content Area --> About
*******************************************************************/

#about p {
  line-height: 1.8em;
  font-size: 1.2em;
  margin-bottom: 2em;
}

#about p:last-child {
  margin-bottom: 0;
}


/** 7. Content Area --> Service
*******************************************************************/

#service .services-list {
  margin-bottom: 0;
  padding: 0;

  list-style: none;
}

#service .services-list li {
  font-size: 1.2rem;
  line-height: 3.4em;
}

#service .services-list li i {
  font-size: 0.8rem;
  line-height: 3em;

  width: 3em;
  height: 3em;
  margin-right: 0.5em;

  text-align: center;

  color: #fff;
  border-radius: 100px;
  background: #cccccc;
}


/** 8. Content Area --> Work
*******************************************************************/

#work .showcase .item {
  position: relative;

  overflow: hidden;

  width: 100%;
  height: 15rem;
  margin-bottom: 6vh;

  cursor: pointer;

  border-radius: 3rem;
  background: #ffffff;
}

#work .showcase .item:last-child {
  margin-bottom: 0;
}

#work .showcase .item .info {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;

  width: 0;
  height: 100%;

  -webkit-transition: .25s ease;
  -o-transition: .25s ease;
  transition: .25s ease;

  color: #fff;
  background: #cecece;
}

#work .showcase .item:hover .info {
  width: 100%;
}

#work .showcase .item .info .container-mid {
  position: absolute;
  top: 50%;
  left: 0;

  width: 100%;
  padding: 0 6rem;

  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

#work .showcase .item .info .container-mid h5 {
  -webkit-transform: translateX(4vh);
  -ms-transform: translateX(4vh);
  transform: translateX(4vh);
  font-size: 2.5em;
  opacity: 0;
  color: #fff;
}

#work .showcase .item:hover .info .container-mid h5 {
  -webkit-transition: .2s ease .2s;
  -o-transition: .2s ease .2s;
  transition: .2s ease .2s;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);

  opacity: 1;
}

#work .showcase .item .info .container-mid p {
  position: relative;

  padding-left: 2.7rem;
  font-size: 1.5em;
  -webkit-transform: translateX(4vh);
  -ms-transform: translateX(4vh);
  transform: translateX(4vh);
  letter-spacing: .025em;

  opacity: 0;
}

#work .showcase .item:hover .info .container-mid p {
  -webkit-transition: .2s ease .3s;
  -o-transition: .2s ease .3s;
  transition: .2s ease .3s;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);

  opacity: 1;
}

#work .showcase .item .info .container-mid p:before {
  position: absolute;
  top: 50%;
  left: 0;

  width: 1.1em;
  height: 1px;

  content: '';
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  background: #fff;
}

#work .showcase .item .background-image {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#work .showcase .work-lightbox img {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.featherlight .featherlight-content {
  max-height: 95%;
  padding: 0;

  border-bottom: 0;
}

.featherlight .featherlight-content .featherlight-close-icon {
  font-size: 2.4rem;
  line-height: 1em;

  top: .5em;
  right: .5em;

  width: 1em;

  outline: none !important;
}

.featherlight .featherlight-content .work-lightbox {
  max-width: 1000px;
  padding: 6vh;

  text-align: center;
}

.featherlight .featherlight-content .work-lightbox img {
  margin: 0 auto 4vh auto;
}

.featherlight .featherlight-content .work-lightbox p.subline {
  margin-bottom: 1em;

  letter-spacing: .025em;
}

.featherlight .featherlight-content .work-lightbox p {
  max-width: 520px;
  margin: 0 auto;
}


/** 9. Content Area --> Contact
*******************************************************************/

#contact .contact-list {
  margin-bottom: 3.4em;
  padding: 0;

  list-style: none;
}

#contact .contact-list li {
  font-size: 2rem;
  line-height: 2.4em;
}

#contact .contact-list li i {
  line-height: 1.2em;

  width: 1.2em;
  height: 1.2em;
  margin-right: 1em;

  text-align: center;

  border-radius: 100px;
}

#contact #contact-form {
  position: relative;
}

#contact #contact-form .fhp-input {
  display: none;

  pointer-events: none;

  opacity: 0;
}

#contact #contact-form input,
#contact #contact-form textarea,
#contact #contact-form button {
  font-size: 2rem;

  margin-bottom: 3.4vh;

  -webkit-transition: .4s ease;
  -o-transition: .4s ease;
  transition: .4s ease;

  color: #fff;
  border: none !important;
  border-radius: 34px;
  outline: none !important;
  background: #111;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

#contact #contact-form.success input,
#contact #contact-form.success textarea,
#contact #contact-form.success button {
  line-height: 0;

  height: 0;
  margin: 0;
  padding: 0;

  opacity: 0;
}

#contact #contact-form input::-webkit-input-placeholder,
#contact #contact-form textarea::-webkit-input-placeholder {
  color: #fff;
}

#contact #contact-form input:-ms-input-placeholder,
#contact #contact-form textarea:-ms-input-placeholder {
  color: #fff;
}

#contact #contact-form input::placeholder,
#contact #contact-form textarea::placeholder {
  color: #fff;
}

#contact #contact-form input.error,
#contact #contact-form textarea.error {
  background: red;
}

#contact #contact-form input {
  line-height: 3.2em;

  height: 3.2em;
  padding-right: 1.6em;
  padding-left: 1.6em;
}

#contact #contact-form textarea {
  line-height: 1.7em;

  height: 8em;
  padding-top: .7em;
  padding-right: 1.6em;
  padding-left: 1.6em;
}

#contact #contact-form button {
  line-height: 3.2em;

  position: relative;

  display: inline-block;
  overflow: hidden;

  width: auto;
  height: 3.2em;
  margin-bottom: 0;
  padding: 0 3.6em;

  background: none !important;
}

#contact #contact-form button:before {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  content: '';

  border-radius: 100px;
  background: #111;
}

#contact #contact-form button:after {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  width: 0;
  height: 100%;

  content: '';
  -webkit-transition: .2s ease;
  -o-transition: .2s ease;
  transition: .2s ease;

  background: #008aff;
}

#contact #contact-form button:hover:after {
  width: 100%;
}

#contact #contact-form .success-message {
  font-size: 2rem;
  line-height: 0;

  position: relative;
  bottom: 0;
  left: 0;

  height: 0;
  margin-top: -1.6em;
  padding: 0 2em;

  -webkit-transition: .2s ease;
  -o-transition: .2s ease;
  transition: .2s ease;
  pointer-events: none;

  opacity: 0;
  color: #fff;
  border-radius: 3em;
  background: limegreen;
}

#contact #contact-form.success .success-message {
  line-height: 6em;

  height: 6em;

  pointer-events: all;

  opacity: 1;
}


/** 10. Content Area --> Footer
*******************************************************************/

#footer .social-icons {
  padding: 0;

  list-style: none;
}

#footer .social-icons li {
  font-size: 2rem;
  line-height: 3em;

  position: relative;

  display: inline-block;
  overflow: hidden;

  width: 3em;
  height: 3em;
  margin: 0;
  margin-right: 1em;

  text-align: center;

  color: #fff;
  border-radius: 100%;
  background: none;
}

#footer .social-icons li:before {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  content: '';

  border-radius: 100px;
  background: #111;
}

#footer .social-icons li:after {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  width: 0;
  height: 100%;

  content: '';
  -webkit-transition: .2s ease;
  -o-transition: .2s ease;
  transition: .2s ease;

  background: #008aff;
}

#footer .social-icons li:hover:after {
  width: 100%;
}

#footer .social-icons li a {
  font-size: inherit;

  display: block;

  color: #fff;
  border: none;
}

#footer p {
  margin-top: 1.6em;
}

#footer p a {
  color: #000;
  border-bottom: 1px solid #111;
}

/*光标动画*/
@keyframes caret {
  50% {
    border-color: transparent;
  }
}

/*文本动画：从宽度为0开始*/
@keyframes text {
  from {
    width: 0;
  }
}

.holder {
  height: 4.2ch;
  width: 22ch;
  line-height: 0;
  letter-spacing: 0.05ch;
  font: bold 200% monospace;
  position: relative;
  background-color: #000000;
  margin-bottom: 30px;
}

.load-text {
  position: absolute;
  z-index: 999;
  width: 22ch;
  /*margin-top: 2ch;*/
  margin: 1ch 0 0 1ch;
  overflow: hidden;
  word-break: keep-all;
  color: #ffffff;
  border-bottom: 3px solid #000000;
  font: bold 100% monospace;
  animation: caret 0.1s step-end infinite, text 2.2s infinite steps(11);
  animation-delay: 0.2s;
}

.load-caret {
  position: absolute;
  width: 22ch;
  /*margin-top: 3ch;*/
  margin: 1ch 0 0 1ch;
  overflow: hidden;
  word-break: keep-all;
  color: transparent;
  border-bottom: 3px solid #ffffff;
  font: bold 100% monospace;
  animation: caret 0.1s step-end infinite, text 2.2s infinite steps(11);
}

</style>
