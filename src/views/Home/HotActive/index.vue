<template>
  <div class="hot">
    <NavBar title="热门活动" fixed showL @clickLeft="clickLeft"/>
    <div class="hot_list">
      <router-link v-for="(item,index) in List" :key="index" class="hot_list_single" to="/">
        <img src="~assets/Images/home/banner.png" alt>
      </router-link>
    </div>
  </div>
</template>

<script>
import NavBar from "components/NavBar";
export default {
  data() {
    return {
      List: new Array(10)
    };
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
