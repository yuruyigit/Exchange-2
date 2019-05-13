<template>
  <div class="header">
    <div class="group">
      <p class="group_avatar">
        <img src="~assets/Images/home/icon_hot.png" alt>
      </p>
      <p class="group_notLogin">{{$t('notLogin')}}</p>
    </div>
    <div class="right">
      <img src="~assets/Images/home/icon_server.png" alt>
      <p class="right_size">{{$t("server")}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {}
};
</script>

<style scoped lang="stylus">
@import '~assets/stylus/variable';
.header {
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .group {
    height: 64px;
    display: flex;
    align-items: center;
    &_avatar {
      border: 2px solid $blue;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &_notLogin {
      margin-left: 10px;
      font-size: 16px;
      cursor: pointer;
    }
  }
  .right {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 24px;
      margin-right: 4px;
    }
    &_size {
      font-size: 15px;
      color: $color6;
    }
  }
}
</style>
