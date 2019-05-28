<template>
  <div class="pos">
    <TradingView></TradingView>
  </div>
</template>

<script>
import TradingView from "components/TradingView";
export default {
  data() {
    return {};
  },
  components: { TradingView },
  methods: {}
};
</script>

<style scoped lang="stylus">
.pos {
  width: 100%;
  height: 800px;
}
</style>
