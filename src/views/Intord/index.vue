<template>
  <div class="intord">
    <NavBar :title="product.title" fixed showL @clickLeft="clickLeft(product.name)"/>
    <div class="intord_single" v-for="item in product.data" :key="item.id">
      <p class="intord_single_title">{{item.title}}</p>
      <p class="intord_single_cont" v-for="(text,index) in item.List" :key="index" v-html="text"></p>
    </div>
  </div>
</template>

<script>
import NavBar from "components/NavBar";
import { IntordList } from "common/staticData";
export default {
  data() {
    return {
      product: IntordList[this.$route.params.type]
    };
  },
  components: {
    NavBar
  },
  methods: {
    clickLeft(name) {
      console.log(name);
      if (name == "Register") {
        this.$router.back();
      } else {
        this.$router.push({ name });
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
