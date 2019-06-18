<template>
  <div class="order">
    <ul class="order_title">
      <li class="order_title_l">
        <img src="~assets/Images/pos/icon_explain.png" alt>
      </li>
      <li class="order_title_m">{{title}}</li>
      <li class="order_title_r">
        <img src="~assets/Images/pos/icon_close.png" alt>
      </li>
    </ul>
    <div class="order_handle">
      <p class="order_handle_l">
        切换至专业版
        <img src="~assets/Images/pos/icon_zy.png" alt>
      </p>
      <p class="order_handle_r">
        挂单
        <img src="~assets/Images/pos/icon_down.png" alt>
      </p>
    </div>
    <div class="order_form">
      <div class="from_single">
        <div class="from_single_label">
          <p>挂单价格</p>
          <p>价格≥8572.19&nbsp;或&nbsp;价格≤8552.19</p>
        </div>
        <div class="from_single_cont">
          <div class="box">
            <input type="text" v-model="price">
            <img class="minus" src="~assets/Images/pos/icon_minus.png" alt>
            <img class="add" src="~assets/Images/pos/icon_add.png" alt>
          </div>
        </div>
      </div>
      <div class="from_single">
        <div class="from_single_label">
          <p>手数</p>
          <p>价值1个BTC</p>
        </div>
        <div class="from_single_cont">
          <div class="hand">
            <button
              v-for="item in handList"
              :key="item"
              :class="item == checkHand&&'active'"
              @click="handClick(item,'checkHand')"
            >{{item}}手</button>
          </div>
        </div>
      </div>
      <div class="from_single">
        <div class="from_single_label">
          <p>保证金(USDT)</p>
          <p>可用&nbsp;-&nbsp;USDT，杠杆约32.19X</p>
        </div>
        <div class="from_single_cont">
          <div class="hand cash">
            <button
              v-for="item in cashList"
              :key="item"
              :class="item == checkCash&&'active'"
              @click="handClick(item,'checkCash')"
            >{{item}}手</button>
          </div>
        </div>
      </div>
      <div class="submit_btn">
        <button>挂单买涨&nbsp;{{price}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "快捷下单",
      type: String
    }
  },
  data() {
    return {
      price: 8572.19,
      checkHand: 2,
      checkCash: 200,
      handList: [1, 2, 3, 5, 8],
      cashList: [200, 240, 360]
    };
  },
  components: {},
  methods: {
    handClick(item, type) {
      this[type] = item;
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
