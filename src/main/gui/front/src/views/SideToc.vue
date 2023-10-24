<template>
  <div class="side-toc hide-scrollbar card-body">
      <div id="side-toc" class="list" slot="content" ref="list">
      </div>
  </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: 'SideToc',
        components: {

        }
    };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "../common/stylus/theme.styl";
  @import "../common/stylus/toc.styl";
  .side-toc
    position relative
    background #fff
    max-height 80vh
    overflow scroll
    border-radius 5px
    box-shadow 0px 1px 15px 1px rgba(69, 65, 78, 0.08);

    h4
      font-size 18px
      line-height 18px
      text-align left

    .list
      position relative
</style>
