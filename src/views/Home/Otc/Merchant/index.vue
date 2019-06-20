<template>
  <div class="merchant">
    <div class="merchant_title">
      <p>已为您甄选优质商家！</p>
      <p class="link">什么是OTC？</p>
    </div>
    <div class="merchant_single">
      <div class="single" v-for="item in List" :key="item" @click="toRecharge">
        <div class="single_t">
          <div class="single_t_l">
            <p class="name">BEEPAY</p>
            <div class="single_t_l_b">
              <p>215980笔交易</p>
              <p class="line-1px">99%成交量</p>
            </div>
          </div>
          <div class="single_t_r">
            <button>已认证</button>
          </div>
        </div>
        <div class="single_m">
          <div class="single_m_l">
            <p>限额：&nbsp;单笔20-14000&nbsp;USDT</p>
            <p class="tips">大额充币首选，安全稳定！</p>
          </div>
          <div class="single_m_r">
            <p>单价：</p>
            <p class="price">≈6.7</p>
          </div>
        </div>
        <div class="single_b">
          <div class="single_b_l">
            <p>支持：</p>
            <p class="icon">
              <img src="~assets/Images/Otc/icon_bank.png" alt>
              网银
            </p>
            <p class="icon">
              <img src="~assets/Images/Otc/icon_phone.png" alt>
              手机
            </p>
          </div>
          <div class="single_b_r">
            <button>购买</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: [1, 2, 3]
    };
  },
  methods: {
    //跳转到充值页面
    toRecharge() {
      this.$router.push("/recharge");
    }
  }
};
</script>
