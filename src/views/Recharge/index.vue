<template>
  <div class="recharge">
    <NavBar title="充币" fixed showL @clickLeft="clickLeft"/>
    <div class="recharge_title">
      <p class="recharge_title_l">购买USDT</p>
      <p class="recharge_title_r">
        <span>单价：</span>
        <span class="size">≈6.8187</span>
      </p>
    </div>
    <div class="recharge_cont">
      <p class="recharge_cont_title">购买数量(USDT):</p>
      <div class="List">
        <button>2000</button>
        <button class="active">1000</button>
        <button>500</button>
        <button>100</button>
        <button>50</button>
        <button>其他</button>
      </div>
    </div>
    <div class="recharge_title">
      <p class="recharge_title_l">1000</p>
      <p class="recharge_title_r">
        <span>约需：</span>
        <span class="color-red">￥13620.00</span>
      </p>
    </div>
    <div class="recharge_from">
      <div class="recharge_from_single">
        <p class="label">付款人姓名：</p>
        <input type="text" placeholder="请输入付款人姓名">
      </div>
      <div class="recharge_from_single radioGroup">
        <p class="label">支付方式：</p>
        <ul>
          <li @click="changeRadio(1)">
            <p>
              <img v-if="checkRdio == 1" :src="radios" alt>
              <img v-else :src="radio" alt>
            </p>
            <p>网上银行</p>
          </li>
          <li @click="changeRadio(2)">
            <p>
              <img v-if="checkRdio == 2" :src="radios" alt>
              <img v-else :src="radio" alt>
            </p>
            <p>手机银行</p>
          </li>
        </ul>
      </div>
      <div class="recharge_from_deal" @click="isCheckBox = !isCheckBox">
        <p class="checkbox">
          <img v-show="isCheckBox" src="~assets/Images/other/icon_check.png" alt>
        </p>
        <p>已阅读并同意&nbsp;</p>
        <p class="color-blue" @click.stop="toIntrod()">《OTC交易协议》</p>
      </div>
    </div>
    <div class="recharge_tips">
      <h2>注意事项</h2>
      <p>
        <span>1、</span>为了保证资金顺利到账，请务必在转账时输入转账附言
      </p>
      <p>
        <span>2、</span>请按照填写的姓名、付款金额、转账方式进行付款方可快速到账、否则资金将无法及时到账
      </p>
      <p>
        <span>3、</span>如果您的转账5分钟内未能到账，请您联系客服处理；订单的有效时间为20分钟，如您已转账但订单失效，请您联系客服处理
      </p>
    </div>
    <div class="recharge_btn">
      <button>确定</button>
    </div>
  </div>
</template>

<script>
import NavBar from "components/NavBar";
import radio from "Images/other/icon_radio.png";
import radios from "Images/other/icon_radios.png";
import { radioList } from "common/staticData";
export default {
  data() {
    return {
      radioList: radioList,
      radio: radio,
      radios: radios,
      checkRdio: 1,
      isCheckBox: true
    };
  },
  components: {
    NavBar
  },
  methods: {
    changeRadio(type) {
      this.checkRdio = type;
    },
    toIntrod() {
      this.$router.push("/intord/otc_intord");
    },
    clickLeft() {
      this.$router.push("/otc");
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
