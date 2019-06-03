<template>
  <div class="fund">
    <NavBar title="我的持仓" fixed showL @clickLeft="clickLeft"/>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        :offset="80"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="fund_list">
          <ul class="fund_list_single border-1px">
            <li class="left">
              <p class="left_title">
                <span>OTC交易（BEEPAY充币）</span>
                <span :class="statusColor()">进行中</span>
              </p>
              <p class="left_shops">签约商户</p>
              <p class="left_time">05-30 14:37:10</p>
            </li>
            <li class="right">+4000</li>
          </ul>
          <ul class="fund_list_single border-1px">
            <li class="left">
              <p class="left_title">
                <span>OTC交易（BEEPAY充币）</span>
                <span :class="statusColor(1)">已失效</span>
              </p>
              <p class="left_shops">签约商户</p>
              <p class="left_time">05-30 14:37:10</p>
            </li>
            <li class="right">+4000</li>
          </ul>
          <ul class="fund_list_single border-1px">
            <li class="left">
              <p class="left_title">
                <span>OTC交易（BEEPAY充币）</span>
                <span :class="statusColor(2)">已完成</span>
              </p>
              <p class="left_shops">签约商户</p>
              <p class="left_time">05-30 14:37:10</p>
            </li>
            <li class="right">+4000</li>
          </ul>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import NavBar from "components/NavBar";
export default {
  data() {
    return {
      loading: false,
      finished: true,
      isLoading: false
    };
  },
  components: {
    NavBar
  },
  methods: {
    clickLeft() {
      this.$router.push("/me");
    },
    statusColor(status) {
      if (status == 1) {
        return "color9";
      } else if (status == 2) {
        return "color3";
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
