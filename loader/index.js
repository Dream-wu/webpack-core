
// 1:user:["xx1-loader","xx2-loader"]
// 2.最后的loader最早调用 传入原始的资源
// 3.中间的Loader执行的时候，传入的就是上一个loader的执行结果
// 4.loader需要异步：this.async()  this.callback();
module.exports = function(content,map,meta) {
  // 传入：解析后的字符串，sourcemap文件，元信息
  console.log('loader执行了。。。。苹果');
  return content+this.data.value;
}
// 5.前置钩子，在loader运行之前就已经运行完了
module.exports.pitch =function (remaninRequest,preRequest,data) {
  data.value = 'hahha';
}
// 6.前置钩子的执行顺序
// xx1loader -> pitch
// xx2loader -> pitch
// xx2 
// xx1
