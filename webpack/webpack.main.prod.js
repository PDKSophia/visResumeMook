const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');

const prodConfig = {
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  // 👇 这里改成生产环境
  mode: 'production',
  plugins: [
    // 用于打包后的主进程中正确获取__dirname
    new webpack.DefinePlugin({
      __dirname: '__dirname',
    }),
  ],
};

module.exports = webpackMerge.merge(baseConfig, prodConfig);
