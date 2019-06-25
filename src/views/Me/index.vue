<template>
  <div class="me">
    <div class="me_top">
      <p class="me_top_title">我的</p>
      <div class="me_top_info">
        <router-link tag="div" to="/me/user" class="left">
          <p class="left_avatar">
            <img :src="userInfo.portrait" alt>
          </p>
          <div class="left_user">
            <p>{{userInfo.loginName}}</p>
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
        <button @click="toUrl('/otc')">立即充币</button>
        <button @click="toUrl('/withdraw')">提币</button>
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
import { mapState } from "vuex";
export default {
  data() {
    return {
      meList: meList
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {
    this.getUser();
  },
  components: {},
  methods: {
    getUser() {
      this.$http({ url: "/v1/position/list", method: "get" }).then(res => {
        console.log(res);
      });
    },
    toUrl(url) {
      this.$router.push(url);
    },
    clickLeft() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style.styl';
</style>
