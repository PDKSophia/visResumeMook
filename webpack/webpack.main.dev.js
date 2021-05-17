import { resolve } from 'path';
import { DefinePlugin } from 'webpack';
import baseConfig from './webpack.base.js';
import { merge } from 'webpack-merge';

const mainConfig = {
  entry: resolve(__dirname, '../app/main/electron.ts'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    // 根据启动命令的node_env，指定构建变量
    new DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
  ],
};

export default merge(baseConfig, mainConfig);
