
var app = getApp()
Page({
  data: {

    radioItems: [
      { name: '刘德华-真我的风采', value: '0' },
      { name: '王菲-执迷不悔.mp3', value: '1', checked: true },
      { name: '华语群星-好花红', value: '2' },
      { name: '克罗地亚狂想曲', value: '3' }
    ],
  },

  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
  },
})
