<template>
  <div class="security">
    <NavBar title="安全中心" fixed showL @clickLeft="clickLeft"/>
    <div class="security_list">
      <van-cell is-link title="绑定手机号" to="/me/edit/phone" value="17620800222"></van-cell>
      <van-cell is-link to="/me/pwd" title="修改登录密码"></van-cell>
      <van-cell is-link to="/me/edit/email" title="绑定邮箱" value="muzhe1228@163.com"></van-cell>
    </div>
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
