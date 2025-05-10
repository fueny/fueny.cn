// EmailJS配置
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_fueny', // 从环境变量获取或使用默认值
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_fueny', // 从环境变量获取或使用默认值
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key', // 从环境变量获取或使用默认值
  TO_EMAIL: import.meta.env.VITE_EMAILJS_TO_EMAIL || 'git7fueny@gmail.com' // 从环境变量获取或使用默认值
};
