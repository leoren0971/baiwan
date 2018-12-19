import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

Vue.mixin({
  methods: {
    navigatePageTo (url) {
      wx.navigateTo({url: url})
    },
    reLaunchPageTo (url) {
      wx.reLaunch({url: url})
    },
    toSearch () {
      this.navigatePageTo('../search/main')
    }
  }
})
