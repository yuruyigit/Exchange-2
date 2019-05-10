<template>
  <div id="app">
    <router-view class="main"/>
    <Footer class="footer"></Footer>
  </div>
</template>
<script>
import Footer from "components/Footer";
import { mapActions } from "vuex";
import WBT from "./common/TollClass/socket";
export default {
  data() {
    return {
      Socket: null
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
  methods: {}
};
</script>

<style lang="stylus">
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
  }
}
</style>
