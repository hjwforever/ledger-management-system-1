module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ['error', 2],
    'no-spaced-func': 2,
    'no-const-assign': 2,
    'space-before-function-paren': [0, 'always'],
    'eol-last': 0,
    'camelcase': 0,
    'no-undef': 0,
    'no-alert': 0,
    'arrow-parens': 0,
  },
}
