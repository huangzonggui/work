import service from './service'

export default {
  // 获取服装列表
  getClothes (payload) {
    return service.post('/api/getClothes', payload)
  },
  // 获取分类服装列表down up suit三个数组
  getItemcats () {
    return service.post('/api/getItemcats')
  }
}
