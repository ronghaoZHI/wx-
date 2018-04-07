// pages/info_card/LTL-list/LTL-list.js
var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    region_star: ['北京', '北京市', ''],
    region_to: ['北京', '北京市', ''],
    customItem: '全部',
    LTL_list:[],
    goods_id: 0,
  },

  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
   this.get_data()
  },

  bindRegionChange_star: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_star: e.detail.value
    })
  },

  bindRegionChange_to: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_to: e.detail.value
    })
  },
  set_goods_id: function (e) {
    console.log(e)
    this.data.goods_id = e.currentTarget.dataset.goodsId    //获取点击选项的id
    commont.set_goods_id(this, e)
  },
  scrollTop: function () {
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  

  get_data: function () {
    var that = this
    var start = this.data.region_star[1]
    var to = this.data.region_to[1]
    wx.request({
      url: 'https://wlgx.com/Api/Ltl/index',
      formData: { from: start, to: to },
      method: 'POST',
      // header: {},
      success: (res) => {
        console.log(res.data)

        that.setData({
          LTL_list: res.data.list.concat()
        })
        console.log(this.data.goods_list)
      },
      complete: () => {

      }
    })
  },

})
