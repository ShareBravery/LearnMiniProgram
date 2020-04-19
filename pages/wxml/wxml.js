// pages/wxml/wxml.js
Page({
  data: {
    message: 'Hello vue',
    age: 17, 
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 45,
    movies: ['星际穿越','盗梦空间','大话西游'],
    nums: [
      [10,14,25,64],
      [22,33,44,55],
      [543,785,265,192,]
    ],
    letters: ['a','b','c']
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },

  handleChangColor(){
    this.setData({
      isActive: !this.data.isActive
    })
  },

  handleSwitchShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },

  handleIncrenment(){
    this.setData({
      score: this.data.score+6
    })
  }
})