<template>
  <div class="title">
    {{cutitle}}
  </div>
</template>

<script>
export default {
  props: ['cutitle'],
  data () {
    return {}
  }
}
</script>


<style lang="less" scoped>
.title {
  width: 100%;
  height: 75px;
  line-height: 75px;
  text-align: center;
  font-size: 22px;
  color: #000000;
  background-color: #ffffff;
}
</style>
