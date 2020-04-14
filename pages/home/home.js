// pages/home/home.js
//getApp()获取App()产生的实例对象
const app = getApp()
// console.log(app.globalData.name)
// console.log(app.globalData.age)\

const name=app.globalData.name;
const age=app.globalData.age;


Page({
  handleGetUserInfo(event){
    console.log(event)
  }
})