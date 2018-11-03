const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    // 注册这个插件
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log("插件开始执行：webpack 构建过程开始！");
      console.log("==================================");
    });
  }
}
module.exports = ConsoleLogOnBuildWebpackPlugin;

//1.插件里面一定要有apply
//2.插件里面compiler
//3.compiler -> 留钩子 -> 给外界留下一个可以注册的接口
//4.该执行的时候定位的插件的时机给执行了

