<template>
  <div class="commentList" v-if="isShow">
    <div class="cl-box">
      <div class="c-title">
        <img src="./../../assets/images/video/comment-active.png" alt="">
        <div class="c-t-title">评论(2)</div>
      </div>
      <div class="c-box">
        <scroll-view
          scroll-y
          style="height: 295px;"
        >
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
        </scroll-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      comments: [{id: 1, isVanted: false}, {id: 1, isVanted: true}, {id: 1, isVanted: false}, {id: 1, isVanted: false}, {id: 1, isVanted: false}, {id: 1, isVanted: false}]
    }
  },
  methods: {
    show () {
      this.isShow = true
    },
    hide () {
      this.isShow = false
    }
  }
}
</script>

<style lang="less" scoped>
.commentList {
  width: 100%;
  position: fixed;
  bottom: 50px;
  left: 0;
  background-color: #ffffff;
  border-radius: 10px 10px 0 0;
  z-index: 90;

  .cl-box {
    padding: 0 13px;
  }
  .c-title {
    padding: 10px 5px;
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

  .c-box {
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
        padding: 5px 0;
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
</style>
