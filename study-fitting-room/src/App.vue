<template>
  <div id="app" class="app">
    <router-view name="follow"></router-view>
    <router-view name="bottom"></router-view>
    <router-view name="navball"></router-view>
    <transition :name="direction">
      <router-view></router-view>
    </transition>
    <loading></loading>
  </div>
</template>

<script>
  import Loading from './components/Loading.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'app',
    components: {
      Loading
    },
    computed: {
      ...mapGetters([
        'direction'
      ])
    }
  }
</script>

<style lang="less">
@import "./styles/app.less";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

/*没有定义进入过渡的结束状态 和离开过渡的开始状态是因为默认为opacity：1 同时要注意,如果要定义，这个状态v-enter-active要定义在v-enter前*/
/*.fade-enter-active,*/
/*.fade-leave {*/
  /*opacity: 1;*/
/*}*/

/*!*定义进入过渡的开始状态 和离开过渡的结束状态*!*/
.fade-enter,
.fade-leave-active{
  opacity: 0
}

</style>
