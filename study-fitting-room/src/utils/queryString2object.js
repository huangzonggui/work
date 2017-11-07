
// 将地址栏location.search转换为对象
export default () => {
  // location.search属性获取到问号后的所有查询字符串值
  let query = location.search.substring(1) // 获得了当前链接的中?号后的参数
  console.log('query:' + query)
  let reg = /([^=&\s]+)[=\s]*([^=&\s]*)/g
  // ?token=0f5374d189543f1f173c&subscribe=0&up=0&down=0&suit=0&sex=0&store_id=173688018
  let obj = {}
  while (reg.exec(query)) { // 设置了g全局标志，每次调用exec()则都会在字符串中继续查找新匹配项
    // RegExp.$1表示子匹配(以括号为标志)字符串,即是reg里的([^=&\s]+)
    // RegExp.$2表示([^=&\s]*)
    obj[RegExp.$1] = RegExp.$2
  }
  console.log('查询字符串转换为对象:' + JSON.stringify(obj))
  return obj
}
