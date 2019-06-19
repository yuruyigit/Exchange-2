<template>
  <div class="wallet">
    <div class="wallet_code">
      <img src="~assets/Images/avatar.jpg" alt>
      <p>地址二维码</p>
      <p>或将USDT充值到以下地址</p>
    </div>
    <div
      class="wallet_hash"
      v-clipboard:copy="hash"
      v-clipboard:success="onSuccess"
      v-clipboard:error="onError"
    >
      <p class="hash">{{hash}}</p>
      <p class="copy">全部复制</p>
    </div>
    <div class="wallet_intord">
      <h2>温馨提示：</h2>
      <p><span>1、</span>请勿向上述地址充值任何非USDT资产，否则资产将不可找回。</p>
      <p><span>2、</span>您充值至上述地址后，需整个网络节点确认，6个网络确认后方可到账。</p>
      <p><span>3、</span>单笔充值不得低于50个USDT，小于此金额将不会成功。</p>
      <p><span>4、</span>每次充值前需前往此页面复制地址，确保地址准确无误，错误地址会导致充币失败。</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hash: "19yBFju3e6EmpoQp96PMcmqQgCjjr9icdR"
    };
  },
  methods: {
    onSuccess() {
      this.$toast("复制成功");
    },
    onError() {
      this.$toast("浏览器不支持复制");
    }
  }
};
</script>
