import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

import Hello from '../components/Hello.vue'
import Shop from '@/views/Shop.vue'
import ClothesCategory from '../views/ClothesCategory.vue'
import FittingRoom from '../views/FittingRoom.vue'
import Me from '../views/Me'
import Follow from '@/components/Follow.vue'
import Bottom from '../components/Bottom.vue'
import BindingPhone from '../views/BindingPhone.vue'
import Feedback from '../views/Feedback.vue'
import MyFavorite from '../views/MyFavorite.vue'
import ShippingAddress from '../views/ShippingAddress.vue'
import ConfirmOrder from '../views/ConfirmOrder.vue'

import NavBall from '../components/NavBall.vue'
import SlideClothes from '../components/SlideClothes.vue'

import Test from '../components/Test.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        default: Hello
      }
    },
    {
      path: '/Shop',
      name: 'Shop',
      components: {
        bottom: Bottom,
        default: Shop,
        follow: Follow,
        navball: NavBall
      }
    },
    {
      path: '/Shop/ClothesCategory/:id',
      name: 'ClothesCategory',
      components: {
        default: ClothesCategory
      }
    },
    {
      path: '/Fitting-Room',
      name: 'FittingRoom',
      components: {
        default: FittingRoom,
        follow: Follow,
        bottom: Bottom,
        slideClothes: SlideClothes
      }
    },
    {
      path: '/Me',
      name: 'Me',
      components: {
        follow: Follow,
        default: Me,
        bottom: Bottom
      }
    },
    {
      path: '/Follow',
      name: 'Follow',
      component: Follow
    },
    {
      path: '/BindingPhone',
      name: 'BindingPhone',
      component: BindingPhone
    },
    {
      path: '/Feedback',
      name: 'Feedback',
      component: Feedback
    },
    {
      path: '/MyFavorite',
      name: 'MyFavorite',
      component: MyFavorite
    },
    {
      path: '/ShippingAddress',
      name: 'ShippingAddress',
      component: ShippingAddress
    },
    {
      path: '/ConfirmOrder',
      name: 'ConfirmOrder',
      component: ConfirmOrder
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    }
  ]
})

router.beforeEach(function (to, from, next) {
  const toLength = to.path.split('/').length
  const fromLength = from.path.split('/').length

  if (toLength === fromLength) {
    // 三个标签同等级切换
    store.commit('UPDATE_DIRECTION', 'fade')
  } else {
    if (toLength < fromLength) {
      // 前进
      store.commit('UPDATE_DIRECTION', 'forword')
    } else {
      // 回退
      store.commit('UPDATE_DIRECTION', 'reverser')
    }
  }
  // console.log(store.getters.direction)
  next()
})

export default router
