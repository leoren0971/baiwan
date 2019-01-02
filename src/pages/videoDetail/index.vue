<template>
  <div class="videoDetail">
    <div class="video-box">
      <video
        v-if="isPlaying"
        id="myVideo"
        src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
        controls
        autoplay
        muted
      ></video>
      <img v-else src="./../../assets/images/ls/hhhp.jpg" alt="" class="video-bg">
      <div v-if="!isPlaying" class="video-duration">03:00</div>
      <div v-if="!isPlaying" @click="toPlay()" class="video-player"><img class="p-ico" src="./../../assets/images/video/player-btn.png" alt=""></div>
    </div>
    <scroll-view
      scroll-y
      v-bind:style="{height: contHeight +'px', marginTop: 400 +'rpx'}"
    >
      <div class="v-i-info">
        <div class="avatar">
          <img src="./../../assets/images/ls/avatar.png" alt="">
        </div>
        <div class="content">
          <h4 class="c-title">钛合金高达玩个锤子</h4>
          <div class="c-info">
            <div class="c-i-user">2222粉丝</div>
          </div>
        </div>
        <div class="action">
          <div class="a-box">
            <div @click.stop="clickVant" class="a-b-item a-b-item-1">
              <img v-if="!cVideoInfo.isVanted" src="./../../assets/images/video/vant-ico-0.png" alt="">
              <img v-else src="./../../assets/images/video/vant-ico.png" alt="">
              <div class="a-i-v-num">99+</div>
            </div>
            <div @click.stop="clickComment" class="a-b-item">
              <img src="./../../assets/images/video/comment.png" alt="">
              <div class="a-i-v-num">999+</div>
            </div>
            <div @click.stop="clickShare" class="a-b-item a-b-item-s">
              <img src="./../../assets/images/video/share-ico.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="video-detail">
        <div class="title">
          <span class="t-title">钛合金机身简直无敌秀</span>
          <span class="label">高达</span>
          <span class="date">2018-11-7</span>
        </div>
        <div class="info">钛合金机身简直无敌秀钛合金机身简直无敌秀钛合金机身简直无 敌秀钛合金机身简直无敌秀钛合金机身简直无敌秀钛合金机身简 直无敌秀</div>
      </div>
      <div class="v-d-comment">
        <div class="title">
          <img src="./../../assets/images/video/comment-active.png" alt="">
          <span>评论(12)</span>
        </div>
        <div class="c-list">
          <div class="c-item" v-for="(item, index) in comments" :key="index">
            <div class="c-i-t">
              <div class="c-i-t-avatar">
                <img src="./../../assets/images/ls/avatar.png" alt="">
                <div class="c-i-t-ut">
                  <div class="user">小白兔</div>
                  <div class="c-time">12小时前</div>
                </div>
              </div>
              <div class="c-i-t-action">
                <div class="c-a-item c-a-item-1">
                  <img v-if="!item.isVanted" src="./../../assets/images/video/vant-ico-0.png" alt="">
                  <img v-else src="./../../assets/images/video/vant-ico.png" alt="">
                  <div class="a-i-v-num">666</div>
                </div>
                <div class="c-a-item">
                  <img src="./../../assets/images/video/comment.png" alt="">
                  <div class="a-i-v-num">99</div>
                </div>
              </div>
            </div>
            <div class="c-i-b">真的很喜欢，灰常稀饭真的很喜欢，灰常稀饭~</div>
            <div v-for="(item, itemIndex) in comments" :key="itemIndex" class="c-i-b-rc">
              <div class="c-rc-t">
                <span class="r-user">小黑兔</span>
                <span class="t-user">@小白兔</span>
                <span class="r-time">2小时前</span>
              </div>
              <div class="c-rc-content">666666666</div>
            </div>
          </div>
        </div>
      </div>
    </scroll-view>
    <comment-input ref="commentInput" @submit="eventSubmitComment"></comment-input>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import commentInput from '@/components/comment/commentInput'
export default {
  data () {
    return {
      videoId: null,
      videoIndex: null,
      videoInfo: {id: 1, isVanted: false},
      comments: [{id: 1, isVanted: false}, {id: 1, isVanted: true}, {id: 1, isVanted: false}],
      isPlaying: false,
      contHeight: 624
    }
  },

  components: {
    commentInput
  },
  computed: {
    ...mapState([
      'videoList'
    ]),
    cVideoInfo () {
      return this.videoList[this.videoIndex]
    }
  },

  onLoad (query) {
    console.log('onLoad', query)
    console.log('doneWindowHeight', this.$store.getters.doneWindowHeight)
    console.log('doneMyWindowHeight', this.$store.getters.doneMyWindowHeight)
    let info = query.videoIndex
    this.videoIndex = parseInt(info)
    this.contHeight = this.$store.getters.doneWindowHeight - 180
  },
  onUnload () {
    this.isPlaying = false
  },
  onShow (query) {
    console.log('onShow', query)
  },

  created () {},

  methods: {
    toPlay () {
      this.isPlaying = true
    },
    clickVant () {
      let indexItem = this.cVideoInfo
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
      this.$store.dispatch('updateVideoList', {
        index: this.videoIndex,
        indexItem
      })
    },
    clickComment () {
      this.$refs.commentInput.show()
      this.contHeight = this.$store.getters.doneWindowHeight - 220
    },
    clickShare () {
      this.showToast('分享了！')
    },
    eventSubmitComment (content) {
      this.$refs.commentInput.hide()
      this.$refs.commentInput.clear()
      this.showToast(`提交评论‘${content}’成功！`)
    }
  }
}
</script>

<style lang="less" scoped>
.videoDetail {

  .video-box {
    width: 100%;
    height: 200px;
    background-color: #333333;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 130;

    video {
      width: 100%;
      height: 100%;
    }
    .video-bg {
      width: 375px;
      height: 200px;
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
    padding: 3px 12px 5px;
    border-bottom: 1px solid #969696;

    .avatar {
      width: 38px;
      display: flex;
      justify-content: center;
      align-items: center;

      >img {
        width: 38px;
        height: 38px;
        border-radius: 100%;
      }
    }
    .content {
      width: 175px;
      padding: 6px 0 0 18px;

      .c-title {
        font-size: 15px;
        padding: 4px 0 0;
        color: #505050;
      }
      .c-info {
        display: flex;
        color: #787878;
        margin-top: 5px;

        .c-i-user {
          font-size: 9px;
          padding-left: 20px;
        }
      }
    }
    .action {

      .a-box {
        display: flex;

        .a-b-item {
          display: flex;
          padding: 15px 0;

          >img {
            width: 25px;
            height: 20px;
          }
          .a-i-v-num {
            font-size: 12px;
            height: 20px;
            width: 35px;
            line-height: 20px;
            text-align: center;
            color: #787878;
          }
        }
        .a-b-item-1 {
          padding-left: 10px;
        }
        .a-b-item-s {
          padding-right: 6px;
        }
      }
    }
  }

  .video-detail {
    padding: 0 17px;

    .title {
      height: 33px;
      display: flex;
      align-items: center;

      .t-title {
        color: #010101;
        font-size: 16px;
      }
      .label {
        padding: 3px 10px;
        border-radius: 12px;
        font-size: 9px;
        color: #ffffff;
        background-color: #d54321;
        margin: 0 20px;
      }
      .date {
        font-size: 10px;
        color: #787878;
      }
    }
    .info {
      font-size: 12px;
      line-height: 18px;
      color: #787878;
    }
  }

  .v-d-comment {
    padding: 0 12px;

    .title {
      padding: 15px 5px;
      border-bottom: 1px solid #969696;
      display: flex;
      align-items: center;

      >img {
        width: 20px;
        height: 19px;
      }
      >span {
        font-size: 16px;
        color: #010101;
        margin-left: 8px;
      }
    }
    .c-list {

      .c-item {
        padding: 14px 5px;
        border-bottom: 1px solid #ededed;
        .c-i-t {
          display: flex;
          align-items: center;
          justify-content: space-between;
          
          .c-i-t-avatar {
            display: flex;
            
            >img {
              width: 23px;
              height: 23px;
              border-radius: 22px;
            }
            .c-i-t-ut {
              margin-left: 9px;
              color: #505050;
              .user {
                font-size: 10px;
              }
              .c-time {
                font-size: 7px;
              }
            }
          }
          .c-i-t-action {
            justify-self: flex-end;
            display: flex;
            .c-a-item {
              display: flex;

              > img {
                width: 23px;
                height: 18px;
              }
              .a-i-v-num {
                font-size: 11px;
                color: #838383;
                width: 30px;
                text-align: center;
              }
            }
            .c-a-item-1 {

            }
          }
        }
        .c-i-b {
          margin-left: 31px;
          color: #000000;
          font-size: 12px;
          line-height: 20px;
          padding: 10px 0;
        }
        .c-i-b-rc {
          margin-left: 31px;

          .c-rc-t {
            font-size: 9px;

            .r-user {
              color: #0096ff;
            }
            .t-user {
              color: #505050;
            }
            .r-time {
              color: #787878;
              font-size: 6px;
              margin-left: 3px;
            }
          }
          .c-rc-content {
            font-size: 10px;
            padding: 3px 0;
          }
        }
      }
      .c-item:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
