<template>
  <div class="container">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'container'
  }
</script>

<style>
  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #F4F4F4;
  }
</style>
