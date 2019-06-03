<template>
  <div class="from">
    <div class="inp_group border-1px">
      <input type="password" placeholder="输入旧密码">
    </div>
    <div class="inp_group border-1px">
      <input type="password" placeholder="请设置新密码">
    </div>
    <p class="from_tips">* 6 - 16 位字母和数字组成</p>
    <button class="from_btn" :disabled="isClick">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClick: true
    };
  },
  components: {},
  methods: {}
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
