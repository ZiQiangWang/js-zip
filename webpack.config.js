/**
 * Copyright (c) 2017 ZiQiangWang
 * License: MIT
 * GitHub: https://github.com/ZiQiangWang/js-zip
 **/

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/js-zip.js',
  output: {
    filename: 'js-zip.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'JsZip',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader:'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'src'),
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      compress: { warnings: false }
    })
  ]
}


