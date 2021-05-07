const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.join(__dirname, '../', 'app/renderer/'),
      '@assets': path.join(__dirname, '../', 'assets/'),
      '@config': path.join(__dirname, '../', 'config/'),
      '@common': path.join(__dirname, '../', 'app/renderer/common/'),
      '@store': path.join(__dirname, '../', 'app/renderer/model/store/'),
      '@components': path.join(__dirname, '../', 'app/renderer/components/'),
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
        test: /\.(png|jpe?g|gif|svg|mp4|mp3)(\?\S*)?$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
