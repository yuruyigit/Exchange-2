<template>
  <div class="report">
    <NavBar title="投资报表" fixed showL @clickLeft="clickLeft"/>
    <div class="report_wrap">
      <div class="report_wrap_top">
        <div class="single">
          <p class="single_big color-blue">
            <span>11</span>
            <span>%</span>
          </p>
          <p class="single_small">总收益</p>
        </div>
        <div class="single line-1px">
          <p class="single_big red">
            <span>50</span>
            <span>%</span>
          </p>
          <p class="single_small">总准确率</p>
        </div>
      </div>
      <div class="report_wrap_info">
        <h2 class="title">数据统计</h2>
        <ul class="single">
          <li>
            <p>50%</p>
            <p>准确率</p>
          </li>
          <li>
            <p>120</p>
            <p>最大开仓</p>
          </li>
          <li>
            <p>360</p>
            <p>总平仓交易</p>
          </li>
        </ul>
        <ul class="single">
          <li>
            <p>2笔</p>
            <p>盈利订单</p>
          </li>
          <li>
            <p>2笔</p>
            <p>亏损订单</p>
          </li>
          <li>
            <p>17小时1分</p>
            <p>平均持仓时间</p>
          </li>
        </ul>
        <ul class="single">
          <li>
            <p>1笔</p>
            <p>成功交易</p>
          </li>
          <li>
            <p>1笔</p>
            <p>成功买跌</p>
          </li>
          <li>
            <p>0%</p>
            <p>上一日交易状况</p>
          </li>
        </ul>
        <ul class="single">
          <li>
            <p>11%</p>
            <p>收益率</p>
          </li>
        </ul>
      </div>
      <div class="report_wrap_chat">
        <h2 class="title">历史交易品种</h2>
        <div class="report_wrap_chat_top">
          <div class="left">
            <ve-ring
              :data="chartData"
              :legend-visible="false"
              :tooltip-visible="false"
              :width="width"
              :height="width"
              :settings="chartSettings"
              :colors="colors"
            ></ve-ring>
          </div>

          <ul class="right">
            <li v-for="(item,i) in chartData.rows" :key="item.coin">
              <p class="icon" :style="{borderColor:colors[i]}"></p>
              <p class="coin">{{item.coin}}</p>
              <p class="defCoin">{{item.defCoin}}</p>
              <p class="ratio" :style="{color:colors[i]}">{{item.ratio}}%</p>
            </li>
          </ul>
        </div>
        <ul class="report_wrap_chat_list">
          <li>
            <p>ETH</p>
            <p>买跌1笔</p>
            <p>买涨1笔</p>
          </li>
          <li>
            <p>ETH</p>
            <p>买跌1笔</p>
            <p>买涨1笔</p>
          </li>
          <li>
            <p>ETH</p>
            <p>买跌1笔</p>
            <p>买涨1笔</p>
          </li>
          <li>
            <p>ETH</p>
            <p>买跌1笔</p>
            <p>买涨1笔</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/NavBar";
import VeRing from "v-charts/lib/ring.common";
export default {
  data() {
    this.colors = [
      "#ff5562",
      "#9d7efe",
      "#54d0fd",
      "#ffb40f",
      "#E066FF",
      "#C0FF3E"
    ];
    return {
      chartData: {
        columns: ["coin", "ratio", "defCoin"],
        rows: [
          { coin: "ETH", ratio: 48, defCoin: "USDT" },
          { coin: "BTC", ratio: 28, defCoin: "USDT" },
          { coin: "EOS", ratio: 13, defCoin: "USDT" },
          { coin: "XRP", ratio: 6, defCoin: "USDT" }
        ]
      },
      chartSettings: {
        radius: [30, 70],
        offsetY: 80,
        label: {
          normal: {
            show: false,
            position: "center"
          },
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            borderWidth: 2,
            borderColor: "#fff"
          }
        },

        hoverAnimation: false
      },
      width: "160px"
    };
  },
  components: { NavBar, VeRing },
  mounted() {
    this.resetWH();
    window.addEventListener("resize", this.resetWH);
  },
  destroyed() {
    window.removeEventListener("resize", this.resetWH);
  },
  methods: {
    resetWH() {
      let ratio = document.documentElement.clientWidth / 750;
      let radius = parseInt(320 * ratio) / 2;
      this.width = parseInt(320 * ratio) + "px";
      this.chartSettings.radius = [radius / 2, radius];
      this.chartSettings.offsetY = radius;
    },
    clickLeft() {
      this.$router.push("/me");
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
.Chart {
  padding: 20px;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  margin: 50px 0;
}
</style>
