<template>
  <div class="capital">
    <ul class="capital_title">
      <li class="type">买盘</li>
      <li class="num">数量</li>
      <li class="price">价格(USDT)</li>
      <li class="num">数量</li>
      <li class="type">卖盘</li>
    </ul>.
    <ul class="capital_single" v-for="(item,index) in List" :key="item">
      <li class="type">{{6-index}}</li>
      <li class="num">266894</li>
      <li class="price">
        <p>5793.82</p>
        <p>5793.88</p>
      </li>
      <li class="num">5433</li>
      <li class="type">6</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: new Array(6)
    };
  },
  components: {},
  methods: {}
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
