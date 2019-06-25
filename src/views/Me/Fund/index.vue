<template>
  <div class="fund">
    <NavBar :title="title" fixed showL @clickLeft="clickLeft"/>
    <div class="fund_wrap">
      <transition :name="transitionName">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import NavBar from "components/NavBar/Switch";
export default {
  data() {
    return {
      loading: false,
      finished: true,
      isLoading: false,
      transitionName: "slide-left",
      title: [
        { title: "OTC交易", url: "/me/fund", left: 0 },
        { title: "钱包转账", url: "/me/fund/wallet", left: 1 }
      ]
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
  },
  watch: {
    $route(to, from) {
      const toIndex = to.meta.id;
      const fromIndex = from.meta.id;
      this.transitionName = toIndex < fromIndex ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style lang="stylus">
@import './style';
</style>
