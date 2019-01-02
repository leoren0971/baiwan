<template>
  <div class="search">
    <div class="search-box">
      <div class="s-b-box">
        <div class="s-img"><img src="./../../assets/images/srarch/search.png" alt=""></div>
        <input type="text">
        <div class="c-img"><img src="./../../assets/images/srarch/cancel-1-copy.png" alt=""></div>
      </div>
      <div class="s-b-btn">搜索</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      motto: 'Hello World 66',
      userInfo: {}
    }
  },

  components: {
  },

  methods: {},

  created () {}
}
</script>

<style lang="less" scoped>
.search {
  .search-box {
    padding: 8px 0;
    border-bottom: 1px solid #969696;
    border-top: 1px solid #969696;
    display: flex;
    justify-content: center;

    >div {
      background-color: #e9e9e9;
      border-radius: 30px;
      height: 30px;
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
          height: 21px;
        }
      }
      .c-img {
        width: 29px;
        height: 30px;
        justify-content: flex-start;
        >img {
          width: 12px;
          height: 12px;
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
}
</style>
