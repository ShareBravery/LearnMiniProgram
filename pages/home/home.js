Page({
  data: {
    name: 'EatFinger',
    age: 18,
    students: [
      {id: 110, name: 'Kobe', age: 30},
      {id: 111, name: 'James', age: 18},
      {id: 112, name: 'Curry', age: 28},
      {id: 113, name: 'Eat', age: 36},
    ],
    counter: 0
  },
  handleBtnClick(){
    // 1. 错误做法，界面是不会刷新的
    // this.data.counter++
    // console.log(this.data.counter)

    // 2. this.setData()
    this.setData({
      counter: this.data.counter+1
    })
  },
  handleSubtraction(){
    this.setData({
      counter: this.data.counter-1
    })
  }
})