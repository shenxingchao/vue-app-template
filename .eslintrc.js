module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //强制使用单引号
    quotes: ['error', 'single'],
    //强制不使用分号结尾
    semi: ['error', 'never'],
    'space-before-function-paren': 0,
    //未定义变量
    'no-unused-vars': 0,
    //不校验缩进
    indent: 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
