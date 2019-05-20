<template>
  <div class="home">
    <div class="home_top container">
      <HomeHead/>
      <Swipe/>
      <ModulInfo/>
      <Notice/>
      <Coin/>
    </div>
    <Legal/>
    <News/>
    <Tips/>
  </div>
</template>

<script>
import HomeHead from "components/Home/HomeHead";
import Swipe from "components/Home/Swipe";
import ModulInfo from "components/Home/ModulInfo";
import Notice from "components/Home/Notice";
import Coin from "components/Home/Coin";
import Legal from "components/Home/Legal";
import News from "components/Home/News";
import Tips from "components/Tips";
export default {
  data() {
    return {};
  },
  components: {
    HomeHead,
    Swipe,
    ModulInfo,
    Notice,
    Coin,
    Legal,
    News,
    Tips
  },
  methods: {}
};
</script>
<style lang='stylus'>
@import './style';
</style>

