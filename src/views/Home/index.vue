<template>
  <div class="home">
    <div class="home_top container">
      <HomeHead/>
      <Swipe/>
      <ModulInfo/>
    </div>
  </div>
</template>

<script>
import HomeHead from "components/HomeHead";
import Swipe from "components/Swipe";
import ModulInfo from "components/ModulInfo";
export default {
  components: {
    HomeHead,
    Swipe,
    ModulInfo
  }
};
</script>
<style lang='stylus'>
@import '~assets/stylus/variable';
.home {
  background-color: $bgMain;
  height: 100%;
  &_top {
    background-color: $write;
  }
}
</style>

