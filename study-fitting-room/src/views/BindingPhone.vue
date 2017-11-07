<template>
  <container>
    <div class="title-word">
      <p>绑定手机号，便于商家在发货售后问题上联系您</p>
    </div>
    <div class="input-phone">
      <input type="number" value="请输入手机号码" name="phoneNumber" placeholder="请输入手机号码" v-model.trim="phoneNumber">
    </div>
    <div class="verification">
      <input type="number" value="请输入验证码" name="verificationCode" class="input-verification-code" placeholder="请输入验证码" v-model.trim="verificationCode">
      <btn type="getCode" v-bind:disabled="!getCode">
        获取验证码
      </btn>
    </div>
    <div class="btn">
      <Btn v-bind:disabled="!isBtnDisabled">确定</Btn>
    </div>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import Btn from '../components/Btn.vue'

  export default {
    name: 'BindingPhone',
    data () {
      return {
        phoneNumber: '',
        verificationCode: ''
      }
    },
    computed: {
      isBtnDisabled () {
        return Boolean(this.phoneNumber) && Boolean(this.verificationCode)
      },
      getCode () {
        return Boolean(this.phoneNumber)
//      Todo:检测是手机号码获取验证码的按钮才被激活
      }
    },
    components: {
      Container,
      Btn
    }
  }
</script>

<style lang="less" scoped>
  .title-word {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #767676;
    line-height: 21px;
  }

  .input-phone {
    background: #FFFFFF;
    margin: 15px 20px 0px 20px;
    height: 40px;
    text-align: left;
    input {
      padding-left: 3%;
      width: 96%;
      height: 36px;
      font-size: 14px;
      line-height: 36px;
      border: 1px solid #CCCCCC;
      outline: none;
    }
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }

  .verification {
    text-align: left;
    padding: 15px 20px 0px 20px;
    input {
      padding-left: 3%;
    }
  }

  .input-verification-code {
    background: #FFFFFF;
    height: 36px;
    width: 65%;
    border: 1px solid #CCCCCC;
    font-size: 14px;
    outline: none;
  }

  input::-webkit-input-placeholder {
    color: #CCCCCC;
  }

  input:focus {
    border: 1px solid #FE6F58;
  }

  .btn {
    padding: 20px;
  }
</style>
