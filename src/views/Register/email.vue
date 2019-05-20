<template>
  <div class="login">
    <router-link tag="div" to="/login" class="title">登录</router-link>
    <div class="size">
      <p class="size_top">你好！</p>
      <div class="tab">
        <p class="tab_size">欢迎加入</p>
        <p class="tab_bar">
          <span @click="checkType('phone')" :class="activeClass == 'phone'&&'active'">手机注册</span>
          <span @click="checkType('email')" :class="activeClass == 'email'&&'active'">邮箱注册</span>
        </p>
      </div>
    </div>
    <div class="from">
      <div class="inp_group border-1px">
        <p class="inp_group_left">
          <span>+86</span>
          <img src="~Images/regLogin/icon_tel.png" alt>
        </p>
        <input type="text" class="pl" placeholder="输入手机号">
      </div>
      <div class="inp_group border-1px">
        <input type="text" placeholder="输入手机验证码">
        <button class="inp_group_right" :disabled="isSend" @click="sendMsg">{{sendBtnText}}</button>
      </div>
      <button class="from_btn" :disabled="isClick">登录</button>
      <div class="agreement">
        <span>注册即表示同意</span>
        <span class="color-blue">《平台服务协议》</span>
      </div>
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
  components: {},
  methods: {
    //选择注册方式
    checkType(type) {
      this.activeClass = type;
    },
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
.login {
  width: 100%;
  .title {
    padding: 11px 16px;
    font-size: 16px;
    color: $blue;
    text-align: right;
    margin-bottom: 16px;
  }
  .size {
    color: $color3;
    padding: 0 28px;
    &_top {
      font-size: 30px;
      margin-bottom: 8px;
    }
    .tab {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &_size {
        font-size: 24px;
      }
      &_bar {
        span {
          font-size: 14px;
          color: $color6;
          transition: color 0.3s linear;
          extend-click();
          &.active {
            color: $blue;
          }
          &:first-child {
            margin-right: 12px;
          }
        }
      }
    }
  }
  .from {
    padding: 14px 28px;
    .inp_group {
      border-1px($color12, 100%);
      height: 72px;
      font-size: 16px;
      margin-bottom: 1px;
      padding-left: 2px;
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
    &_btn {
      margin-top: 50px;
      width: 319px;
      height: 44px;
      background: url('../../assets/Images/regLogin/bg_btn.png') no-repeat center;
      background-size: 100% 100%;
      border: none;
      color: $write;
      font-size: 16px;
      line-height: 44px;
      &:disabled {
        color: rgba(255, 255, 255, 0.6);
      }
    }
    &_check {
      margin-top: 18px;
      font-size: 14px;
      color: $blue;
    }
    .agreement {
      margin-top: 18px;
      text-align: center;
      font-size: 14px;
      color: $color6;
    }
  }
}
</style>
