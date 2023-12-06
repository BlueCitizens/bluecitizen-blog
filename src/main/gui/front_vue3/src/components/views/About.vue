<template>
  <div class="about">
    <div class="card card-profile card-secondary">
      <div class="card-header">
        <div class="profile-picture">
          <div class="avatar avatar-xl">
            <div class="avatar-img rounded-circle"></div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="user-profile text-center">
          <div class="name">BlueCitizen</div>
          <div class="job">一般通过数据民工</div>
          <div class="desc">{{ description }}</div>
          <div class="social-media">
            <a class="btn btn-info btn-twitter btn-sm btn-link" :href="this.socials[0].url">
                            <span class="btn-label just-icon"><i class="fa"><svg t="1582726121471" class="icon"
                                                                                 viewBox="0 0 1024 1024" version="1.1"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 p-id="2204" width="64" height="64"><path
                                d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.157333 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z"
                                fill="#00a8ff" p-id="2205"></path></svg></i> </span>
            </a>
            <a class="btn btn-danger btn-sm btn-link" rel="publisher" :href="this.socials[1].url">
                            <span class="btn-label just-icon"><i class="fa"><svg t="1582726273913" class="icon"
                                                                                 viewBox="0 0 1024 1024" version="1.1"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 p-id="6166" width="64" height="64"><path
                                d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48a491.296 491.296 0 0 1 128.16-17.248c43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576C877.472 942.624 1024 750.784 1024 524.64c0-282.784-229.248-512-512-512z"
                                fill="#454545" p-id="6167"></path></svg></i> </span>
            </a>
            <a class="btn btn-primary btn-sm btn-link" rel="publisher" href="#">
                            <span class="btn-label just-icon"><i class="fa"><svg t="1582726394757" class="icon"
                                                                                 viewBox="0 0 1024 1024" version="1.1"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 p-id="6566" width="64" height="64"><path
                                d="M834.24 127.872a95.168 95.168 0 0 0-29.856 7.136h-0.128c-9.12 3.616-52.48 21.856-118.4 49.504l-236.224 99.488c-169.504 71.36-336.128 141.632-336.128 141.632l1.984-0.768s-11.488 3.776-23.488 12a64.96 64.96 0 0 0-18.752 18.144c-5.888 8.64-10.624 21.856-8.864 35.52 2.88 23.104 17.856 36.96 28.608 44.608 10.88 7.744 21.248 11.36 21.248 11.36h0.256l156.256 52.64c7.008 22.496 47.616 156 57.376 186.752 5.76 18.368 11.36 29.856 18.368 38.624 3.392 4.48 7.36 8.224 12.128 11.232a35.808 35.808 0 0 0 7.872 3.392l-1.6-0.384c0.48 0.128 0.864 0.512 1.216 0.64 1.28 0.352 2.144 0.48 3.776 0.736 24.736 7.488 44.608-7.872 44.608-7.872l1.12-0.896 92.256-84 154.624 118.624 3.52 1.504c32.224 14.144 64.864 6.272 82.112-7.616 17.376-13.984 24.128-31.872 24.128-31.872l1.12-2.88 119.488-612.128c3.392-15.104 4.256-29.248 0.512-42.976a57.824 57.824 0 0 0-24.992-33.504 59.904 59.904 0 0 0-34.144-8.64z m-3.232 65.6c-0.128 2.016 0.256 1.792-0.64 5.664v0.352l-118.368 605.76c-0.512 0.864-1.376 2.752-3.744 4.64-2.496 1.984-4.48 3.232-14.88-0.896l-189.12-144.992-114.24 104.128 24-153.28 308.992-288c12.736-11.84 8.48-14.336 8.48-14.336 0.896-14.528-19.232-4.256-19.232-4.256l-389.632 241.376-0.128-0.64-186.752-62.88v-0.128l-0.48-0.096a8.64 8.64 0 0 0 0.96-0.384l1.024-0.512 0.992-0.352s166.752-70.272 336.256-141.632c84.864-35.744 170.368-71.744 236.128-99.52 65.76-27.616 114.368-47.872 117.12-48.96 2.624-1.024 1.376-1.024 3.264-1.024z"
                                fill="#00a8ff" p-id="6567"></path></svg></i> </span>
            </a>
            <a class="btn btn-danger btn-sm btn-link" rel="publisher" href="#">
                            <span class="btn-label just-icon"><i class="fa"><svg t="1582726442817" class="icon"
                                                                                 viewBox="0 0 1260 1024" version="1.1"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 p-id="7312" width="64" height="64"><path
                                d="M1259.846921 121.148242c-46.524504 20.728739-96.273478 34.547899-148.325646 40.536201 53.434084-31.784067 94.430924-82.454319 113.777747-142.797982-50.209613 29.480874-105.486251 51.13089-164.447999 62.646857A257.584528 257.584528 0 0 0 872.449815 0.000276c-142.797982 0-258.418284 115.620302-258.418284 258.418284 0 20.268101 2.303193 40.075563 6.909579 58.961748C405.82286 306.32498 215.579097 203.602561 87.98219 47.446058c-22.110655 38.233008-35.008538 82.454319-35.008538 129.900099 0 89.824537 45.603227 168.593747 115.159663 215.118251-42.378756-1.381916-81.99368-12.897882-117.002217-32.244706v3.224471c0 125.293713 88.90326 229.398049 207.287393 253.351259-21.650017 5.988302-44.681949 9.212773-68.17452 9.212773-16.582991 0-32.705344-1.842555-48.827697-4.606387 32.705344 102.722419 128.518184 177.345881 241.374653 179.649074-88.442621 69.095798-199.917175 110.553277-321.06514 110.553277-20.728739 0-41.457479-1.381916-61.72558-3.685109 114.238386 73.241546 250.126788 116.08094 396.149241 116.08094 475.379089 0 735.179289-393.846048 735.179289-735.179289 0-11.055328-0.460639-22.571294-0.921277-33.626621 51.13089-36.851092 94.891562-82.454319 129.439461-134.045848z"
                                fill="#00a8ff" p-id="7313"></path></svg></i> </span>
            </a>
          </div>
        </div>
        <!--<div class="row user-stats text-center">
            <div class="col">
                <div class="number">125</div>
                <div class="title">Post</div>
            </div>
            <div class="col">
                <div class="number">25K</div>
                <div class="title">Followers</div>
            </div>
            <div class="col">
                <div class="number">134</div>
                <div class="title">Following</div>
            </div>
        </div>-->
      </div>
      <!--<div class="card-footer">
          <div class="view-profile">
              <a href="#" class="btn btn-secondary btn-block">View Profile</a>
          </div>
      </div>-->
    </div>
    <!--<img class="background" src="./../assets/background.jpeg" alt="">
    <a v-bind:href="url" v-bind:target="_blank"><img class="avatar" src="./../assets/avatar.jpg" alt=""></a>
    <p class="name">BC君</p>
    <p class="desc">{{description}}</p>
    <ul class="social">
        <li v-for="social in socials" :key="social.name">
            <a :href="social.url"><img class="social-link" v-bind:src="social.logo" alt=""></a>
        </li>
        &lt;!&ndash;<img class="social-link" v-on:click="f" src="./../assets/icons/bilibili-fill.png" alt="">&ndash;&gt;
    </ul>
    &lt;!&ndash;<div class="master">
        <div class="line"></div>
        <div class="progresses">

        </div>
    </div>&ndash;&gt;
    <ul class="social">
        <li v-for="(social) in socials" :key="social.name">
            {{social.name}}
        </li>
    </ul>-->
    <!--    <ul class="social">-->
    <!--      <li v-for="social in bloggerInfo.socials">-->
    <!--        <a :href="social.url" :target="social.url.indexOf(siteImageBaseUrl) === 0 ? '_self' : '_blank'"><img-->
    <!--          :src="social.image" alt=""></a>-->
    <!--      </li>-->
    <!--    </ul>-->
    <!--    <div class="master" v-if="bloggerInfo.masters.length > 0">-->
    <!--      <div class="line"></div>-->
    <!--      <h4>{{ $t('others.master') }}</h4>-->
    <!--      <div class="progresses">-->
    <!--        <i-row v-for="master in bloggerInfo.masters" :gutter="20" :key="master.id">-->
    <!--          <i-col :span="6">-->
    <!--            <p class="title">{{ master.name }}</p>-->
    <!--          </i-col>-->
    <!--          <i-col :span="18">-->
    <!--            <i-progress status="normal" :hide-info="true" :stroke-width="8" :percent="master.experience"-->
    <!--                        class="bar"></i-progress>-->
    <!--          </i-col>-->
    <!--        </i-row>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import git_logo from './../assets/icons/github.png'
import bili_logo from './../assets/icons/bilibili-fill.png'

export default {
  name: 'About',
  data() {
    return {
      description: 'bluecitizens@hotmail.com',
      url: 'https://www.bing.com',
      socials: [
        {name: "BiliBili", logo: bili_logo, url: "https://space.bilibili.com/3718581"},
        {name: "GitHub", logo: git_logo, url: "https://github.com/BlueCitizens"},
      ]
    }
  },
  methods: {
    f: function () {
      window.location.href = "https://space.bilibili.com/3718581"
    }
  }
};
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
/*@import "../common/stylus/theme.styl";
.about
    position relative
    text-align center
    padding-bottom 20px
    margin-top 0
    background-color $default-background-color
    border 1px solid $default-border-color

    img.background
        position absolute
        top 0
        left 0
        right 0
        width 100%
        height 150px
        z-index 1

    img.avatar
        position relative
        margin 75px auto 15px
        width 100px
        height 100px
        border-radius 50%
        border 5px solid $default-border-color
        z-index 9

    img.social-link
        position relative
        //margin 75px auto 15px
        //width 40px
        height 45px
        border-radius 50%
        border 2px solid #00cccc
        z-index 9

    .name
        font-size 22px
        color $default-title-color
        line-height 30px
        font-weight 700

    .desc
        font-size 15px
        color $default-desc-color
        line-height 30px
        font-weight 100

    .social
        text-align center
        display flex
        justify-content space-around
        padding 0 20px
        margin-top 15px

        > li
            flex 1
            padding 8px
            max-width 60px
            max-height 60px

            a
                display block

                img
                    width 100%

    .master
        .line
            height 1px
            background-color $default-border-color
            margin 10px 20px

        h4
            font-size 19px
            margin 30px 0 20px
            font-weight 600
            color $default-title-color

        .progresses
            padding 0 20px

            p.title
                height 38px
                line-height 38px
                text-align right
                color $default-title-color

            .bar
                margin 10px 0*/
</style>
<style scoped>
/*     Card Profile     */
.card-profile {
  background: #ffffff !important;
  color: #575962;
}

.card-profile .profile-picture {
  text-align: center;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: -41px;
  width: 100%;
  box-sizing: border-box;
}

.card-profile .user-profile .name {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 5px;
}

.card-profile .user-profile .job {
  color: #83848a;
  margin-bottom: 5px;
}

.card-profile .user-profile .desc {
  color: #bbb;
  margin-bottom: 15px;
}

.card-profile .user-profile .social-media {
  margin-bottom: 5px;
}

.card-profile .user-profile .social-media svg {
  width: 30px;
}

.card-profile .user-profile .social-media .btn {
  padding: 5px !important;
}

.card-profile .user-profile .social-media .btn i {
  font-size: 22px !important;
}

.card-profile .user-stats {
  margin-bottom: 10px;
}

.card-profile .user-stats [class^="col"] {
  border-right: 1px solid #ebebeb;
}

.card-profile .user-stats [class^="col"]:last-child {
  border-right: 0px;
}

.card-profile .user-stats .number {
  font-weight: 400;
  font-size: 15px;
}

.card-profile .user-stats .title {
  color: #7d7b7b;
}

.card-profile .card-header {
  border-bottom: 0px;
  height: 100px;
  position: relative;
}

.card-profile .card-body {
  padding-top: 40px;
}

.card-profile .card-footer {
  border-top: 0px;
}

.card-profile.card-secondary .card-header {
  border-radius: 5px;
  background-image: url('./../../src/assets/avatar_bg.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}
</style>
