/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const webpackMerge = require('webpack-merge');
const renderBaseConfig = require('./webpack.render.base.js');

const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    host: '127.0.0.1', // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
    port: 7001, // 启动端口为 7001 的服务
    hot: true,
  },
};

module.exports = webpackMerge.merge(renderBaseConfig, devConfig);
