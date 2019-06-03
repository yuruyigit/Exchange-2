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
        <ve-ring :data="chartData" :legend-visible="false" width="160px" height="160px" :settings="chartSettings"></ve-ring>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/NavBar";
import VeRing from "v-charts/lib/ring.common";
export default {
  data() {
    this.chartSettings = {
      radius: [30, 75],
      offsetY: 80,
    };
    return {
      chartData: {
        columns: ["日期", "访问用户"],
        rows: [
          { 日期: "1/1", 访问用户: 1393 },
          { 日期: "1/2", 访问用户: 3530 },
          { 日期: "1/3", 访问用户: 2923 },
          { 日期: "1/4", 访问用户: 1723 },
          { 日期: "1/5", 访问用户: 3792 },
          { 日期: "1/6", 访问用户: 4593 }
        ]
      }
    };
  },
  components: { NavBar, VeRing },
  mounted() {},
  methods: {
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
