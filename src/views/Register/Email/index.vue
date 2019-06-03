<template>
  <div class="phone">
    <div class="inp_group border-1px">
      <input type="text" placeholder="输入邮箱账号">
    </div>
    <div class="inp_group border-1px">
      <input type="text" placeholder="输入邮箱验证码">
      <button class="inp_group_right" :disabled="isSend" @click="sendMsg">{{sendBtnText}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
@import '~assets/stylus/variable.styl';
.phone {
  width: 100%;
  .inp_group {
    border-1px($color12, 100%);
    height: 72px;
    font-size: 16px;
    margin-bottom: 1px;
    padding-left: 2px;
    width: 100%;
    input {
      width: 100%;
      height: 100%;
      border: none;
      placeholderColor($color9);
      font-size: 18px;
      &.pl {
        padding-left: 50px;
      }
    }
    &_left {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 50px;
      span {
        color: $color6;
        font-size: 18px;
      }
      img {
        margin-left: 6px;
        width: 6px;
      }
    }
    &_right {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      line-height: 64px;
      padding: 6px;
      color: $color6;
      font-size: 14px;
      border: none;
      background: transparent;
      &:disabled {
        color: $blue;
      }
    }
  }
}
</style>
