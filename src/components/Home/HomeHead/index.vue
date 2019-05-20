<template>
  <div class="header">
    <div class="group" @click="toLogin">
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

  methods: {
    toLogin() {
      this.$router.push("/login");
    }
  }
};
</script>
