<template>
  <div :class="isLoaded?'preloader hide-preloader':'preloader'">

    <div class="spinner"></div>

  </div>
</template>

<script>
export default {
  name: "Preloader",
  props: {
    isLoaded: undefined
  },
  mounted() {
    /*let _this = this;
    setTimeout(function () {
    }, 700);*/
  },
  updated() {
  }
}
</script>

<style scoped>
/** 2. Preloader
   *******************************************************************/

.preloader {
  /*box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.19);*/
  border-bottom: 3px solid #cccccc;
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  opacity: 1;

  overflow: hidden;

  width: 100%;
  height: 100%;

  background: #e8e8e8;
}

.preloader.hide-preloader {
  border-radius: 60%;
  bottom: 100%;
  -webkit-transition: .5s ease .3s;
  -o-transition: .5s ease .3s;
  transition: .5s ease .3s;
}

.preloader .spinner {
  position: absolute;
  top: 50%;
  left: 50%;

  display: block;

  width: 50px;
  height: 50px;
  margin-top: -25px;
  margin-left: -25px;

  -webkit-animation: spinner-pulse .6s infinite ease-in-out;
  animation: spinner-pulse .6s infinite ease-in-out;
  text-align: center;

  opacity: 1;
  border-radius: 100%;
  background-color: #9b9b9b;
}

.preloader.hide-preloader .spinner {
  opacity: 0;

  -webkit-transition: .3s ease;
  -o-transition: .3s ease;
  transition: .3s ease;
}

@-webkit-keyframes spinner-pulse {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1.0);

    opacity: 0;
  }
}

@keyframes spinner-pulse {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);

    opacity: 0;
  }
}
</style>
