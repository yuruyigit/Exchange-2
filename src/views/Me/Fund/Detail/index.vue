<template>
  <div class="detail">
    <NavBar title="订单状态" fixed showL @clickLeft="clickLeft"/>
    <ul class="detail_top">
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
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~assets/stylus/variable';
.detail {
  background-color: $bgMain;
  &_top {
    padding: 0 16px;
    background-color: $write;
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
}
</style>

