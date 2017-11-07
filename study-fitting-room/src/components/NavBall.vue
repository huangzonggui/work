<template>
  <div class="suspension-ball">
      <div class="mask" v-if="isBallActive"></div>
      <div class="ball-box">
        <router-link to="/Shop/ClothesCategory/up" class="ball" v-bind:class="isBallActive ? 'top-clothes' : ''">上装</router-link>
        <router-link to="/Shop/ClothesCategory/down"  class="ball" v-bind:class="isBallActive ? 'up-clothes' : ''">下装</router-link>
        <router-link to="/Shop/ClothesCategory/suit" class="ball" v-bind:class="isBallActive ? 'suit' : ''">套装</router-link>
      </div>
      <div class="main-menu" @click="activeBall()">

        <img src="../assets/images/clothes-class.png" v-show="!isBallActive">
        <img src="../assets/images/put-down.png" v-show="isBallActive">
      </div>
  </div>
</template>

<script>
  export default {
    name: 'navball',
    data () {
      return {
        isBallActive: false
      }
    },
    methods: {
      activeBall () {
        this.isBallActive = !this.isBallActive
      }
    }
  }
</script>

<style lang="less">
  .suspension-ball {
    position: absolute;
    bottom: 59px;
    right: 32px;
    width: 46px;
    height: 46px;
    z-index: 33;
  }

  .mask {
    position: fixed;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    /*background: rgba(0, 0, 0, 0.4);*/
    background-color: #000;
    opacity: 0.4;
    z-index: 2;
  }

  .ball-box {
    /*position: absolute;*/
    .ball {
      font-size: 16px;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 54px;
      height: 54px;
      background: #fff;
      border-radius: 27px;
      line-height: 54px;
      z-index: 2;
      text-decoration: none;
      color: #000;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -ms-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
    }
    .top-clothes {
      font-size: 16px;
      position: absolute;
      bottom: 192px;
      left: 0;
      width: 54px;
      height: 54px;
      background: #fff;
      border-radius: 27px;
      line-height: 54px;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -ms-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
    }
    .up-clothes {
      font-size: 16px;
      position: absolute;
      bottom: 128px;
      left: 0;
      width: 54px;
      height: 54px;
      background: #fff;
      border-radius: 27px;
      line-height: 54px;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -ms-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
    }
    .suit {
      font-size: 16px;
      position: absolute;
      bottom: 64px;
      left: 0;
      width: 54px;
      height: 54px;
      background: #fff;
      border-radius: 27px;
      line-height: 54px;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -ms-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
    }
  }

  .main-menu {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 0;
    width: 54px;
    height: 54px;
    background: transparent;
    box-shadow: none;
    z-index: 3;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
