// pages/home/home.js

//注册一个页面
//页面也有自己的生命周期函数
Page({
  // 初始化数据
  data: {
    message: '啊哈哈哈'
  },

  //1. 监听页面的生命周期函数
  onLoad(){
    console.log('onLoad')
    // wx.request({
    //   url: '../data/tag.js',
    //   success: (res)=>{
    //     console.log(res)
    //   }
    // })
  },
  //页面显示出来时
  onShow(){
    console.log('onShow')
  },
  //页面初次渲染完成时
  onReady(){
    console.log('onReady')
  },
  //但页面隐藏时
  onHide(){
    console.log('onHide')
  },
  //页面销毁时
  onUnload(){
    console.log('onUnload')
  },

  //3. 监听wxml中相关的一些事件
  handleViewClick(){
    console.log('被点击le')
  },

  //4.监听其他事件
  //监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部')
  },
onPullDownRefresh(){
  console.log('下拉刷新事件')
}
})