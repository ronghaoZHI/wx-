// 拨打电话
function bind_phone(content, e) {
  var phone = e.currentTarget.dataset.phone;
  wx.makePhoneCall({
    phoneNumber: phone, //仅为示例，并非真实的电话号码
  })
}

// 选择位置
function bind_location(content, e) {
  var that = content;
  wx.chooseLocation({
    success: function (e) {
      var latitude = e.latitude
      var longitude = e.longitude
      // var name = e.name
      var address = e.address
      that.setData({
        input_location: address,
        input_latitude: latitude,
        input_longitude: longitude
      });
    }
  })
}
// 弹窗-我的小程序/图片
function bind_popup_img(content, e) {
  var that = content;
  that.setData({
    popup_img: true,
    mask: true
  });
}

// 弹窗-我的小程序/图片-文字
function bind_popup_my(content, e) {
  var that = content;
  content.setData({
    popup_my: true,
    mask: true
  });
}

// 弹窗-同意书
function bind_popup_book(content, e) {
  var that = content;
  that.setData({
    popup_book: true,
    mask: true
  });
}

// 弹窗-关闭
function bind_popup_close(content, e) {
  var that = content;
  that.setData({
    popup_book: false,
    popup_my: false,
    popup_img: false,
    mask: false
  });
}
// 电子名片-电话-显示操作菜单
function bind_card_phone(content, e) {
  var that = content
  var phone = e.currentTarget.dataset.phone;
  wx.showActionSheet({
    itemList: ['拨打', '添加通讯录', '复制'],
    success: function (res) {
      console.log(res.tapIndex)
      var index = res.tapIndex;
      if (index == 0) {
        wx.makePhoneCall({
          phoneNumber: phone, //仅为示例，并非真实的电话号码
        })
      }
      if (index == 1) {
        wx.addPhoneContact({
          firstName: '姓名',//联系人姓名  
          mobilePhoneNumber: phone,//联系人手机号  
        })
      }
      if (index == 2) {
        wx.setClipboardData({
          data: phone,
          success: function (e) {
            wx.getClipboardData({
              success: function (e) {
                console.log(e.data) // data
              }
            })
          }
        })
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 2000
        })
      }
    },
    fail: function (res) {
      console.log(res.errMsg)
    }
  })
}


// 复制
function bind_copy(content, e) {
  var that = content;
  var copy = e.currentTarget.dataset.copy;
  wx.setClipboardData({
    data: copy,
    success: function (e) {
      wx.getClipboardData({
        success: function (e) {
          console.log(e.copy) // data
        }
      })
    }
  })
  wx.showToast({
    title: '复制成功',
    icon: 'success',
    duration: 2000
  })
}

// 导航
function bind_getlocation(content, e) {
  var that = content;
  var name = e.currentTarget.dataset.name;
  var address = e.currentTarget.dataset.address;
  wx.getLocation({
    type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    success: function (res) {
      var latitude = 30.6574200000
      var longitude = 104.0658400000
      wx.openLocation({
        latitude: latitude,
        longitude: longitude,
        name: name,
        address: address,
        scale: 28
      })
    }
  })
}

// 电子名片-收藏
function bind_love(content, e) {
  var that = content;
  that.setData({
    love: !that.data.love
  });
}

// 电子名片-音乐播放
function bind_music(content, e) {
  var that = content
  if (that.data.music) {
    that.setData({
      music: false,
    });
    that.audioCtx.pause();
  } else {
    that.setData({
      music: true,
    });
    that.audioCtx.play();
  }
}

// 电子名片--滚动条
function bind_scrollTop_me() {
  wx.pageScrollTo({
    scrollTop: 480
  })
}
function bind_scrollTop_company() {
  wx.pageScrollTo({
    scrollTop: 1800
  })
}

//车型
function bind_car(content, e) {
  var that = content
  content.setData({
    carIndex: e.detail.value
  })
}

//车长
function bind_length(content, e) {
  var that = content
  content.setData({
    lengthIndex: e.detail.value
  })
}

//验证手机号
function bind_validatemobile(content, mobile) {
  var that = content
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
  if (!myreg.test(mobile.detail.value)) {
    wx.showToast({
      title: '手机号有误！',
      icon: 'success',
      duration: 1500
    })
    return false;
  }
  return true;
}

//验证电话号码
function bind_checkTel(content, tel) {
  var that = content
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

}

//验证邮箱
function bind_isEmail(content, mail) {
  var that = content
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
}

//验证qq
function bind_isQQ(content, QQ) {
  var that = content
  if (QQ.detail.value.length == 0) {
    wx.showToast({
      title: '请输入qq！',
      icon: 'success',
      duration: 1500
    })
    return false;
  }
  var bValidate = /^[1-9][0-9]{4,9}$/;
  if (bValidate.test(QQ.detail.value)) {
    return true;
  } else {
    wx.showToast({
      title: '格式有误！',
      icon: 'success',
      duration: 1500
    })
    return false;
  }

}



//上传认证图片
function chooseImage_rz(content, e,id,url) {
  var that = content
  var files_rz = content.data.files_rz;
  if (files_rz.length >= 2) {
    content.setData({
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
      //////////////////////////////
      ////////////////////////////
      // if (id == 'Undefined' || url =='Undefined')
      // {return}
      // wx.uploadFile({
      //   url: url,
      //   filePath: res.tempFilePaths[0],
      //   header: { "Content-Type": "multipart/form-data" },
      //   ////////////////////////////
      //   name: '',
      //   formData: { id: id },
      //   success: function (res) {
      //     console.log(res.data);
      //     if (res.statusCode != 200) {
      //       wx.showModal({
      //         title: '提示',
      //         content: '上传失败',
      //         showCancel: false
      //       });
      //       return;
      //     }
      //   },
      //   complete: () => {
      //     wx.hideToast();
      //   }
      // })
    }
  })
}
// 删除认证图片
function bind_deleteImg_rz(content, e) {
  var that = content
  var files_rz = content.data.files_rz;
  var index = e.currentTarget.dataset.index;
  files_rz.splice(index, 1);
  content.setData({
    files_rz: files_rz,
    tips_rz: 'neddih'
  });
  console.log(files_rz)
}

//上传产品展示图
function chooseImage_show(content, e,id,url) {
  var that = content
  var files_show = content.data.files_show;
  if (files_show.length >= 9) {
    content.setData({
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
      // if (id == 'Undefined' || url == 'Undefined')
      // { return }
      // wx.uploadFile({
      //   url: url,
      //   filePath: res.tempFilePaths[0],
      //   header: { "Content-Type": "multipart/form-data" },
      //   name: 'product_show',
      //   formData: { id: id },
      //   success: function (res) {
      //     console.log(res.data);
      //     if (res.statusCode != 200) {
      //       wx.showModal({
      //         title: '提示',
      //         content: '上传失败',
      //         showCancel: false
      //       });
      //       return;
      //     }
      //   },
      //   complete: () => {
      //     wx.hideToast();
      //   }
      // })
    }
  })
}
// 删除展示图片
function bind_deleteImg_show(content, e) {
  var that = content
  var files_show = content.data.files_show;
  var index = e.currentTarget.dataset.index;
  files_show.splice(index, 1);
  content.setData({
    files_show: files_show,
    tips_show: 'neddih'
  });
  console.log(files_show)
}
//上传个人形象照
function chooseImage_me(content, e, id,url) {
  var that = content
  var files_me = content.data.files_me;
  if (files_me.length >= 1) {
    content.setData({
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
        files_me: that.data.files_me.concat(res.tempFilePaths),
        tips_me: 'hidden'
      });
      //////////////////////////
      ////////////////////
      // if (id == 'Undefined' || url == 'Undefined')
      // { return }     
      // console.log('url:'+url,'id:'+id)
      //  wx.uploadFile({
      //   url: url,
      //   filePath: res.tempFilePaths[0],
      //   header: { "Content-Type": "multipart/form-data" },
      //   name: 'person_img',
      //   formData:{id:id},
      //  success: function (res) {
      //     console.log(res.data);
      //     if (res.statusCode != 200) {
      //       wx.showModal({
      //         title: '提示',
      //         content: '上传失败',
      //         showCancel: false
      //       });
      //       return;
      //     }
      //   },
      //   complete: () => {
      //     wx.hideToast(); 
      //     }
      // })
    }
  })
}
// 删除个人形象照
function bind_deleteImg_me(content, e) {
  var that = content
  var files_me = content.data.files_me;
  var index = e.currentTarget.dataset.index;
  files_me.splice(index, 1);
  content.setData({
    files_me: files_me,
    tips_me: 'neddih'
  });
  console.log(files_me)
}
//上传微信二维码
function chooseImage_wx(content, e,id, url) {
  var that = content
  var files_wx = content.data.files_wx;
  if (files_wx.length >= 1) {
    content.setData({
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
        files_wx: that.data.files_wx.concat(res.tempFilePaths),
        tips_wx: 'hidden'
      });
      //////////////////
      /////////////////
      // if (id == 'Undefined' || url == 'Undefined')
      // { return }
      // console.log('id:'+id+'...'+url)
      // wx.uploadFile({
      //   url: url,
      //   filePath: res.tempFilePaths[0],
      //   header: { "Content-Type": "multipart/form-data" },
      //   name: 'wechat_img',
      //   formData: { id: id },
      //   success: function (res) {
      //     console.log(res.data);
      //     if (res.statusCode != 200) {
      //       wx.showModal({
      //         title: '提示',
      //         content: '上传失败',
      //         showCancel: false
      //       });
      //       return;
      //     }
      //   },
      //   complete: () => {
      //     wx.hideToast();
      //   }
      // })
    }
  })
}
// 删除微信二维码
function bind_deleteImg_wx(content, e) {
  var that = content
  var files_wx = content.data.files_wx;
  var index = e.currentTarget.dataset.index;
  files_wx.splice(index, 1);
  content.setData({
    files_wx: files_wx,
    tips_wx: 'neddih'
  });
  console.log(files_wx)
}
//上传个人业绩
function chooseImage_mygrade(content, e, id, url) {
  var that = content
  var files_mygrade = content.data.files_mygrade;
  if (files_mygrade.length >= 9) {
    content.setData({
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
        files_mygrade: that.data.files_mygrade.concat(res.tempFilePaths),
        tips_mygrade: 'hidden'
      });
      ///////////////////////////////////////
      /////////////////////////
      // if (id == 'Undefined' || url == 'Undefined')
      // { return }
      // wx.uploadFile({
      //   url: url,
      //   filePath: res.tempFilePaths[0],
      //   header: { "Content-Type": "multipart/form-data" },
      //   name: 'yeji_img',
      //   formData: { id: id },
      //   success: function (res) {
      //     console.log(res.data);
      //     if (res.statusCode != 200) {
      //       wx.showModal({
      //         title: '提示',
      //         content: '上传失败',
      //         showCancel: false
      //       });
      //       return;
      //     }
      //   },
      //   complete: () => {
      //     wx.hideToast();
      //   }
      // })
    }
  })
}
// 删除个人业绩
function bind_deleteImg_mygrade(content, e) {
  var that = content
  var files_mygrade = content.data.files_mygrade;
  var index = e.currentTarget.dataset.index;
  files_mygrade.splice(index, 1);
  content.setData({
    files_mygrade: files_mygrade,
    tips_mygrade: 'neddih'
  });
  console.log(files_mygrade)
}
//上传团队合作
function chooseImage_team(content, e, id, url) {
  var that = content
  var files_team = content.data.files_team;
  if (files_team.length >= 9) {
    content.setData({
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
        files_team: that.data.files_team.concat(res.tempFilePaths),
        tips_team: 'hidden'
      });
      //////////////////////////////////
      //////////////////
      if (id == 'Undefined' || url == 'Undefined')
      { return }
      wx.uploadFile({
        url: url,
        filePath: res.tempFilePaths[0],
        header: { "Content-Type": "multipart/form-data" },
        name: 'teamwork',
        formData: { id: id },
        success: function (res) {
          console.log(res.data);
          if (res.statusCode != 200) {
            wx.showModal({
              title: '提示',
              content: '上传失败',
              showCancel: false
            });
            return;
          }
        },
        complete: () => {
          wx.hideToast();
        }
      })
    }
  })
}
// 删除团队合作
function bind_deleteImg_team(content, e) {
  var that = content
  var files_team = content.data.files_team;
  var index = e.currentTarget.dataset.index;
  files_team.splice(index, 1);
  content.setData({
    files_team: files_team,
    tips_team: 'neddih'
  });
  console.log(files_team)
}

//上传公司活动
function chooseImage_activity(content, e, id, url) {
  var that = content
  var files_activity = content.data.files_activity;
  if (files_activity.length >= 9) {
    content.setData({
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
        files_activity: that.data.files_activity.concat(res.tempFilePaths),
        tips_activity: 'hidden'
      });
      ///////////////////////////////////
      //////////////////////////
      // if (id == 'Undefined' || url == 'Undefined')
      // { return }
      // wx.uploadFile({
      //   url: url,
      //   filePath: res.tempFilePaths[0],
      //   header: { "Content-Type": "multipart/form-data" },
      //   name: 'company_activity',
      //   formData: { id: id },
      //   success: function (res) {
      //     console.log(res.data);
      //     if (res.statusCode != 200) {
      //       wx.showModal({
      //         title: '提示',
      //         content: '上传失败',
      //         showCancel: false
      //       });
      //       return;
      //     }
      //   },
      //   complete: () => {
      //     wx.hideToast();
      //   }
      // })
    }
  })
}
// 删除公司活动
function bind_deleteImg_activity(content, e) {
  var that = content
  var files_activity = content.data.files_activity;
  var index = e.currentTarget.dataset.index;
  files_activity.splice(index, 1);
  content.setData({
    files_activity: files_activity,
    tips_activity: 'neddih'
  });
  console.log(files_activity)
}
//上传发票
function chooseImage_bill(content, e, id, url) {
  var that = content
  var files_bill = content.data.files_bill;
  if (files_bill.length >= 9) {
    content.setData({
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
        files_bill: that.data.files_bill.concat(res.tempFilePaths),
        tips_bill: 'hidden'
      });
      /////////////////////////////////
      ///////////////////////////
      // if (id == 'Undefined' || url == 'Undefined')
      // { return }
      // wx.uploadFile({
      //   url: url,
      //   filePath: res.tempFilePaths[0],
      //   header: { "Content-Type": "multipart/form-data" },
      //   name: 'fapiao_img',
      //   formData: { id: id },
      //   success: function (res) {
      //     console.log(res.data);
      //     if (res.statusCode != 200) {
      //       wx.showModal({
      //         title: '提示',
      //         content: '上传失败',
      //         showCancel: false
      //       });
      //       return;
      //     }
      //   },
      //   complete: () => {
      //     wx.hideToast();
      //   }
      // })
    }
  })
}
// 删除发票
function bind_deleteImg_bill(content, e) {
  var that = content
  var files_bill = content.data.files_bill;
  var index = e.currentTarget.dataset.index;
  files_bill.splice(index, 1);
  content.setData({
    files_bill: files_bill,
    tips_bill: 'neddih'
  });
  console.log(files_bill)
}
//music数据 绑定
var music_obj={
  id:0,
  name:'',
  web:''
}
function set_music_data(content,e){
   var  that = content
   music_obj.id = that.data.id
   music_obj.name = that.data.name
   music_obj.web = that.data.web
   console.log(music_obj)
}
function get_music_data(content,e){
   var that = content
   console.log(music_obj)
   content.setData({
     music_id: music_obj.id,
     music_name: music_obj.name,
     music_web: music_obj.web
   })
}
//货源信息编号
var goods_id = 0
function set_goods_id(content, e,){
  var that = content
  goods_id = that.data.goods_id
  console.log(goods_id)
}
function get_goods_id(content, e){
  var that = content
  that.setData({
    goods_id : goods_id
  })
    console.log(goods_id)
}
//车源信息编号
var car_id = 0
function set_car_id(content, e, ) {
  var that = content
  car_id = that.data.car_id
  console.log(car_id)
}
function get_car_id(content, e) {
  var that = content
  that.setData({
    car_id : car_id
  })
  console.log(that.data.car_id)
}
//多张图片上传
function uploadimg(data) {
  var that = this,
    i = data.i ? data.i : 0,//当前上传的哪张图片
    success = data.success ? data.success : 0,//上传成功的个数
    fail = data.fail ? data.fail : 0;//上传失败的个数
  wx.uploadFile({
    url: data.url,
    filePath: data.path[i],
    name: data.name,//这里根据自己的实际情况改
    formData: data.formdata,
    success: (resp) => {
      if(resp.statusCode == 200)
      {success++;}//图片上传成功，图片上传成功的变量+1
      console.log(resp)
      console.log(i);
      //这里可能有BUG，失败也会执行这里,所以这里应该是后台返回过来的状态码为成功时，这里的success才+1
    },
    fail: (res) => {
      fail++;//图片上传失败，图片上传失败的变量+1
      console.log('fail:' + i + "fail:" + fail);
    },
    complete: () => {
      console.log(i);
      i++;//这个图片执行完上传后，开始上传下一张
      if (i == data.path.length) {   //当图片传完时，停止调用          
        console.log('执行完毕');
        console.log('成功：' + success + " 失败：" + fail);
      } else {//若图片还没有传完，则继续调用函数
        console.log(i);
        data.i = i;
        data.success = success;
        data.fail = fail;
        that.uploadimg(data);
      }

    }
  });
}

module.exports.uploadimg = uploadimg; //上传多张图片
module.exports.set_music_data = set_music_data; //music数据
module.exports.get_music_data = get_music_data; //music数据
module.exports.get_goods_id = get_goods_id
module.exports.set_goods_id = set_goods_id
module.exports.set_car_id = set_car_id
module.exports.get_car_id = get_car_id

module.exports.bind_phone = bind_phone;// 拨打电话
module.exports.bind_location = bind_location;// 选择位置
module.exports.bind_popup_book = bind_popup_book;// 弹窗-同意书
module.exports.bind_popup_img = bind_popup_img;// 弹窗-我的小程序/图片
module.exports.bind_popup_my = bind_popup_my;// 弹窗-我的小程序/图片-文字
module.exports.bind_popup_close = bind_popup_close;// 弹窗-关闭
module.exports.bind_card_phone = bind_card_phone;// 电子名片-电话-显示操作菜单
module.exports.bind_copy = bind_copy;// 复制
module.exports.bind_getlocation = bind_getlocation;// 导航
module.exports.bind_love = bind_love;// 电子名片-收藏
module.exports.bind_music = bind_music;// 电子名片-音乐播放
module.exports.bind_scrollTop_me = bind_scrollTop_me;// 电子名片--滚动条
module.exports.bind_scrollTop_company = bind_scrollTop_company;// 电子名片--滚动条
module.exports.bind_car = bind_car;//车型
module.exports.bind_length = bind_length;//车长
module.exports.bind_validatemobile = bind_validatemobile;//验证手机号
module.exports.bind_checkTel = bind_checkTel;//验证电话号码
module.exports.bind_isEmail = bind_isEmail;//验证邮箱
module.exports.bind_isQQ = bind_isQQ;//验证QQ

module.exports.chooseImage_rz = chooseImage_rz;//上传认证图片
module.exports.bind_deleteImg_rz = bind_deleteImg_rz;//删除认证图片

module.exports.chooseImage_show = chooseImage_show;//上传产品展示图
module.exports.bind_deleteImg_show = bind_deleteImg_show;//删除展示图片

module.exports.chooseImage_wx = chooseImage_wx;//上传微信二维码
module.exports.bind_deleteImg_wx = bind_deleteImg_wx;//删除微信二维码

module.exports.chooseImage_me = chooseImage_me;//上传个人形象照
module.exports.bind_deleteImg_me = bind_deleteImg_me;//删除个人形象照

module.exports.chooseImage_mygrade = chooseImage_mygrade;//上传个人业绩
module.exports.bind_deleteImg_mygrade = bind_deleteImg_mygrade;//删除个人业绩

module.exports.chooseImage_team = chooseImage_team;//上传团队合作
module.exports.bind_deleteImg_team = bind_deleteImg_team;//删除团队合作

module.exports.chooseImage_activity = chooseImage_activity;//上传公司活动
module.exports.bind_deleteImg_activity = bind_deleteImg_activity;//删除公司活动

module.exports.chooseImage_bill = chooseImage_bill;//上传发票
module.exports.bind_deleteImg_bill = bind_deleteImg_bill;//删除发票