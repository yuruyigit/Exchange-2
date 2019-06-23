<template>
  <div class="swipe">
    <Swiper
      class="swipe-wrap"
      :autoPlay="true"
      :showIndicator="true"
      interval="2500"
      duration="500"
      v-if="bannerList.length"
    >
      <Slide v-for="item in bannerList" :key="item.id">
        <img src="~assets/Images/home/banner.png" alt>
      </Slide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, Slide } from "vue-swiper-component";

export default {
  props: {
    bannerList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      List: new Array(6)
    };
  },
  components: {
    Swiper,
    Slide
  },
  created() {},
  methods: {
    hanleSwipe() {
      console.log("666666");
    }
  }
};
</script>