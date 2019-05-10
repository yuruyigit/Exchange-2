<template>
  <div class="footer border-1px">
    <ul class="footer_list">
      <router-link v-for="item in navList" :key="item.id" tag="li" :to="item.path">
        <img :src="tabNav == item.id ? item.active : item.normal" alt>
        <p :class="tabNav == item.id && 'active'">{{$t('tabNav')[item.name]}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
import icon_home from "Images/footer/home.png";
import icon_home_a from "Images/footer/home_active.png";
import navList from "common/tabNav";
import { mapState } from "vuex";
export default {
  data() {
    return {
      navList: navList.nav
    };
  },
  computed: {
    ...mapState(["tabNav"])
  },
  created() {
    console.log(this.tabNav);
  },
  components: {},
  methods: {
    activeIcon(id) {
      return tabNav == id ? item.active : item.normal;
    }
  }
};
</script>

<style  lang="stylus">
@import '~assets/stylus/variable.styl';
.footer {
  height: 50px;
  border-1px(#999);
  .footer_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      width: 20%;
      cursor: pointer;
      text-align: center;
      img {
        width: 48px;
      }
      p {
        color: #999;
        &.active {
          color: #00a7e0;
        }
      }
    }
  }
}
</style>
