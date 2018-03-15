var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region_star: ['北京', '北京', ''],
    region_to: ['北京', '北京', ''],
    region_form: ['', '', ''],
    customItem: '全部',
    files: [],
    files_rz: [],
    files_show: [],
    popup_book: false,
    popup_my: false,
    mask: false,
    region_star1: ['北京', '北京', ''],
    region_to1: ['北京', '北京', ''],
    region_star2: ['北京', '北京', ''],
    region_to2: ['北京', '北京', ''],
    car: ["挂车", "低底盘", "单桥车", "棉被车", "双桥车", "高栏车", "保温车", "罐车"],
    carIndex: 0,
    length: ["4.2m", "6.8m", "9.6m", "5.2m", "7.2m", "6.2m", "8.8m", "17.5m"],
    lengthIndex: 0    
  },
  //车型
  bindcar: function (e) {
    this.setData({
      carIndex: e.detail.value
    })
  },
  //车长
  bindlength: function (e) {
    this.setData({
      lengthIndex: e.detail.value
    })
  }, 

  bindRegionChange_star1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_star1: e.detail.value
    })
  },

  bindRegionChange_to1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_to1: e.detail.value
    })
  },
  bindRegionChange_star2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_star2: e.detail.value
    })
  },

  bindRegionChange_to2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_to2: e.detail.value
    })
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

  bindRegionChange_form: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_form: e.detail.value
    })
  },
  
  //验证手机号
  validatemobile: function (mobile) {
    if (mobile.detail.value.length == 0) {
      wx.showToast({
        title: '请输入手机号！',
        icon: 'success',
        duration: 1500
      })
      return false;
    }

    if (mobile.detail.value.length != 11) {
      wx.showToast({
        title: '手机号长度有误！',
        icon: 'success',
        duration: 1500
      })
      return false;
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(mobile)) {
      wx.showToast({
        title: '手机号有误！',
        icon: 'success',
        duration: 1500
      })
      return false;
    }
    return true;
  },
  //验证电话号码
  checkTel: function (tel) {
    if (tel.detail.value.length == 0) {
      wx.showToast({
        title: '请输入公司电话！',
        icon: 'success',
        duration: 1500
      })
      return false;
    }
    var bValidate = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
    if (bValidate.test(tel.detail.value)) {
      return true;
    } else {
      wx.showToast({
        title: '格式有误！',
        icon: 'success',
        duration: 1500
      })
      return false;
    }

  },
  //验证邮箱
  isEmail: function (mail) {

    if (mail.detail.value.length == 0) {
      wx.showToast({
        title: '请输入邮箱！',
        icon: 'success',
        duration: 1500
      })
      return false;
    }
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(mail.detail.value)) {
      return true;
    } else {
      wx.showToast({
        title: '格式有误！',
        icon: 'success',
        duration: 1500
      })
      return false;
    }
  },
  //上传产品展示图
  chooseImage_rz: function (e) {
    var that = this;
    var files_rz = this.data.files_rz;
    if (files_rz.length >= 9) {
      this.setData({
        lenMore: 1
      });
      setTimeout(function () {
        that.setData({
          lenMore: 0
        });
      }, 2500);
      return false;
    }
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files_rz: that.data.files_rz.concat(res.tempFilePaths),
          tips_rz: 'hidden'
        });
      }
    })
  },
  //上传认证图片
  chooseImage_show: function (e) {
    var that = this;
    var files_show = this.data.files_show;
    if (files_show.length >= 2) {
      this.setData({
        lenMore: 1
      });
      setTimeout(function () {
        that.setData({
          lenMore: 0
        });
      }, 2500);
      return false;
    }
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files_show: that.data.files_show.concat(res.tempFilePaths),
          tips_show: 'hidden'
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  // 删除展示图片
  deleteImg: function (e) {
    var files_rz = this.data.files_rz;
    var index = e.currentTarget.dataset.index;
    files_rz.splice(index, 1);
    this.setData({
      files_rz: files_rz,
      tips_rz: 'neddih'
    });
    console.log(files_rz)
  },
  // 删除认证图片
  deleteapproveImg: function (e) {
    var files_show = this.data.files_show;
    var index = e.currentTarget.dataset.index;
    files_show.splice(index, 1);
    this.setData({
      files_show: files_show,
      tips_show: 'neddih'
    });
    console.log(files_show)
  },
  // 弹窗-同意书
  bind_popup_book: function (e) {
    this.setData({
      popup_book: true,
      mask: true
    });
  },
  // 弹窗-我的小程序
  bind_popup_my: function (e) {
    this.setData({
      popup_my: true,
      mask: true
    });
  },
  // 弹窗-关闭
  bind_popup_close: function (e) {
    this.setData({
      popup_book: false,
      popup_my: false,
      mask: false
    });
  }
   
})