<template>
  <container>
    <div class="form">
      <div class="input-class full-width">
        <input type="text" class="full-width" placeholder="收货人姓名(请使用真实姓名)" name="name" v-model.trim="name">
      </div>
      <div class="input-class">
        <input type="number" placeholder="手机号码" name="phoneNum" v-model.trim="phoneNum">
        <icon class="icon-jiaocha" @click.native="flush()"></icon>
      </div>
      <div class="input-class">
        <input type="text" placeholder="所在地区" name="area" v-model.trim="area">
        <icon class="icon-jiantouyou"></icon>
      </div>
      <div class="input-class">
        <input type="text" class="full-width" placeholder="街道、小区门牌等详细地址" name="street" v-model.trim="street">
      </div>
      <div class="save-btn">
        <Btn v-bind:disabled="!isBtnDisabled">保存</Btn>
      </div>
    </div>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import Btn from '../components/Btn.vue'
  import Icon from '../components/Icon.vue'

  export default {
    name: 'shippingAddress',
    data () {
      return {
        name: '',
        phoneNum: '',
        area: '',
        street: ''
      }
    },
    computed: {
      isBtnDisabled () {
        return Boolean(this.phoneNum) && Boolean(this.name) && Boolean(this.area) && Boolean(this.street)
      }
    },
    methods: {
      flush () {
        this.phoneNum = ''
      }
    },
    components: {
      Container,
      Btn,
      Icon
    }
  }
</script>

<style lang="less">
  .form {
    margin: 0.7rem;
  }

  .input-class {
    height: 40px;
    margin-bottom: 12px;
    padding-left: 10px;
    padding-right: 10px;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: 3px;
    line-height: 14px;
    input {
      font-family: PingFangSC-Regular;
      border: 0;
      font-size: 14px;
      width: 90%;
      line-height: 38px;
      height: 38px;
      float: left;
      outline: none;
      color: #3F3F3F;
    }

    i {
      line-height: 38px;
      color: #cccccc;
    }

    input::-webkit-input-placeholder {
      color: #CCCCCC;
    }
  }

  .input-class:hover {
    border: 1px solid #FE6F58;
  }

  .input-class:hover > i{
    color:  #9B9B9B;
  }

  .input-class .full-width {
    width: 100%;
  }

  .save-btn {
    margin-top: 60px;
    color: #fff;
    font-size: 16px;
    background-color: #F23030;
  }
</style>
