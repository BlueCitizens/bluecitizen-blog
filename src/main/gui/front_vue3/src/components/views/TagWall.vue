<template>
    <div class="tag-wall card card-body">
        <div slot="content" class="content">
            <a v-for="tag in tags">
                <Badge :count="tag.count" type="normal">
                    <Tag size="large" style="margin: 0 5px 5px 0;"
                         :color="tag.color"
                         :key="tag.id" class="dot-tag">
                        {{tag.title}}
                    </Tag>
                </Badge>
            </a>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {
        mapState,
        mapActions
    } from 'vuex';

    import Panel from "./Panel";

    export default {
        name: 'tag-wall',
        mounted() {
            if (this.$store.state.common.tags.length === 0) {
                this['common/GET_TAGS']({
                    pageSize: 5,
                    pageNum: 0
                });
            }
        },
        computed: {
            ...mapState({
                tags: state => state.common.tags
            })
        },
        methods: {
            ...mapActions(['common/GET_TAGS'])
        },
        components: {
            'panel': Panel
        }
    };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
    .tag-wall
        .content
            padding 5px 20px
            background-size auto

    /*background-image url("./../assets/background.png")
    background-repeat no-repeat
    background-size cover
    -webkit-background-size cover
    -o-background-size cover
    background-position center 0*/
</style>
