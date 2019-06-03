<template>
  <div class="me">
    <div class="me_top">
      <p class="me_top_title">我的</p>
      <div class="me_top_info">
        <router-link tag="div" to="/me/user" class="left">
          <p class="left_avatar">
            <img src="~assets/Images/avatar.jpg" alt>
          </p>
          <div class="left_user">
            <p>15560048800</p>
            <p>实盘账户</p>
          </div>
        </router-link>
        <div class="right">
          <button class="right_btn">切换至模拟盘</button>
        </div>
      </div>
      <div class="back_left">
        <van-icon class="back_icon" @click="clickLeft" name="arrow-left"/>
      </div>
    </div>
    <div class="me_cont">
      <div class="me_cont_top">
        <p class="title">USDT(余额)</p>
        <p class="num">26,580.00</p>
      </div>
      <div class="me_cont_btn">
        <button>立即充币</button>
        <button>提币</button>
      </div>
    </div>
    <div class="me_list">
      <van-cell is-link v-for="item in meList" :key="item.id" :to="item.link">
        <template slot="icon">
          <img class="icon_img" :src="item.icon" alt>
        </template>
        <template slot="title">
          <span class="custom-text">{{item.title}}</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import { meList } from "common/staticData";
export default {
  data() {
    return {
      meList: meList
    };
  },
  components: {},
  methods: {
    clickLeft() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style.styl';
</style>
