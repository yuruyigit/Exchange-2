<template>
  <div class="nav_wrapper">
    <div class="nav_bar nav_fixed">
      <div class="nav_bar_l">
        <van-icon v-show="showL" class="back_icon" @click="clickLeft" name="arrow-left"/>
      </div>
      <div class="nav_bar_c">
        {{title}}
        <van-icon name="arrow-down"/>
      </div>
      <div class="nav_bar_r">{{showR?right:''}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
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
    return {};
  },
  components: {},
  methods: {
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
    &.nav_fixed {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
      background-color: #1b212d;
    }
    &_l, &_r {
      font-size: 12px;
      color: $color9;
      extend-click();
      cursor: pointer;
    }
    &_c {
      font-size: 18px;
      color: $write;
    }
    .back_icon {
      font-size: 20px;
      color: $color9;
    }
  }
}
</style>
