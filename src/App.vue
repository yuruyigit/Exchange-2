<template>
  <div id="app">
    <div class="main">
      <transition :name="transitionName">
        <router-view class="main_wrapper"/>
      </transition>
    </div>
    <router-view name="mainfooter"></router-view>
  </div>
</template>
<script>
import Footer from "components/Footer";
import { mapActions } from "vuex";
import WBT from "./common/TollClass/socket";
export default {
  data() {
    return {
      Socket: null,
      transitionName: "slide-left"
    };
  },
  created() {
  },
  mounted() {
//    this.Socket = new WBT({ url: "testSocket" });
//    this.Socket.initWs();
  },
  components: {
    Footer
  },
  methods: {},
  watch: {
    $route(to, from) {
      let toName = to.name;
      const toIndex = to.meta.id;
      const fromIndex = from.meta.id;
      this.transitionName = toIndex < fromIndex ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style lang="stylus">
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    flex: 1;
    &_wrapper {
      width: 100%;
    }
  }
}
</style>
