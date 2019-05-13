<template>
  <div class="swipe"> 
    <Swiper class="swipe-wrap" :autoPlay='true' :showIndicator='true' interval="2500" duration="500">
      <Slide>
        <img src="~assets/Images/home/banner.png" alt>
      </Slide>
      <Slide>
        <img src="~assets/Images/home/banner.png" alt>
      </Slide>
      <Slide>
        <img src="~assets/Images/home/banner.png" alt>
      </Slide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, Slide } from "vue-swiper-component";
export default {
  data() {
    return {};
  },
  components: {
    Swiper,
    Slide
  },
  methods: {
    hanleSwipe() {
      console.log("666666");
    }
  }
};
</script>

<style scoped lang="stylus">
.swipe {
  position: relative;
  &-wrap {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
