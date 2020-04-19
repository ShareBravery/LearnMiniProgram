// pages/home/home.js
Page({
  data: {
    titles: ['衣服','裤子','鞋子']
  },
  handleBtnClick(){
    console.log('按钮发生点击')
  },


  handleTouchStart(){
    console.log('handleTouchStart')
  },
  handleTouchMove(){
    console.log('handleTouchMove')
  },
  handleTouchEnd(){
    console.log('handleTouchEnd')
  },
  handleTap(){
    console.log('handleTap')
  },
  handleLongPress(){
    console.log('handleLongPress')
  },

  handleEventClick(event){
    console.log('aaa',event)
  },

  handleItemClick(event){
    console.log(event)

    const dataset=event.currentTarget.dataset;
    const title=dataset.item;
    const index=dataset.index;
    console.log(title,index)
  },

  //----------事件冒泡和事件捕获
  hendleCaptureView1(){
    console.log('hendleCaptureView1')
  },
  handleBindView1(){
    console.log('handleBindView1')
  },
  hendleCaptureView2(){
    console.log('hendleCaptureView2')
  },
  handleBindView2(){
    console.log('handleBindView2')
  },
  hendleCaptureView3(){
    console.log('hendleCaptureView3')
  },
  handleBindView3(){
    console.log('handleBindView3')
  },
})