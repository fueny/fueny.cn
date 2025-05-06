<template>
  <div class="page-container py-20">
    <div class="max-w-4xl mx-auto">
      <h1 class="section-title">联系我</h1>

      <div class="flex flex-col md:flex-row gap-12">
        <div class="md:w-1/3">
          <div class="mb-8">
            <h3 class="text-xl font-handwriting text-slate mb-4">联系方式</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <i class="bi bi-envelope text-taupe mr-3 mt-1"></i>
                <div>
                  <p class="font-sans text-sm text-mocha">邮箱</p>
                  <a :href="'mailto:' + portfolio.contact.email" class="font-serif text-slate hover:text-charcoal transition-colors">
                    {{ portfolio.contact.email }}
                  </a>
                </div>
              </div>

              <div class="flex items-start">
                <i class="bi bi-telephone text-taupe mr-3 mt-1"></i>
                <div>
                  <p class="font-sans text-sm text-mocha">电话</p>
                  <a :href="'tel:' + portfolio.contact.phone" class="font-serif text-slate hover:text-charcoal transition-colors">
                    {{ portfolio.contact.phone }}
                  </a>
                </div>
              </div>

              <div class="flex items-start">
                <i class="bi bi-geo-alt text-taupe mr-3 mt-1"></i>
                <div>
                  <p class="font-sans text-sm text-mocha">工作室地址</p>
                  <p class="font-serif text-slate">
                    {{ portfolio.contact.address }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-handwriting text-slate mb-4">社交媒体</h3>
            <div class="flex flex-wrap gap-4">
              <a v-for="social in portfolio.social" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer"
                 class="flex items-center px-4 py-2 border border-taupe text-slate hover:bg-taupe hover:text-cream transition-all duration-300 rounded-sm">
                <i :class="[social.icon, 'mr-2']"></i>
                <span class="font-sans text-sm">{{ social.name }}</span>
              </a>
            </div>
          </div>
        </div>

        <div class="md:w-2/3">
          <h3 class="text-xl font-handwriting text-slate mb-6">发送消息</h3>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block font-sans text-sm text-mocha mb-2">姓名</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="w-full px-4 py-2 bg-cream border border-taupe focus:outline-none focus:ring-1 focus:ring-taupe rounded-sm"
                  required>
              </div>

              <div>
                <label for="email" class="block font-sans text-sm text-mocha mb-2">邮箱</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="w-full px-4 py-2 bg-cream border border-taupe focus:outline-none focus:ring-1 focus:ring-taupe rounded-sm"
                  required>
              </div>
            </div>

            <div>
              <label for="subject" class="block font-sans text-sm text-mocha mb-2">主题</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                class="w-full px-4 py-2 bg-cream border border-taupe focus:outline-none focus:ring-1 focus:ring-taupe rounded-sm"
                required>
            </div>

            <div>
              <label for="message" class="block font-sans text-sm text-mocha mb-2">消息</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                class="w-full px-4 py-2 bg-cream border border-taupe focus:outline-none focus:ring-1 focus:ring-taupe rounded-sm resize-none"
                required></textarea>
            </div>

            <div>
              <button
                type="submit"
                class="px-6 py-3 bg-taupe text-cream hover:bg-moss transition-colors duration-300 font-sans text-sm uppercase tracking-widest"
                :disabled="isSubmitting">
                {{ isSubmitting ? '发送中...' : '发送消息' }}
              </button>

              <div v-if="formStatus" class="mt-4 p-3 rounded-sm" :class="formStatus.type === 'success' ? 'bg-moss bg-opacity-20 text-moss' : 'bg-red-100 text-red-700'">
                {{ formStatus.message }}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { usePortfolioStore } from '../stores/portfolio';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const portfolio = usePortfolioStore();

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  to_email: EMAILJS_CONFIG.TO_EMAIL
});

const isSubmitting = ref(false);
const formStatus = ref(null);

// 初始化EmailJS
onMounted(() => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
});

const submitForm = () => {
  isSubmitting.value = true;

  // 使用EmailJS发送邮件
  emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
    from_name: form.name,
    from_email: form.email,
    subject: form.subject,
    message: form.message,
    to_email: form.to_email
  })
  .then((response) => {
    console.log('邮件发送成功:', response);
    formStatus.value = {
      type: 'success',
      message: '您的消息已成功发送，我们将尽快回复您。'
    };

    // 重置表单
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';

    // 5秒后清除状态消息
    setTimeout(() => {
      formStatus.value = null;
    }, 5000);
  })
  .catch((error) => {
    console.error('邮件发送失败:', error);
    formStatus.value = {
      type: 'error',
      message: '发送失败，请稍后再试或直接发送邮件至' + portfolio.contact.email
    };
  })
  .finally(() => {
    isSubmitting.value = false;
  });
};
</script>
