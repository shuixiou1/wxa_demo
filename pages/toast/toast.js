// pages/toast/toast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toast() {
    wx.showToast({ // 显示Toast
      title: '已发送',
      icon: 'success', // loading
      duration: 1500
    })
  },
  modal1() {
    wx.showModal({
      title: '标题',
      content: '告知当前状态，信息和解决方法',
      confirmText: '主操作',
      cancelText: '次要操作',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击主操作')
        } else if (res.cancel) {
          console.log('用户点击次要操作')
        }
      }
    })
  },
  modal2() {
    wx.showModal({
      title: '标题',
      content: '操作已经成功',
      showCancel: false, //是否显示取消按钮
      confirmText: '确定',
      success: function (res) {
        console.log(res);
      }
    })
  },

  showaction() {
    wx.showActionSheet({
      itemList: ['列1', '列2', '列3'], //显示的列表项
      success: function (res) { //res.tapIndex点击的列表项
        console.log("点击了列表项：" + res.tapIndex);
      },
      fail: function (res) {},
      complete: function (res) {}
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})