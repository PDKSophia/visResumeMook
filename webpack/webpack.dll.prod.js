/* eslint-disable @typescript-eslint/no-require-imports */
const webpackMerge = require('webpack-merge');
const dllBaseConfig = require('./webpack.dll.base.js');

module.exports = webpackMerge.merge(dllBaseConfig, {
  mode: 'production',
});
