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
    },
    toVideoDetail (obj) {
      this.navigatePageTo('../videoDetail/main?videoInfo=' + JSON.stringify(obj))
    },
    myDialog (options, callback, callback2) {
      wx.showModal({
        title: options.title,
        content: options.content,
        showCancel: options.cancel ? options.cancel : false,
        confirmColor: '#2d8cf0',
        success: function (res) {
          console.log(res)
          if (res.confirm) {
            if (callback) callback()
          } else if (res.cancel) {
            console.log('用户点击取消')
            if (callback2) callback2()
          }
        },
        fail: function (err) {
          console.log(err)
        }
      })
    },
    showLoading (title = '加载中···') {
      wx.showLoading({
        mask: true,
        title
      })
    },
    hideLoading () {
      wx.hideLoading()
    },
    showToast (content) {
      wx.showToast({
        title: content,
        icon: 'none',
        duration: 2000
      })
    }
  }
})
