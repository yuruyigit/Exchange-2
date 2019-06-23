<template>
  <div class="msg">
    <ul class="msg_list" :class="{anim:animate==true}">
      <li v-for="item in List" :key="item.id">{{item.title}}</li>
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
      List: [
        { title: "BTC大涨，将要涨破10000USDT！", id: 1 },
        { title: "ETH顺势增长，有望回归巅峰价格！", id: 2 },
        { title: "币圈趋势打好，可以适当投入资金小赚一笔！", id: 3 }
      ]
    };
  },
  created() {
    this.timer = setInterval(this.scroll, 3000);
    this.getNotice();
  },
  destroyed() {
    clearInterval(this.timer);
  },
  components: {},
  methods: {
    getNotice() {
      this.$http({
        url: "/v1/announcement/list",
        method: "get",
      }).then(res => {
        if (res.status == 200) {
          this.List = res.data;
        }
      });
    },
    scroll() {
      this.animate = true;
      setTimeout(() => {
        this.List.push(this.List[0]);
        this.List.shift();
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
