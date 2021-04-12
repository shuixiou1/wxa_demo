// components/count/count.js
Component({

  externalClasses:['_class'],  // <view class='base _class'>
  options: {multipleSlots: true },
  
  /**
   * 组件的属性列表
   */
  properties: {
    count:{
      type:Number,
      value:1
    },
    min:{
      type:Number,
      value:0,
    },
    max:{
      type:Number,
      value:10
    }
  },
  data: {
  },
  ready() {
    var count = this.data.count;
    count = Math.max(count,this.data.min);
    count = Math.min(count,this.data.max);
    this.setData({
      count:count
    })

  },
  methods: {
    increment() {
      var count = this.data.count + 1;
      if(count>this.data.max) {
        return ;
      }
      this.triggerEvent('changeCount', {count:count});
    },
    substract() {
      var count = this.data.count - 1;
      if(count < this.data.min) {
        return;
      }
      this.triggerEvent('changeCount', {count:count});
    },
  },

})
