<template>
  <div class="pwd">
    <h2 class="pwd_title">设置用户密码</h2>
    <div class="pwd_wrap">
      <div class="inp_group border-1px">
        <input type="password" placeholder="输入新账户密码" v-model="pwd">
      </div>
      <button class="from_btn" :disabled="isClick" @click="subMit">登录</button>
      <p class="pwd_wrap_back" @click="back">返回上一页</p>
    </div>
  </div>
</template>

<script>
import { isPwd } from "common/TollClass/func";
export default {
  data() {
    return {
      isClick: false, //登录按钮是否可点击,
      pwd: ""
    };
  },
  components: {},
  methods: {
    subMit() {
      let req = this.$lStore.get("req");
      let err = isPwd(this.pwd);
      if (err) {
        this.$toast(err);
      } else {
        req.loginPwd = this.$md5(this.pwd);
        this.$lStore.remove("req");
        // this.register(req);
      }
    },
    register(req) {
      this.$http({
        url: "/auth/register",
        method: "post",
        data: req,
        pro: true
      }).then(res => {
        if (res.status == 200) {
          this.$toast("恭喜你注册成功");

          this.$lStore.removeItem("req");
          this.$lStore.set("userInfo", data);
          this.$lStore.set("token", data.token);
          this.$router.push("/");
        }
      });
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~assets/stylus/variable';
.pwd {
  padding: 80px 28px 0 28px;
  &_title {
    font-size: 24px;
    color: $color3;
    margin-bottom: 40px;
  }
  &_wrap {
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
    .from_btn {
      margin-top: 50px;
      width: 319px;
      height: 44px;
      background: url('../../../assets/Images/regLogin/bg_btn.png') no-repeat center;
      background-size: 100% 100%;
      border: none;
      color: $write;
      font-size: 16px;
      line-height: 44px;
      &:disabled {
        color: rgba(255, 255, 255, 0.6);
      }
    }
    &_back {
      padding-top: 28px;
      font-size: 14px;
      color: $blue;
      text-align: center;
    }
  }
}
</style>
