<template>
  <div class="guide">
    <NavBar title="新手引导" fixed showL @clickLeft="clickLeft"/>
    <div class="guide_wrap">
      <div class="guide_wrap_user">
        <div class="title">
          <h2>操作指南</h2>
          <p>
            平台开户指南，教您轻松了解
            <span>开户</span>、
            <span>指标</span>、
            <span>杠杆</span>、
            <span>充值</span>等操作
          </p>
        </div>
        <div class="Bitmap">
          <img src="~assets/Images/guide/Bitmap.png" alt>
        </div>
        <div class="List">
          <div class="List_single" v-for="item in userList" :key="item.id">
            <p class="left_icon">
              <img :src="item.icon" :alt="item.title">
            </p>
            <ul class="right_cont border-1px">
              <li class="right_cont_size">
                <h3>{{item.title}}</h3>
                <p>{{item.content}}</p>
              </li>
              <li class="right_cont_more" @click="toSwiper">
                <button>更多</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="guide_wrap_asked">
        <div class="title">
          <h2>常见问题</h2>
          <p>
            这里是关于
            <span>本平台</span> 的一些常见问题
          </p>
        </div>
        <!-- 开户问题 -->
        <div class="group">
          <router-link to="/asked/open_account" tag="div" class="group_nav border-1px">
            <p class="group_nav_l">
              <img src="~assets/Images/guide/icon_b1.png" alt>开户问题
            </p>
            <van-icon class="arrow" name="arrow"/>
          </router-link>
          <ul class="group_cont">
            <router-link
              class="group_cont_single border-1px"
              tag="li"
              v-for="item in askedData.open_account"
              :class="item.row&&'row'"
              :to="`/asked/open_account?name=${item.name}`"
              :key="item.name"
            >
              <img src="~assets/Images/guide/icon_b5.png" alt>
              <p>{{item.title}}</p>
            </router-link>
          </ul>
        </div>
        <!-- 关于充/提币 -->
        <div class="group">
          <router-link to="/asked/chong_ti" tag="div" class="group_nav border-1px">
            <p class="group_nav_l">
              <img src="~assets/Images/guide/icon_b2.png" alt>关于充/提币
            </p>
            <van-icon class="arrow" name="arrow"/>
          </router-link>
          <ul class="group_cont">
            <router-link
              tag="li"
              v-for="item in askedData.chong_ti"
              :class="item.row&&'row'"
              class="group_cont_single border-1px"
              :to="`/asked/chong_ti?name=${item.name}`"
              :key="item.name"
            >
              <img src="~assets/Images/guide/icon_b5.png" alt>
              <p>{{item.title}}</p>
            </router-link>
          </ul>
        </div>
        <!-- 关于杠杆交易 -->
        <div class="group">
          <router-link to="/asked/lever_list" tag="div" class="group_nav border-1px">
            <p class="group_nav_l">
              <img src="~assets/Images/guide/icon_b2.png" alt>关于杠杆交易
            </p>
            <van-icon class="arrow" name="arrow"/>
          </router-link>
          <ul class="group_cont">
            <router-link
              tag="li"
              v-for="item in askedData.lever_list"
              :class="item.row&&'row'"
              class="group_cont_single border-1px"
              :to="`/asked/lever_list?name=${item.name}`"
              :key="item.name"
            >
              <img src="~assets/Images/guide/icon_b5.png" alt>
              <p>{{item.title}}</p>
            </router-link>
          </ul>
        </div>
        <!-- 其他问题 -->
        <div class="group">
          <router-link to="/asked/other_list" tag="div" class="group_nav border-1px">
            <p class="group_nav_l">
              <img src="~assets/Images/guide/icon_b2.png" alt>其他问题
            </p>
            <van-icon class="arrow" name="arrow"/>
          </router-link>
          <ul class="group_cont">
            <router-link
              tag="li"
              v-for="item in askedData.other_list"
              :class="item.row&&'row'"
              class="group_cont_single border-1px"
              :to="`/asked/other_list?name=${item.name}`"
              :key="item.name"
            >
              <img src="~assets/Images/guide/icon_b5.png" alt>
              <p>{{item.title}}</p>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/NavBar";
import { guideData, askedData } from "common/staticData";
export default {
  data() {
    return {
      userList: guideData.userList,
      askedData: askedData
    };
  },
  components: { NavBar },
  methods: {
    clickLeft() {
      this.$router.push("/");
    },
    toSwiper(){
        this.$router.push('/guide/swiper')
    }
  }
};
</script>

<style scoped lang="stylus">
@import './style';
</style>
