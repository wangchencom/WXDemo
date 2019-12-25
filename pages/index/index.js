//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    testd: 'hello wcc',
    array: [1, 2, 3, 4, 5],
    a: 1,
    b: 3,
    c: 4,
    d: 5,
    id: 1,
    condition: false,
    view: 'MINA',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  //点击事件触发
  bindViewTap: function() {
    wx.navigateTo({
      //跳转页面
      url: '../logs/logs'
    })
  },

  chicktotestview: function() {
    //跳转方法
    wx.navigateTo({
      url: '../testview/testview'
    })
  },

  onLoad: function() {
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

