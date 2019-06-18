<template>
  <div class="msg">
    <ul class="msg_list" :class="{anim:animate==true}">
      <li v-for="item in items" :key="item.name">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import { clearTimeout } from "timers";
export default {
  data() {
    return {
      timer: null,
      animate: false,
      items: [
        { name: "BTC大涨，将要涨破10000USDT！" },
        { name: "ETH顺势增长，有望回归巅峰价格！" },
        { name: "币圈趋势打好，可以适当投入资金小赚一笔！" }
      ]
    };
  },
  created() {
    this.timer = setInterval(this.scroll, 3000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
  components: {},
  methods: {
    scroll() {
      this.animate = true;
      setTimeout(() => {
        this.items.push(this.items[0]);
        this.items.shift();
        this.animate = false;
      }, 500);
    }
  }
};
</script>

<style scoped lang="stylus">
.msg {
  width: 100%;
  height: 28px;
  overflow: hidden;
  &_list {
    &.anim {
      transition: all 0.5s;
      margin-top: -28px;
    }
    li {
      line-height: 28px;
      height: 28px;
      font-size: 12px;
      color: #333;
    }
  }
}
</style>
