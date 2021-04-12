
var Mock = require('./WxMock.js');

//格式： Mock.mock('请求地址',数据模板)

var items = Mock.mock('http://www.wj.com/items/list', {
  "message":"成功返回",
  "code": 200,
  "data|50-90": [ // 1-20个
     {
       "id" : function() {
          return Mock.Random.string();
       },
        "name": function () {
          return Mock.Random.cname() // 随机名称
        },
        "time": function () {
          return Mock.Random.datetime() // 随机时间
        }
     }
    ]
  });

 var del = Mock.mock('http://www.wj.com/items/del', {
   data:{
     "code": 200,
     "message": "s删除成功"
   }
  });

  var article=Mock.mock('http://www.wj.com/items/article',{
    data:{
      "code":200,
      "message":"成功返回",
      "content":[
        {"id":1001,"name":"文章标题","content":"文章内容"},
        {"id":1002,"name":"文章标题222","content":"文章内容222"}
      ]
    }
 });

 export default {
  items,
  del,
  article
}