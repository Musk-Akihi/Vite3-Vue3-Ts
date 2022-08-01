module.exports = {
  tabWidth: 2, // 使用2个空格缩进
  semi: false, // 代码结尾是否加分号
  printWidth: 100, // 超过多少字符强制换行
  singleQuote: true, // 是否使用单引号
  trailingComma: 'none', // 代码末尾不需要逗号
  arrowParens: 'avoid', // 单个参数的箭头函数不加括号 x => x
  bracketSpacing: true, // 对象大括号内两边是否加空格 { a:0 }
  jsxSingleQuote: true, // jsx不使用单引号,而使用双引号
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200
      }
    }
  ]
}
