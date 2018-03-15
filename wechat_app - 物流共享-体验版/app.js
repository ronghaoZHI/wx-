//app.js
App({
  globalData: {
    userInfo: null,
    navigator_time: 200,
  },
  d: {  
    userId: 1,
    appId: "wxee7e14e5e473ac2d",
    appKey: "2ad503dfe960abc7a8cad3ba0e547787",
    ceshiUrl: 'https://wlgx.com/index.php',
  },
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
    //login
    this.getUserInfo();
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function (res) {
          var code = res.code;
          //get wx user simple info
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo);
              //get user sessionKey
              //get sessionKey
              that.getUserSessionKey(code);
            },
            fail: function (e) {
              console.log("looolllllllll")              
              wx.showModal({
                title: '警告',
                content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
                success: function (res) {
                  if (res.confirm) {
                    wx.openSetting({
                      success: (res) => {
                        if (res.authSetting["scope.userInfo"]) {////如果用户重新同意了授权登录
                          wx.getUserInfo({
                            success: function (res) {
                              // var userInfo = res.userInfo;
                              that.setData({
                                nickName: res.userInfo.nickName,
                                avatarUrl: res.userInfo.avatarUrl,
                              })
                            }
                          })
                        }
                      }, fail: function (res) {
                        console.log("获取失败！")
                      }
                    })

                  }
                }
              });
            }, 
          });
        }
      });
    }
  },
  //得到openid
  getUserSessionKey: function (code) {    
    var that = this;
    wx.request({
      url: that.d.ceshiUrl + '/Api/Login/getsessionkey',
      method: 'post',

      data: {
        code: code
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {

        //--init data        
        var data = res.data;
        console.log(data)
        if (data.status == 0) {
          wx.showToast({
            title: data.err,
            duration: 2000
          });
          return false;
        }

        that.globalData.userInfo['sessionId'] = data.session_key;
        that.globalData.userInfo['openid'] = data.openid;
        that.onLoginUser();
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！err:getsessionkeys',
          duration: 2000
        });
      },
    });
  },
  //
  onLoginUser: function () {
    var that = this;
    var user = that.globalData.userInfo;
    wx.request({
      url: that.d.ceshiUrl + '/Api/Login/authlogin',
      method: 'post',
      data: {
        SessionId: user.sessionId,
        gender: user.gender,
        NickName: user.nickName,
        avatarUrl: user.avatarUrl,
        openid: user.openid
      },     

      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        //--init data        
        var data = res.data.arr;        
        var status = res.data.status;
        if (status != 1) {
          console.log("jskdljfslkdjf");

          wx.showToast({            
            title: res.data.err,
            duration: 3000
          });
          return false;
        }
        that.globalData.userInfo['id'] = data.ID;
        that.globalData.userInfo['NickName'] = data.NickName;
        that.globalData.userInfo['avatarUrl'] = data.avatarUrl;
        console.log(data.ID +"wetwre")
        var userId = data.ID;
        if (!userId) {
          wx.showToast({
            title: '登录失败！',
            duration: 3000
          });
          return false;
        }
        that.d.userId = userId;
      },
      fail: function (e) {
        console.log("looolllllllll")
        wx.showToast({
          title: '网络异常！err:authlogin',
          duration: 2000
        });      
      },      
      complete: function (res) {
        console.log("获取用户信息完成")
      }     
    });
  }, 
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  }
      
  })
  