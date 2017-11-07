<template>
  <i class="icon iconfont">
    <slot></slot>
  </i>
</template>

<script>
  export default {
    name: 'icon'
  }
</script>

<style>

  @font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_443389_2a5dtrkdfs35l8fr.eot?t=1508731657770'); /* IE9*/
    src: url('//at.alicdn.com/t/font_443389_2a5dtrkdfs35l8fr.eot?t=1508731657770#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('//at.alicdn.com/t/font_443389_2a5dtrkdfs35l8fr.ttf?t=1508731657770') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('//at.alicdn.com/t/font_443389_2a5dtrkdfs35l8fr.svg?t=1508731657770#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-jia1:before { content: "\e63e"; }

  .icon-jian:before { content: "\e62b"; }

  .icon-dianpu:before { content: "\e63c"; }

  .icon-yijia:before { content: "\e64c"; }

  .icon-jiaocha:before { content: "\e631"; }

  .icon-tianjiadizhi:before { content: "\e73c"; }

  .icon-xuanzhong:before { content: "\e649"; }

  .icon-xiangxiazhankai-xianxingyuankuang:before { content: "\e8f2"; }

  .icon-xiangshangshouqi-xianxingyuankuang:before { content: "\e8f3"; }

  .icon-weizhi-xianxing:before { content: "\e8fe"; }

  .icon-circle_2:before { content: "\e600"; }

  .icon-fanhui:before { content: "\e624"; }

  .icon-guanbi:before { content: "\e625"; }

  .icon-shoucang:before { content: "\e627"; }

  .icon-jiantoushang:before { content: "\e62d"; }

  .icon-jiantouyou:before { content: "\e62e"; }

  .icon-jiantouxia:before { content: "\e62f"; }

  .icon-wode:before { content: "\e630"; }

  .icon-dizhiguanli:before { content: "\e63f"; }

  .icon-changyonggoupiaorenshanchu:before { content: "\e645"; }

  .icon-dingdan:before { content: "\e646"; }


  .icon {
    width: 40px;
    height: 28px;
  }

  /*店铺页面的小图标*/
  .iconsvg-price-none {  background-image: url("../assets/svgs/price-none.svg");  }
  .iconsvg-price-down {  background-image: url("../assets/svgs/price-down.svg");  }
  .iconsvg-price-up {  background-image: url("../assets/svgs/price-up.svg");  }

  /*包含class以iconsvg-开头的元素*/
  [class*="iconsvg-"] {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-position: center;
    /*-webkit-background-size: contain;*/
    /*background-size: contain;*/
    vertical-align: middle;
  }

</style>
