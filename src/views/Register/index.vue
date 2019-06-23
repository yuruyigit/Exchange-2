<template>
  <div class="login">
    <router-link tag="div" to="/login" class="title">登录</router-link>
    <div class="size">
      <p class="size_top">你好！</p>
      <div class="tab">
        <p class="tab_size">欢迎加入</p>
        <p class="tab_bar">
          <router-link to="/register">手机注册</router-link>
          <router-link to="/register/email">邮箱注册</router-link>
        </p>
      </div>
    </div>
    <div class="from">
      <div class="from_wrap">
        <transition :name="transitionName">
          <router-view ref="from"/>
        </transition>
      </div>

      <button class="from_btn" :disabled="isClick" @click="subMit">下一步</button>
      <div class="agreement">
        <span>注册即表示同意</span>
        <router-link to="/intord/protocol" class="color-blue">《平台服务协议》</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClick: false, //登录按钮是否可点击
      transitionName: "slide-left",
      type: this.$route.name
    };
  },
  created() {
    console.log(this.$md5("123456"));
    // this.register();
  },
  components: {},
  methods: {
    //选择注册方式
    checkType(type) {
      this.activeClass = type;
      this.$router.push(`/register${type}`);
    },
    subMit() {
      let regData = this.$refs.from.fromData,
        req = {};
        
      if (regData.email) {
        req = {
          emailCode: regData.code,
          loginName: regData.email,
          loginPwd: regData.pwd,
          type: 1
        };
      } else if (regData.phone) {
        req = {
          mobileCode: regData.code,
          loginName: regData.email,
          loginPwd: regData.pwd,
          type: 0
        };
      }
      this.$lStore.set('req',req)
    //   this.register(req);
        this.$router.push(`/register/pwd`);
    },
   
  },
  watch: {
    $route(to, from) {
      let toName = to.name;
      const toIndex = to.meta.id;
      const fromIndex = from.meta.id;
      this.type = toName;
      this.transitionName = toIndex < fromIndex ? "slide-right" : "slide-left";
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
        a {
          font-size: 14px;
          color: $color6;
          transition: color 0.3s linear;
          extend-click();
          &.router-link-exact-active {
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
    &_wrap {
      height: 150px;
      width: 100%;
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
