/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const devConfig = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../app/renderer/app.tsx'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    host: '127.0.0.1', // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
    port: 7001, // 启动端口为 7001 的服务
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/renderer/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index'],
    }),
  ],
};

module.exports = smp.wrap(webpackMerge.merge(baseConfig, devConfig));
