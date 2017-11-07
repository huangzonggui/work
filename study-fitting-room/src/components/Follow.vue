<template>
  <div class="follow" v-bind:class="{'QR-code-active': isQRCodeActive}">
    <div class="attention">
      <p class="attenWord">点击关注，随时随地体验虚拟试衣</p>
      <div class="attenBtn" v-on:click="activeQRCode()"><span>关注</span></div>
    </div>
    <div class="qrcode-father"  v-bind:class="isQRCodeActive?'active':''">
      <div class="gray-background"></div>
      <div class="qrcode-box">
        <div class="close-qrcode-btn" v-on:click="closeQRCode()">
          <img src="../assets/guanbi.png" alt="关闭二维码" class="close-qrcode">
        </div>
        <img src="http://m.cloudream.com/assets/qrcode.jpg" alt="二维码" class="qrcode">
        <p class="follow-tips">长按识别二维码，关注公众号</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'follow',
    data () {
      return {
        isQRCodeActive: false
      }
    },
    methods: {
      activeQRCode () {
        this.isQRCodeActive = true
        document.body.style.overflow = 'hidden'
      },
      closeQRCode () {
        this.isQRCodeActive = false
        document.body.style.overflow = ''
      }
    }
  }
</script>

<style lang="less">
  .follow {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 11;

    &.QR-code-active{
      bottom: 0;
    }

  }

  .attention {
    height: 32px;
    background: #FFF0F0;
    padding-left: 24px;
    padding-right: 18px;
  }

  .attenWord {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #FE6F58;
    line-height: 32px;
    float: left;
    margin: 0;
  }

  .attenBtn {
    border-radius: 6px;
    float: right;
    border: 0px;
    padding: 0px;
    width: 60px;
    height: 26px;
    color: #fff;
    background: #F23030;
    text-align: center;
    font-size: 14px;
    line-height: 26px;
    margin: 3px auto;
  }

  .qrcode-father {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: none;
  }

  .gray-background {
    position: fixed;
    opacity: 0.4;
    background: #000000;
    width: 100%;
    height: 100%;
  }

  .qrcode-box {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 240px;
    height: 240px;
    display: block;
    background: #FFFFFF;
    z-index: 100;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
  }

  .qrcode {
    width: 170px;
    height: 170px;
    margin: 0 35px;
  }

  .close-qrcode {
    width: 15px;
    height: 15px;
  }

  .close-qrcode-btn {
    float: right;
    padding: 14px 14px 0 14px;
  }

  .follow-tips {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #3F3F3F;
    line-height: 21px;
    margin: 0;
  }

  .active {
    display: block;
  }
</style>
