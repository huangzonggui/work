<template>
  <div v-if="clothes.length">
    <div class="item" v-for="item in clothes" :key="item.id" @click="toFitting(item.id)">
      <div class="img" :style="{'height': imgHeight + 'px'}" >
        <img v-lazy="item.thumbnail">
      </div>
      <div class="title">{{ item.name }}</div>
      <div class="price">
        <span>¥{{ item.price }}.00</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'clothes',
    props: {
      clothes: {
        type: Array,
        required: true,
        default: []
      }
    },
    computed: {
      // 根据屏幕设备尺寸计算高度 适配
      imgHeight () {
        return window.innerWidth * 0.453
      }
    },
    methods: {
      toFitting (id) {
        this.$router.push({path: '/fitting-room', query: {id}})
      }
    }
  }
</script>

<style lang="less" scoped type="text/less">

  .item {
    float: left;
    width: 45%;
    padding-left: 4%;
  }
  .img {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .title {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #3F3F3F;
    letter-spacing: 0;
    line-height: 14px;
    text-align: left;
    height: 28px;
    overflow-y: hidden;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .price {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #F23030;
    letter-spacing: 0;
    line-height: 18px;
    text-align: left;
  }
</style>
