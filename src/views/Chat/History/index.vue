<template>
  <div class="history">
    <NavBar :title="title" fixed showL @clickLeft="clickLeft"/>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" :offset="80" finished-text="没有更多了" @load="onLoad">
        <ul class="history_single" v-for="(item,index) in List" :key="index">
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
              <button>平仓</button>
            </p>
          </li>
          <li class="bot">
            <p class="line-1px">
              <span>5.7605</span>
              <span>开仓价</span>
            </p>
            <p class="line-1px">
              <span>--</span>
              <span>当前价</span>
            </p>
            <p class="line-1px">
              <span>5.6605</span>
              <span>止损价</span>
            </p>
            <p>
              <span>6.0002</span>
              <span>止盈价</span>
            </p>
          </li>
        </ul>
      </van-list>
    </van-pull-refresh>
    <!-- <div class="not_data">没有更多数据</div> -->
  </div>
</template>

<script>
import NavBar from "components/NavBar";
import iconBuy from "Images/chat/icon_buy.png";
import iconSale from "Images/chat/icon_sale.png";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      title: "历史记录（模拟盘）",
      List: new Array(10),
      loading: false,
      finished: false,
      isLoading: false
    };
  },
  components: { NavBar },
  methods: {
    clickLeft() {
      this.$router.push("/chat");
    },
    isBuy(type) {
      if (type % 3) {
        return iconBuy;
      } else {
        return iconSale;
      }
    },
    isColor(num) {
      if (num % 2) {
        return "color-red1";
      } else {
        return "color-green";
      }
    },
    onLoad() {
      setTimeout(() => {
        this.loading = false;
        this.finished = true;
        this.$toast("异步更新数据");
      }, 500);
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.finished = false;
        this.$toast("刷新成功");
      }, 500);
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
