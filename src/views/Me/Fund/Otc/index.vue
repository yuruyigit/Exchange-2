<template>
  <div class="fund_list">
    <ScrollH pulldown pullup @pullDown="pullDown" @pullUp="pullUp" :data="List">
      <router-link tag="ul" class="fund_list_single border-1px" v-for="(item,index) in List" :to="`/me/fund/${item}`" :key="item+index">
        <li class="left">
          <p class="left_title">
            <span>OTC交易(BEEPAY充币)</span>
            <span :class="statusColor(item)">{{statusText(item)}}</span>
          </p>
          <p class="left_shops">签约商户</p>
          <p class="left_time">05-30 14:37:10</p>
        </li>
        <li class="right">+4000</li>
      </router-link>
    </ScrollH>
  </div>
</template>

<script>
import ScrollH from "components/ScrollH";
export default {
  data() {
    return {
      loading: false,
      finished: true,
      isLoading: false,
      List: [1, 2, 3, 1, 2, 3, 1, 2, 3]
    };
  },
  components: {
    ScrollH
  },
  methods: {
    statusColor(status) {
      if (status == 1) {
        return "color-green";
      } else if (status == 2) {
        return "color9";
      } else if (status == 3) {
        return "color3";
      }
    },
    statusText(status) {
      if (status == 1) {
        return "进行中";
      } else if (status == 2) {
        return "已失效";
      } else if (status == 3) {
        return "已完成";
      }
    },
    pullDown(scroll) {
      setTimeout(() => {
        console.log("到头了");
        scroll.finishPullDown();
      }, 1000);
    },
    pullUp(scroll) {
      let list = [1, 2, 3];

      setTimeout(() => {
        this.List = [...this.List, ...list];
        console.log("到底了");
        scroll.finishPullUp();
      }, 1000);
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

