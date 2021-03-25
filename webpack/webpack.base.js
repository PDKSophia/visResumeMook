/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');

module.exports = {
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.join(__dirname, '../', 'src/'),
      '@assets': path.join(__dirname, '../', 'assets/'),
      '@config': path.join(__dirname, '../', 'config/'),
      '@common': path.join(__dirname, '../', 'common/'),
      '@store': path.join(__dirname, '../', 'src/model/store/'),
      '@indexDB': path.join(__dirname, '../', 'src/model/indexDB/'),
      '@jsonFile': path.join(__dirname, '../', 'src/model/jsonFile/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
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
      {
        test: /\.(png|jpe?g|gif|svg|mp4|mp3)(\?\S*)?$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
    ],
  },
};
