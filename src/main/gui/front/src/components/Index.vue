<template>
    <div class="main-wrapper">
        <router-view name="header" keep-alive></router-view>
        <transition name="fade" :duration="100">
            <router-view name="content"></router-view>
        </transition>
        <router-view name="footer" keep-alive></router-view>
    </div>
</template>

<script>
    import {listNotice} from "@/api"

    export default {
        name: 'index',
        data() {
            return {
                bodyBgImage: 'url(' + require('../assets/home_bg.jpg') + ')',
                scrollTop: 0
            }
        },
        methods: {
            // 添加body图片
            setBodyBackGround() {
                document.body.style.backgroundImage = this.bodyBgImage;
                document.body.style.backgroundRepeat = 'repeat';
                document.body.style.backgroundAttachment = 'fixed';
                document.body.style.backgroundSize = '100%';
                document.body.style.backgroundPosition = 'center 0';
                document.body.style.backgroundColor = 'rgba(233, 235, 254,1)';
                document.body.style.position = 'relative';
                document.body.style.transition = 'background-position 1.8s ease-out';
            },
            // 清除背景图
            clearBodyBackGround() {
                document.body.style.backgroundImage = ''
            },
            getScroll() {
                let userAgent = navigator.userAgent;
                if (userAgent.indexOf("IE") > -1 || userAgent.indexOf("Edge") > -1){
                    let newTop = document.body.scrollTop;
                    let height = document.documentElement.scrollHeight;
                    let cli_height = document.documentElement.clientHeight;
                    if (newTop > this.scrollTop + 50 || newTop < this.scrollTop - 50) {
                        this.scrollTop = newTop;
                        document.body.style.backgroundPositionY = '-' + Math.round(this.scrollTop / height * cli_height * 10000) / 10000 + 'px';
                    }
                }else{
                    let newTop = document.documentElement.scrollTop;
                    let height = document.documentElement.scrollHeight;
                    let cli_height = document.documentElement.clientHeight;
                    if (newTop > this.scrollTop + 50 || newTop < this.scrollTop - 50) {
                        this.scrollTop = newTop;
                        document.body.style.backgroundPositionY = '-' + Math.round(this.scrollTop / height * cli_height * 10000) / 10000 + 'px';
                    }
                }
            }
        },
        created() {
            listNotice().then(response => {
                let list = response.data;
                for (let i = 0; i < list.length; i++) {
                    let obj = list[i];
                    //通知
                    if (obj.type === "1") {
                        this.$Notice.info({
                            title: obj.title,
                            desc: obj.htmlContent
                        });
                    } else {
                        //公告
                        this.$Modal.info({
                            title: obj.title,
                            content: obj.htmlContent,
                            okText: '我知道了',
                            closeOnClickModal: true,
                            scrollable: true,
                        })
                    }
                }
            });
        },
        mounted() {
            this.setBodyBackGround();
            /*setInterval(function() {
                console.log("scr h:" + document.documentElement.scrollHeight);
                console.log("cli h:" + document.documentElement.clientHeight);
                console.log("cli t:" + document.documentElement.clientTop);
                console.log("scr t:" + document.documentElement.scrollTop);
            }, 2000);*/
            /*window.scroll(function () {
                var scrolled = document.documentElement.scrollTop / 2;
                document.body.style.backgroundPosition = '50%'+ scrolled +'px'
            })*/
            window.addEventListener('scroll', this.getScroll)
        },
        updated() {
            /*this.$nextTick(() => {
                console.log("scr h:" + document.documentElement.scrollHeight);
                console.log("cli h:" + document.documentElement.clientHeight);
                console.log("cli t:" + document.documentElement.clientTop);
                console.log("scr t:" + document.documentElement.scrollTop);
            });*/
        },
        //创建前设置
        beforeCreate() {
            document.body.classList.add("custom-scrollbar");
        },
        beforeDestroy() {
            this.clearBodyBackGround();
            window.removeEventListener("scroll", this.getScroll)
        }
    };

</script>


<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
    @import "../common/stylus/theme-config.styl";
    @import "../common/stylus/index.styl";
    @import "./../../public/static/css/bootstrap.css";
    @import "./../../public/static/css/font-awesome.min.css";
    @import "./../../public/static/fonts/font.css";
    @import "./../../public/static/css/azzara.css";
    .main-wrapper
        width 100%
        min-height 100vh
        margin 0 auto
    html
        scroll-behavior smooth;

</style>
