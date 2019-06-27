<template>
  <div class="hold">
    <router-link
      class="hold_single"
      tag="ul"
      v-for="(item,index) in List"
      :key="index"
      :to="`/chat/hold/${index}`"
    >
      <li class="top">
        <p class="top_l">
          <span class="big">ETH</span>
          <span class="small">USDT</span>
          <span class="icon">
            <img :src="isBuy(index)" alt>
          </span>
          <span class="num">×1手</span>
        </p>
        <p class="top_btn">
          <span :class="isColor(index)">-18.76</span>
          <button @click="closeOut">平仓</button>
        </p>
      </li>
      <li class="bot">
        <p>
          <span>5.7605</span>
          <span>开仓价</span>
        </p>
        <p>
          <span>--</span>
          <span>当前价</span>
        </p>
        <p>
          <span>5.6605</span>
          <span>止损价</span>
        </p>
        <p>
          <span>6.0002</span>
          <span>止盈价</span>
        </p>
      </li>
    </router-link>
  </div>
</template>

<script>
import iconBuy from "Images/chat/icon_buy.png";
import iconSale from "Images/chat/icon_sale.png";
import { setTimeout } from "timers";
export default {
  props: {
    showDialog: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      List: new Array(10)
    };
  },
  components: {},
  methods: {
    closeOut() {
      this.showDialog({
        title: "平仓"
      });
    },
    isBuy(type) {
      if (type % 3) {
        return iconBuy;
      } else {
        return iconSale;
      }
    },
    refresh(done) {
      console.log("refresh");
      setTimeout(() => {
        done();
      }, 1000);
    },
    isColor(num) {
      if (num % 2) {
        return "color-red1";
      } else {
        return "color-green";
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
