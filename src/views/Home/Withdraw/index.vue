<template>
  <div class="otc">
    <NavBar :title="title" fixed showL @clickLeft="clickLeft"/>
    <div class="otc_wrapper">
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
      transitionName: "slide-left",
      title: [
        { title: "OTC交易", url: "/Withdraw", left: 0 },
        { title: "钱包转账", url: "/Withdraw/wallet", left: 1 }
      ]
    };
  },

  components: { NavBar },
  methods: {
    clickLeft() {
      this.$router.push("/");
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
