<template>
  <section class="py-16 bg-cream relative">
    <!-- 顶部装饰分隔元素 -->
    <div class="absolute top-0 left-0 w-full h-8 overflow-hidden">
      <div class="w-full h-16 bg-sand bg-opacity-30 transform -rotate-1 origin-top-right -translate-y-8"></div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <div ref="headerEl" class="text-center mb-10 opacity-0 transform translate-y-8">
        <h2 class="text-2xl md:text-3xl font-bold text-slate mb-4">我的服务</h2>
        <p class="text-lg text-charcoal max-w-3xl mx-auto">
          探索我提供的专业服务和工具，助力您的项目和创意实现。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 博客服务 -->
        <div ref="service1El" class="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-md p-6 border border-sand transition-all duration-300 hover:shadow-lg hover:border-taupe opacity-0 transform scale-95">
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
        <div ref="service2El" class="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-md p-6 border border-sand transition-all duration-300 hover:shadow-lg hover:border-taupe opacity-0 transform scale-95">
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
        <div ref="service3El" class="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-md p-6 border border-sand transition-all duration-300 hover:shadow-lg hover:border-taupe opacity-0 transform scale-95">
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

      <div ref="buttonEl" class="text-center mt-10 opacity-0 transform translate-y-8">
        <router-link to="/services" class="btn btn-alt">
          查看全部服务
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 确保GSAP插件已注册
gsap.registerPlugin(ScrollTrigger);

// 创建引用
const headerEl = ref(null);
const service1El = ref(null);
const service2El = ref(null);
const service3El = ref(null);
const buttonEl = ref(null);

// 初始化动画
onMounted(() => {
  // 标题动画
  ScrollTrigger.create({
    trigger: headerEl.value,
    start: 'top bottom-=100',
    onEnter: () => {
      gsap.to(headerEl.value, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      });
    },
    once: true
  });

  // 服务卡片动画
  const serviceElements = [service1El.value, service2El.value, service3El.value];
  serviceElements.forEach((element, index) => {
    ScrollTrigger.create({
      trigger: element,
      start: 'top bottom-=100',
      onEnter: () => {
        gsap.to(element, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'back.out(1.2)'
        });
      },
      once: true
    });
  });

  // 按钮动画
  ScrollTrigger.create({
    trigger: buttonEl.value,
    start: 'top bottom-=100',
    onEnter: () => {
      gsap.to(buttonEl.value, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      });
    },
    once: true
  });
});
</script>
