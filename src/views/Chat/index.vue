<template>
  <div class="chat">
    <NavBar title="我的持仓" fixed/>
    <div class="chat_wrap">
      <div class="chat_wrap_top">
        <div class="card">
          <div class="card_size">
            <p>USDT</p>
            <p>2,210.03</p>
          </div>
          <p class="card_btn">
            <button>立即充币</button>
          </p>
        </div>
        <ul class="list">
          <li>
            <p>可用保证金</p>
            <p>0.00</p>
          </li>
          <li>
            <p>已用保证金</p>
            <p>0.00</p>
          </li>
          <li>
            <p>账户净值</p>
            <p>0.00</p>
          </li>
        </ul>
      </div>
      <div class="chat_wrap_info">
        <div class="tabs">
          <ul class="tabs_wrap">
            <router-link to="/chat" tag="li">
              <p @click="tabClick(0)">持仓</p>
            </router-link>
            <router-link to="/chat/list" tag="li">
              <p @click="tabClick(1)">挂单</p>
            </router-link>
            <router-link to="/chat/history" tag="li">
              <p>历史</p>
            </router-link>
          </ul>
          <div :style="styls" class="tabs_line"></div>
        </div>
        <div class="cont">
          <transition :name="transitionName">
            <router-view ref="child" :showDialog="showDialog"/>
          </transition>
        </div>
      </div>
    </div>
    <van-dialog
      v-model="show"
      :title="`确认${dialogData.title}`"
      show-cancel-button
      :beforeClose="beforeClose"
      class="customDialog"
    >
      <p class="order">订单编号：123456</p>
      <ul class="hold_dialog">
        <li>
          <p>浮动盈亏</p>
          <p>+1.92</p>
        </li>
        <li>
          <p>开仓价</p>
          <p>5.8737</p>
        </li>
        <li>
          <p>当前价</p>
          <p>5.8737</p>
        </li>
      </ul>
    </van-dialog>
  </div>
</template>

<script>
import NavBar from "components/NavBar";
export default {
  data() {
    return {
      active: 0,
      styls: { left: 0 },
      transitionName: "slide-left",
      show: false,
      dialogData: {}
    };
  },
  created() {
    this._initPage();
  },
  components: { NavBar },
  methods: {
    showDialog(data) {
      this.dialogData = data;
      this.show = true;
    },
    _initPage() {
      if (this.$route.name == "ChatList") {
        this.tabClick(1);
      }
    },
    tabClick(index) {
      this.styls = {
        left: index * 33 + "%"
      };
    },
    beforeClose(action, done) {
      if (action == "cancel") {
        done();
      } else {
        this.$refs.child.refresh(done);
      }
      return false;
    }
  },
  watch: {
    $route(to, from) {
      let toName = to.name;
      const toIndex = to.meta.id;
      const fromIndex = from.meta.id;
      this.transitionName = toIndex < fromIndex ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style lang="stylus">
@import './style';
</style>
