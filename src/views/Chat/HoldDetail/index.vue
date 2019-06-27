<template>
  <div class="holdD">
    <NavBar title="持仓详情" fixed showL @clickLeft="clickLeft"/>
    <div class="holdD_btn">
      <ScrollH scrollX :data="btnList">
        <div class="holdD_btn_scroll" ref="scrollW">
          <button v-for="item in btnList" :key="item.title">{{item.title}}</button>
        </div>
      </ScrollH>
    </div>
  </div>
</template>

<script>
import ScrollH from "components/ScrollH";
import NavBar from "components/NavBar";
export default {
  data() {
    this.btnList = [
      { title: "1分" },
      { title: "5分" },
      { title: "15分" },
      { title: "30分" },
      { title: "1时" },
      { title: "1日" },
      { title: "1周" },
      { title: "1月" }
    ];
    return {};
  },
  mounted(){
      this.$nextTick(()=>{
          this.$refs.scrollW.style.width=536+'px';
      })
  },
  components: {
    NavBar,
    ScrollH
  },
  methods: {
    clickLeft() {
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
