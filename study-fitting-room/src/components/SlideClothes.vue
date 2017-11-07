<template>
  <div class="slideClothes">
    <div class="clothes-item" v-for="n in 16">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508909316810&di=8db16bcfb9e5119317b01c71329db757&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201609%2F17%2F20160917130920_3UY2A.jpeg">
    </div>
    <slot></slot>
  </div>
</template>

<script>

</script>

<style lang="less" type="text/less">
  .slideClothes {
    height: 301px;
    overflow-y: auto;
  }
  .clothes-item {
    img {
      width: 64px;
      object-fit: contain;
    }
  }
</style>
