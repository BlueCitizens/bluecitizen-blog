<template>
    <div class="classify-bar" v-if="categories !== null">
        <p class="level level-one">
            <!--            <span class="title">分类</span>-->
            <span class="class">
        <a class="active" @click="selectCategory(undefined, $event)">全部</a>
        <a class="name" :id="'id' + category.id" @click="selectCategory(category, $event)" :title="category.description"
           v-for="category in this.categories" :key="category.id"
           v-if="category.type === typeId">{{ category.title }}</a>
      </span>
        </p>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: 'ClassifyMenu',
        props: {
            typeId: undefined,
            categories: {
                Type: Object,
                default: undefined
            },
            defaultCategoryId: {
                default: undefined
            }
        },
        mounted() {
            this.setDefaultCategory(this.defaultCategoryId)
        },
        watch: {
            defaultCategoryId(val) {
                this.setDefaultCategory(val)
            }
        },
        methods: {
            selectCategory(category, event) {
                let pNode = event.target.parentNode;
                let activeNode = pNode.querySelector('.active');
                if (activeNode) {
                    activeNode.classList.remove('active');
                }
                event.target.classList.add('active');
                this.selectCategoryCall(category === undefined ? undefined : category.id);
            },
            setDefaultCategory(categoryId) {
                if (categoryId === undefined) {
                    return
                }
                let target = document.getElementById('id' + categoryId);
                let pNode = target.parentNode;
                let activeNode = pNode.querySelector('.active');
                if (activeNode) {
                    activeNode.classList.remove('active');
                }
                target.classList.add('active');
                this.selectCategoryCall(categoryId)
            },
            //调用父级方法
            selectCategoryCall(categoryId) {
                this.$emit('selectCategory', categoryId);
            }
        },
    };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/theme.styl";
    .classify-bar
        border-radius 5px
        background rgba(255, 255, 255, 0.5)
        -webkit-box-shadow 0 1px 15px 1px rgba(69, 65, 78, 0.08)
        -moz-box-shadow 0 1px 15px 1px rgba(69, 65, 78, 0.08)
        box-shadow 0 1px 15px 5px rgba(69, 65, 78, 0.08)
        border 2px solid #cbbaff
        display flex
        justify-content space-around
        align-items flex-start
        height 60px
        line-height 40px
        padding 5px 0
        margin-bottom 10px
        box-sizing border-box

        .level
            display flex
            padding 10px 0
            font-size 15px
            line-height 22px
            border-bottom 1px solid $default-border-color

            .title
                display inline-block
                flex 0 0 60px
                width 60px
                font-size 17px
                line-height 22px
                padding 4px 0
                font-weight 700
                color $default-title-color

            .class
                a
                    display inline-block
                    margin-right 4px
                    padding 3px 8px
                    margin-bottom 2px
                    font-weight 300
                    border-radius $border-radius
                    color $default-link-color

                    &.name
                        &:hover
                            color $default-link-hover-color

                    &.active
                        color $default-select-color
                        background $default-select-background-hover-color
</style>
