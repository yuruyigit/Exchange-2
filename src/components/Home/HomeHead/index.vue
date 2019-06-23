<template>
  <div class="header">
    <div class="group" @click="toLogin">
      <p class="group_avatar">
        <img :src="userInfo.portrait" alt>
      </p>
      <p v-show="false" class="group_notLogin">{{$t('notLogin')}}</p>
      <div class="group_login">
        <p class="balance">
          188,12USDT
          <img class="balance_icon" src="~assets/Images/home/icon_more_unsel.png" alt>
        </p>
        <p class="balance_bot">模拟盘</p>
      </div>
    </div>
    <router-link tag="div" to="/service" class="right">
      <img src="~assets/Images/home/icon_server.png" alt>
      <p class="right_size">{{$t("server")}}</p>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    }
  }
};
</script>
