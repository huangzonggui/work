/**
 * Created by huangzg on 2017-11-01 18:02:36
 */
export const UPDATE_LOADING = function (state, loading) {
  state.loading.status = loading.status
}

export const UPDATE_DIRECTION = function (state, direction) {
  state.direction = direction
}
