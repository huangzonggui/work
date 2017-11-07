<template>
  <div class="me">
    <div class="img-background">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506340872364&di=09660cfcf607f1e4f9ca3b7bbe198ebd&imgtype=0&src=http%3A%2F%2Fimg1.cfw.cn%2Feditors%2Fattached%2Fimage%2F20170224%2F20170224133114811481.jpg" alt="试衣结果" class="img">
    </div>

    <div class="my-data-div">
      <div class="my-data-name">身高<span class="data-detail">168cm</span></div>
      <div class="my-data-name">体重<span class="data-detail">49kg</span></div>
      <div class="my-data-name">身形<span class="data-detail">标准体型</span></div>
      <div class="my-data-name">脸型<span class="data-detail">元气型圆脸</span></div>
    </div>

    <div>
      <img src="../assets/images/style-identification.jpg" alt="风格诊断" class="style-ident-img">
    </div>

    <div class="list">
      <router-link class="item" to="/MyFavorite">
        <img src="../assets/svgs/followed-clothes.svg" alt="我的心愿单" class="item-icon">
        <span class="item-word">我的心愿单</span>
        <icon class="icon-jiantouyou right"></icon>
      </router-link>
      <div class="line"></div>
      <div class="item">
        <img src="../assets/dingdan.svg" alt="我的订单" class="item-icon">
        <span class="item-word">我的订单</span>
        <icon class="icon-jiantouyou right"></icon>
      </div>
      <div class="line"></div>
      <router-link class="item" to="/BindingPhone">
        <img src="../assets/shoujihao.svg" alt="绑定手机" class="item-icon">
        <span class="item-word">绑定手机</span>
        <span class="item-word-phone-num">请绑定手机号</span>
        <icon class="icon-jiantouyou right"></icon>
      </router-link>
      <div class="line"></div>
      <router-link class="item" to="/Feedback">
        <img src="../assets/fankui.svg" alt="意见反馈" class="item-icon">
        <span class="item-word">意见反馈</span>
        <icon class="icon-jiantouyou right"></icon>
      </router-link>


    </div>
  </div>
</template>

<script>
  import Icon from '../components/Icon.vue'

  export default {
    name: 'me',
    components: {
      Icon
    }

  }
</script>

<style scoped lang="less">
  .me {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow-y: auto;
    overflow-x: hidden;
    margin-bottom: 50px;
  }

  .img-background {
    float: left;
    width: 100%;
    height: 380px;
    background-image: linear-gradient( -180deg, #F9F9F9 0%,#E7E7E7 100%);
  }

  .img {
    margin-top: 40px;
    width: 275px;
  }

  .my-data-div {
    position: fixed;
    top: 60px;
    right: 0;
    width: 172px;
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0;
  }

  .my-data-name {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #9E9E9E;
    line-height: 14px;
    margin: 12px auto 24px 12px;
    text-align: left;
  }

  .style-ident-img{
    width: 100%;
  }

  .data-detail {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #3F3F3F;
    line-height: 18px;
    margin-left: 12px;
  }

  .item-icon {
    height: 24px;
    line-height: 49px;
    margin: 12.5px auto 12.5px 17px;
    float: left;
  }

  .item {
    height: 49px;
    text-align: left;
    background-color: #FFFFFF;
    text-decoration: none;
    display: flex;
    i {
      color: #CCCCCC;
    }
  }

  .item-word {
    padding-left: 10px;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #3F3F3F;
    height: 49px;
    line-height: 49px;
    flex: 1;
  }

  .right {
    display: block;
    height: 49px;
    line-height: 49px;
  }

  .item-word-phone-num {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #CCCCCC;
    float: right;
    padding-right: 36px;
    line-height: 49px;
  }

  .line {
    background-color: #E4E4E4;
    width: 100%;
    height: 1px;
  }
</style>
