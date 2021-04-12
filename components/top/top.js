// components/top/top.js

Component({

  externalClasses:['myclass'],  
  // 外部样式  组件内引用 <view class="myclass">  组件使用：<top myclass='custom_class'>
  options: {multipleSlots: true },
  // 是否使用多slot
  
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'top'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
