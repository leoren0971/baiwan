<template>
  <div class="container">
    <only-title cutitle="摆玩视频"></only-title>
    <div>{{motto}}</div>
  </div>
</template>

<script>
import onlyTitle from '@/components/navigation/title.vue'

export default {
  data () {
    return {
      motto: 'Hello World 666',
      userInfo: {}
    }
  },

  components: {
    onlyTitle
  },

  methods: {},

  created () {}
}
</script>

<style scoped>


</style>
