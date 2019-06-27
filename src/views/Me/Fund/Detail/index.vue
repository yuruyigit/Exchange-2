<template>
  <div class="detail">
    <NavBar title="订单详情" fixed showL showR @clickLeft="clickLeft" @clickRight="clickRight">
      <div slot="right" class="nav_right">客服</div>
    </NavBar>
    <div class="detail_top">
      <div class="detail_titel">
        <h2>付款信息</h2>
        <p>
          <span>订单号:</span>
          <span>BEEI12384658843685</span>
        </p>
      </div>
      <div class="detail_card">
        <ul class="cardTop">
          <li class="cardTop_left">
            <p>付款金额</p>
            <p class="big">￥335.00CNY</p>
          </li>
          <li class="cardTop_right">
            <p>19:33</p>
            <p>进行中</p>
          </li>
        </ul>
        <ul class="cardBot">
          <li class="cardBot_left">
            <p>单价：6.7CNY/USDT</p>
            <p>数量：50USDT</p>
            <p>付款方式：网上银行</p>
          </li>
          <li class="cardBot_right">
            <p>付款姓名：Ken</p>
            <p>2019/06/26 16:26:50</p>
          </li>
        </ul>
      </div>
      <p class="card_tips">本订单有效时间为30分钟，您需在20分钟内完成付款并点击我已付款，否则订单自动取消</p>
    </div>
    <div class="custom_bot_bg"></div>
    <div class="detail_bot">
      <h2>转账信息</h2>
      <ul class="detail_bot_info">
        <li>
          <p>收款人姓名</p>
          <p v-clipboard:copy="`王云`" v-clipboard:success="onSuccess" v-clipboard:error="onError">
            王云
            <button class="copy">复制</button>
          </p>
        </li>
        <li>
          <p>农业银行</p>
          <p
            v-clipboard:copy="`6221885061021380686`"
            v-clipboard:success="onSuccess"
            v-clipboard:error="onError"
          >
            6221885061021380686
            <button class="copy">复制</button>
          </p>
        </li>
      </ul>
    </div>
    <p class="detail_tips">支付宝转账时请备注您的姓名，否则无法到账</p>
    <div class="detail_btn">
      <button class="cancel">取消订单</button>
      <button>我已付款</button>
    </div>
  </div>
</template>

<script>
import NavBar from "components/NavBar";
export default {
  data() {
    return {};
  },
  components: {
    NavBar
  },
  methods: {
    clickLeft() {
      this.$router.back();
    },
    clickRight() {
      this.$router.push("/service");
    },
    onSuccess() {
      this.$toast("复制成功");
    },
    onError() {
      this.$toast("浏览器不支持复制");
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
