<template>
  <div class="search">
    <div class="search-box">
      <div class="l-border">
        <div class="s-b-box">
          <div class="s-img"><img src="./../../assets/images/srarch/search.png" alt=""></div>
          <input type="text">
          <div class="c-img"><img src="./../../assets/images/srarch/cancel-1-copy.png" alt=""></div>
        </div>
        <div class="s-b-btn">搜索</div>
      </div>
    </div>
    <div v-if="!isSearch" class="s-log">
      <div class="s-l-history">
        <div class="s-title">搜索历史</div>
        <div class="s-box">
          <div class="s-box-item">高达</div>
          <div class="s-box-item">高达</div>
          <div class="s-box-item">高达</div>
          <div class="s-box-item">高达</div>
          <div class="s-box-item">高达</div>
          <div class="s-box-item">高达</div>
        </div>
      </div>
      <div class="s-l-hot">
        <div class="s-title">热门搜索</div>
        <div class="s-box">
          <div class="s-box-item">雕塑</div>
          <div class="s-box-item">雕塑</div>
          <div class="s-box-item">雕塑</div>
        </div>
      </div>
    </div>
    <video-list v-if="isSearch && searchType === '1'" ref="videoList"></video-list>
    <box-list v-if="isSearch && searchType === '2'" ref="boxList"></box-list>
  </div>
</template>

<script>
import videoList from './../../components/search/videoList'
import boxList from './../../components/search/boxList'
export default {
  data () {
    return {
      isSearch: true,
      searchType: '1' // 1: videos  2: 展柜
    }
  },
  components: {
    videoList,
    boxList
  },
  onLoad (query) {
    this.searchType = query.searchType
  },
  onReachBottom () {
    // 触底
    if (this.searchType === '1') {
      this.$refs.videoList.onReachBottom()
    } else if (this.searchType === '2') {
      this.$refs.boxList.onReachBottom()
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  padding-top: 30px;

  .search-box {
    width: 100%;
    border-bottom: 1px solid #969696;
    border-top: 1px solid #969696;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: #fff;

    .l-border {
      padding: 8px 0;
      display: flex;
      justify-content: center;

      >div {
        background-color: #e9e9e9;
        border-radius: 30px;
        height: 30px;
      }
    }
    .s-b-box {
      width: 308px;
      display: flex;

      >input {
        width: 245px;
        height: 30px;
        line-height: 30px;
      }
      >div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .s-img {
        width: 34px;
        height: 30px;
        >img {
          width: 24px;
          height: 24px;
          margin-left: 5px;
        }
      }
      .c-img {
        width: 29px;
        height: 30px;
        justify-content: flex-start;
        >img {
          width: 12px;
          height: 12px;
          margin-left: 5px;
        }
      }
    }
    
    .s-b-btn {
      font-size: 12px;
      color: 505050;
      width: 50px;
      text-align: center;
      line-height: 30px;
      margin-left: 3px;
    }
  }

  .s-log {
    padding: 10px 0;

    .s-l-history {
    }  
    .s-l-hot {
      margin-top: 10px;
    } 
    .s-title {
      color: #b5b5b5;
      font-size: 12px;
      padding: 0 18px;
    }
    .s-box {
      display: flex;
      flex-wrap: wrap;
      .s-box-item {
        width: 55px;
        height: 22px;
        border-radius: 8px;
        line-height: 22px;
        border: 1px solid #b5b5b5;
        color: #d54321;
        font-size: 12px;
        text-align: center;
        margin: 6px 0 0 16px;
      }
    }
  }
}
</style>
