module.exports = {
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    __dirname: false,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-undefined': 'warn',
    'no-debugger': 'off',
    complexity: ['error', { max: 99 }],
    // 这里填入你的项目需要的个性化配置，比如：
    // @fixable 一个缩进必须用两个空格替代
    indent: [
      1,
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true,
      },
    ],
    // @fixable jsx 的 children 缩进必须为两个空格
    'react/jsx-indent': [1, 2],
    // @fixable jsx 的 props 缩进必须为两个空格
    'react/jsx-indent-props': [1, 2],
    'react/no-string-refs': 1, // 不要使用ref
    'no-template-curly-in-string': 1, // 在string里面不要出现模板符号
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-duplicate-imports': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    'react/no-unsafe': 'off',
    '@typescript-eslint/no-invalid-this': 'off',
    'react/jsx-key': 0,
    'react/no-unstable-nested-components': 'warn',
    'no-var-requires': 'off',
  },
};
