<template>
  <ul class="modulInfo">
    <router-link tag="li" to="/hot" class="single">
      <p class="Icon">
        <img src="~assets/Images/home/icon_hot.png" alt>
        <span></span>
      </p>
      <p class="size">
        <span class="size_top">{{$t('hotActvitity')}}</span>
        <span class="size_bot">Pop activities</span>
      </p>
    </router-link>
    <router-link tag="li" to="/guide" class="single">
      <p class="Icon">
        <img src="~assets/Images/home/icons_newUser.png" alt>
        <span></span>
      </p>
      <p class="size">
        <span class="size_top">{{$t('mewUser')}}</span>
        <span class="size_bot">Novice guide</span>
      </p>
    </router-link>
    <router-link tag="li" to="/disciple" class="single">
      <p class="Icon">
        <img src="~assets/Images/home/icons_disciple.png" alt>
        <span></span>
      </p>
      <p class="size">
        <span class="size_top">{{$t('Apprentice')}}</span>
        <span class="size_bot">Apprentice</span>
      </p>
    </router-link>
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
