<template>
  <div class="tabs">
    <ul>
      <li>持仓</li>
      <li>挂单</li>
      <li>历史</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style scoped lang="stylus">
.tabs {
  width: 100%;
  height: 50px;
  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
    li {
      width: 33%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
