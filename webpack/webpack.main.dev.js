/* eslint-disable @typescript-eslint/no-var-requires */
// 暂不处理：https://github.com/typescript-eslint/typescript-eslint/blob/v4.22.0/packages/eslint-plugin/docs/rules/no-var-requires.md
const path = require('path');
const Webpack = require('webpack');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');

const mainConfig = {
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    // 根据启动命令的node_env，指定构建变量
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
  ],
};

export default webpackMerge.merge(baseConfig, mainConfig);
