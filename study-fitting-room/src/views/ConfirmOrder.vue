<template>
  <container>
    <div>
      <div class="add-address-div">
        <img src="../assets/youjianline.png">
        <div class="add-address-icon">
          <icon class="icon-tianjiadizhi">添加收货地址</icon>
        </div>
        <img class="two-img" src="../assets/youjianline.png">
      </div>
      <div class="clothes-lists">
          <div class="clothes-item" v-for="n in 6" :key="n">
              <div class="image-div">
                <img src="http://a.hiphotos.baidu.com/zhidao/pic/item/d439b6003af33a87c1731b6ac15c10385343b5a7.jpg" alt="衣服">
              </div>
              <div class="clothes-details">
                  <div class="clothes-title">LITISEFA2017夏短袖修身正面系带个性T恤体恤女创意上衣女夏</div>
                  <div class="color-size">蓝色&nbsp;&nbsp;&nbsp;&nbsp;175/80A</div>
                <div class="order-price"><span class="small">￥</span><span class="big">899.</span><span class="small">00</span><span class="num">x1</span></div>
              </div>
          </div>
      </div>
      <div class="message-div">
        <div class="message-to-merchant">
          <textarea name="message" id="message" cols="30" rows="5" placeholder="有什么想对商家说的写在这里哦~"></textarea>
        </div>
      </div>
      <div class="confirmOrder-bottom">
        <div class="confirmOrder-price"><span class="word">应付:&nbsp;</span><span class="small">￥</span><span class="big">8212199.</span><span class="small">00</span></div>
        <router-link to="/"><Btn type="commit-order">提交订单</Btn></router-link>
      </div>
    </div>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import Icon from '../components/Icon.vue'
  import Btn from '../components/Btn.vue'

  export default {
    name: 'confirmOrder',
    components: {
      Container,
      Icon,
      Btn
    }
  }
</script>

<style lang="less">
  .add-address-div {
    background-color: #FFFFFF;
    height: 2.1rem;
    i {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #F23030;
      line-height: 16px;
    }

    img {
      width: 100%;
      float: left;
    }

    .add-address-icon {
      height: 2.1rem;
      line-height: 2.1rem;
    }

    .two-img {
      position: relative;
      top: -0.05rem;
    }
  }

  .clothes-lists  {
    background-color: #FFFFFF;
    width: 100%;
    margin-top: 10px;
    .clothes-item {
      text-align: left;
      margin-top: 5px;
      padding: 10px;
      .image-div {
        width: 2.6rem;
        height: 2.6rem;
        float: left;
        overflow: hidden;
        margin-right: 10px;
        img {
          width: 100px;
          float: left;
        }
      }
      .clothes-details {
        height: 2.6rem;
        .clothes-title {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #5F5F5F;
          letter-spacing: 0;
          line-height: 19px;
          text-align: left;
        }
      }
    }
  }

  .color-size {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #9E9E9E;
    line-height: 12px;
    text-align: left;
    margin-top: 0.3rem;
  }

  .order-price {
    position: relative;
    bottom: 0;
    text-align: left;
    margin-top: 0.15rem;
    .big {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #F23030;
      letter-spacing: 0;
      line-height: 16px;
    }

    .small {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #F23030;
      letter-spacing: 0;
      line-height: 14px;
    }

    .num {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #9E9E9E;
      float: right;
      position: relative;
      bottom: 0;
      margin-top: 0.26rem;
    }
  }

  .message-div {
    background-color: #F4F4F4;
    padding: 20px;
    padding-bottom: 100px;
  }

  .message-to-merchant {
    background-color: white;
    padding: 10px;
    border: 1px solid #cccccc;
    textarea {
      font-family: PingFangSC-Regular;
      width: 100%;
      resize: none;
      outline: none;
      border: none;
      font-size: 14px;
      line-height: 14px;
    }
    textarea::placeholder {
      color: #CCCCCC;;
    }
  }

  .confirmOrder-bottom {
    position: fixed;
    bottom: 0;
    opacity: 0.9;
    background: #FEFDFE;
    width: 100%;
    .confirmOrder-price {
      float: left;
      height: 50px;
      line-height: 50px;
      display: inline-block;

      .word {
         font-family: PingFangSC-Regular;
         font-size: 14px;
         color: #767676;
         margin-left: 10px;
       }

      .big {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #F23030;
        letter-spacing: 0;
      }

      .small {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #F23030;
        letter-spacing: 0;
      }
    }
  }
</style>
