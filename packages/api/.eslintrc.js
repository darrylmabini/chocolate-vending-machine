module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true,
    commonjs: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
};
