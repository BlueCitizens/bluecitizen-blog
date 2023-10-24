<template>
    <div class="timeline-content home-content">
        <Preloader :is-loaded="isLoaded"></Preloader>
        <CommonBanner v-on:loadBannerPic="getValue" :carouselList="carouselList"
                      :is-showing-banner="isShowingBanner"
                      :home-pic-index="homePicIndex"></CommonBanner>
        <div class="row timeline-container home-layout-content" style="margin-top: 30px" v-for="year in sortedYearKeys(timeline)" :key="year"
             v-if="Object.keys(timeline).length > 0">
            <div class="col-md-12" v-for="month in sortedMonthKeys(timeline[year].months)">
                <ArchiveListTimeTitle :date="year+'年'"
                                      :count="timeline[year].count"></ArchiveListTimeTitle>
                <ArchiveListTimeTitle :date="month+'月'"
                                      :count="timeline[year].months[month].count"
                                      :dateType="'month'">
                </ArchiveListTimeTitle>
                <ul class="timeline">
                    <li v-for="(day,index) in sortedDayKeys(timeline[year].months[month].days)"
                        :class="index%2===0?null:'timeline-inverted'">
                        <div class="timeline-badge default">
                            {{day}}&nbsp;<span style="font-size: 12px">{{timeline[year].months[month].days[day].length}}篇</span>
                        </div>
                        <div class="timeline-panel">
                            <div class="day-tag">
                                <Tag class="time-tag border-tag">
                                    <ArchiveListTimeTitle :date="day+'日'"
                                                          :count="timeline[year].months[month].days[day].length"
                                                          :dateType="'day'">
                                    </ArchiveListTimeTitle>
                                </Tag>
                            </div>
                            <ArchiveListCell v-for="post in timeline[year].months[month].days[day]"
                                             :post="post"
                                             :key="post.id"></ArchiveListCell>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {
        mapState,
        mapMutations,
        mapActions
    } from 'vuex';

    import {listCarousel} from "@/api"

    import scrollReveal from 'scrollreveal';

    import ArchiveListTimeTitle from "../../views/archive/ArchiveListTimeTitle";
    import ArchiveListCell from "../../views/archive/ArchiveListCell";
    import Preloader from "../transition/Preloader";
    import CommonBanner from "../../views/CommonBanner";

    export default {
        name: "TimeLine",
        components: {
            CommonBanner,
            Preloader, ArchiveListTimeTitle, ArchiveListCell},
        data() {
            return {
                carouselList: [],
                homePicIndex: this.$store.state.home_pic_index,
                isShowingBanner: true,
                isLoaded: false,
                scrollReveal: scrollReveal(),
                selected_category: undefined,
                // 排序
                timeSorted: false,
                mostComment: undefined,
                recommend: undefined,
                pageSize: 30,
                pageNum: 1,
                menus: [
                    {
                        title: '顺序',
                        selectedTitle: '倒序',
                        selected: true,
                        method: 'timeSorted'
                    },
                    {title: '最多评论', selected: false, method: 'mostComment'},
                    {title: '推荐', selected: false, method: 'recommend'}
                ],
                dateRange: []
            };
        },
        beforeMount(){
            listCarousel().then(response => {
                this.carouselList = response.data;
            });
        },
        beforeRouteLeave(to, from, next) {
            // 导航离开时清空已有的数据
            this.clearTimelineInfo();
            next();
        },
        mounted() {
            if (Object.keys(this.$store.state.timeline.timeline).length === 0) {
                this.updateTimeLineInfo(true);
            }
            let _this = this;
            setTimeout(function () {
                _this.reveal();
            }, 500);
        },
        updated() {

        },
        beforeDestroy() {
            // 导航离开时清空vuex中数据
            this.clearTimelineInfo();
        },
        computed: {
            ...mapState({
                timeline: state => state.timeline.timeline,
                noMoreData: state => state.timeline.noMoreData
            })
        },
        methods: {
            ...mapMutations({
                clearTimelineInfo: 'timeline/CLEAR_TIMELINE_INFO'
            }),
            ...mapActions({
                getTimelineInfo: 'timeline/GET_TIMELINE_INFO'
            }),
            getValue(data) {
                this.isLoaded = data;
            },
            reveal() {
                this.scrollReveal.reveal('.scroll-animated-from-bottom', {
                    // 动画的时长
                    duration: 400,
                    // 延迟时间
                    delay: 50,
                    // 动画开始的位置，'bottom', 'left', 'top', 'right'
                    origin: 'bottom',
                    // 回滚的时候是否再次触发动画
                    reset: true,
                    // 在移动端是否使用动画
                    mobile: true,
                    // 滚动的距离，单位可以用%，rem等
                    distance: '400px',
                    // 其他可用的动画效果
                    opacity: 0,
                    easing: 'ease',
                    scale: 1,
                    viewFactor: 0.4,
                })
            },
            browseMore() {
                this.pageNum++;
                this.updateTimeLineInfo(false);
            },
            updateTimeLineInfo(reset) {
                // 排序条件
                let orderings = [];
                if (this.mostComment !== undefined) {
                    orderings.push(this.mostComment ? 'commentCount' : '-commentCount');
                }
                let params = {
                    categoryId: this.selected_category,
                    orderByColumn: orderings.toString(),
                    isAsc: this.timeSorted ? 'asc' : 'desc',
                    support: this.recommend,
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    beginTime: this.dateRange[0],
                    endTime: this.dateRange[1]
                };
                this.getTimelineInfo({params, reset}).then(response => {
                    this.$refs.browseMore.stopLoading();
                }).catch(error => {
                    this.$refs.browseMore.stopLoading();
                    console.log(error);
                });
            },
            sortedYearKeys(years) {
                let that = this;
                return Object.keys(years).sort(function (year1, year2) {
                    return that.timeSorted ? year1 - year2 : year2 - year1;
                });
            },
            sortedMonthKeys(months) {
                let that = this;
                return Object.keys(months).sort(function (month1, month2) {
                    return that.timeSorted ? month1 - month2 : month2 - month1;
                });
            },
            sortedDayKeys(days) {
                let that = this;
                return Object.keys(days).sort(function (day1, day2) {
                    return that.timeSorted ? day1 - day2 : day2 - day1;
                });
            },
            selectCategory(categoryId) {
                this.selected_category = categoryId;
                this.pageNum = 0;
                this.updateTimeLineInfo(true);
            },
            refresh() {
                this.selected_category = undefined;
                this.timeSorted = false;
                this.mostComment = undefined;
                this.recommend = undefined;
                this.page = 0;
                this.dateRange = [];
                this.updateTimeLineInfo(true);
            },
            menusControl(params) {
                switch (params[0]) {
                    case 'timeSorted':
                        this.timeSorted = !params[1];
                        break;
                    case 'mostComment':
                        this.mostComment = params[1] ? params[1] : undefined;
                        break;
                    case 'recommend':
                        this.recommend = params[1] ? params[1] : undefined;
                        break;
                }
                // 清空原数据
                this.pageNum = 1;
                this.updateTimeLineInfo(true);
            },
            confirmDateSelect(dateRange) {
                this.dateRange = dateRange;
                this.updateTimeLineInfo(true);
            },
            dateSelect(dateRange) {

            },
            dateSelectClear() {
                // this.selectedDateRange = [];
                // this.page = 0;
                // this.limit_size = DefaultLimitSize * 10;
                // this.updateTimeLineInfo(true);
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>

    .day-tag
        height 1.8em
        padding-left 2%

    .timeline-container
        border-radius 10px
        background-color rgba(255, 255, 255, 0.6);

</style>
<style scoped>
    /*      Timeline     */
    .timeline {
        list-style: none;
        padding: 20px 0 20px;
        position: relative;
    }

    .timeline:before {
        top: 0;
        bottom: 0;
        position: absolute;
        content: " ";
        width: 3px;
        background-color: #eeeeee;
        left: 50%;
        margin-left: -1.5px;
    }

    .timeline > li {
        margin-bottom: 20px;
        position: relative;
    }

    .timeline > li:before {
        content: " ";
        display: table;
    }

    .timeline > li:after {
        content: " ";
        display: table;
        clear: both;
    }

    .timeline > li:before {
        content: " ";
        display: table;
    }

    .timeline > li:after {
        content: " ";
        display: table;
        clear: both;
    }

    .timeline > li > .timeline-panel {
        width: 50%;
        float: left;
        border: 1px solid #eeeeee;
        background: #ffffff;
        border-radius: 3px;
        padding: 20px;
        position: relative;
        -webkit-box-shadow: 0px 1px 20px 1px rgba(69, 65, 78, 0.06);
        -moz-box-shadow: 0px 1px 20px 1px rgba(69, 65, 78, 0.06);
        box-shadow: 0px 1px 20px 1px rgba(69, 65, 78, 0.06);
    }

    .timeline > li.timeline-inverted + li:not(.timeline-inverted) {
        margin-top: -60px;
    }

    .timeline > li:not(.timeline-inverted) {
        padding-right: 90px;
    }

    .timeline > li:not(.timeline-inverted) + li.timeline-inverted {
        margin-top: -60px;
    }

    .timeline > li.timeline-inverted {
        padding-left: 90px;
    }

    .timeline > li.timeline-inverted > .timeline-panel {
        float: right;
    }

    .timeline > li.timeline-inverted > .timeline-panel:before {
        border-left-width: 0;
        border-right-width: 15px;
        left: -15px;
        right: auto;
    }

    .timeline > li.timeline-inverted > .timeline-panel:after {
        border-left-width: 0;
        border-right-width: 14px;
        left: -14px;
        right: auto;
    }

    .timeline > li > .timeline-panel:before {
        position: absolute;
        top: 26px;
        right: -15px;
        display: inline-block;
        border-top: 15px solid transparent;
        border-left: 15px solid #eeeeee;
        border-right: 0 solid #eeeeee;
        border-bottom: 15px solid transparent;
        content: " ";
    }

    .timeline > li > .timeline-panel:after {
        position: absolute;
        top: 27px;
        right: -14px;
        display: inline-block;
        border-top: 14px solid transparent;
        border-left: 14px solid #ffffff;
        border-right: 0 solid #ffffff;
        border-bottom: 14px solid transparent;
        content: " ";
    }

    .timeline > li > .timeline-badge {
        color: #ffffff;
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 1em;
        text-align: center;
        position: absolute;
        top: 16px;
        left: 50%;
        margin-left: -25px;
        background-color: #999999;
        z-index: 100;
        border-top-right-radius: 50%;
        border-top-left-radius: 50%;
        border-bottom-right-radius: 50%;
        border-bottom-left-radius: 50%;
    }

    .timeline-badge.default {
        background-color: #4e4e4e !important;
    }

    .timeline-badge.primary {
        background-color: #177dff !important;
    }

    .timeline-badge.info {
        background-color: #36a3f7 !important;
    }

    .timeline-title {
        font-size: 17px;
        margin-top: 0;
        color: inherit;
        font-weight: 400;
    }

    .timeline-heading i {
        font-size: 22px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
    }

    .timeline-body > p, .timeline-body > ul {
        margin-bottom: 0;
    }

    .timeline-body > p + p {
        margin-top: 5px;
    }
</style>
