<template>
  <section class="relative h-screen flex items-center">
    <div class="absolute inset-0 bg-texture bg-cover bg-center opacity-10"></div>
    <div class="page-container relative z-10">
      <div class="max-w-2xl">
        <h1 class="text-5xl md:text-7xl font-handwriting font-light text-slate mb-6 animate-fade-up" style="animation-delay: 0.1s">
          {{ portfolio.artist.name }}
        </h1>
        <h2 class="text-xl md:text-2xl font-serif text-mocha mb-8 animate-fade-up" style="animation-delay: 0.3s">
          {{ portfolio.artist.title }}
        </h2>
        <p class="text-lg md:text-xl font-serif text-slate mb-10 leading-relaxed animate-fade-up" style="animation-delay: 0.5s">
          {{ portfolio.homeContent.heroBio }}
        </p>
        <div class="flex space-x-4 animate-fade-up" style="animation-delay: 0.7s">
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
import { usePortfolioStore } from '../../stores/portfolio';
import { inject } from 'vue';

const portfolio = usePortfolioStore();

// 从父组件获取是否是首次访问的标志
const isFirstVisit = inject('isFirstVisit', true);
</script>
