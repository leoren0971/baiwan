export function $http (options = {}) {
  let promise = new Promise((resolve, reject) => {
    let ret = ''
    for (let it in options.data) {
      if (options.methods === 'get') {
        ret += '&' + encodeURIComponent(it) + '=' + encodeURIComponent(options.data[it])
      } else {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(options.data[it]) + '&'
      }
    }
    console.log(ret)
    wx.request({
      url: `${process.env.BASE_API}${options.url}${options.methods === 'get' ? ret : ''}`,
      data: options.methods === 'post' ? ret : {},
      method: options.methods || 'GET',
      header: {
        'Content-Type': options.methods === 'get' ? 'application/json' : 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log('res.data', res.data)
        if (typeof res.data === 'object') {
          let data = typeof res.data === 'string' ? JSON.parse(res.data) : res.data
          if (data.success) {
            resolve(data)
          } else {
            reject(data)
          }
        } else {
          reject(res)
        }
      },
      fail: function (error) {
        reject(error)
      }
    })
  })
  return promise
}

// wx上传文件接口
export function $upload (pathes, data) {
  var promise = new Promise((resolve, reject) => {
    wx.uploadFile({
      url: `${process.env.BASE_API}common.do?api/uploadPic`,
      filePath: pathes,
      header: {
        'contentType': 'multipart/form-data'
      },
      name: 'file',
      formData: data,
      success: function (res) {
        let data = typeof res.data === 'string' ? JSON.parse(res.data) : res.data
        if (data.success) {
          let imgUrl = `${data.obj[0]}`
          resolve(imgUrl)
        } else {
          reject(data)
        }
      },
      fail: function (error) {
        reject(error)
      }
    })
  })
  return promise
}
