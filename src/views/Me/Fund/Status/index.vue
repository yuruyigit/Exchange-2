<template>
  <div class="status">
    <NavBar title="订单状态" fixed showL @clickLeft="clickLeft"/>
    <ul class="status_top">
      <li>
        <h2>订单信息</h2>
        <p>已失效</p>
      </li>
      <li>
        <p>付款金额</p>
        <p>
          <span class="big">7020.00</span>
          <span>CNY</span>
        </p>
      </li>
      <li>
        <p>单价</p>
        <p>
          <span class="color6">7.02</span>
          <span>CNY</span>
        </p>
      </li>
      <li>
        <p>数量</p>
        <p>
          <span class="color6">1000</span>
          <span>USDT</span>
        </p>
      </li>
    </ul>
    <div class="custom_bot_bg"></div>
    <ul class="status_bot">
      <li>
        <p>支付方式</p>
        <p>网上银行</p>
      </li>
      <li>
        <p>付款人姓名</p>
        <p>姜婷</p>
      </li>
      <li>
        <p>下单时间</p>
        <p>2019/06/26 13:18:26</p>
      </li>
      <li>
        <p>订单号</p>
        <p>BEEI12384658843685</p>
      </li>
    </ul>
    <div class="status_btn">
      <button @click="toService">联系客服</button>
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
    toService() {
      this.$router.push("/service");
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~assets/stylus/variable';
.status {
  background-color: $write;
  height: 100%;
  &_top {
    padding: 0 16px;
    height: 162px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 36px;
      font-size: 15px;
      h2 {
        padding: 20px 0 12px 0;
        font-size: 18px;
      }
      p {
        &:first-child {
          color: $color6;
        }
        &:last-child {
          color: $color9;
          span {
            &:last-child {
              margin-left: 10px;
            }
          }
          .big {
            font-size: 22px;
            color: $red;
          }
        }
      }
    }
  }
  &_bot {
    padding: 16px;
    li {
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        color: $color6;
        font-size: 15px;
        &:last-child {
          color: $color3;
        }
      }
    }
  }
  &_btn {
    padding: 40px 16px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    button {
      width: 100%;
      height: 44px;
      background: url('../../../../assets/Images/regLogin/bg_btn.png') no-repeat center / cover;
      border: none;
      color: #fff;
      font-size: 18px;
    }
  }
}
</style>

