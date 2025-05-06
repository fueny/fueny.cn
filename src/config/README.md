# EmailJS 配置说明

为了使联系表单能够正常发送邮件，您需要按照以下步骤配置EmailJS：

## 步骤1: 创建EmailJS账户

1. 访问 [EmailJS官网](https://www.emailjs.com/) 并注册一个账户
2. 免费计划允许每月发送200封邮件，对于个人网站通常足够

## 步骤2: 创建Email服务

1. 登录您的EmailJS账户
2. 进入"Email Services"页面
3. 点击"Add New Service"
4. 选择您想要使用的邮件服务提供商（如Gmail, Outlook等）
5. 按照提示完成授权和配置
6. 记下生成的Service ID（例如：service_fueny）

## 步骤3: 创建Email模板

1. 进入"Email Templates"页面
2. 点击"Create New Template"
3. 设计您的邮件模板，确保包含以下变量：
   - {{from_name}} - 发送者姓名
   - {{from_email}} - 发送者邮箱
   - {{subject}} - 邮件主题
   - {{message}} - 邮件内容
   - {{to_email}} - 接收者邮箱（可选，如果您想在模板中显示）
4. 保存模板并记下Template ID（例如：template_fueny）

## 步骤4: 获取Public Key

1. 进入"Account"页面
2. 在"API Keys"部分找到您的Public Key
3. 复制这个Public Key

## 步骤5: 更新配置文件

1. 打开 `src/config/emailjs.js` 文件
2. 用您在上述步骤中获取的实际值替换以下配置：
   ```javascript
   export const EMAILJS_CONFIG = {
     SERVICE_ID: 'your_service_id', // 替换为您的Service ID
     TEMPLATE_ID: 'your_template_id', // 替换为您的Template ID
     PUBLIC_KEY: 'your_public_key', // 替换为您的Public Key
     TO_EMAIL: 'your_email@example.com' // 替换为您希望接收邮件的邮箱
   };
   ```

完成以上步骤后，您的联系表单应该能够正常工作，并将用户提交的信息发送到您指定的邮箱。
