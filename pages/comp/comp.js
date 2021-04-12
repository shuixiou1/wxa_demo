// pages/comp/comp.js
Page({

  data: {
    title:'title参数',
    out:'!',
    titles:['id', '名称', '年龄'],
    datas:[{ 'id': 3, 'name': 'zhangsan3', 'age': 32 }, { 'id': 4, 'name': 'zhangsan4', 'age': 33 }],
    out_count:101,
  },

  changeOutStr(e) {
   var param_a = e.detail.a;
   var param_b = e.detail.b;
   console.log(param_a, param_b);
    this.setData({
      out:'#'
    })
  },

  changeCount(e) {
    console.log(e.detail.count);
    this.setData({
      out_count:e.detail.count
    })
  },

  onLoad: function (options) {
    
  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})