// cp/base/base.js
Component({

  externalClasses:['_class'],  // <view class='base _class'>
  options: {multipleSlots: true },

  /**
   * 组件的属性列表
   */
  properties: {
    out:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inner:1,
    out_text:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    customMethod() {
      var temp = '';
      for(var i =0 ;i<=this.data.inner; i++) {
        temp += this.data.out;
      }
      this.data.inner++;
      this.setData({
        out_text: temp
      })
    },
    // 子组件的方法触发父组件绑定的事件
    triggerEventTop() {
      // 触发父组件事件
      this.triggerEvent('customEvent', {a:1,b:2}); // 父使用 bindcustomEvent=""
    }
  }
})
