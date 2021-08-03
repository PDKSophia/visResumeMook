/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    reacts: ['react', 'react-dom', 'redux', 'react-redux', 'lodash'],
  },
  output: {
    library: '[name]',
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dist/dll'),
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, '../dist/dll/[name].manifest.json'),
    }),
  ],
};
