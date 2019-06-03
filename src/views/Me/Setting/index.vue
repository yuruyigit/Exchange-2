<template>
  <div class="setting">
    <NavBar title="账户设置" fixed showL @clickLeft="clickLeft"/>
    <div class="setting_list">
      <van-cell is-link title="个人资料"></van-cell>
      <van-cell is-link title="语言" value="简体中文"></van-cell>
      <van-cell is-link title="PC登录码" value="7wcs3"></van-cell>
      <van-cell is-link to="/me/setting/about" title="关于我们"></van-cell>
      <van-cell is-link title="意见反馈"></van-cell>
    </div>
    <p class="setting_logout">退出登录</p>
  </div>
</template>

<script>
import NavBar from "components/NavBar";
export default {
  data() {
    return {};
  },
  components: {
    NavBar
  },
  methods: {
    clickLeft() {
      this.$router.push("/me");
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
