

var app = getApp();
const api = require('../../utils/api.js');

// pages/request/request.js
Page({
  
  data: {
    list:[],  // 数据列表
    page:1,
  },

  // 触底加载
  onReachBottom: function () {
    var that = this;
    // 每次请求的分页数+1
    api.getApi("http://www.wj.com/items/list",{page:that.data.page + 1}).then(ele => {
      var list = this.data.list;
      for(let i = 0; i<ele.length; i++) {
        list.push(ele[i]);
      }
      // 新的数据添加到原数据结尾
      that.setData({
        list:list
      });
      that.data.page ++ ;
     });
  },

  // 加载数据
  // @param callback 数据加载完的操作
  loadData(callback) {
    api.getApi("http://www.wj.com/items/list",{}).then(ele => {
      console.log(ele);
      this.setData({list:ele});
      callback && callback();
     });
  },

  // 上拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading(); // 显示加载符
    this.loadData(function() {
      wx.hideNavigationBarLoading() //隐藏加载符
      wx.stopPullDownRefresh() //停止下拉刷新
    });
  },

  onLoad: function (options) {

    this.loadData();

    // api.getApi("http://www.wj.com/items/list",{}).then(ele => {
    //   console.log(ele);
    // });

    // api.getApi("http://www.wj.com/items/del",{}).then(ele=> {
    //   console.log(ele);
    // });

    // api.getApi("http://www.wj.com/items/article",{}).then(ele => {
    //   console.log(ele);
    // });
  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },
  
  onUnload: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})