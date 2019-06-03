<template>
  <div class="about">
    <NavBar title="关于我们" fixed showL @clickLeft="clickLeft"/>
    <div class="about_logo">
      <img src="~assets/Images/avatar.jpg" alt>
    </div>
    <div class="about_list">
      <van-cell is-link to="/intord/product" title="产品相关介绍"></van-cell>
      <van-cell is-link to="/intord/privacy" title="免责及隐私声明"></van-cell>
    </div>
  </div>
</template>

<script>
import NavBar from "components/NavBar";
export default {
  data() {
    return {};
  },
  components: { NavBar },
  methods: {
    clickLeft() {
      this.$router.push("/me/setting");
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
