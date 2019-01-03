<template>
  <div class="boxList">
    <div class="box-item" v-for="(item, index) in searchBoxList" :key="index">
      <div @click="clickBoxDetail(index, '0')" class="v-i-box">
        <img src="./../../assets/images/ls/hhhp.jpg" alt="" class="video-bg">
      </div>
      <div @click="clickBoxDetail(index, '0')" class="v-i-info">
        <div class="avatar">
          <img src="./../../assets/images/ls/avatar.png" alt="">
        </div>
        <div class="content">
          <h4 class="c-title">钛合金高达玩个锤子</h4>
          <div class="c-info">
            <div class="c-i-user">钓鱼彩虹糖</div>
            <div class="c-i-time">2018-11-7</div>
          </div>
        </div>
        <div class="action">
          <div class="a-box">
            <div @click.stop="clickVant(item, index)" class="a-b-item a-b-item-1">
              <img v-if="!item.isVanted" src="./../../assets/images/video/vant-ico-0.png" alt="">
              <img v-else src="./../../assets/images/video/vant-ico.png" alt="">
              <div class="a-i-v-num">9999w</div>
            </div>
            <div @click.stop="clickComment(index)" class="a-b-item">
              <img src="./../../assets/images/video/comment.png" alt="">
              <div class="a-i-v-num">200w</div>
            </div>
            <div @click.stop="clickShare(item)" class="a-b-item a-b-item-s">
              <img src="./../../assets/images/video/share-ico.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <box-share ref="boxShare"></box-share>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import boxShare from './../shareCard/boxShare'
export default {
  data () {
    return {
    }
  },
  components: {
    boxShare
  },
  computed: {
    ...mapState([
      'searchBoxList'
    ])
  },

  methods: {
    onReachBottom () {
      // 触底
      let length = this.$store.state.searchBoxList.length
      let addlist = [{id: length + 1}, {id: length + 2}, {id: length + 3}]
      this.$store.dispatch('setSearchBoxList', this.searchBoxList.concat(addlist))
    },
    clickBoxDetail (index, isComment) {
      let obj = {
        index,
        from: '2',
        isComment
      }
      this.toBoxDetail(obj)
    },
    clickActive (index) {
      this.active = index
    },
    clickVant (item, index) {
      let indexItem = item
      if (typeof indexItem.isVanted === 'boolean') {
        indexItem.isVanted = !indexItem.isVanted
        if (indexItem.isVanted) {
          this.showToast('点赞成功！')
        } else {
          this.showToast('取消点赞！')
        }
      } else {
        indexItem.isVanted = true
        this.showToast('点赞成功！')
      }
      this.$store.dispatch('updateSearchBoxList', {
        index,
        indexItem
      })
    },
    clickComment (index) {
      this.clickBoxDetail(index, '1')
    },
    clickShare (item) {
      this.$refs.boxShare.show()
    }
  },

  created () {}
}
</script>

<style lang="less" scoped>
.boxList {
  width: 100%;
  height: 100%;

  >header {
    display: flex;
    text-align: center;
    padding: 0 60px;

    >div {
      width: 50%;
      height: 60px;
      line-height: 60px;
      color: #505050;
      position: relative;

      .b-search {
        position: absolute;
        right: -40px;
        top: 0;bottom: 0;
        margin: auto 0;
        display: flex;
        align-items: center;

        >img {
          width: 25px;
          height: 25px;
        }
      }
    }
    .active {
      color: #d54321;
      position: relative;
    }
    .active:after {
      content: "";
      position: absolute;
      bottom: -15px;
      left: 0; right: 0;
      margin: 0 auto;
      width: 100%;
      height: 5px;
      background-color: #d54321;
    }
  }
  .box-item {
    width: 100%;
    padding: 10px 0 0;
    border-bottom: 1px solid #969696;

    .v-i-box {
      width: 375px;
      height: 175px;
      background-color: #333333;
      position: relative;

      video {
        width: 100%;
        height: 100%;
      }
      .video-bg {
        width: 375px;
        height: 175px;
      }
      .video-duration {
        position: absolute;
        left: 8px;
        bottom: 10px;
        padding: 0 10px;
        height: 20px;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, .5);
        color: #ffffff;
        font-size: 12px;
        line-height: 20px;
      }
      .video-player {
        position: absolute;
        right: 15px;
        bottom: 20px;

        >img {
          width: 50px;
          height: 50px;
        }
      }
    }
    .v-i-info {
      display: flex;
      padding: 0 12px 10px;

      .avatar {
        width: 45px;
        display: flex;
        justify-content: center;
        align-items: center;

        >img {
          width: 45px;
          height: 45px;
          border-radius: 100%;
        }
      }
      .content {
        width: 175px;
        padding: 10px 0 0 18px;

        .c-title {
          font-size: 15px;
          padding: 4px 0 0;
        }
        .c-info {
          display: flex;
          color: #787878;
          margin-top: 10px;
          justify-content: space-between;

          .c-i-user {
            font-size: 9px;
          }
          .c-i-time {
            margin-right: 30px;
            font-size: 10px;
          }
        }
      }
      .action {

        .a-box {
          display: flex;

          .a-b-item {
            display: flex;
            padding: 13px 0 10px;

            >img {
              width: 16px;
              height: 13px;
            }
            .a-i-v-num {
              font-size: 9px;
              height: 16px;
              width: 32px;
              line-height: 16px;
              text-align: center;
            }
          }
          .a-b-item-1 {
            padding-left: 10px;
          }
          .a-b-item-s {
            padding-right: 6px;
          }
        }
        .a-label {
          width: 125px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: flex-end;

          .a-l-item {
            width: 38px;
            height: 15px;
            border-radius: 15px;
            background-color: #d54321;
            color: #ffffff;
            font-size: 9px;
            line-height: 15px;
            text-align: center;
            margin-right: 2px;
          }
        }
      }
    }
  }
}
</style>
