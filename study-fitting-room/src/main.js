// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import api from './api'
import router from './router'
import vueLazyload from 'vue-lazyload'
import loadingImage from './assets/images/default-clothes.png'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.api = api
Vue.use(vueLazyload, {
  // 预加载高度的比例
  preload: 1.3,
  error: loadingImage,
  loading: loadingImage,
  // 尝试的次数
  attempt: 1,
  // 你想要监听的事件
  listenEvents: [ 'scroll' ],
  // lazyload组件？？？
  lazyComponent: true,
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
})

// 注册自定义指令：滚动加载指令

Vue.directive('scroll', {
  // el：指令所绑定的元素，可以用来直接操作 DOM 。
  // binding：一个对象，包含以下属性：name,value(指令的绑定值),oleValue,expression,arg,modifiers
  bind (el, binding) {
    let isLoading = false
    async function bindingEvent () {
      // 正在加载中时不执行
      if (isLoading) return
      // 加载完所有服装后不执行 下面的total和num是shop.vue里的data-total(衣服总数:每次请求都包含一个total的属性，同一个数值，也就是说第一次请求响应就知道总共有多少衣服了)和data-num（总衣服的长度）
      if (el.dataset.total === el.dataset.num) return
      console.log(el.dataset.num)
      // el.scrollHeight可以用的高度，就是所有文本的高度（包括不可见的范围）
      // el.clientHeight可见区域的宽度(屏幕的高度)
      // el.scrollTop被卷去的高度
      if (el.scrollHeight - el.clientHeight - el.scrollTop < 3) {
        if (el.scrollTop === 0) return// scrollTop等于0表示还没滚动，还不需要请求后台数据
        isLoading = true
        await binding.value.getClothes(binding.value.isScroll)
        isLoading = false
      }
    }
    el.addEventListener('scroll', bindingEvent)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
