<template>
  <div class="disciple">
    <div class="disciple_top">
      <div class="title">
        <p class="tips">累计收入（USDT）</p>
        <p class="price">125,047.84</p>
      </div>
      <div class="wrap">
        <div class="wrap_top">
          <div class="wrap_top_l">
            <p class="avatar">
              <img src="~assets/Images/disciple/top_bg.png" alt>
            </p>
            <div class="msg_group">
              <p class="name">CT123445</p>
              <p class="icon">
                <img src="~assets/Images/disciple/icon_master.png" alt>
              </p>
            </div>
          </div>
          <button class="btn_apprentice">立即收徒</button>
        </div>
        <div class="wrap_info">
          <div class="wrap_info_single">
            <p>1,299</p>
            <p>一级徒弟22人</p>
          </div>
          <div class="wrap_info_single line-1px">
            <p>12,322</p>
            <p>二级级徒弟99人</p>
          </div>
        </div>
      </div>
      <div class="banner">
        <img src="~assets/Images/disciple/banner.png" alt>
      </div>
      <div class="back_left">
        <van-icon class="back_icon" @click="clickLeft" name="arrow-left"/>
      </div>
    </div>
    <div class="disciple_wrap">
      <p class="disciple_wrap_title">
        <img src="~assets/Images/disciple/icon_1.png" alt>人脉变钱脉
      </p>
      <div class="code_wrap">
        <img src="~assets/Images/disciple/top_bg.png" alt>
        <button>长按保存推广图片</button>
      </div>
      <p class="disciple_wrap_title">
        <img src="~assets/Images/disciple/icon_2.png" alt>收徒说明
      </p>
      <div class="explain">
        <div class="explain_top">
          <div class="bg1">
            <div class="bg1_left">
              <p>一次带徒&nbsp;两级下线</p>
              <p>永久分成&nbsp;终身受益</p>
            </div>
            <div class="bg1_right">
              规则
              <img src="~assets/Images/disciple/icon_3.png" alt>
            </div>
          </div>
          <div class="bg2">
            <div class="bg2_left">
              <p>累计收徒获得佣金</p>
              <p>125,456</p>
            </div>
            <button class="bg2_btn">师傅</button>
          </div>
        </div>
        <ul class="explain_introd">
          <li>
            <img src="~assets/Images/disciple/icon_4.png" alt>
            当其他用户使用您的推荐二维码注册成功后，他就成为您的永久徒弟。
          </li>
          <li>
            <img src="~assets/Images/disciple/icon_4.png" alt>
            您可获得一级徒弟总交易手续费10%的USDT分红。
          </li>
          <li>
            <img src="~assets/Images/disciple/icon_4.png" alt>
            您可获得二级徒弟（徒弟的徒弟）总交易佣金5%的USDT的分红。
          </li>
          <li>
            <img src="~assets/Images/disciple/icon_4.png" alt>
            收徒佣金每天凌晨6点将结算到您的账户。
          </li>
          <li>
            <img src="~assets/Images/disciple/icon_4.png" alt>
            收徒佣金分成是永久分成，一次带徒，终生受益，快去收徒吧。
          </li>
        </ul>
        <ul class="explain_rule">
          <li>例如：</li>
          <li>A是师傅，他带了一个徒弟B，同时B又发展了徒弟C。</li>
          <li>在某日，B的交易手续费是100USDT，C的交易手续费是300USDT，则A当天可以收到的提成是：</li>
          <li>A收益=100USDT*10%+300USDT*5%=25USDT</li>
          <li>B收益=300USDT*10%=30USDT</li>
        </ul>
        <ul class="explain_table">
          <li class="title">
            <p>级别</p>
            <p>分成比例</p>
          </li>
          <li class="row">
            <p>一级徒弟</p>
            <p>获得其交易总佣金的10%</p>
          </li>
          <li class="row">
            <p>二级徒弟</p>
            <p>获得其交易总佣金的5%</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    clickLeft() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
