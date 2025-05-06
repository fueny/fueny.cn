<template>
  <section class="py-16 bg-cream relative">
    <!-- 顶部装饰分隔元素 -->
    <div class="absolute top-0 left-0 w-full h-8 overflow-hidden">
      <div class="w-full h-16 bg-sand bg-opacity-30 transform -rotate-1 origin-top-right -translate-y-8"></div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <div class="text-center mb-10 animate-fade-up">
        <h2 class="text-2xl md:text-3xl font-bold text-slate mb-4">我的服务</h2>
        <p class="text-lg text-charcoal max-w-3xl mx-auto">
          探索我提供的专业服务和工具，助力您的项目和创意实现。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 博客服务 -->
        <div class="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-md p-6 border border-sand transition-all duration-300 hover:shadow-lg hover:border-taupe animate-scale-in" style="animation-delay: 0.1s">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full bg-sand bg-opacity-50 flex items-center justify-center mr-4">
              <i class="bi bi-journal-richtext text-2xl text-taupe"></i>
            </div>
            <h3 class="text-xl font-serif text-slate">技术博客</h3>
          </div>
          <p class="text-charcoal mb-4">
            分享机器学习、前端开发和数据科学领域的见解和教程。
          </p>
        </div>

        <!-- 便签服务 -->
        <div class="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-md p-6 border border-sand transition-all duration-300 hover:shadow-lg hover:border-taupe animate-scale-in" style="animation-delay: 0.2s">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full bg-sand bg-opacity-50 flex items-center justify-center mr-4">
              <i class="bi bi-sticky text-2xl text-taupe"></i>
            </div>
            <h3 class="text-xl font-serif text-slate">在线便签</h3>
          </div>
          <p class="text-charcoal mb-4">
            简洁高效的在线便签工具，支持Markdown格式。
          </p>
        </div>

        <!-- PDF智能处理系统 -->
        <div class="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-md p-6 border border-sand transition-all duration-300 hover:shadow-lg hover:border-taupe animate-scale-in" style="animation-delay: 0.3s">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full bg-sand bg-opacity-50 flex items-center justify-center mr-4">
              <i class="bi bi-file-earmark-pdf text-2xl text-taupe"></i>
            </div>
            <h3 class="text-xl font-serif text-slate">PDF智能处理系统</h3>
          </div>
          <p class="text-charcoal mb-4">
            基于大型语言模型的PDF处理工具，提供文档转换和摘要生成。
          </p>
        </div>
      </div>

      <div class="text-center mt-10 animate-fade-up" style="animation-delay: 0.4s">
        <router-link to="/services" class="btn btn-alt">
          查看全部服务
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, inject } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 确保GSAP插件已注册
gsap.registerPlugin(ScrollTrigger);

// 从父组件获取是否是首次访问的标志
const isFirstVisit = inject('isFirstVisit', true);

// 存储ScrollTrigger实例
let scrollTriggers = [];

// 初始化动画
const initAnimations = () => {
  // 清理之前的ScrollTrigger实例
  scrollTriggers.forEach(trigger => trigger.kill());
  scrollTriggers = [];

  // 获取动画元素
  const fadeUpElements = document.querySelectorAll('.animate-fade-up');
  const scaleInElements = document.querySelectorAll('.animate-scale-in');

  if (isFirstVisit) {
    // 首次访问时，显示动画

    // 重置样式
    gsap.set(fadeUpElements, { y: 30, opacity: 0 });
    gsap.set(scaleInElements, { scale: 0.9, opacity: 0 });

    // 创建新的ScrollTrigger
    [...fadeUpElements, ...scaleInElements].forEach((element) => {
      const trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top bottom-=100',
        onEnter: () => {
          // 获取动画延迟
          const delay = element.style.animationDelay || '0s';
          const delaySeconds = parseFloat(delay.replace('s', '')) || 0;

          // 应用动画
          if (element.classList.contains('animate-fade-up')) {
            gsap.to(element, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: delaySeconds,
              ease: 'power2.out'
            });
          } else if (element.classList.contains('animate-scale-in')) {
            gsap.to(element, {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              delay: delaySeconds,
              ease: 'back.out(1.2)'
            });
          }
        },
        once: true
      });

      // 保存ScrollTrigger实例以便后续清理
      scrollTriggers.push(trigger);
    });
  } else {
    // 非首次访问，直接显示最终状态
    gsap.set(fadeUpElements, { y: 0, opacity: 1 });
    gsap.set(scaleInElements, { scale: 1, opacity: 1 });
  }
};

// 组件挂载时初始化
onMounted(initAnimations);
</script>
