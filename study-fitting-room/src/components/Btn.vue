<template>
  <button class="button" v-bind:class="clazz">
      <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'button',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      clazz () {
        return this.disabled ? `${this.type} disabled` : this.type
      }
    }
  }
</script>

<style lang="less">
.button {
  width: 100%;
  height: 50px;
  font-size: 18px;
  color: #fff;
  border: none;
  outline: none;


  &.default {
    color: #fff;
    font-size: 16px;
    background-color: #F23030;
  }

  //活动状态样式
  &.plan {
    color: #F23030;
    background-color: #fff;
  }

  //多个选项的常态样式
  &.generalBtn {
    width: auto;
    height: auto;
    border: 1px solid #CCCCCC;
    border-radius: 1.5px;
    padding: 6px;
    background-color: #FFFFFF;
    margin-left: 6px;
    margin-top: 6px;
  }

  &.activeBtn {
    width: auto;
    height: auto;
    background: #FFF0F0;
    border: 1px solid #F23030;
    border-radius: 1.5px;
    padding: 6px;
    margin-left: 6px;
    margin-top: 6px;
  }

  &.getCode {
    width: 30%;
    height: 40px;
    color: #FE6F58;
    font-size: 14px;
    background-color: #FFF0F0;
    border: 1px solid #F23030;
    float: right;
  }

  &.disabled {
    color: rgba(255, 255, 255, .7);
    background: #ccc;
    box-shadow: none;
    border: 0;
  }

  &.commit-order {
    float: right;
    width: auto;
    color: #fff;
    font-size: 16px;
    background-color: #F23030;
    padding-right: 10px;
    padding-left: 10px;
  }

  &.clothes-category-btn {
     background: #F9F9F9;
     border: 1px solid #E4E4E4;
     border-radius: 4px;

     font-family: PingFangSC-Regular;
     font-size: 14px;
     color: #3F3F3F;
     line-height: 14px;
     height: 30px;
     width: 20%;
  }

   &.clothes-category-active-btn {
      height: 30px;
      width: 20%;
      color: #FE6F58;
      font-size: 14px;
      background-color: #FFF0F0;
      border: 1px solid #F23030;
    }
}
</style>
