<template>
  <div class="pos">
    <NavBar title="BTC/USDT" fixed showL @clickLeft="clickLeft"/>
    <div class="pos_top">
      <div class="pos_top_t">
        <div class="left color-green">5794.42</div>
        <ul class="right">
          <li>高(24H)&nbsp;&nbsp;5871.71</li>
          <li>低(24H)&nbsp;&nbsp;5821.60</li>
          <li>量(24H)&nbsp;&nbsp;689950.21</li>
        </ul>
      </div>
      <div class="pos_top_btn">
        <div class="btn_list">
          <button :class="btnType == 1&&'active'" @click="clickBtn(1)">1分</button>
          <button :class="btnType == 5&&'active'" @click="clickBtn(5)">5分</button>
          <button :class="btnType == 15&&'active'" @click="clickBtn(15)">15分</button>
          <button :class="btnType == 30&&'active'" @click="clickBtn(30)">30分</button>
          <button :class="btnType == 60&&'active'" @click="clickBtn(60)">1时</button>
          <button @click="clickBtnMore(true)">更多</button>
          <button @click="clickBtnMore(false)">指标</button>
        </div>
        <transition name="moreIndex">
          <div v-if="isShow" class="child_list">
            <div v-show="isOther">
              <button @click="clickBtn('D')">1天</button>
              <button @click="clickBtn('W')">1周</button>
              <button @click="clickBtn('M')">1月</button>
            </div>
            <div v-show="!isOther">
              <button @click="clickIndicator('MACD')">MACD</button>
              <button @click="clickIndicator('BOLL')">BOLL</button>
              <button @click="clickIndicator('KDJ')">KDJ</button>
              <button @click="clickIndicator('RSI')">RSI</button>
              <button @click="clickIndicator('WR')">WR</button>
              <button @click="clickIndicator('closeOther')">隐藏</button>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="k_line">
      <!-- <TradingView ref="trading" symbol="BTC/USDT"></TradingView> -->
      <TradingView ref="trading"></TradingView>
    </div>
    <div class="pos_wrap">
      <div class="tabs">
        <ul class="tabs_wrap">
          <router-link to="/position" tag="li">
            <p @click="tabClick(0)">资金</p>
          </router-link>
          <router-link to="/position/intord" tag="li">
            <p @click="tabClick(1)">简介</p>
          </router-link>
        </ul>
        <div :style="styls" class="tabs_line"></div>
      </div>
      <div class="cont">
        <transition :name="transitionName">
          <router-view/>
        </transition>
      </div>
    </div>
    <div class="handWrap">
      <button>买跌 5794.34</button>
      <button>买涨 5798.39</button>
    </div>
  </div>
</template>

<script>
import NavBar from "components/NavBar/pos";
import TradingView from "components/TradingView";
export default {
  data() {
    return {
      transitionName: "slide-left",
      btnType: 5,
      isOther: true,
      isShow: true
    };
  },
  created() {
    this._initPage();
  },
  components: { NavBar, TradingView },
  methods: {
    _initPage() {
      if (this.$route.name == "Intord") {
        this.tabClick(1);
      } else {
        this.tabClick(0);
      }
    },
    tabClick(index) {
      this.styls = {
        left: index * 50 + "%"
      };
    },
    clickLeft() {
      this.$router.push("/");
    },
    clickBtn(resolution) {
      this.isShow = false;
      this.btnType = resolution;
      this.$refs.trading.clickBtn(resolution);
    },

    clickBtnMore(bol) {
      this.isOther = bol;
      this.isShow = true;
    },
    clickIndicator(type) {
      console.log(this.$refs.trading[type]());
    }
  },
  watch: {
    $route(to, from) {
      let toName = to.name;
      const toIndex = to.meta.id;
      const fromIndex = from.meta.id;
      if (toName == "Intord") {
        this.tabClick(1);
      } else {
        this.tabClick(0);
      }
      this.transitionName = toIndex < fromIndex ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
