// pages/temp/temp.js

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hello:'hello word',
    arr:[
      {id:1,name:'name1'},
      {id:2,name:'name2'}
    ],
    is_show:2,
  },
  change_is_show(e) {
    console.log(e.currentTarget.dataset.id);
    this.setData({
      is_show:e.currentTarget.dataset.id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.is_show = options.id;
    console.log(this.is_show)
    this.setData({
      hello:'world hello'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var sfs = app.globalData.sfs;
    var current_sfmc =  sfs.find(ele =>  ele.check == true ).sfmc;
    this.setData({
      sfs:sfs,
      current_sfmc:current_sfmc
    })
  },

  changeSf(e) {
    var sf = e.currentTarget.dataset.sf;
    var current_sfmc = null;
    app.globalData.sfs.forEach(ele=> {
      if(ele.sf == sf) {
        ele.check= true;
        current_sfmc = ele.sfmc;
      } else {
        ele.check= false;
      }
    });
    this.setData({
      current_sfmc:current_sfmc
    })
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