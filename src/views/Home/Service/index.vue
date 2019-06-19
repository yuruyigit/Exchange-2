<template>
  <div class="service">
    <NavBar title="联系客服" hideBorder fixed showL @clickLeft="clickLeft"/>
    <div class="service_wrap">
      <ScrollH scrollToEndFlag pulldown @pullDown="pullDown" :data="List">
        <p class="time">22:35</p>
        <div
          class="msg"
          v-for="(item,index) in List"
          :key="item+index"
          :class="item !== 'system_msg'&&'self'"
        >
          <div class="msg_l">
            <img src="~assets/Images/avatar.jpg" alt>
          </div>
          <div class="msg_r" v-if="item == 'system_msg'">
            <p class="tips">哈喽，我是XXXX人客服~</p>
            <p class="tips">您是不是要咨询以下问题</p>
            <p>1、充/提币有哪些方式？</p>
            <p>2、杠杆交易下单有哪些方式？</p>
            <p>3、保证金交易是什么意思？</p>
            <p>4、忘记密码怎么办？</p>
            <p>5、推广下线是如何分成的？</p>
          </div>
          <div class="msg_r" v-else>{{item}}</div>
        </div>
      </ScrollH>
    </div>
    <div class="service_send">
      <div class="inp">
        <input type="text" v-model="inpVal" @keyup.enter="sendMsg(inpVal)">
        <p class="icon">
          <img src="~assets/Images/emoticon.png" alt>
        </p>
      </div>
      <button @click="sendMsg(inpVal)">发送</button>
    </div>
  </div>
</template>

<script>
import NavBar from "components/NavBar";
import ScrollH from "components/ScrollH";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      isLoading: false,
      List: [],
      inpVal: ""
    };
  },
  components: {
    NavBar,
    ScrollH
  },
  mounted() {
    setTimeout(() => {
      this.List = ["system_msg"];
    }, 1000);
  },
  methods: {
    //发送消息
    sendMsg(val) {
      if (val.trim()) {
        let List = this.List;
        List = [...List, val];
        this.List = List;
        this.inpVal = "";
      } else {
        this.$toast("聊天内容不能为空！");
      }
    },
    pullDown(scroll) {
      setTimeout(() => {
        console.log("到头了");
        scroll.finishPullDown();
      }, 1000);
    },
    clickLeft() {
      this.$router.push("/");
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.$toast({
          message: "刷新成功",
          duration: 500
        });
      }, 500);
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
