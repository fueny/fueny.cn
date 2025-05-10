<template>
  <section class="py-20">
    <div class="page-container">
      <div class="flex flex-col md:flex-row items-center">
        <div ref="textContentEl" class="md:w-1/2 mb-10 md:mb-0 md:pr-12 opacity-0 transform translate-y-8">
          <h2 class="section-title">关于我</h2>
          <p class="text-slate leading-relaxed mb-6">
            {{ portfolio.homeContent.aboutPreviewText }}
          </p>
          <router-link to="/about" class="btn">
            了解更多
          </router-link>
        </div>
        <div ref="imageContentEl" class="md:w-1/2 opacity-0 transform translate-y-8">
          <div class="relative img-hover-zoom">
            <img
              :src="portfolio.artist.workingPhoto"
              alt="工程师工作照"
              class="w-full h-auto rounded-sm shadow-lg"
              crossorigin="anonymous"
              onerror="this.src='https://placehold.co/800x600/e8e1d6/a19483?text=工程师工作照'">
            <div class="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-taupe rounded-sm animate-border"></div>
            <div class="absolute -top-4 -right-4 w-24 h-24 border-2 border-taupe rounded-sm animate-border"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePortfolioStore } from '../../stores/portfolio';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 确保GSAP插件已注册
gsap.registerPlugin(ScrollTrigger);

const portfolio = usePortfolioStore();

// 创建引用
const textContentEl = ref(null);
const imageContentEl = ref(null);

// 初始化动画
onMounted(() => {
  // 文本内容动画
  ScrollTrigger.create({
    trigger: textContentEl.value,
    start: 'top bottom-=100',
    onEnter: () => {
      gsap.to(textContentEl.value, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      });
    },
    once: true
  });

  // 图片内容动画
  ScrollTrigger.create({
    trigger: imageContentEl.value,
    start: 'top bottom-=100',
    onEnter: () => {
      gsap.to(imageContentEl.value, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out'
      });
    },
    once: true
  });
});
</script>
