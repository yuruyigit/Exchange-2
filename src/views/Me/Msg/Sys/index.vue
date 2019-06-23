<template>
  <div class="sys">
    <ul class="sys_single border-1px" v-for="item in List" :key="item">
      <li class="top">
        <p class="top_roud"></p>
        <p class="top_title">订单失效通知(模拟)</p>
        <p class="top_time">2019/06/22</p>
      </li>
      <li class="cont">您的挂单P3H560XZB已过有效期，挂单已失效。</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: new Array(10)
    };
  },
  components: {},
  methods: {}
};
</script>
