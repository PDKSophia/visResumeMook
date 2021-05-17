import { resolve, join } from 'path';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.base.js';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const devConfig = {
  mode: 'development',
  entry: {
    index: resolve(__dirname, '../app/renderer/app.tsx'),
  },
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, '../dist'),
  },
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: join(__dirname, '../dist'),
    compress: true,
    host: '127.0.0.1', // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
    port: 7001, // 启动端口为 7001 的服务
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../app/renderer/index.html'),
      filename: resolve(__dirname, '../dist/index.html'),
      chunks: ['index'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              options: {},
            },
          },
          'less-loader',
        ],
      },
    ],
  },
};

console.log('#####');
const a = merge(baseConfig, devConfig);
console.log(a.module);

export default merge(baseConfig, devConfig);
