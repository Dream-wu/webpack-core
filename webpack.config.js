const path = require('path');
module.exports ={
  module:{
    rules:[{
      test: /\.js$/,
      loader: path.resolve(__dirname,'./loader/index.js')
    }]
  }
}