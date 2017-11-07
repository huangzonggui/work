<template>
  <container>
    <div class="lists">
      <div class="list" v-for="n in 10" :key="n">
        <div class="item">
          <div class="choose" :class="{checked: goods[n-1].checked}" @click="chooseItem(n)"><icon class="icon-xuanzhong"></icon></div>
          <div class="content">
            <div class="img-div"><img src="http://a.hiphotos.baidu.com/zhidao/pic/item/d439b6003af33a87c1731b6ac15c10385343b5a7.jpg" alt="衣服" class="image"></div>
            <div class="item-right">
              <p class="describe-word">LITISEFA2017夏短袖修身正面系带个性T恤体恤女创意上衣女夏</p>
              <p class="type"><span>蓝色</span><span>175/80A</span></p>
              <div>
              <span class="price">
                <i>￥</i><span>{{goods[n-1].price}}.</span><i>00</i>
              </span>
                <div class="num-delete">
                  <div class="num">
                    &nbsp;<icon class="icon-jian" @click.native="cutGoodsNum(n)"></icon>&nbsp;<span class="one-px-left-lighter one-px-right-lighter" v-model="goodsNum[n - 1]">{{goodsNum[n - 1]}}</span>&nbsp;<icon class="icon-jia1" @click.native="addGoodsNum(n)"></icon>&nbsp;
                  </div>
                  <icon class="icon-changyonggoupiaorenshanchu" @click.native="deleteGood(n)"></icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sum-bottom">
      <div class="choose-all">
        <icon class="icon-xuanzhong" :class="{checked: allChecked}" @click.native="allChoose()"></icon><span>全选</span>
      </div>
      <div class="price sum-price">
        <span>合计：</span><i>￥</i><span>{{count}}.</span><i>00</i>
        <router-link to="/ConfirmOrder"><Btn class="pay-btn">结算</Btn></router-link>
        {{isCheckedAll}}
      </div>
    </div>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import Icon from '../components/Icon.vue'
  import Vue from 'vue'
  import Btn from '../components/Btn.vue'

  export default {
    name: 'myfavorite',
    data () {
      return {
        goodsNum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        goods: [{price: 599, checked: true}, {price: 289, checked: true}, {price: 39, checked: false}, {price: 599, checked: true}, {price: 289, checked: true}, {price: 39, checked: false}, {price: 599, checked: true}, {price: 289, checked: true}, {price: 39, checked: false}, {price: 39, checked: false}],
        allChecked: false
      }
    },
    components: {
      Container,
      Icon,
      Btn
    },
    computed: {
      count () {
        let sum = 0
/*  1.      this.goodsNum.forEach(myFun, this)
        function myFun (value, index) {
          if (this.goods[index].checked) {
            sum += value * this.goods[index].price
          }
        } */
/*  2.     this.goodsNum.forEach(function (value, index) {
          if (this.goods[index].checked) sum += value * this.goods[index].price
        }, this) */
        this.goodsNum.forEach((value, index) => {
          if (this.goods[index].checked) sum += value * this.goods[index].price
        })
        return sum
      },
      isCheckedAll () {
        this.allChecked = true
        this.goodsNum.forEach((value, index) => {
          this.allChecked = this.allChecked && this.goods[index].checked
        })
      }
    },
    methods: {
      chooseItem (n) {
        this.goods[n - 1].checked = !this.goods[n - 1].checked
      },
      addGoodsNum (n) {
        let value = this.goodsNum[n - 1] + 1
        Vue.set(this.goodsNum, n - 1, value)
      },
      cutGoodsNum (n) {
        if (this.goodsNum[n - 1] > 0) {
          let value = this.goodsNum[n - 1] - 1
          Vue.set(this.goodsNum, n - 1, value)
        }
      },
      deleteGood (n) {
        true
        // todo:删除商品
      },
      allChoose () {
        this.allChecked = !this.allChecked
        this.goodsNum.forEach((value, index) => {
          this.goods[index].checked = this.allChecked
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .lists {
    margin-bottom: 1.5rem;
  }

  .list {
    padding: 10px 10px;
  }

  .item {
    height: 2.6rem;
  }

  .choose {
    color: #CCCCCC;
    float: left;
    line-height: 2.6rem;
  }

  .checked {
    color: red;
  }

  .content {
    margin-left: 0.5rem;
    height: 2.6rem;
  }

  .img-div {
    width: 2.6rem;
    height: 2.6rem;
    overflow: hidden;
    float: left;
    margin-right: 10px;
  }

  .image {
    height: 100%;
  }

  .item-right {
    font-size: 14px;
    text-align: left;
    height: 2.6rem;
  }

  .describe-word {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #5F5F5F;
    letter-spacing: 0;
    line-height: 19px;
    margin: 0;
  }

  .type {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #9E9E9E;
    line-height: 24px;
    margin: 8px;
  }

  .num-delete {
    float: right;
    padding-right: 10px;
  }

  .num {
    color: #5F5F5F;
    float: left;
    margin-right: 30px;
    border: 1px solid #cccccc;
    text-align: center;
    line-height: 0.4rem;
    span {
      display: inline-block;
      color: #3F3F3F;
      padding:0 10px 0 10px;
    }
    i {
      height: 2.6rem;
    }

  }

  .price{
    i {
      font-family: PingFangSC-Regular;
      font-size: 11px;
      color: #F23030;
      letter-spacing: 0;
      line-height: 11px;
    }
    span {
      font-family: PingFangSC-Regular;
      color: #F23030;
      font-size: 16px;
      letter-spacing: 0;
      line-height: 16px;
    }
  }

  .icon-changyonggoupiaorenshanchu {
    font-size: 18px;
  }

  .sum-bottom {
    position: fixed;
    width: 100%;
    bottom: 0;
    line-height: 1.4rem;
    opacity: 0.9;
    background: #FEFDFE;
  }

  .choose-all {
    color: #CCCCCC;
    float: left;
    line-height: 1.4rem;
    padding-left: 10px;
    &.checked {
      color: red;
    }
    span {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #9E9E9E;
      margin-left: 10px;
    }
  }

  .sum-price {
    text-align: right;
  }

  .pay-btn {
    float: right;
    width: 2.5rem;
    height: 1.4rem;
    margin-left: 10px;
  }

</style>
