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
        <input type="text" placeholder="输入验证码">
        <button class="inp_group_right" :disabled="isSend" @click="sendMsg">{{sendBtnText}}</button>
      </div>
      <button class="from_btn" :disabled="isClick">登录</button>
      <router-link tag="p" to="/login/pwd" class="from_check">密码登录</router-link>
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
      activeClass: "phone",
      type: this.$route.params.type
    };
  },
  created() {},
  components: {},
  methods: {
    //发送验证
    sendMsg() {
      this.isSend = true;
      let _this = this,
        num = 10;
      _this.timer = setInterval(() => {
        num--;
        if (num <= 0) {
          clearInterval(_this.timer);
          this.isSend = false;
          this.sendBtnText = "获取验证码";
        } else {
          this.sendBtnText = num + "S后重新获取";
        }
      }, 1000);
      this.sendBtnText = num + "S后重新获取";
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
