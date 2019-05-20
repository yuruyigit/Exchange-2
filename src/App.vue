<template>
  <div id="app">
    <div class="main">
      <transition :name="transitionName">
        <router-view/>
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
    this.Socket = new WBT();
  },
  mounted() {
    let _this = this;
    setTimeout(() => {
      _this.Socket.isReconnect = true;
      _this.Socket.close();

      _this.Socket.initWs();
    }, 1000);
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
    flex: 1;
    .slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active {
      will-change: transform;
      transition: all 500ms;
      position: absolute;
    }
    .slide-right-enter {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    .slide-right-leave-active {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    .slide-left-enter {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    .slide-left-leave-active {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  }
}
</style>
