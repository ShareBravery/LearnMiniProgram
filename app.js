const TOKEN='token'

App({
  globalData: {
    token: ''
  },
  onLaunch: function () {
    // 1. 先从缓存中取出token
    const token=wx.getStorageSync(TOKEN)

    // 2. 判断token是否有值
    if(token&&token.length!==00){// 已经有token，验证token是否过期
      this.check_token(token)
    }else{ //没有token，进行登录操作
      this.login()
    }
  },
  check_token(token){
    wx.request({
      url: 'http://httpbin.org/',
      method: 'post',
      header: {
        token
      },
      success: function(res){
        console.log(res)
      },
      fail: function(err){
        console.log(err)
      }
    })
  },
  login(){
    wx.login({
      // code只有五分钟有效期
      success: (res)=>{
      // 1. 获取code
      const code=res.code

      // 2. 将code发送给我们的服务器(最好加上账号、密码一起发送)
        wx.request({
          url: 'http://httpbin.org/',
          // method: 'post',
          data: {
            code
          },
          success: (res)=>{
            // 1. 取出token
            const token=res.data.token;

            // 2. 将token保存在globalData中
            this.globalData.token=token;

            // console.log(this.globalData.token)
            console.log(res)


            // 3. 进行本地存储
            // wx.setStorageSync('key', data)
            wx.setStorageSync(TOKEN, token)

          }
        })
      }
    })
  }
})
