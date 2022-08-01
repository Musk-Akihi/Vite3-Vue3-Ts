module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增功能
        'fix', // bug修复
        'perf', // 性能优化
        'style', // 样式变更
        'merge', // 分支合并
        'update', // 更新某功能
        'config', // 配置文件变更
        'docs', // 文档更新
        'refactor', // 重构代码(既没有新增功能，也没有修复 bug)
        'test', // 新增测试用例或是更新现有测试
        'chore', // 构建过程或辅助工具的变动
        'revert' // 回滚某个更早之前的提交
      ]
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
}
