//1.SyncHook 同步的串行 不关心监听函数的返回值
//2.SyncBailHook 同步的串行 只要监听函数有一个函数的返回值不为null 跳过所有的
//3.SyncWaterfallHook 同步串行的 上一个监听函数的范湖一直可以传给下一个参数
//4.SyncLoopHook 同步循环 监听函数返回true返回的执行
//5.+跟上面的意思都是一样的 异步的
const {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook
} = require("tapable");
//接受一个可选的参数 这个参数是一个字符串的数组
// queue 相当于 compiler.hooks  （钩子）compiler内部封装
let queue = new SyncHook(["name"]);
//订阅，第一个参数 =》 标识我们的订阅函数  （咬钩）
queue.tap("1", function (name) {
  console.log(name, 1);
});
queue.tap("2", function (name, name2) {
  console.log(name, name2, 2);
});
//执行钩子   （上钩）
queue.call("webpack🍎");

// webpack compiler内部封装好了钩子
// const compiler = new Compiler();
// compiler.hooks = new SyncHook(["name"]);
// compiler.hooks.tap("1", function (name) {
//   console.log(name, 1);
//   return 1;
// });
