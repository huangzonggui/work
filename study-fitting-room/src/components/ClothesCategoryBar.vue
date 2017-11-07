<template>
  <div>
    <div class="clothes-category-out">
    <div class="top-bar">
      <span v-show="isShouqi">切换服装分类</span>
      <span class="category-guide" v-show="!isShouqi">卫衣</span>
      <span class="category-guide" v-show="!isShouqi">卫衣</span>
      <span class="category-guide" v-show="!isShouqi">卫衣</span>
      <img src="../assets/shouqi@1x.png" @click="shouqi" v-show="isShouqi">
      <img src="../assets/zhankai@1x.png" @click="zhankai" v-show="!isShouqi">
    </div>
      <div class="clothes-category" :class="isShouqi ? '':'transform-detail'">
        <div><span>上装</span></div>
        <Btn type="btns clothes-category-active-btn">T恤</Btn>
        <Btn type="btns clothes-category-btn">T恤</Btn>
        <Btn type="btns clothes-category-btn">T恤</Btn>
        <Btn type="btns clothes-category-btn">T恤</Btn>
        <Btn type="btns clothes-category-btn">T恤</Btn>
        <Btn type="btns clothes-category-btn">T恤</Btn>
        <Btn type="btns clothes-category-btn">T恤</Btn>
        <Btn type="btns clothes-category-btn">T恤</Btn>
        <Btn type="btns clothes-category-btn">T恤</Btn>
        <div><span>下装</span></div>
        <Btn type="btns clothes-category-btn">牛仔裤</Btn>
        <Btn type="btns clothes-category-btn">牛仔裤</Btn>
        <Btn type="btns clothes-category-btn">牛仔裤</Btn>
        <Btn type="btns clothes-category-btn">牛仔裤</Btn>
        <Btn type="btns clothes-category-btn">牛仔裤</Btn>
        <Btn type="btns clothes-category-btn">牛仔裤</Btn>
        <Btn type="btns clothes-category-btn">牛仔裤</Btn>
        <div><span>套装</span></div>
        <Btn type="btns clothes-category-btn">连衣裙</Btn>
        <Btn type="btns clothes-category-btn">连衣裙</Btn>
        <Btn type="btns clothes-category-btn">连衣裙</Btn>
        <Btn type="btns clothes-category-btn">连衣裙</Btn>
        <Btn type="btns clothes-category-btn">连衣裙</Btn>
        <Btn type="btns clothes-category-btn">连衣裙</Btn>
      </div>

    </div>
    <div class="gray-bg" :class="isShouqi?'':'transform-gray'"></div>
  </div>
</template>

<script>
  import Btn from '../components/Btn.vue'
  import Container from '../components/Container.vue'

  export default {
    name: 'ClothesCategoryBar',
    data () {
      return {
        isShouqi: false
      }
    },
    methods: {
      shouqi () {
        this.isShouqi = false
      },
      zhankai () {
        this.isShouqi = true
      }
    },
    components: {
      Btn,
      Container
    }
  }
</script>

<style lang="less" type="text/less">
  .clothes-category-out {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
  .top-bar {
    height: 40px;
    text-align: left;
    background-color: #F4F4F4;
    span {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #9E9E9E;
      line-height: 40px;
      background-color: #F9F9F9;
      margin-left: 3.5%;
    }
    img {
      height: 100%;
      float: right;
      background-color: #F9F9F9;
    }
    .category-guide {
      background-color: red;
      color: #FFF;
      padding: 8px;
      border-radius: 50px;
    }
  }

  // 灰色背景
  .gray-bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.4;
    background-color: #000;
    z-index: 1;
    transition: opacity .5s ease;
  }

  .transform-gray {
    //显示后的透明度状态
    opacity: 0;
  }

  .clothes-category {
    background: #FFFFFF;
    box-shadow: 0 6px 4px 0 rgba(0,0,0,0.10);
    text-align: left;
    padding: 10px;
    /*衣服分类动画向上移动的切换时间*/
    transition: transform .5s;
    .btns {
      margin-left: 3%;
      margin-bottom: 4%;
    }
    div {
      text-align: center;
      margin-bottom: 10px;
    }
    span {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #444444;
      line-height: 16px;
      text-align: center;
    }
  }

  // 向上移动隐藏分类细节
  .transform-detail {
    transform: translateY(-110%);
  }
</style>
