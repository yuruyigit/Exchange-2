<template>
  <div class="flash">
    <NavBar title="行业快讯" hideBorder fixed showL @clickLeft="clickLeft"/>
    <div class="flash_list">
      <p class="flash_list_title">2019-05-28 今日</p>
      <ul class="List">
        <li class="List_single">
          <h2 class="List_single_title">动态 | HT一小时内涨幅3.32% 现报3.4255美元</h2>
          <p
            class="List_single_content"
          >据《币世界》行情，HT一小时内涨幅3.32%，价格逼近昨日价格高点3.4900美元，现报3.4255美元，24小时涨幅3.9%</p>
          <p class="List_single_handle">
            <span class="left">10:39</span>
            <a class="right">
              <span>
                <img src="~assets/Images/News/zan.png" alt>
                103
              </span>
              <span>
                <img src="~assets/Images/News/not_cai.png" alt>
                5
              </span>
            </a>
          </p>
        </li>
        <li class="List_single">
          <h2 class="List_single_title">动态 | HT一小时内涨幅3.32% 现报3.4255美元</h2>
          <p
            class="List_single_content"
          >据《币世界》行情，HT一小时内涨幅3.32%，价格逼近昨日价格高点3.4900美元，现报3.4255美元，24小时涨幅3.9%</p>
          <p class="List_single_handle">
            <span class="left">10:39</span>
            <a class="right">
              <span>
                <img src="~assets/Images/News/zan.png" alt>
                103
              </span>
              <span>
                <img src="~assets/Images/News/not_cai.png" alt>
                5
              </span>
            </a>
          </p>
        </li>
      </ul>
    </div>
    <div class="flash_list">
      <p class="flash_list_title">2019-05-27 星期一</p>
      <ul class="List">
        <li class="List_single">
          <h2 class="List_single_title">动态 | HT一小时内涨幅3.32% 现报3.4255美元</h2>
          <p
            class="List_single_content"
          >据《币世界》行情，HT一小时内涨幅3.32%，价格逼近昨日价格高点3.4900美元，现报3.4255美元，24小时涨幅3.9%</p>
          <p class="List_single_handle">
            <span class="left">10:39</span>
            <a class="right">
              <span>
                <img src="~assets/Images/News/zan.png" alt>
                103
              </span>
              <span>
                <img src="~assets/Images/News/not_cai.png" alt>
                5
              </span>
            </a>
          </p>
        </li>
        <li class="List_single">
          <h2 class="List_single_title">动态 | HT一小时内涨幅3.32% 现报3.4255美元</h2>
          <p
            class="List_single_content"
          >据《币世界》行情，HT一小时内涨幅3.32%，价格逼近昨日价格高点3.4900美元，现报3.4255美元，24小时涨幅3.9%</p>
          <p class="List_single_handle">
            <span class="left">10:39</span>
            <a class="right">
              <span>
                <img src="~assets/Images/News/zan.png" alt>
                103
              </span>
              <span>
                <img src="~assets/Images/News/not_cai.png" alt>
                5
              </span>
            </a>
          </p>
        </li>
      </ul>
    </div>
    <div class="flash_list">
      <p class="flash_list_title">2019-05-26 星期日</p>
      <ul class="List">
        <li class="List_single">
          <h2 class="List_single_title">动态 | HT一小时内涨幅3.32% 现报3.4255美元</h2>
          <p
            class="List_single_content"
          >据《币世界》行情，HT一小时内涨幅3.32%，价格逼近昨日价格高点3.4900美元，现报3.4255美元，24小时涨幅3.9%</p>
          <p class="List_single_handle">
            <span class="left">10:39</span>
            <a class="right">
              <span>
                <img src="~assets/Images/News/zan.png" alt>
                103
              </span>
              <span>
                <img src="~assets/Images/News/not_cai.png" alt>
                5
              </span>
            </a>
          </p>
        </li>
        <li class="List_single">
          <h2 class="List_single_title">动态 | HT一小时内涨幅3.32% 现报3.4255美元</h2>
          <p
            class="List_single_content"
          >据《币世界》行情，HT一小时内涨幅3.32%，价格逼近昨日价格高点3.4900美元，现报3.4255美元，24小时涨幅3.9%</p>
          <p class="List_single_handle">
            <span class="left">10:39</span>
            <a class="right">
              <span>
                <img src="~assets/Images/News/zan.png" alt>
                103
              </span>
              <span>
                <img src="~assets/Images/News/not_cai.png" alt>
                5
              </span>
            </a>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from "components/NavBar";
export default {
  data() {
    return {};
  },
  components: {
    NavBar
  },
  methods: {
    clickLeft() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
