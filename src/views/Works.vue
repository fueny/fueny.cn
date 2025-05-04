<template>
  <div class="page-container py-20">
    <h1 class="section-title">作品集</h1>

    <div class="mb-10">
      <div class="flex flex-wrap gap-4 mb-8">
        <button
          @click="selectedCategory = '全部'"
          class="btn"
          :class="{'bg-taupe text-cream': selectedCategory === '全部'}">
          全部
        </button>
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          class="btn"
          :class="{'bg-taupe text-cream': selectedCategory === category}">
          {{ category }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="work in filteredWorks"
        :key="work.id"
        class="work-card group"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave">
        <img
          :src="work.image || 'https://placehold.co/600x400/e8e1d6/a19483?text=作品图片'"
          :alt="work.title"
          class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          crossorigin="anonymous">
        <div class="work-card-overlay">
          <div class="text-center p-4">
            <h3 class="work-card-title">{{ work.title }}</h3>
            <p class="text-cream font-sans text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
              {{ work.category }} | {{ work.year }}
            </p>
            <p class="text-cream font-serif text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 px-4">
              {{ work.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { usePortfolioStore } from '../stores/portfolio';
import gsap from 'gsap';

const portfolio = usePortfolioStore();
const selectedCategory = ref('全部');

const categories = computed(() => {
  const cats = new Set(portfolio.works.map(work => work.category));
  return Array.from(cats);
});

const filteredWorks = computed(() => {
  if (selectedCategory.value === '全部') {
    return portfolio.works;
  }
  return portfolio.works.filter(work => work.category === selectedCategory.value);
});

const onMouseEnter = (e) => {
  gsap.to(e.currentTarget.querySelector('img'), {
    scale: 1.05,
    duration: 0.7,
    ease: 'power2.out'
  });
};

const onMouseLeave = (e) => {
  gsap.to(e.currentTarget.querySelector('img'), {
    scale: 1,
    duration: 0.7,
    ease: 'power2.out'
  });
};
</script>
