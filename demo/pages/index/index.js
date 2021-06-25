// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    avatarUrl: '0.png',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  touchStart:function(e){

    var that=this;

    that.setData({
        touchStart:e.timeStamp
    })
},
touchEnd:function(e){
    var that=this;
    that.setData({
        touchEnd:e.timeStamp
    })
},
  pressTap: function() {
    var idx=0;
    var that=this;
    var touchTime=this.data.touchEnd-this.data.touchStart;
    console.log("touchTime="+touchTime);
    if(touchTime>10000){
      idx=touchTime/10000;
      touchTime=touchTime-idx*10000;
    }
    if (touchTime>=0&touchTime<2000) {
      that.setData({
        avatarUrl: "1.png",
      });   
    }else
    if (touchTime>=2000&touchTime<5000) {
      that.setData({
        avatarUrl: "2.png",
      });   
    }else if(touchTime>=5000&touchTime<7000){
      that.setData({
        avatarUrl: "3.png",
      });
    }else if(touchTime>=7000&touchTime<10000){
      that.setData({
        avatarUrl: "4.png",
      });
    }else if(touchTime>=100000){
      idx++;
    }
  }
 


})
