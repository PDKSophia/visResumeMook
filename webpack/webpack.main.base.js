/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },
  target: 'electron-main',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@common': path.join(__dirname, '../', 'app/renderer/common'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    // 用于打包后的主进程中正确获取__dirname
    new webpack.DefinePlugin({
      __dirname: '__dirname',
    }),
  ],
};
