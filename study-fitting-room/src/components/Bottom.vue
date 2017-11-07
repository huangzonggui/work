<template>
  <div class="bottom">
    <router-link class="bottom-div" to="/shop">
      <icon class="icon-dianpu"></icon>
      <p class="bottom-word">店铺</p>
    </router-link>
    <router-link class="bottom-div" to="/fitting-room">
      <icon class="icon-yijia"></icon>
      <p class="bottom-word">试衣</p>
    </router-link>
    <router-link class="bottom-div" to="/me">
      <icon class="icon-wode"></icon>
      <p class="bottom-word">我的</p>
    </router-link>
  </div>
</template>

<script>
  import Icon from '../components/Icon.vue'
  export default{
    name: 'bottom',
    data () {
      return {
        isActiveShop: true
      }
    },
    methods: {
    },
    components: {
      Icon
    }
  }
</script>

<style lang="less">

  .bottom {
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 0;
    clear: both;
    opacity: 0.9;
    background: #FEFDFE;
    box-shadow: 0 -2px 6px 0 rgba(0, 0, 0, 0.10);
    padding-top: 5px;
    z-index: 1;
  }

  .bottom-div {
    font-family: PingFangSC-Regular;
    color: #C2C2C3;
    float: left;
    display: block;
    flex: 1;
    /*width: 33%;用上面的弹性盒子替换掉传统方法*/
    text-decoration: none;
    font-size: 10px;
    i {
      font-size: 22px;
    }
  }

  .bottom-word {
    font-family: PingFangSC-Regular;
    color: #9E9E9E;
    margin: 0;
  }

  .router-link-active{
    i,
    .bottom-word {
      color: #F23030;
    }
  }

  .active-bottom {
    color: #F23030;
  }

  .bottom-tag {
    text-decoration: none;
  }
</style>
