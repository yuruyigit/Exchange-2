<template>
  <div class="Phone">
    <NavBar :title="Edit.title" fixed showL @clickLeft="clickLeft"/>
    <p class="tips">{{Edit.tips}}</p>
    <div class="from">
      <div class="inp_group border-1px">
        <input type="text" :placeholder="Edit.tipPhone" disabled v-model="phone">
      </div>
      <div class="inp_group border-1px">
        <input type="text" placeholder="输入验证码">
        <button class="inp_group_right" :disabled="isSend" @click="sendMsg">{{sendBtnText}}</button>
      </div>
      <button class="from_btn" @click="step">下一步</button>
    </div>
  </div>
</template>

<script>
import NavBar from "components/NavBar";
import { Edit } from "common/staticData";
export default {
  data() {
    return {
      phone: "1762****222",
      isSend: false, //发送验证码按钮是否可点击
      sendBtnText: "获取验证码",
      timer: null,
      Edit: Edit[this.$route.params.type]
    };
  },
  created() {
    console.log(Edit[this.$route.params.type]);
  },
  components: { NavBar },
  methods: {
    clickLeft() {
      this.$router.push("/me/security");
    },
    step() {
      this.$router.push(`/me/edit1/${this.$route.params.type}`);
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
@import './style';
</style>
