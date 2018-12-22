<template>
  <div class="video">
    <div class="swiper">
      <swiper
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
      >
        <block v-for="(item, index) in imgUrls" :key="index">
          <swiper-item :class="{bg0:index==0,bg1:index==1,bg2:index==2}">
            <image :src="item" class="slide-image" width="400" height="240" />
          </swiper-item>
        </block>
      </swiper>
      <div @click="search" class="search-ico"><img src="./../../assets/images/video/search-ico.png" alt=""></div>
    </div>
    <!-- list -->
    <div class="video-list">
      <h3>精选视频</h3>
      <div class="video-item" v-for="(item, index) in list" :key="index">
        <div class="v-i-box">
          <video
            v-if="isPlaying&&playIndex===index"
            id="myVideo"
            src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
            controls
            :autoplay="true"
          ></video>
          <img v-else src="./../../assets/images/ls/hhhp.jpg" alt="" class="video-bg">
          <div class="video-duration">03:00</div>
          <div @click="toPlay(index)" class="video-player"><img class="p-ico" src="./../../assets/images/video/player-btn.png" alt=""></div>
        </div>
        <div @click="toVideoDetail(item)" class="v-i-info">
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
            <div class="a-label">
              <div class="a-l-item">高达</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrls: [
        'http://192.168.31.114:9999/image/tooopen_sy_143912755726.jpg',
        'http://192.168.31.114:9999/image/tooopen_sy_175866434296.jpg',
        'http://192.168.31.114:9999/image/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: false,
      autoplay: true,
      interval: 5000,
      duration: 300,
      list: [{id: 1, isVanted: true}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}],
      isPlaying: false,
      playIndex: null,
      danmuList: [{
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      }, {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }]
    }
  },

  components: {
  },

  created () {
  },
  onReachBottom () {
    // 触底
    console.log('触底了')
    let length = this.list.length
    let addlist = [{id: length + 1}, {id: length + 2}, {id: length + 3}]
    this.list = this.list.concat(addlist)
  },

  methods: {
    search () {
      console.log('search!')
      this.toSearch()
    },
    toPlay (index) {
      this.playIndex = index
      this.isPlaying = true
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
      this.list.splice(index, 1, indexItem)
    },
    clickComment () {
      this.showToast('评论了！')
    },
    clickShare () {
      this.showToast('分享了！')
    }
  }
}
</script>

<style lang="less" scoped>
.video {
  width: 100%;
  overflow-x: hidden;

  .swiper {
    position: relative;

    swiper {
      height: 200px;

      .bg0 {
        background-color: #333;
      }
      .bg1 {
        background-color: #888;
      }
      .bg2 {
        background-color: #eee;
      }
      .slide-image {
        width: 100%;
        height: 240px;
      }
    }
    .search-ico {
      width: 38px;
      height: 38px;
      position: absolute;
      top: 16px;
      right: 16px;
      z-index: 10;

      >img {
        width: 38px;
        height: 38px;
      }
    }
  }
  
  .video-list {
    padding: 15px 0 10px;

    >h3 {
      padding-left: 8px;
      font-size: 17.5px;
    }
    .video-item {
      width: 100%;
      padding: 10px 8px 0px;
      border-bottom: 1px solid #969696;

      .v-i-box {
        width: 360px;
        height: 175px;
        background-color: #333333;
        position: relative;

        video {
          width: 100%;
          height: 100%;
        }
        .video-bg {
          width: 360px;
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
        padding-bottom: 10px;

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
                height: 15px;
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

}


</style>
