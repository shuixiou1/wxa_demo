// pages/nav/nav.js
Page({

  data: {

  },

// 文档

//wx.navigateTo 用于保留当前页面、跳转到应用内的某个页面，使用 wx.navigateBack可以返回到原页面。对于页面不是特别多的小程序，通常推荐使用 wx.navigateTo进行跳转， 以便返回原页面，以提高加载速度。当页面特别多时，则不推荐使用。

// wx.redirectTo 当页面过多时，被保留页面会挤占微信分配给小程序的内存，或是达到微信所限制的 5 层页面栈。这时，我们应该考虑选择 wx.redirectTo。wx.redirectTo()用于关闭当前页面，跳转到应用内的某个页面。这样的跳转，可以避免跳转前页面占据运行内存，但返回时页面需要重新加载，增加了返回页面的显示时间。

// wx.reLaunch wx.reLaunch()与 wx.redirectTo()的用途基本相同， 只是 wx.reLaunch()先关闭了内存中所有保留的页面，再跳转到目标页面。

// wx.switchTab 对于跳转到 tab bar 的页面，最好选择 wx.switchTab()，它会先关闭所有非 tab bar 的页面。其次，也可以选择 wx.reLaunch()，它也能实现从非 tab bar 跳转到 tab bar，或在 tab bar 间跳转，效果等同 wx.switchTab()。使用其他跳转 API 来跳转到 tab bar，则会跳转失败。

// wx.navigateBack 用于关闭当前页面，并返回上一页面或多级页面。开发者可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。这个 API 需要填写的参数只有 delta，表示要返回的页面数。若 delta 的取值大于现有可返回页面数时，则返回到用户进入小程序的第一个页面。当不填写 delta 的值时，就默认其为 1（注意，默认并非取 0），即返回上一页面。


  navigateToTest(e) {
    // 跳转到页面，历史记录保留上次页面，可以返回
    wx.navigateTo({
      url: '/pages/nav/nav_child1/nav_child1',
      // url: '/pages/index/index',//不可跳转到tab页面
    })
   
  },

  redirectToTest(e) {
    // 重定向页面，类似window.open(),不会有返回，但是会有返回home按钮
    wx.redirectTo({
     url: '/pages/nav/nav_child1/nav_child1',
      // url: '/pages/index/index', //不可跳转到tab页面
    })
  },

  switchTabTest(e) {
    // 切换tab页面，跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
    wx.switchTab({
      url: '/pages/index/index',  // 只可以跳转到tabBar页面
      // url: '/pages/index/index', 
    })
  },

  redirectToTest2(e) {
    // 重定向到child2，返回使用navigateBack无效，如果
    wx.redirectTo({
      url: '/pages/nav/nav_child2/nav_child2',
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