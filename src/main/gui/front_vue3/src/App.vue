<template>
  <div id="app">
    <!--  <img alt="Vue logo" src="./assets/logo.png" />-->
    <!--  <HelloWorld msg="Hello Vue 3.0 + Vite" />-->
    <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
@import "./common/stylus/reset.styl";
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color: #2c3e50
</style>