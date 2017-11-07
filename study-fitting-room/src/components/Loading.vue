<template>
  <div class="loading" :class="{'active': loading.status}">
    <div class="loading-content">
      <i class="loading-image"></i>
      <p class="loading-text">{{ loading.text }}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
  import { mapGetters } from 'vuex'

  export default {
    name: 'loading',
    computed: mapGetters([
      'loading'
    ])
  }
</script>

<style lang="less" scoped>
  .loading {
    position: absolute;
    z-index: 88;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    /*本来是不活动的，就向y轴移动100%*/
    transform: translate3d(0, 100%, 0);
    &.active {
      transform: translate3d(0, 0, 0);
     }
  }


  .loading-content {
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    padding-top: 15px;
    width: 100px;
    height: 85px;
    transform: translate3d(-50%, -70%, 0);
    background-color: rgba(0, 0, 0, .7);
    border-radius: 10px;
  }

  .loading-image {
    display: block;
    margin: 0 auto;
    z-index: 88;
    width: 50%;
    height: 50%;
    background: url("../assets/svgs/loading.svg") center no-repeat;
    /*background-size: cover;*/
  }

  .loading-text {
    margin: 0;
    line-height: 35px;
    font-size:12px;
    color: #fff;
  }
</style>
