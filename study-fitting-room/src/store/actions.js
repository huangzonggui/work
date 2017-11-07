/**
 * Created by huangzg on 2017-11-01 11:21:25
 */

export const showLoading = function ({ commit }) {
  commit('UPDATE_LOADING', {status: true})
}

export const hideLoading = ({commit}) => {
  commit('UPDATE_LOADING', {status: false})
}
