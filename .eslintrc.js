module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['react', 'prettier'],
  globals: {
    $: true,
    jQuery: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-uses-vars': 1,
    'no-unused-vars': 'warn',
    'no-console': 1,
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-useless-escape': 'off',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
}
