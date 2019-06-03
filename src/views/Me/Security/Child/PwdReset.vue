<template>
  <div class="from">
    <div class="inp_group border-1px">
      <input type="password" placeholder="请输入手机号">
    </div>
    <div class="inp_group border-1px">
      <input type="text" placeholder="输入验证码">
      <button class="inp_group_right" :disabled="isSend" @click="sendMsg">{{sendBtnText}}</button>
    </div>
    <div class="inp_group border-1px">
      <input type="password" placeholder="请设置新密码">
    </div>
    <p class="from_tips">* 6 - 16 位字母和数字组成</p>
    <button class="from_btn" :disabled="isClick">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClick: true,
      isSend: false, //发送验证码按钮是否可点击
      sendBtnText: "获取验证码",
      timer: null
    };
  },
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
