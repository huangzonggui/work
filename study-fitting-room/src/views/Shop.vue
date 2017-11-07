<template>
  <div class="shop"
       v-cloak
       v-scroll="{getClothes: getClothes, isScroll: true}"
       :data-total="total"
       :data-num="totalClothes.length">
    <!--标签-->
    <div class="nav" :class="isPriceSort ? '':'transilate-after'">
      <div class="nav1" v-on:click="clothesSort(1)" v-bind:class="isPriceSort ? 'active-sort':''">
        <span class="nav1Word">综合</span>
      </div>
      <div class="nav2" v-on:click="clothesSort(2)" v-bind:class="isPriceSort ? '':'active-sort'">
        <span>价格
        <icon class="iconsvg-price-none" v-show="isPriceSort"></icon>
        <icon class="iconsvg-price-up" v-show="isPriceUpSort"></icon>
        <icon class="iconsvg-price-down" v-show="isPriceDownSort"></icon></span>
      </div>
      <div class="line"></div>
    </div>

    <!--衣服列表clothes-->
    <div class="items">
      <clothes v-if="totalClothes.length || isInit" :clothes="totalClothes"></clothes>
      <div class="shop-noclothes" v-else>
        <img src="../assets/images/fail.png">
        <p class="word">暂无商品</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from '../components/Icon.vue'
  import Clothes from '../components/Clothes.vue'
  import { mapActions } from 'vuex'

  export default {
    name: 'shop',
    data () {
      return {
        isPriceSort: true,
        isPriceUpSort: false,
        isPriceDownSort: false,
        // 多次累加的服装
        totalClothes: [],
        // 服装总数
        total: 0,
        // 当前页码
        page: 1,
        // 是否初始化
        isInit: true,
        // 排序方式 1：综合 2：价格
        orderby: 1,
        // 升序降序 作为参数拿数据 true: 升序 false: 降序
        asc: false,
        // 取得一次请求的数据
        clothes: []
      }
    },
    created () {
      this.init()
    },
    methods: {
      async init () {
        let clothesCache = JSON.parse(window.sessionStorage.getItem('shopClothes'))
        // 如果本地有数据(也就是回退到原来的位置，将内存之前存储的状态还原)
        if (clothesCache) {
          this.totalClothes = clothesCache.clothes
          this.total = clothesCache.total
          this.page = clothesCache.page
          this.orderby = clothesCache.orderby
          this.asc = clothesCache.asc
          this.isPriceSort = this.orderby === 1// 只要orderby等于1 isPriceSort就为true
          this.isPriceUpSort = this.orderby === 2 ? this.asc : false // orderby=2且asc=true isPriceUpSort才为true
          this.isPriceDownSort = this.orderby === 2 ? !this.asc : false// orderby=2且asc=false isPriceDownSort才为true
        } else {
          // 如果没有数据 请求
//          console.log('店铺页面完整链接：', window.location.href)
          await this.getClothes()
          this.totalClothes = this.clothes
          this.isInit = false
        }
      },
      async getClothes (isScroll = false) {
        this.showLoading()
        const res = await this.api.getClothes({page_no: this.page, orderby: this.orderby, asc: this.asc})// 这三个参数不能改的
        if (res.success) {
          // 根据后台返回的数据的对象取出
          this.clothes = res.data.items
          // 如果服装总数为零，取this.total = res.data.total，否则，什么都不干(初始化的时候)
          // (衣服总数:每次请求都包含一个total的属性，同一个数值，也就是说第一次请求响应就知道总共有多少衣服了)
          this.total === 0 ? this.total = res.data.total : ''
          this.page += 1
          if (isScroll) {
            this.totalClothes = this.totalClothes.concat(this.clothes)
          }
        } else {
          console.log(res.msg)
        }
        this.hideLoading()
      },
      async clothesSort (type) {
        // 将最近一次请求获取到的衣服保存到that中，再在下面重新赋给totalClothes实现将衣服更新为一页
        const that = this
        // 重置当前页码
        this.page = 1
        // 综合排序
        if (type === 1) {
          this.isPriceSort = true
          this.isPriceUpSort = false
          this.isPriceDownSort = false
          this.orderby = 1
          await this.getClothes()
        } else {
          this.isPriceSort = false
          this.orderby = 2
          if (this.isPriceDownSort === false) {
            // 价格从高到底 降序
            this.isPriceUpSort = false
            this.isPriceDownSort = true
            this.asc = false
            await this.getClothes()
          } else {
            // 价格 升序
            this.isPriceUpSort = true
            this.isPriceDownSort = false
            this.asc = true
            await this.getClothes()
          }
        }
        // 排序后重新刷新页面，将数据还原为一页
        that.totalClothes = that.clothes
        document.querySelector('.shop').scrollTop = 0
      },
      ...mapActions([
        'showLoading',
        'hideLoading'
      ])
    },
    beforeRouteEnter (to, from, next) {
      function backScroll () {
        if (document.querySelector('.shop')) {
          let scrollTop = JSON.parse(window.sessionStorage.getItem('shopScrollTop')) || 0
          document.querySelector('.shop').scrollTop = scrollTop
          if (document.querySelector('.shop').scrollTop === scrollTop) {
            // 如果复制成功，清除定时函数
            clearInterval(backScrollFun)
            // 干嘛?:效果是向上移动1 高度再卷多1
//            setTimeout(() => {
//              document.querySelector('.shop').scrollTop += 1
//            }, 500)
          }
        }
      }
//      定时调用函数
      let backScrollFun = setInterval(backScroll, 100)
      next()
    },
    beforeRouteLeave (to, from, next) {
      console.log(window.sessionStorage)
      window.sessionStorage.setItem('shopScrollTop', JSON.stringify(document.querySelector('.shop').scrollTop)) // 多次累加的服装
      let clothesCache = {
        clothes: this.totalClothes,
        total: this.total,
        page: this.page,
        orderby: this.orderby,
        asc: this.asc
      }
      window.sessionStorage.setItem('shopClothes', JSON.stringify(clothesCache))
      next()
    },
    components: {
      Icon,
      Clothes
    }
  }

</script>

<style scoped lang="less" type="text/less">
  .shop {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0 auto;
    width: 100%;
    padding-top: 32px;
    padding-bottom: 50px;
  }

  .shop-noclothes {
    margin-top: 50%;
    height: 100%;
    img {
      width: 40%;
    }
    p {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #767676;
      letter-spacing: 0;
      line-height: 16px;
    }
  }

  .nav {
    position: fixed;
    color: rebeccapurple;
    width: 100%;
    height: 28px;
    background: #F9F9F9;
    float: left;
    padding-top: 12px;
    padding-bottom: 15.5px;
    &:after {
      content: '';
      display: block;
      background: #F23030;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -ms-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
      /*transform: translateX(calc(25vw - 15px));这个是非less写法，下面才是less的写法*/
      transform: translateX(calc(~"25vw - 15px"));
      width: 32px;
      height: 2px;
    }

    &.transilate-after:after {
      transform: translateX(calc(~"75vw - 26px"));
      width: 47px;
    }
  }

  .nav1 {
    font-size: 16px;
    color: #767676;
    line-height: 28px;
    float: left;
    text-align: center;
    width: 50%;

  }

  .nav2 {
    font-size: 16px;
    color: #767676;
    line-height: 28px;
    margin-left: 50%;
    width: 50%;
  }

  .active-sort {
    color: #F23030;
  }

  .line {
    background-color: #E4E4E4;
    width: 100%;
    height: 1px;
    margin-top: 2px;
  }

  .items {
    width: 100%;
    background: #FFFFFF;
    margin-top: 56px;
  }

</style>
