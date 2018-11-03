const path = require('path');
const ConsoleLogOnBuildWebpackPlugin = require('./plugin/FirstPlugin.js');
module.exports ={
  module:{
    rules:[{
      test: /\.js$/,
      loader: path.resolve(__dirname,'./loader/index.js')
    }]
  },
  plugins:[
    new ConsoleLogOnBuildWebpackPlugin()
  ]
}