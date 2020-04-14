App({
  //生命周期函数: 后台存活2个小时
  //小程序初始化完成时，会执行的生命周期函数
  onLaunch: function(){
    //异步调用
    console.log('小程序初始化完成了: onLaunch')
  //   wx.request({
  //     url: '',
  //   })

  wx.getUserInfo({
    success: function(res){
      console.log(res)
    }
  })
  // setTimeout(() => {
  // const err=new Error()

  // throw err  //throw 抛出
  // }, 3000);
  },

  //小程序界面显示出来后会执行的生命周期函数
  onShow: function(option){
    // console.log('界面显示出来：onShow'),
    console.log(option)

    //判断小程序的进入场景
    switch(option.scene){
      case 1001: 
        break;
      case 1005:
        break;
    }
  },

  onHide: function(){
    console.log('界面被隐藏时会执行: onHide')
  },

  onError: function(){
    console.log('小程序发生错误时执行')
  },

  globalData: {
    name: 'BraveryForU',
    age: 18
  }
})