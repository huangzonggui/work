/**
 * Created by huangzg on 2017-11-01 10:44:05
 */
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
// import (引入) * (所有export属性) as (到) types (types变量) from (从) '../constants/ActionTypes' (ActionTypes)
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
