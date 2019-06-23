<template>
  <div class="nav_wrapper">
    <div class="nav_bar" :class="isClass(fixed,hideBorder)">
      <div class="nav_bar_l">
        <van-icon v-show="showL" class="back_icon" @click="clickLeft" name="arrow-left"/>
      </div>
      <div class="nav_bar_c">
        <ul class="tabs_wrap">
          <router-link v-for="item in title" :to="item.url" :key="item.title" tag="li">
            <p @click="tabClick(item.left)">{{item.title}}</p>
          </router-link>
        </ul>
        <div :style="styls" class="tabs_line"></div>
      </div>
      <div class="nav_bar_r">
        <img v-show="showR" src="~assets/Images/Otc/icon_detail.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      required: true
    },
    left: {
      type: String,
      default: "返回"
    },
    right: {
      type: String,
      default: "设置"
    },
    showL: {
      type: Boolean,
      default: false
    },
    showR: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    hideBorder: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { styls: { left: 0 } };
  },
  created() {
    this._initPage();
  },
  components: {},
  methods: {
    _initPage() {
      if (this.$route.name == "Wallet" || this.$route.name == 'NoticMsg') {
        this.tabClick(1);
      }
    },
    tabClick(index) {
      this.styls = {
        left: index * 50 + "%"
      };
    },
    clickLeft(e) {
      this.$emit("clickLeft");
      e.preventDefault();
    },
    isClass(fixed, border) {
      if (fixed && !border) {
        return "nav_fixed border-1px";
      } else if (fixed) {
        return "nav_fixed";
      } else if (!border) {
        return "border-1px";
      } else {
        return "";
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~assets/stylus/variable';
.nav_wrapper {
  width: 100%;
  height: 46px;
  .nav_bar {
    width: 100%;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background-color: $write;
    &.border-1px {
      border-1px($color12, calc(100% - 1px));
    }
    &.nav_fixed {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
    }
    &_l, &_r {
      font-size: 12px;
      color: $color6;
      extend-click();
      cursor: pointer;
      img {
        width: 20px;
        extend-click();
      }
    }
    &_c {
      font-size: 18px;
      color: $color3;
      position: relative;
      width: 250px;
      .tabs_wrap {
        display: flex;
        height: 45px;
        justify-content: space-between;
        align-items: center;
        li {
          width: 124px;
          p {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: $color3;
          }
          &.router-link-exact-active {
            p {
              color: $ablue;
            }
          }
        }
      }
      .tabs_line {
        transition-duration: 0.3s;
        position: absolute;
        width: 124px;
        height: 2px;
        background: linear-gradient(left, #2db5ff, #2c68fc);
        left: 0;
        bottom: 0;
        z-index: 9;
      }
    }
    .back_icon {
      font-size: 20px;
      color: $color3;
    }
  }
}
</style>
