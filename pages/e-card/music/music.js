//需要修改 -》 获取音乐列表信息-》跳转到前一个页面   暴露出选择数据
//    `id`, 
//   `music_name` '音乐名',
//    `music_web` '音乐路径'
var commont = require("../../../js/commont.js");

var app = getApp()
Page({
  data: {
    id:0,
    name:'',
    web:'',
    radioItems: [
      { name: '刘德华-真我的风采', value: '0' ,src:'/2312/12321'},
      { name: '王菲-执迷不悔.mp3', value: '1', src: '/2312/12321', checked: true },
      { name: '华语群星-好花红', value: '2', src: '/2312/12321' },
      { name: '克罗地亚狂想曲', value: '3', src: '/2312/12321' }
    ],
  },

  onLoad: function () {
    // console.log(getCurrentPages()) 
    var navigator_time = getApp().globalData.navigator_time
  },
  set_music_data:function(e){
    commont.set_music_data(this,e)
  },

  radioChange: function (e) {
   var that =this
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    for (let i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
      if(radioItems[i].checked)
      {
        that.data.id = radioItems[i].value
        that.data.name = radioItems[i].name
        that.data.web = radioItems[i].src
      }
    }
    this.set_music_data()
    this.setData({
      radioItems: radioItems
    });
    // console.log(radioItems)
  },
  close:function(e){
    wx.navigateBack()
  }

})
