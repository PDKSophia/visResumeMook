/* eslint-disable @typescript-eslint/no-var-requires */
// 暂不处理：https://github.com/typescript-eslint/typescript-eslint/blob/v4.22.0/packages/eslint-plugin/docs/rules/no-var-requires.md
const path = require('path');

export const resolve = {
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  alias: {
    '@src': path.join(__dirname, '../', 'app/renderer/'),
  },
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
  ],
};
