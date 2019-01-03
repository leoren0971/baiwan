<template>
  <div class="boxDetail">
    <h3>钛合金高达玩个锤子</h3>
    <div @click="clickBoxDetail" class="v-i-info">
      <div class="avatar">
        <img src="./../../assets/images/ls/avatar.png" alt="">
      </div>
      <div class="content">
        <h4 class="c-title">钓鱼彩虹糖</h4>
        <div class="c-info">
          <div class="c-i-user">2333粉丝</div>
        </div>
      </div>
      <div class="b-time">
        <div class="b-t-value">2018-11-7</div>
      </div>
    </div>
    <div @click="clickBoxDetail" class="info">钛合金机身简直无敌秀钛合金机身简直无敌秀钛合金机身简直无 敌秀钛合金机身简直无敌秀钛合金机身简直无敌秀钛合金机身简 直无敌秀</div>
    <div @click="clickBoxDetail" class="b-imglist">
      <div v-for="(item, index) in imgList" :key="index" class="b-i-item">
        <img src="./../../assets/images/ls/hhhp.jpg" mode="widthFix" :lazy-load="true" alt="">
        <div class="b-i-index">{{index + 1}}</div>
      </div>
    </div>
    <div class="b-action">
      <div class="b-action-box">
        <div @click.stop="clickVant" class="b-a-item">
          <img v-if="!cBoxInfo.isVanted" src="./../../assets/images/video/vant-ico-0.png" alt="">
          <img v-else src="./../../assets/images/video/vant-ico.png" alt="">
          <div class="b-a-i-value">99</div>
        </div>
        <div @click.stop="clickComment" class="b-a-item">
          <img src="./../../assets/images/video/comment.png" alt="">
          <div class="b-a-i-value">99</div>
        </div>
        <div @click.stop="clickShare" class="b-a-item">
          <img src="./../../assets/images/video/share-ico.png" alt="">
          <div class="b-a-i-value"> </div>
        </div>
      </div>
    </div>
    <box-share ref="boxShare"></box-share>
    <comment-input ref="commentInput" @submit="eventSubmitComment"></comment-input>
    <comment-list ref="commentList"></comment-list>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import boxShare from './../../components/shareCard/boxShare'
import commentInput from './../../components/comment/commentInput'
import commentList from './../../components/comment/commentList'
export default {
  data () {
    return {
      boxIndex: null,
      boxFrom: 1, // 1: videoList   2: searchList
      isComment: '0', // 是否立即评论 0：否 1：是
      imgList: ['', '', '', '', '', '']
    }
  },
  components: {
    boxShare,
    commentInput,
    commentList
  },
  computed: {
    ...mapState([
      'boxList',
      'searchBoxList'
    ]),
    cBoxInfo () {
      if (this.boxFrom === '1') {
        return this.boxList[this.boxIndex]
      } else if (this.boxFrom === '2') {
        return this.searchBoxList[this.boxIndex]
      }
    }
  },
  onLoad (query) {
    console.log('onLoad', query)
    let info = query.boxIndex
    this.boxFrom = query.from
    this.isComment = query.isComment
    this.boxIndex = parseInt(info)
  },
  methods: {
    imgLoadEvent (e) {
      console.log(e)
    },
    clickVant () {
      let indexItem = this.cBoxInfo
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
      let actionUpdateBoxList = 'updateBoxList'
      if (this.videoFrom === '1') {
        actionUpdateBoxList = 'updateBoxList'
      } else if (this.videoFrom === '2') {
        actionUpdateBoxList = 'updateSearchBoxList'
      }
      this.$store.dispatch(actionUpdateBoxList, {
        index: this.boxIndex,
        indexItem
      })
    },
    clickComment () {
      this.$refs.commentInput.show()
      this.$refs.commentList.show()
    },
    clickShare () {
      this.$refs.boxShare.show()
    },
    clickBoxDetail () {
      this.$refs.commentInput.hide()
      this.$refs.commentList.hide()
    },
    eventSubmitComment (content) {
      this.$refs.commentInput.hide()
      this.$refs.commentInput.clear()
      this.showToast(`提交评论‘${content}’成功！`)
    }
  },

  created () {}
}
</script>

<style lang="less" scoped>
.boxDetail {
  padding-bottom: 50px;

  >h3 {
    text-align: center;
    font-size: 16px;
    color: #000000;
    padding: 10px 0;
    font-family: 700;
  }

  .v-i-info {
    padding: 0 13px;
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
    .b-time {
      width: 110px;
      color: #787878;
      font-size: 10px;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
  .info {
    padding: 15px 16px;
    font-size: 12px;
    line-height: 18px;
    color: #787878;
  }
  .b-imglist {
    width: 100%;

    .b-i-item {
      width: 100%;
      margin-bottom: 6px;
      position: relative;

      >img {
        width: 100%;
      }
      .b-i-index {
        width: 23px;
        height: 23px;
        background-color: rgba(0, 0, 0, .5);
        border-radius: 5px;
        line-height: 23px;
        font-size: 14px;
        color: #ffffff;
        text-align: center;
        position: absolute;
        top: 10px;
        left: 9px;
      }
    }
  }

  
  .b-action {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 1px 3px #ededed;
    z-index: 100;

    .b-action-box {
      padding: 0 30px;
      display: flex;

      .b-a-item {
        width: 33.33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 0 8px;

        >img {
          width: 25px;
          height: 22px;
        }
        .b-a-i-value {
          font-size: 12px;
          color: #787878;
          text-align: center;
          height: 14px;
          line-height: 14px;
        }
      }
    }
  }
}
</style>
