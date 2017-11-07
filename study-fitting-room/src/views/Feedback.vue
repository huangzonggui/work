<template>
  <container class="feedback">
    <div class="inputContact">
      <input type="text" maxlength="20" placeholder="手机号/邮箱" v-model.trim="contacts">
    </div>
    <div class="content">
      <textarea placeholder="请写下你对小云的使用感受，我们将不断改进，为你做得更好。" maxlength="250" v-model.trim="feedbackContent">
      </textarea>
      <div class="number-of-feedback" v-text="`${numberOfFeedback}/250`"></div>
    </div>
    <div class="commit">
      <btn type="default" v-bind:disabled="!isBtnEnable" @click.native="check">提交</btn>
      <!--原来是type="plan",native原生-->
    </div>
  </container>
</template>

<script>
  import Btn from '../components/Btn.vue'
  import Container from '../components/Container.vue'

  export default {
    name: 'feedback',
    data () {
      return {
        contacts: '',
        feedbackContent: ''
      }
    },
    methods: {
      check () {
//    Todo: 检测手机号或者邮箱的格式，
//    Todo: 吐司
      }
    },
    computed: {
      numberOfFeedback () {
        return this.feedbackContent.length
      },
      isBtnEnable () {
        return Boolean(this.contacts) && Boolean(this.feedbackContent)
      }
    },
    components: {
      Btn,
      Container
    }
  }
</script>

<style lang="less">
  .feedback {
    padding: 16px;
  }

  .inputContact {
    background: #fff;
    padding: 1px 12px;
    border: 1px solid #ccc;
    input {
      width: 100%;
      height: 42px;
      font-size: 16px;
      color: #373737;
      border: none;
      outline: none;
    }
  }

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: #CCCCCC;
  }
  .content{
    background: #fff;
    padding: 5px 12px;
    border: 1px solid #CCC;
    margin: 10px 0px;
    textarea {
      width: 100%;
      height: 100px;
      border: none;
      outline: none;
      font-size: 16px;
      resize: none;
    }
    div {
      text-align: right;
      font-size: 14px;
      color: #9e9e9e;
    }
  }
</style>
