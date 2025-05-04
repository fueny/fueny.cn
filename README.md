# Fueny.cn - 个人作品集网站

这是一个使用Vue 3和Tailwind CSS构建的现代化个人作品集网站。

## 技术栈

- Vue 3 - 渐进式JavaScript框架
- Vue Router - 官方路由管理器
- Pinia - Vue的状态管理库
- Tailwind CSS - 实用优先的CSS框架
- GSAP - 专业级JavaScript动画库
- Vite - 下一代前端构建工具

## 功能

- 响应式设计，适配各种设备
- 平滑的页面过渡动画
- 作品展示
- 服务介绍
- 关于页面
- 联系表单

## 安装与运行

### 前提条件

- Node.js (推荐v14.0.0或更高版本)
- npm或yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发模式运行

```bash
npm run dev
# 或
yarn dev
```

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

### 预览生产构建

```bash
npm run preview
# 或
yarn preview
```

## 项目结构

```
fueny.cn/
├── public/          # 静态资源
├── src/             # 源代码
│   ├── assets/      # 资源文件(CSS, 图片等)
│   ├── components/  # Vue组件
│   ├── router/      # 路由配置
│   ├── stores/      # Pinia状态管理
│   ├── views/       # 页面视图组件
│   ├── App.vue      # 根组件
│   └── main.js      # 应用入口
├── index.html       # HTML模板
└── vite.config.js   # Vite配置
```

## 许可证

本项目采用MIT许可证 - 详情请查看LICENSE文件