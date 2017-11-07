<template>
  <div>
    <Clothes :clothes="clothes"></Clothes>
    <ClothesCategoryBar></ClothesCategoryBar>
  </div>
</template>

<script>
  import ClothesCategoryBar from '../components/ClothesCategoryBar.vue'
  import Clothes from '../components/Clothes.vue'

  export default {
    name: 'ClothesCategory',
    data () {
      return {
        // 所有种类条目的衣服
        itemcats: null,
        // 类型id：通过这个类型id和api.getClothes()可以拿到这个类型的clothes
        classId: 0,
        // 当前选择的服装类型：up down suit也就是路由跳转中的id
        clothesType: this.$route.params.id,
        // 当前类型的衣服
        clothes: [],
        // 当前页码
        page: 1
      }
    },
    created () {
      this.init()
    },
    methods: {
      async init () {
        /* this.showLoading() */
        await this.getItemcatsMethod()
        if (!this.itemcats) {
          console.log('类目没拿到')
          return
        }
        // 拿到当前类目没有服装
        if (this.itemcats[this.clothesType].length === 0) {
          this.hideLoading()
          return
        }
        // 初始化就是拿到上装的第一个idT恤或者下装的第一个id牛仔裤或者套装...
        this.classId = this.itemcats[this.clothesType][0].id
        await this.getClothesMethod()
      },
      async getItemcatsMethod () {
        const res = await this.api.getItemcats()
        if (res.success) {
          this.itemcats = res.data
          console.log(res.data, '服装类型')
        } else {
          // 若失败，打印后台返回响应的错误信息提示
          console.log(res.msg)
        }
      },
      async getClothesMethod () {
        const res = await this.api.getClothes({page_no: 1, category_id: this.classId})
        if (res.success) {
//          console.log('res.data:beagin')
//          console.log(res.data)
//          console.log('res.data:end')
          this.clothes = res.data.items
        } else {
          // 若失败，打印后台返回响应的错误信息提示
          console.log('获取衣服失败')
          console.log(res.msg)
        }
        console.log(this.clothes)
      }
    },
    components: {
      ClothesCategoryBar,
      Clothes
    }
  }
</script>

<style>

</style>
