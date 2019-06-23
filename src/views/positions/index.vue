<template>
  <div class="pos">
    <NavBar title="BTC/USDT" fixed showL @clickLeft="clickLeft" @handleClick="showSelect"/>
    <van-popup v-model="show" position="top">
      <div class="selectWrap">
        <h2>BTC/USDT</h2>
        <ul class="selectList">
          <li @click="select">
            <p class="coin">BTC/USDT</p>
            <p class="price">{{detailData.close}}</p>
          </li>
          <li class="active">
            <p class="coin">ETH/USDT</p>
            <p class="price">296.62</p>
          </li>
          <li>
            <p class="coin">ETH/USDT</p>
            <p class="price">296.62</p>
          </li>
          <li>
            <p class="coin">ETH/USDT</p>
            <p class="price">296.62</p>
          </li>
          <li>
            <p class="coin">ETH/USDT</p>
            <p class="price">296.62</p>
          </li>
          <li>
            <p class="coin">ETH/USDT</p>
            <p class="price">296.62</p>
          </li>
        </ul>
        <button class="selectBtn">切换至实际盘</button>
        <button class="closeBtn" @click="show=false">点击收起</button>
      </div>
    </van-popup>
    <!-- @click="show=!show" -->
    <div class="pos_top">
      <div class="pos_top_t">
        <div class="left color-green">{{detailData.close|toFixeds(2)}}</div>
        <ul class="right">
          <li>高(24H)&nbsp;&nbsp;{{detailData.high|toFixeds(2)}}</li>
          <li>低(24H)&nbsp;&nbsp;{{detailData.low|toFixeds(2)}}</li>
          <li>量(24H)&nbsp;&nbsp;{{detailData.amount|toFixeds(2)}}</li>
        </ul>
      </div>
      <div class="pos_top_btn">
        <div class="btn_list">
          <button :class="TVInterval == 1&&'active'" @click="clickBtn(1)">1分</button>
          <button :class="TVInterval == 5&&'active'" @click="clickBtn(5)">5分</button>
          <button :class="TVInterval == 15&&'active'" @click="clickBtn(15)">15分</button>
          <button :class="TVInterval == 30&&'active'" @click="clickBtn(30)">30分</button>
          <button :class="TVInterval == 60&&'active'" @click="clickBtn(60)">1时</button>
          <button @click="clickBtnMore(true)">更多</button>
          <button @click="clickBtnMore(false)">指标</button>
        </div>
        <transition name="moreIndex">
          <div v-if="isShow" class="child_list">
            <div v-show="isOther">
              <button :class="TVInterval == '240'&&'active'" @click="clickBtn(240)">4时</button>
              <button :class="TVInterval == '1D'&&'active'" @click="clickBtn('1D')">1天</button>
              <button :class="TVInterval == '1W'&&'active'" @click="clickBtn('1W')">1周</button>
              <button :class="TVInterval == '1M'&&'active'" @click="clickBtn('1M')">1月</button>
            </div>
            <div v-show="!isOther">
              <button :class="TVInterval == 'MACD'&&'active'" @click="clickIndicator('MACD')">MACD</button>
              <button :class="TVInterval == 'BOLL'&&'active'" @click="clickIndicator('BOLL')">BOLL</button>
              <button :class="TVInterval == 'KDJ'&&'active'" @click="clickIndicator('KDJ')">KDJ</button>
              <button :class="TVInterval == 'RSI'&&'active'" @click="clickIndicator('RSI')">RSI</button>
              <button :class="TVInterval == 'WR'&&'active'" @click="clickIndicator('WR')">WR</button>
              <button
                :class="TVInterval == 'closeOther'&&'active'"
                @click="clickIndicator('closeOther')"
              >隐藏</button>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="k_line">
      <TradingView ref="trading" :symbol="symbol" :interval="TVInterval"></TradingView>
      <!-- <TradingView ref="trading"></TradingView> -->
    </div>
    <div class="pos_wrap">
      <div class="tabs">
        <ul class="tabs_wrap">
          <li :class="tabsType == 'Capital'&&'active'" @click="tabClick('Capital')">
            <p>资金</p>
          </li>
          <li :class="tabsType == 'Intord'&&'active'" @click="tabClick('Intord')">
            <p>简介</p>
          </li>
        </ul>
        <div :style="styls" class="tabs_line"></div>
      </div>
      <div class="cont">
        <Capital v-if="tabsType == 'Capital'"/>
        <Intord v-if="tabsType == 'Intord'"/>
      </div>
    </div>
    <div class="handWrap">
      <button>买跌 5794.34</button>
      <button>买涨 5798.39</button>
    </div>
    <PlaceOrder v-show="false"/>
  </div>
</template>

<script>
import NavBar from "components/NavBar/pos";
import Capital from "./Capital";
import Intord from "./Intord";
import PlaceOrder from "./PlaceOrder";
import TradingView from "components/TradingView";
import WBT from "common/TollClass/socket";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      TVInterval: this.$lStore.get("TVInterval") || 5,
      isOther: true,
      isShow: false,
      Indicator: "closeOther",
      show: false,
      symbol: "BTC/USDT",
      tabsType: "Capital",
      styls: {
        left: 0
      },
      detailData: {},
      Socket: null
    };
  },
  created() {
    this.Socket = new WBT({ url: "TVsocket" });
    this.initSocket();
  },
  destroyed() {
    this.Socket.close();
  },
  components: {
    NavBar,
    TradingView,
    Capital,
    Intord,
    PlaceOrder
  },
  methods: {
    //初始化Socket
    initSocket() {
      this.Socket.initWs();
      let datas = this.resolutionSocket(this.TVInterval);
      setTimeout(() => this.Socket.Send(JSON.stringify(datas)), 100);
      this.$EventListener.on("TVdetail", this.renderDetail);
      this.$EventListener.on("TVdepth", this.rederDeoth);
    },
    //更新头部价格成交量
    renderDetail(data) {
      console.log(data);
      setTimeout(() => {
        this.detailData = data;
      }, 300);
    },
    rederDeoth(data) {
      //   console.log(data);
    },
    //点击tabs
    tabClick(type) {
      let index = 0;
      if (type === "Capital") {
        index = 0;
      } else if (type === "Intord") {
        index = 1;
      }
      this.styls = {
        left: index * 50 + "%"
      };
      this.tabsType = type;
    },
    //选择币种
    select() {},
    clickLeft() {
      this.$router.push("/");
    },
    //点击TV的分辨率
    clickBtn(resolution) {
      let datas = this.resolutionSocket(resolution);
      this.$lStore.set("TVInterval", resolution);
      this.isShow = false;
      this.TVInterval = resolution;
      this.$refs.trading.clickBtn(resolution);
      this.Socket.Send(JSON.stringify(datas));
    },
    //socket 时间区间格式化
    resolutionSocket(resolution) {
      let type = typeof resolution,
        datas = {
          "btcusdt-ticker": "0",
          "btcusdt-depth": "0"
        };
      if (type == "number") {
        datas[`btcusdt-kline-${resolution}m`] = 0;
      } else if (type == "string") {
        if (resolution == "1M") {
          datas[`btcusdt-kline-${resolution}`] = 0;
        } else {
          datas[`btcusdt-kline-${resolution.toLowerCase()}`] = 0;
        }
      }
      return datas;
    },
    //显示币种列表
    showSelect() {
      this.show = true;
    },
    //点击打开更多
    clickBtnMore(bol) {
      this.isOther = bol;
      this.isShow = true;
    },
    //选择指标类型
    clickIndicator(type) {
      this.$refs.trading[type]();
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
