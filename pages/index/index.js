// index.js
// 获取应用实例
const app = getApp()

Page({
  data: { // 小程序页面数据
    motto: 'Hello World', 
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'), // 检查是否支持功能
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') && false // 如需尝试获取用户信息可改为false 
  },
  // 事件处理函数
  bindViewTap() {
    // 跳转页面
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 页面加载时处理
  onLoad() {
    // 如果已经获取userProfile信息
    if (wx.getUserProfile) {
      this.setData({ // 设置标记为true
        canIUseGetUserProfile: true
      })
    }
  },

  getUserProfile(e) {
    wx.getUserProfile({
      desc: '展示用户信息', 
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
