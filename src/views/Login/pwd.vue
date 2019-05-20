<template>
  <div class="login">
    <router-link tag="div" to="/register" class="title">注册</router-link>
    <div class="size">
      <p class="size_top">你好！</p>
      <div class="tab">
        <p class="tab_size">欢迎回来</p>
      </div>
    </div>
    <div class="from">
      <div class="inp_group border-1px">
        <input type="text" placeholder="输入手机号/邮箱账号">
      </div>
      <div class="inp_group border-1px">
        <input type="password" placeholder="输入密码">
      </div>
      <button class="from_btn" :disabled="isClick">登录</button>
      <router-link tag="p" to="/login" class="from_check">验证码登录</router-link>
    </div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";
export default {
  data() {
    return {
      isClick: false, //登录按钮是否可点击
      isSend: false, //发送验证码按钮是否可点击
      sendBtnText: "获取验证码",
      timer: null,
      activeClass: "phone"
    };
  },
  created() {},
  components: {},
  methods: {}
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
