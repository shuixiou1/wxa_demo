
Component({

  externalClasses: ['_class'],
  options: { multipleSlots: true },

  properties: {
    _height: {
      type: Number,
      value: 65
    },
    titles: {
      type: Array,
      value: ['', '', '']
    },
    widths: {
      type: Array,
      value: [30, 40, 30]
    },
    props: {
      type: Array,
      value: ['id', 'name', 'age']
    },
    datas: {
      type: Array,
      value: [{ "id": 1, "name": 'zhangsan1', "age": 20 }, { "id": 2, "name": 'zhangsan2', "age": 22 }]
    }
  },

  data: {
    show:false
  },

  methods: {
  },

  ready () {
    this.setData({
      size:this.data.datas.length
    });
  }

})
