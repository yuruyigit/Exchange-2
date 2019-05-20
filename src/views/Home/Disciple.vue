<template>
  <div class="disciple">
    <div class="disciple_top">
      <div class="title">
        <p class="tips">累计收入（USDT）</p>
        <p class="price">125,047.84</p>
      </div>
      <div class="wrap">
        <div class="wrap_top">
          <div class="wrap_top_l">
            <p class="avatar">
              <img src="~assets/Images/disciple/top_bg.png" alt>
            </p>
            <div class="msg_group">
              <p class="name">CT123445</p>
              <p class="icon">
                <img src="~assets/Images/disciple/icon_master.png" alt>
              </p>
            </div>
          </div>
          <button class="btn_apprentice">立即收徒</button>
        </div>
        <div class="wrap_info">
          <div class="wrap_info_single">
            <p>1,299</p>
            <p>一级徒弟22人</p>
          </div>
          <div class="wrap_info_single line-1px">
            <p>12,322</p>
            <p>二级级徒弟99人</p>
          </div>
        </div>
      </div>
      <div class="banner">
        <img src="~assets/Images/disciple/banner.png" alt>
      </div>
    </div>
    <div class="disciple_wrap">
      <p class="disciple_wrap_title">
        <img src="~assets/Images/disciple/icon_1.png" alt>人脉变钱脉
      </p>
      <div class="code_wrap">
        <img src="~assets/Images/disciple/top_bg.png" alt>
        <button>长按保存推广图片</button>
      </div>
      <p class="disciple_wrap_title">
        <img src="~assets/Images/disciple/icon_2.png" alt>收徒说明
      </p>
      <div class="explain">
        <div class="explain_top">
          <div class="bg1"></div>
          <div class="bg2">
            <div class="bg2_left">
              <p>累计收徒获得佣金</p>
              <p>125,456</p>
            </div>
            <button class="bg2_btn">师傅</button>
          </div>
        </div>
      </div>
    </div>
  </div>
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
.disciple {
  background-color: $colorE;
  width: 100%;
  &_top {
    background: url('../../assets/Images/disciple/top_bg.png') $write no-repeat top / 100% 176px;
    .title {
      width: 100%;
      text-align: center;
      padding-top: 40px;
      .tips {
        font-size: 13px;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 12px;
      }
      .price {
        color: $write;
        font-size: 32px;
        margin-bottom: 24px;
      }
    }
    .wrap {
      width: 343px;
      height: 138px;
      background-color: $write;
      margin: auto;
      border-radius: 6px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      padding: 14px 18px;
      &_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &_l {
          display: flex;
          align-items: center;
          .avatar {
            width: 50px;
            height: 50px;
            border-radius: 25px;
            overflow: hidden;
            margin-right: 12px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .msg_group {
            .name {
              font-size: 15px;
              margin-bottom: 8px;
            }
            .icon {
              width: 64px;
              img {
                width: 100%;
              }
            }
          }
        }
        .btn_apprentice {
          width: 92px;
          height: 34px;
          background: url('../../assets/Images/disciple/bg_btn1.png') no-repeat center / cover;
          border: none;
          color: $write;
          font-size: 14px;
        }
      }
      &_info {
        display: flex;
        height: 44px;
        margin-top: 14px;
        &_single {
          width: 50%;
          text-align: center;
          &:last-child {
            line-1px($colorE, 32px, 1px);
          }
          p {
            &:first-child {
              font-size: 24px;
              color: $color3;
              padding-bottom: 8px;
            }
            &:last-child {
              font-size: 12px;
              color: $color9;
            }
          }
        }
      }
    }
    .banner {
      margin: 0 auto;
      padding: 16px 0;
      width: 334px;
      img {
        width: 100%;
      }
    }
  }
  &_wrap {
    background-color: $write;
    margin-top: 8px;
    padding: 16px;
    &_title {
      font-size: 16px;
      color: $color3;
      line-height: 20px;
      img {
        margin-right: 10px;
        width: 20px;
      }
    }
    .code_wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 32px 0;
      img {
        width: 156px;
        height: 156px;
        margin-bottom: 24px;
      }
      button {
        width: 138px;
        height: 34px;
        background: url('../../assets/Images/disciple/bg_btn2.png') no-repeat center / cover;
        border: none;
        color: $write;
        font-size: 15px;
      }
    }
    .explain {
      width: 100%;
      height: 800px;
      padding: 18px 0;
      &_top {
        height: 164px;
        width: 100%;
        position: relative;
        .bg1 {
          position: absolute;
          bottom: 0;
          left: 4px;
          width: 349px;
          padding: 0 6px;
          height: 148px;
          background: url('../../assets/Images/disciple/bg_1.png') no-repeat center / cover;
        }
        .bg2 {
          position: absolute;
          top: 0;
          left: 0;
          width: 244px;
          height: 76px;
          padding: 10px;
          background: url('../../assets/Images/disciple/bg_2.png') no-repeat center / cover;
          &_left {
            color: $write;
            padding: 2px;
            p {
              &:first-child {
                font-size: 12px;
                padding-bottom: 12px;
              }
              &:last-child {
                font-size: 28px;
              }
            }
          }
          &_btn {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 52px;
            height: 18px;
            color: $write;
            font-size: 11px;
            border-radius: 9px;
            background-color: #b79361;
            border: none;
          }
        }
      }
    }
  }
}
</style>
