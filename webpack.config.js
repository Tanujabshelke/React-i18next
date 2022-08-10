const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //...
  devServer:{
    contentBase: path.resolve(__dirname, "./src"),
    historyApiFallback:true
  },
  entry: path.resolve(__dirname, './src/index.js'),
  module:{
    rules:[
      {
        test:/\.js$/,
        use:"babel-loader"
      }
    ]
  },
  output:{
     path : path.resolve(__dirname,"dist")
  },
  plugins: [
      new HtmlWebpackPlugin({template : path.join(__dirname,"src" , "index.html")})
  ],
  mode: 'development',
};