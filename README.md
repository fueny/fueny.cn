# Fueny | 点悟 - 个人作品集网站

这是一个使用Vue 3和Tailwind CSS构建的现代化个人作品集网站。

## 技术栈

- Vue 3 - 渐进式JavaScript框架
- Vue Router - 官方路由管理器
- Pinia - Vue的状态管理库
- Tailwind CSS - 实用优先的CSS框架
- GSAP - 专业级JavaScript动画库
- EmailJS - 客户端邮件发送服务
- Vite - 下一代前端构建工具

## 功能

- 响应式设计，适配各种设备
- 平滑的页面过渡动画
- 作品展示
- Connect the Dots (点悟) - 思维方法论展示
- 服务介绍
- 关于页面
- 联系表单（支持直接发送邮件）
- 自定义404页面

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

## 部署

### Vercel部署

本项目已配置好用于Vercel部署的必要文件：

1. `vercel.json` - 配置SPA路由重写规则
2. 环境变量支持 - 通过`.env`文件和Vercel环境变量设置

部署步骤：

1. 将代码推送到GitHub/GitLab/Bitbucket
2. 在Vercel上导入项目
3. 设置必要的环境变量（特别是EmailJS相关配置）
4. 部署完成后，可以添加自定义域名

## 项目结构

```
fueny.cn/
├── public/          # 静态资源
├── src/             # 源代码
│   ├── assets/      # 资源文件(CSS, 图片等)
│   ├── components/  # Vue组件
│   ├── config/      # 配置文件
│   │   └── emailjs.js  # EmailJS配置
│   ├── router/      # 路由配置
│   ├── stores/      # Pinia状态管理
│   │   └── portfolio.js  # 内容管理
│   ├── views/       # 页面视图组件
│   │   ├── Home.vue           # 首页
│   │   ├── Works.vue          # 作品集页面
│   │   ├── ConnectTheDots.vue # 点悟页面
│   │   ├── Services.vue       # 服务页面
│   │   ├── About.vue          # 关于页面
│   │   ├── Contact.vue        # 联系页面
│   │   └── NotFound.vue       # 404页面
│   ├── App.vue      # 根组件
│   └── main.js      # 应用入口
├── index.html       # HTML模板
├── vite.config.js   # Vite配置
├── vercel.json      # Vercel部署配置
└── .env.example     # 环境变量示例
```

### 路由结构

网站包含以下页面路由：

- `/` - 首页
- `/works` - 作品集页面
- `/connect-the-dots` - Connect the Dots (点悟) 页面
- `/services` - 服务页面
- `/about` - 关于页面
- `/contact` - 联系页面
- `/*` - 404页面（任何未匹配的路径）

### 内容管理

本项目使用Pinia状态管理库集中管理网站内容。主要内容存储在`src/stores/portfolio.js`文件中，包括：

- **基本信息**：姓名、职位、照片等
- **主页内容**：主页特定的文本和描述
- **点悟内容**：Connect the Dots (点悟)页面的所有内容
- **作品集**：项目和作品的详细信息
- **技能**：专业技能及其熟练度
- **展览经历**：时间线形式的经历记录
- **联系信息**：邮箱、电话、地址等
- **社交媒体**：社交媒体链接和图标

通过这种集中管理的方式，可以轻松地更新网站内容，而无需修改多个组件文件。

## Connect the Dots (点悟) 页面

"Connect the Dots (点悟)"是本网站的特色页面，展示了一种融合东方哲学与现代数据科学的思维方法论。这个页面包含以下内容：

- **概念介绍**：解释"点悟"的核心理念和起源
- **核心原则**：展示"点悟"方法论的四大核心原则
  - 跨界思维
  - 模式识别
  - 整体思考
  - 直觉与逻辑结合
- **应用领域**：介绍"点悟"在不同领域的应用
  - 技术创新
  - 产品设计
  - 数据分析
  - 学习方法
- **实践方法**：提供实践"点悟"的具体方法和步骤

这个页面的设计与网站的整体风格保持一致，使用了相同的主题色和设计元素，同时又有其独特的视觉表现，使其成为网站的一个亮点。

## 404 页面

网站包含一个自定义的 404 错误页面，当用户访问不存在的路径时会显示。这个页面的特点包括：

- **主题一致性**：使用与网站其他部分相同的设计语言和主题色
- **动画元素**：包含漂浮的点和一个"迷路的点"角色，增加趣味性
- **有用的导航选项**：提供返回首页和探索"点悟"页面的链接
- **响应式设计**：在各种设备上都能良好显示
- **与"点悟"理念的联系**：错误信息与网站的核心理念相关联，暗示"连接不存在的点"

这个页面不仅仅是一个错误提示，而是将用户体验延伸到了每一个可能的交互点，即使是在用户"迷路"的情况下。

## 配置联系表单

本项目使用EmailJS实现联系表单功能，允许访问者直接从网站发送邮件。要配置此功能，请按照以下步骤操作：

### 1. 创建EmailJS账户

1. 访问 [EmailJS官网](https://www.emailjs.com/) 并注册一个账户
2. 免费计划允许每月发送200封邮件，对于个人网站通常足够

### 2. 创建Email服务

1. 登录您的EmailJS账户
2. 进入"Email Services"页面
3. 点击"Add New Service"
4. 选择您想要使用的邮件服务提供商（如Gmail, Outlook等）
5. 按照提示完成授权和配置
6. 记下生成的Service ID（例如：service_fueny）

### 3. 创建Email模板

1. 进入"Email Templates"页面
2. 点击"Create New Template"
3. 设计您的邮件模板，确保包含以下变量：
   - {{from_name}} - 发送者姓名
   - {{from_email}} - 发送者邮箱
   - {{subject}} - 邮件主题
   - {{message}} - 邮件内容
   - {{to_email}} - 接收者邮箱（可选）
4. 保存模板并记下Template ID（例如：template_fueny）

### 4. 获取Public Key

1. 进入"Account"页面
2. 在"API Keys"部分找到您的Public Key
3. 复制这个Public Key

### 5. 更新环境变量

1. 复制`.env.example`文件为`.env`
2. 用您在上述步骤中获取的实际值替换环境变量：
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_TO_EMAIL=your_email@example.com
   ```
3. 在Vercel部署时，在项目设置中添加相同的环境变量

完成以上步骤后，您的联系表单将能够将用户提交的信息直接发送到您指定的邮箱。

## 许可证

本项目采用MIT许可证 - 详情请查看LICENSE文件