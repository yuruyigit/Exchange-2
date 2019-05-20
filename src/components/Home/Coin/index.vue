<template>
  <div class="coin">
    <ul class="coin_single" v-for="item in List" :key="item">
      <li class="trade">BTC/USDT</li>
      <li class="dollar" :class="isColor(item)">5200</li>
      <li class="rate" :class="isColor(item)">{{item == 2?'-':'+'}}52%</li>
      <li class="cny">￥52100</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: [1, 2, 3]
    };
  },
  components: {},
  methods: {
    isColor(pric) {
      if (pric == 2) {
        return "color-red";
      } else {
        return "color-green";
      }
    }
  }
};
</script>

