<template>
  <div class="sys">
    <ul class="sys_single border-1px" v-for="item in List" :key="item">
      <li class="top">
        <p class="top_roud"></p>
        <p class="top_title">『系统公告』</p>
        <p class="top_time">2019/06/22</p>
      </li>
      <li class="cont">尊敬的投资者用户们，FastPay充币商家招商『刘超』银行卡已下架，提醒您，暂停期间请勿转账至该卡内，若因转款造成损失将由用户自行承担。FastPay充币商家更新转帐银行卡信息如下： 户名：肖美连 银行：工商银行 卡号：6222021901022565327 生效时间：即刻生效。（客服：币小如）</li>
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
