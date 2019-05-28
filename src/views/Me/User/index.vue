<template>
  <div class="user">
    <NavBar title="个人资料" fixed showL @clickLeft="clickLeft"/>
    <div class="user_info">
      <van-cell is-link title="头像">
        <van-uploader :after-read="onRead">
          <p class="right_img">
            <img src="~assets/Images/avatar.jpg" alt>
          </p>
        </van-uploader>
      </van-cell>
      <van-cell is-link title="昵称" value="17620800222"></van-cell>
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
    onRead(file) {
      console.log(file);
    },
    clickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
