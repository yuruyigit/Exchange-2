<template>
  <div class="guidPage">
    <div class="guideSwiper">
      <div class="custom-indicator">
        <p class="title">STEP</p>
        <p class="num">{{current+1}}</p>
      </div>
      <van-swipe ref="swiper" @change="onChange" :show-indicators="false" :loop="false">
        <van-swipe-item>
          <div class="guideSwiper_item">
            <img src="~assets/Images/avatar.jpg" alt>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="guideSwiper_item">
            <img src="~assets/Images/avatar.jpg" alt>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="guideSwiper_item">
            <img src="~assets/Images/avatar.jpg" alt>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="guideSwiper_item">
            <img src="~assets/Images/avatar.jpg" alt>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="lrBtn">
        <p @click="left">
          <img src="~assets/Images/guide/left.png" alt>
        </p>
        <p @click="right">
          <img src="~assets/Images/guide/right.png" alt>
        </p>
      </div>
    </div>
    <div
      class="guidPage_intord"
    >【HT一小时内涨幅3.32% 现报3.4255美元】 据《币世界》行情，HT一小时内涨幅3.32%，价格逼近昨日价格高点3.4900美元，现报3.4255美元，24小时涨幅3.9%</div>
  </div>
</template>

<script>
export default {
  data() {
    return { current: 0 };
  },
  components: {},
  methods: {
    onChange(index) {
      this.current = index;
      this.$toast(index);
    },
    left() {
      this.$refs.swiper.swipeTo(this.current - 1);
    },
    right() {
      this.$refs.swiper.swipeTo(this.current + 1);
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
