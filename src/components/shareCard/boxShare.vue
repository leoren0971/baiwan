<template>
  <div class="boxShare" v-if="isShow">
    <div class="share-box">
      <img src="./../../assets/images/ls/hhhp.jpg" alt="">
      <div class="v-content">
        <div class="title">钛合金高达机身这么玩</div>
        <div class="v-c-box">
          <div class="v-b-item">
            <img src="./../../assets/images/common/wx-share-ico-1.png" alt="">
            <div class="v-i-title">转给朋友</div>
          </div>
          <div class="v-b-item">
            <img src="./../../assets/images/common/wx-share-ico-2.png" alt="">
            <div class="v-i-title">分享海报</div>
          </div>
          <div class="v-b-item">
            <img src="./../../assets/images/common/wx-share-ico-3.png" alt="">
            <div class="v-i-title">制作海报</div>
          </div>
        </div>
      </div>
    </div>
    <div @click="close" class="close"><img src="./../../assets/images/common/close.png" alt=""></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    close () {
      this.isShow = false
    },
    show () {
      this.isShow = true
    }
  }
}
</script>

<style lang="less" scoped>
.boxShare {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .share-box {
    width: 253px;
    height: 280px;
    border-radius: 10px;
    background-color: #ffffff;
    overflow: hidden;

    >img {
      width: 253px;
      height: 135px;
    }

    .v-content {
      padding: 0 15px;
      height: 165px;

      .title {
        padding: 5px 0;
        text-align: center;
        font-size: 12px;
      }
      .v-c-box {
        margin-top: 25px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .v-b-item {

          >img {
            width: 41px;
            height: 41px;
          }
          .v-i-title {
            text-align: center;
            margin-top: 6px;
            font-size: 10px;
          }
        }
      }
    }
  }
  .close {
    width: 25px;
    height: 25px;
    margin: 25px auto 0;

    >img {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
