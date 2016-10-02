var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './index.js',

  output: {
    filename: '[name]_[hash:5].js',
    publicPath: 'http://119.29.40.41/mui/',
    path: './build'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=react&presets[]=es2015' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'MyFirstApp',
      template: './index.default.html'
    })
  ]
}
