<template>
  <section class="relative h-screen flex items-center">
    <div class="absolute inset-0 bg-texture bg-cover bg-center opacity-10"></div>
    <div class="page-container relative z-10">
      <div class="max-w-2xl">
        <h1 ref="titleEl" class="text-5xl md:text-7xl font-handwriting font-light text-slate mb-6 opacity-0 transform translate-y-8">
          {{ portfolio.artist.name }}
        </h1>
        <h2 ref="subtitleEl" class="text-xl md:text-2xl font-serif text-mocha mb-8 opacity-0 transform translate-y-8">
          {{ portfolio.artist.title }}
        </h2>
        <p ref="bioEl" class="text-lg md:text-xl font-serif text-slate mb-10 leading-relaxed opacity-0 transform translate-y-8">
          {{ portfolio.homeContent.heroBio }}
        </p>
        <div ref="buttonsEl" class="flex space-x-4 opacity-0 transform translate-y-8">
          <router-link to="/works" class="btn">
            浏览作品
          </router-link>
          <router-link to="/contact" class="btn">
            联系我
          </router-link>
        </div>
      </div>
    </div>
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate animate-bounce">
      <i class="bi bi-chevron-down"></i>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePortfolioStore } from '../../stores/portfolio';
import { gsap } from 'gsap';

const portfolio = usePortfolioStore();

// 创建引用
const titleEl = ref(null);
const subtitleEl = ref(null);
const bioEl = ref(null);
const buttonsEl = ref(null);

// 初始化动画
onMounted(() => {
  // 创建动画时间线
  const tl = gsap.timeline();

  // 添加元素动画
  tl.to(titleEl.value, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out'
  })
  .to(subtitleEl.value, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.6')
  .to(bioEl.value, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.6')
  .to(buttonsEl.value, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.6');
});
</script>
