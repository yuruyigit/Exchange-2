<template>
  <div class="asked">
    <NavBar title="常见问题" fixed showL @clickLeft="clickLeft"/>
    <div class="asked_list">
      <van-collapse v-model="name" accordion>
        <van-collapse-item
          v-for="item in askedData"
          :title="item.title"
          :key="item.name"
          :name="item.name"
        >
          <p v-for="(item1,index) in item.content" :key="index">{{item1}}</p>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
import NavBar from "components/NavBar";
import { askedData } from "common/staticData";
export default {
  data() {
    return {
      name: null,
      askedData: []
    };
  },
  components: {
    NavBar
  },
  created() {
    this._initPage(this.$route.params.type, this.$route.query.name);
  },
  methods: {
    _initPage(type, name) {
      this.askedData = askedData[this.$route.params.type];
      if (name) {
        this.name = Number(name);
      }
    },
    clickLeft() {
      this.$router.back();
    }
  }
};
</script>

<style lang="stylus">
@import './style';
</style>
