<template>
  <section class="py-20 bg-sand bg-opacity-30">
    <div class="page-container">
      <h2 class="section-title">精选作品</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="work in featuredWorks" :key="work.id"
             class="work-card group"
             @mouseenter="onMouseEnter"
             @mouseleave="onMouseLeave">
          <img :src="work.image || 'https://placehold.co/600x400/e8e1d6/a19483?text=作品图片'"
               :alt="work.title"
               class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
               crossorigin="anonymous">
          <div class="work-card-overlay">
            <div class="text-center">
              <h3 class="work-card-title">{{ work.title }}</h3>
              <p class="text-cream font-sans text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                {{ work.category }} | {{ work.year }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <router-link to="/works" class="btn">
          查看全部作品
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from '../../stores/portfolio';
import { onMounted } from 'vue';
import gsap from 'gsap';

const portfolio = usePortfolioStore();
const featuredWorks = portfolio.featuredWorks;

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

onMounted(() => {
  gsap.from('.work-card', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.work-card',
      start: 'top bottom-=100',
    }
  });
});
</script>
