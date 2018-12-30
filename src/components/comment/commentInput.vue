<template>
  <div v-if="isShow" class="commentInput">
    <div class="ci-box">
      <input v-model="content" type="text" :placeholder="pholder">
      <span @click="submit">发送</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      content: '',
      pholder: '评论'
    }
  },
  methods: {
    show (pholder) {
      this.pholder = pholder
      this.isShow = true
    },
    hide () {
      this.isShow = false
    },
    clear () {
      this.content = ''
    },
    submit () {
      this.$emit('submit', this.content)
    }
  }
}
</script>

<style lang="less" scoped>
.commentInput {
  width: 100%;
  height: 53px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 0 1px 3px #ededed;
  z-index: 200;

  .ci-box {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;

    >input {
      width: 278px;
      height: 30px;
      border-radius: 5px;
      border: none;
      background-color: #e4e4e4;
      font-size: 14px;
      padding: 0 10px;
      line-height: 30px;
    }
    >span {
      font-size: 16px;
      padding: 0 5px 0 10px;
    }
  }
}
</style>
