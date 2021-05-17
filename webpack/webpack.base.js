import { join } from 'path';

export const resolve = {
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  alias: {
    '@src': join(__dirname, '../', 'app/renderer/'),
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
