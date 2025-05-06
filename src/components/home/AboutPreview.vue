<template>
  <section class="py-20">
    <div class="page-container">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0 md:pr-12 animate-fade-up">
          <h2 class="section-title">关于我</h2>
          <p class="text-slate leading-relaxed mb-6">
            {{ portfolio.homeContent.aboutPreviewText }}
          </p>
          <router-link to="/about" class="btn">
            了解更多
          </router-link>
        </div>
        <div class="md:w-1/2 animate-fade-up" style="animation-delay: 0.2s">
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
import { usePortfolioStore } from '../../stores/portfolio';
import { inject } from 'vue';

const portfolio = usePortfolioStore();

// 从父组件获取是否是首次访问的标志
const isFirstVisit = inject('isFirstVisit', true);
</script>
