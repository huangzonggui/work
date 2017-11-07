<template>
  <div>
    <div class="fitting-room">
      <div class="fitting-result-image" :class="slideOut ? 'transition-after' : ''">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506340872364&di=09660cfcf607f1e4f9ca3b7bbe198ebd&imgtype=0&src=http%3A%2F%2Fimg1.cfw.cn%2Feditors%2Fattached%2Fimage%2F20170224%2F20170224133114811481.jpg" class="img">
        <div class="suit-room">
          <div class="fitting-history">
            <div  @click="slideShow()">
              <img src="../assets/images/history-fitting.png">
              <div>试穿记录</div>
            </div>
          </div>
          <div class="collect" @click="slideShow()">
            <div>
              <img src="../assets/svgs/collect.svg">
              <div>心愿单</div>
            </div>
          </div>
        </div>
        <div class="recommend-slide">
          <div class="slide-up-clothes" @click="showSlideClothes(1)">
            <span>上装</span><icon class="icon-jiantouxia" :class="clothesType==='up' ? 'transform-after' : ''"></icon>
            <slide-clothes></slide-clothes>
          </div>
          <!--点击下装和套装都要向上移动 所以:class绑定写法为！='up'-->
          <div class="slide-bottom-clothes  one-px-top-lighter" @click="showSlideClothes(2)" :class="clothesType!='up' ? 'change-after' : ''">
            <span>下装</span><icon class="icon-jiantouxia" :class="clothesType==='bottom' ? 'transform-after' : ''"></icon>
            <slide-clothes></slide-clothes>
          </div>
          <!---->
          <div class="slide-suit-clothes one-px-top-lighter" @click="showSlideClothes(3)" :class="clothesType==='suit' ? 'change-after' : ''">
            <span>套装</span><icon class="icon-jiantouxia" :class="clothesType==='suit' ? 'transform-after' : ''"></icon>
            <slide-clothes></slide-clothes>
          </div>
        </div>
      </div>

      <div class="nav" :class="isTopClothes ? '' : 'transilate-after'">
        <div class="top-clothes tag" v-on:click="chooseClothes(1)" v-bind:class="isTopClothes ? 'active-sort':''">
          <span>上装</span>
        </div>
        <div class="bottom-clothes tag" v-on:click="chooseClothes(2)" v-bind:class="isTopClothes ? '':'active-sort'">
          <span>下装</span>
        </div>
      </div>

      <div class="line"></div>

      <div class="name"><span>德州巴黎2017春夏复古通勤气质细格纹双排扣西装外套德州巴黎2017春夏复古通勤气质细格纹双排扣西装外套</span>
      </div>
      <div class="price">
        <span>¥599.12</span>
      </div>

      <div class="line"></div>

      <div class="option">颜色</div>
      <div class="btns">
        <Btn :class="colorActiveId === n ? 'activeBtn' : 'generalBtn'" v-for="n in 7" :key="n" @click.native="selectColorId(n)"><span class="word ">白色</span></Btn>
      </div>

      <div class="line"></div>

      <div class="option">尺码<span class="tips">&nbsp;&nbsp;&nbsp;(推荐尺码:155/80A)</span></div>
      <div class="btns">
        <btn :class="sizeActiveId === n ? 'activeBtn' : 'generalBtn'" v-for="n in 8" :key="n" @click.native="selectSizeId(n)"><span class="word">150/80A</span></btn>
      </div>

      <div class="line"></div>

      <div class="box-lining">
        <div class="option lining-left">面料</div>
        <div class="lining-right">
          <div class="lining">聚酯纤维100%</div>
          <div class="lining">只是面料描述，有可能多行，要求全部展示只是面料描述，有可能多行，要求全部展示只是面料描述，有可能多行，要求全部展示只是面料描述，有可能多行，要求全部展示</div>
        </div>
      </div>

      <div class="option">风格 <span class="style">休闲</span></div>

      <div class="option">场合<span class="style">工作/度假/游玩</span></div>

      <btn class="add-btn"><span class="add-btn-word">加入心愿单</span></btn>

    </div>
    <div class="no-model-data" v-if="false">
      <div class="image"><img src="../assets/images/shibai.png"></div>
      <div class="no-clothes-tips">没有身体数据不可以试衣哦</div>
      <div class="guide-tips">请前往实体店扫描</div>
    </div>
  </div>
</template>

<script>
  import Btn from '../components/Btn.vue'
  import Icon from '../components/Icon.vue'
  import SlideClothes from '../components/SlideClothes.vue'
//  import { mapActions } from 'vuex'

  export default{
    name: 'fittingroom',
    data () {
      return {
        isTopClothes: true,
        colorActiveId: 0,
        sizeActiveId: 0,
        slideOut: false,
        clothesType: String
      }
    },
    methods: {
      chooseClothes (type) {
        if (type === 1) {
          this.isTopClothes = true
        } else {
          this.isTopClothes = false
        }
      },
      selectSizeId (n) {
        this.sizeActiveId = n
      },
      selectColorId (n) {
        this.colorActiveId = n
      },
      slideShow () {
        this.slideOut = !this.slideOut
      },
      showSlideClothes (type) {
        if (type === 1) {
          this.clothesType = 'up'
        } else if (type === 2) {
          this.clothesType = 'bottom'
        } else {
          this.clothesType = 'suit'
        }
      }
    },
    components: {
      Btn,
      Icon,
      SlideClothes
    }

  }
</script>

<style scoped lang="less" type="text/less">
  .fitting-room {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0 auto;
    width: 100%;
    margin-top: 32px;
    margin-bottom: 50px;
  }

  .fitting-result-image {
    width: 100%;
    height: 404.5px;
    background-image: linear-gradient(-179deg,rgba(176,177,181,0.70)0%,rgba(224,230,237,0.88)100%);

    /*transition: transform .5s;*/

    &.transition-after{
      .suit-room, .recommend-slide  {
        transform: translateX(-84px);
      }
      .img {
        transform: translateX(-15%);
      }
    }
    .img {
      transition: transform .5s;
    }
    .suit-room {
      position: absolute;
      right: 0;
      top: 113px;
      width: 60px;
      height: 142px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #767676;
      background-color: #FFFFFF;
      line-height: 14px;

      transition: transform .5s;

      .fitting-history,.collect{
        height: 71px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 26px;
      }
    }

    .recommend-slide {
      position: absolute;
      right: -84px;
      top: 0;
      width:84px;
      height: 404px;
      background: #FFF;
      overflow: hidden;
      transition: transform .5s;

      font-size: 14px;

      div {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #3F3F3F;
        line-height: 34px;
        transition: transform .5s;
        background-color: #FFF;
      }
      //套装div向上移动301px
      .slide-suit-clothes {
        position: relative;
        top: -301px;
      }
      i {
        position: relative;
        left: 10%;
        display: inline-block;
        transition: transform .5s;
      }
      .transform-after {
        transform: rotate(180deg) translateY(-5px);
        transition: all .5s;
      }

      //侧栏向上滑动
      .change-after {
        transform: translateY(-301px);
        transition: all .5s;
      }
    }

  }

  .img {
    margin-top: 25px;
    width: 275px;
    height: 329.5px;
  }

  .nav {
    background: #FFFFFF;
    width: 100%;
    height: 40px;
    &:after {
      content: '';
      display: block;
      width: 32px;
      height: 2px;
      background: red;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -ms-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
      transform: translateX(calc(~"25vw - 15px"));
    }

    &.transilate-after:after {
      transform: translateX(calc(~"75vw - 15px"));
      width: 32px;
    }
  }

  .tag {
    width:50%;
    height: 40px;
    line-height: 40px;
  }

  .top-clothes {
    float: left;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #9E9E9E;
  }

  .bottom-clothes {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #9E9E9E;
    margin-left: 50%;
  }

  .line {
    background-color: #E4E4E4;
    width: 100%;
    height: 1px;
    margin-top: 1.5px;
  }

  .name {
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #3F3F3F;
    letter-spacing: 0;
    line-height: 20px;
    text-align: left;
    margin: 10px;
  }

  .price {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #F23030 ;
    letter-spacing: 0;
    line-height: 16px;
    text-align: left;
    margin-left: 4.3%;
    margin-bottom: 12px;
  }

  .option {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #373737;
    line-height: 16px;
    margin-top: 12px;
    margin-left: 16px;
    margin-bottom: 12px;
    text-align: left;
  }

  .tips {
    ont-family: PingFangSC-Regular;
    font-size: 12px;
    color: #767676;
    line-height: 12px;
  }

  .btns {
    text-align:left;
    margin-left: 4px;
    padding: 10px;
    padding-top: 0;
  }

  .word {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #767676;
    line-height: 14px;
  }

  .lining {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #767676;
    line-height: 14px;
    text-align: left;
    margin-top: 6px;
    margin-bottom: 6px;
  }

  .lining-left {
    float: left;
    width: 50px;
  }

  .lining-right {
    float: left;
    width: 80%;
    margin-top: 6px;
  }

  .style{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #767676;
    line-height: 14px;
    margin-left: 16px;
  }

  .box-lining {
    overflow: hidden;
  }

  .add-btn {
    background: #F23030;
    border-radius: 5.76px;
    width: 90%;
    height: 45px;
    margin: 10px 17.5px;
  }

  .no-model-data {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #F4F4F4;
    .image {
      margin-top: 150px;
      width: 100%;
      img {
        width: 126px;
        height: 106px;
      }
    }

    .no-clothes-tips {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #3F3F3F;
      letter-spacing: 0;
      line-height: 16px;
      margin-top: 25px;
    }
    .guide-tips {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #767676;
      letter-spacing: 0;
      line-height: 16px;
      margin-top: 10px;
    }
  }
</style>
