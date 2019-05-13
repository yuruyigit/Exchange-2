<template>
  <ul class="modulInfo">
    <li class="single">
      <p class="Icon">
        <img src="~assets/Images/home/icon_hot.png" alt>
        <span></span>
      </p>
      <p class="size">
        <span class="size_top">{{$t('hotActvitity')}}</span>
        <span class="size_bot">Pop activities</span>
      </p>
    </li>
    <li class="single">
      <p class="Icon">
        <img src="~assets/Images/home/icons_newUser.png" alt>
        <span></span>
      </p>
      <p class="size">
        <span class="size_top">{{$t('mewUser')}}</span>
        <span class="size_bot">Novice guide</span>
      </p>
    </li>
    <li class="single">
      <p class="Icon">
        <img src="~assets/Images/home/icons_disciple.png" alt>
        <span></span>
      </p>
      <p class="size">
        <span class="size_top">{{$t('Apprentice')}}</span>
        <span class="size_bot">Apprentice</span>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style scoped lang="stylus">
@import '~assets/stylus/variable';
.modulInfo {
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  .single {
    display: flex;
    .Icon {
      position: relative;
      margin-right: 6px;
      img {
        width: 32px;
      }
      span {
        position: absolute;
        display: inline-block;
        width: 4px;
        height: 4px;
        background-color: #ff0000;
        border-radius: 2px;
        right: -2px;
        top: -2px;
      }
    }
    .size {
      display: flex;
      flex-direction: column;
      height: 30px;
      justify-content: space-between;
      &_top {
        font-size: 14px;
        color: $color3;
      }
      &_bot {
        font-size: 10px;
        color: #cecece;
      }
    }
  }
}
</style>
