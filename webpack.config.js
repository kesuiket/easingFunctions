'use strict'

const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

module.exports = {
  entry: {
    easingFunctions: './main.js',
  },
  output: {
    filename: './dist/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      eslint: {
        configFile: './.eslintrc'
      },
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
  ],
  devtool: '#source-map',
}