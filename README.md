# 🔥🔥 Vue 3 + TypeScript + Vite 3 🔥🔥

```
# 进入目录
cd Vite3-Vue3-Ts
# 安装依赖
yarn install
# 启动项目
yarn dev
```

## 代码风格约束

### eslint + prettier

#### [安装参考](https://segmentfault.com/a/1190000041954694)

#### 使用

- "lint": "eslint src --fix --ext .ts,.tsx,.vue,.js,.jsx"
- "prettier": "prettier --write ."

#### 插件详解

```
# eslint 插件
eslint

# vue 的 eslint 插件
eslint-plugin-vue

# ts 的 eslint 插件
@typescript-eslint/eslint-plugin

# 用于解析 ts，从而检查和规范 ts 代码
@typescript-eslint/parser

# vite 的 eslint 插件（vite 运行的时候自动检测 eslint 规范，无法自动修复的 eslint 错误无法被忽略，任何 eslint 错误现在都会在浏览器中报告）
vite-plugin-eslint

# prettier 插件
prettier

# 将 prettier 作为 esLint 规范来使用
eslint-plugin-prettier

# 解决 esLint 中的样式规范和 prettier 中样式规范的冲突，以 prettier 的样式规范为准，使 esLint 中的样式规范自动失效（放到 extends 的最后面）
eslint-config-prettier

```

### husky + lint-staged

#### [使用参考](https://blog.csdn.net/qq_21567385/article/details/116429214)（husky v4 升级 v8 变化巨大）

#### 使用

- "prepare": "husky install"

```
npx husky add .husky/pre-commit "yarn lint-staged"
yarn husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

- "lint-staged": "lint-staged"

```
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": [
      "yarn lint",
      "yarn prettier"
    ]
  }
```

#### 插件详解

```
# husky 是一个为 git 客户端增加 hooks 的工具
husky

# 一个仅仅过滤出 git 代码暂存区文件(被 git add 的文件)的工具
# 对个人要提交的代码的一个规范和约束
# 是一个在 git 暂存文件上（也就是被 git add 的文件）运行已配置的 linter（或其他）任务。lint-staged 总是将所有暂存文件的列表传递给任务。
lint-staged

# commit-msg 整理您的常规提交，根据 commitlint.config.js 配置校验
@commitlint/cli
@commitlint/config-conventional
```
