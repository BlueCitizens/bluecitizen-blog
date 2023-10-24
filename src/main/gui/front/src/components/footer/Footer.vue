<template>
    <div class="common-footer">
        <!--<BackTop :height="300" :bottom="bottom" :right="right" :duration="0">
            <div class="top">
                <Tooltip :content="ExpandLeftColumn ? '退出宽屏' : '宽屏阅读'"
                         placement="top"
                         v-show="showExpandMenu">
                    <Icon :type="ExpandLeftColumn ? 'ios-contract' : 'ios-expand'" class="icon"
                          @click.native.stop.prevent="toggleExpand">
                    </Icon>
                </Tooltip>

                <Icon type="md-arrow-dropup" class="icon"
                      @mouseover.native="setButtonState('top', true, true)"
                      @mouseleave.native="setButtonState('top', false)"></Icon>
                <Icon type="md-arrow-dropdown" class="icon"
                      @click.native.stop.prevent="scrollDown"
                      @mouseover.native="setButtonState('bottom', true, true)"
                      @mouseleave.native="setButtonState('bottom', false)"></Icon>
            </div>
        </BackTop>-->
        <Drawer title="文章目录" :closable="false" v-model="isToc">
            <div class="sidebar-toc hide-scrollbar">
                <div id="sidebar-toc" class="list" slot="content" ref="list">
                </div>
            </div>
        </Drawer>
        <BackTop :height="300" :bottom="50" :right="0" :duration="500">
            <div class="back-top-rocket">
                <div class="top-icon"><i class="fa fa-rocket"></i></div>
            </div>
        </BackTop>
        <nav :class="isBar?'nav':'nav hide'" id="nav-bar">
            <input type="checkbox" class="nav__cb" id="menu-cb" :checked="isChecked">
            <div class="nav__content">
                <ul class="nav__items">
                    <li class="nav__item" @click="toggleExpand">
                            <span class="nav__item-text"><i
                                    :class="ExpandLeftColumn ? 'fa fa-compress' : 'fa fa-expand'"></i></span>
                    </li>
                    <li @click="isToc = true" class="nav__item"><span class="nav__item-text"><i
                            class="fa fa-list-ul"></i></span></li>
                    <li @click="scrollDown" class="nav__item"><span class="nav__item-text"><i
                            class="fa fa-chevron-down"></i></span></li>
                </ul>
            </div>
            <label class="nav__btn" for="menu-cb"></label>
        </nav>

        <div class="footer-remark"><span><i class="fa fa-quote-left"
                                                                    style="font-size: 12px;padding-right: 8px"></i>{{$store.state.settings.F_Copyright_Desc_En}}<i
                class="fa fa-quote-right" style="font-size: 12px"></i></span></div>
        <p class="copyright" style="font-size: 12px">
            {{ $store.state.settings.F_ICP }}
            <span>|</span>
            {{ $store.state.settings.F_Copyright }}
            <span>|</span>
            <span v-html="$store.state.settings.F_Copyright_Desc"></span>
        </p>
    </div>
</template>

<script type="text/ecmascript-6">
    import {
        mapState,
        mapMutations
    } from 'vuex';
    import {scrollTop} from '@/utils';

    export default {
        name: 'Footer',
        data() {
            return {
                isToc: false,
                isBar: false,
                isChecked: false,
                userAgent: undefined,
                minHeight: 200,
                bottom: 120,
                right: 20,
                topBtnMouseOver: false,
                bottomBtnMouseOver: false,
                animationFrameId: undefined
            };
        },
        mounted() {
            this.userAgent = navigator.userAgent;
            if (document.body.clientWidth <= 1200) {
                this.bottom = 20;
            }
            window.addEventListener('scroll', this.setBarState);
        },
        updated() {

        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.setBarState);
        },
        watch: {
            isBar: {
                handler(val) {
                    this.isChecked = val === true;
                }
            }
        },
        computed: {
            ...mapState({
                ExpandLeftColumn: state => state.base.ExpandLeftColumn
            }),
            showExpandMenu: function () {
                try {
                    return (this.$route.name === 'article' ||
                        this.$route.name === 'book' ||
                        this.$route.name === 'book/note' ||
                        this.$route.name === 'movie' ||
                        this.$route.name === 'album'
                    ) && document.body.clientWidth >= 1200;
                } catch (error) {
                    return true;
                }
            }
        },
        methods: {
            ...mapMutations({
                updateExpandLeftColumn: 'base/UPDATE_EXPAND_LEFT_COLUMN'
            }),
            setBarState() {
                let s = document.documentElement.scrollTop || document.body.scrollTop;

                if (s > this.minHeight && (this.$route.name === 'article' ||
                    this.$route.name === 'book' ||
                    this.$route.name === 'book/note' ||
                    this.$route.name === 'movie' ||
                    this.$route.name === 'album'
                )) {
                    this.isBar = true;
                } else {
                    this.isBar = false;
                }
            },
            /*setButtonState(position, state, start) {
                this[(Object.is(position, 'bottom') ? 'bottomBtnMouseOver' : 'topBtnMouseOver')] = state;
                window.cancelAnimationFrame(this.animationFrameId);
                start && this.slowMoveToAnyWhere();
            },
            slowMoveToAnyWhere() {
                const step = () => {
                    let targetScrollY = window.scrollY;
                    const currentScrollY = document.body.scrollHeight - window.innerHeight;
                    if (this.bottomBtnMouseOver) targetScrollY += 1;
                    if (this.topBtnMouseOver) targetScrollY -= 1;
                    if (targetScrollY < 0) {
                        targetScrollY = 0;
                    } else if (targetScrollY >= currentScrollY) {
                        targetScrollY = currentScrollY;
                    }
                    const canScrollTo = targetScrollY > 0 && targetScrollY < currentScrollY;
                    if (!canScrollTo) return false;
                    window.scrollTo(0, targetScrollY);
                    if (this.bottomBtnMouseOver || this.topBtnMouseOver) {
                        this.animationFrameId = window.requestAnimationFrame(step);
                    } else {
                        window.cancelAnimationFrame(this.animationFrameId);
                        return false;
                    }
                };
                this.animationFrameId = window.requestAnimationFrame(step);
            },*/
            scrollDown() {
                const sTop = document.documentElement.scrollTop || document.body.scrollTop;
                const sHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                scrollTop(window, sTop, sHeight, 100);
            },
            toggleExpand() {
                this.updateExpandLeftColumn(!this.ExpandLeftColumn);
            }
        }
    };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/theme.styl";
    .sidebar-toc
        position relative
        background #fff
        height 100%
        overflow scroll

    .common-footer
        padding 15px 5px
        margin-top 50px
        text-align center
        background rgba(255,255,255,0.6)
        border-top 1px solid $default-border-color
        z-index 99

        .top
            text-align center
            border-radius 2px

            i.icon
                display block
                margin-bottom 5px
                padding 6px 12px
                color $default-background-color
                background rgba($default-link-color, .7)
                cursor pointer

                &:hover
                    background rgba($default-link-hover-color, .7)

                &::before
                    display inline-block
                    font-size 20px
                    width 15px

        .side-menu
            right 20px

        p
            margin 0 auto
            font-size 15px
            line-height 22px
            font-weight 100

            span
                padding 0 10px

        .copyright, .copyright-english
            margin 10px
            color $default-title-color

            a
                color $default-link-color

                &:hover
                    color $default-link-hover-color
</style>
<style scoped>
    .footer-remark{
        height: 1px;
        border-bottom: 2px solid #e6e6e6;
        text-align: center;
        margin-top: 25px;
        margin-bottom: 70px;
    }

    .footer-remark span{
        position: relative;
        font-size: 18px;
        top: -17px;
        background: #fff;
        line-height: 35px;
        border: 1px solid #eaecff;
        padding: 4px 20px;
    }

    .back-top-rocket {
        text-align: center;
        color: #7c8ea0;
        overflow: hidden;
        position: fixed;
        right: 10px;
        bottom: 40px;
        width: 40px;
        height: 35px;
        margin-top: -45px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 5px;
        -webkit-transform: translate3d(-50%, 0, 0);
        transform: translate3d(-50%, 0, 0);
        box-shadow: 0 10px 35px rgba(0, 0, 0, 0.2);
    }

    .back-top-rocket .top-icon {
        position: relative;
        left: -1.5px;
        top: 1px;
        width: auto;
        height: auto;
    }

    .back-top-rocket .top-icon i {
        color: #7c8ea0;
        font-size: 20px;
        transform: rotate(-45deg);
        -ms-transform: rotate(-45deg); /* Internet Explorer 9*/
        -moz-transform: rotate(-45deg); /* Firefox */
        -webkit-transform: rotate(-45deg); /* Safari 和 Chrome */
        -o-transform: rotate(-45deg); /* Opera */
    }

    /* MAIN VARIABLES FOR CUSTOMIZATION */
    /* -------------------------------- */
    .nav {
        z-index: 1000;
        display: block;
        overflow-y: hidden;
        overflow-x: hidden;
        position: fixed;
        right: 10px;
        bottom: 90px;
        width: 40px;
        height: auto;
        margin-top: -45px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 5px;
        -webkit-transform: translate3d(-50%, 0, 0);
        transform: translate3d(-50%, 0, 0);
        box-shadow: 0 10px 35px rgba(0, 0, 0, 0.2);
        -webkit-transition: .3s ease;
        -o-transition: .3s ease;
        transition: .3s ease;
    }

    .nav.hide {
        opacity: 0;
        right: -100px;
    }

    .nav__cb {
        z-index: -1000;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        pointer-events: none;
    }

    .nav__content {
        position: relative;
        width: 100%;
        height: 40px;
        -webkit-transition: height 0.5s cubic-bezier(0.49, -0.3, 0.68, 1.23);
        transition: height 0.5s cubic-bezier(0.49, -0.3, 0.68, 1.23);
    }

    .nav__cb:checked ~ .nav__content {
        -webkit-transition: height 0.8s cubic-bezier(0.48, 0.43, 0.29, 1.3) .3s;
        transition: height 0.8s cubic-bezier(0.48, 0.43, 0.29, 1.3) .3s;
        height: 210px;
    }

    .nav__items {
        position: relative;
        height: 210px;
        width: 100%;
        padding-top: 40px;
        padding-bottom: 110px;
        list-style-type: none;
        font-size: 0;
    }

    .nav__item {
        display: inline-block;
        vertical-align: top;
        width: 40px;
        text-align: center;
        color: #7c8ea0;
        font-size: 25px;
        height: 50px;
        line-height: 65px;
        font-family: Helvetica, Arial, sans-serif;
        font-weight: bold;
        -webkit-perspective: 500px;
        perspective: 500px;
        -webkit-transition: color 0.3s;
        transition: color 0.3s;
        cursor: pointer;
    }

    .nav__item:hover {
        color: #00bdea;
    }

    .nav__item-text {
        display: block;
        height: 100%;
        -webkit-transform: rotateY(-70deg);
        transform: rotateY(-70deg);
        opacity: 0;
        -webkit-transition: opacity 0.7s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
        transition: opacity 0.7s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
        transition: transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 0.7s;
        transition: transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 0.7s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
    }

    .nav__cb:checked ~ .nav__content .nav__item-text {
        -webkit-transform: rotateY(0);
        transform: rotateY(0);
        opacity: 1;
        -webkit-transition: opacity 0.2s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
        transition: opacity 0.2s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
        transition: transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 0.2s;
        transition: transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 0.2s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
    }

    .nav__item:nth-child(1) .nav__item-text {
        -webkit-transition-delay: 0.6s;
        transition-delay: 0.6s;
    }

    .nav__cb:checked ~ .nav__content .nav__item:nth-child(1) .nav__item-text {
        -webkit-transition-delay: 0.3s;
        transition-delay: 0.3s;
    }

    .nav__item:nth-child(2) .nav__item-text {
        -webkit-transition-delay: 0.5s;
        transition-delay: 0.5s;
    }

    .nav__cb:checked ~ .nav__content .nav__item:nth-child(2) .nav__item-text {
        -webkit-transition-delay: 0.1s;
        transition-delay: 0.1s;
    }

    .nav__item:nth-child(3) .nav__item-text {
        -webkit-transition-delay: 0.1s;
        transition-delay: 0.1s;
    }

    .nav__cb:checked ~ .nav__content .nav__item:nth-child(3) .nav__item-text {
        -webkit-transition-delay: 0.5s;
        transition-delay: 0.5s;
    }

    .nav__item:nth-child(4) .nav__item-text {
        -webkit-transition-delay: 0.3s;
        transition-delay: 0.3s;
    }

    .nav__cb:checked ~ .nav__content .nav__item:nth-child(4) .nav__item-text {
        -webkit-transition-delay: 0.6s;
        transition-delay: 0.6s;
    }

    .nav__btn {
        position: absolute;
        left: 10px;
        top: 11px;
        width: 30px;
        height: 30px;
        padding: 0 0;
        cursor: pointer;
    }

    .nav__btn:before, .nav__btn:after {
        content: "";
        display: block;
        width: 20px;
        height: 4px;
        border-radius: 2px;
        background: #096DD3;
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-transition: background-color 0.3s, -webkit-transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
        transition: background-color 0.3s, -webkit-transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
        transition: transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3), background-color 0.3s;
        transition: transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3), background-color 0.3s, -webkit-transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
    }

    .nav__btn:before {
        margin-bottom: 10px;
    }

    .nav__btn:hover:before, .nav__btn:hover:after {
        background: #00bdea;
    }

    .nav__cb:checked ~ .nav__btn:before {
        -webkit-transform: translateY(7px) rotate(-225deg);
        transform: translateY(7px) rotate(-225deg);
    }

    .nav__cb:checked ~ .nav__btn:after {
        -webkit-transform: translateY(-7px) rotate(225deg);
        transform: translateY(-7px) rotate(225deg);
    }
</style>
