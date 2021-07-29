/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const renderBaseConfig = require('./webpack.render.base.js');

const prodConfig = {
  mode: 'production',
  plugins: [
    // 👇 通过该插件实现拷贝
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../assets'),
          to: path.resolve(__dirname, '../dist/assets'),
        },
        {
          from: path.resolve(__dirname, '../appConfig'),
          to: path.resolve(__dirname, '../dist/appConfig'),
        },
      ],
    }),
  ],
};

module.exports = webpackMerge.merge(renderBaseConfig, prodConfig);
