<template>
  <div class="msg">
    <NavBar :title="title" fixed showL @clickLeft="clickLeft"/>
    <div class="msg_wrapper">
      <transition :name="transitionName">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import NavBar from "components/NavBar/Otc";
export default {
  data() {
    return {
      transitionName: "slide-left",
      title: [
        { title: "系统消息", url: "/me/msg", left: 0 },
        { title: "公告消息", url: "/me/msg/notic", left: 1 }
      ]
    };
  },

  components: {
    NavBar
  },
  methods: {
    clickLeft() {
      this.$router.push("/me");
    }
  },
  watch: {
    $route(to, from) {
      const toIndex = to.meta.id;
      const fromIndex = from.meta.id;
      this.transitionName = toIndex < fromIndex ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style lang="stylus">
@import './style';
</style>
