<template>
  <section class="py-20 bg-sand bg-opacity-30 relative">
    <div class="page-container">
      <h2 ref="titleEl" class="section-title opacity-0 transform translate-y-8">精选作品</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(work, index) in featuredWorks" :key="work.id"
             :ref="el => { if(el) workCards[index] = el }"
             class="work-card group opacity-0 transform translate-y-8"
             @mouseenter="onMouseEnter"
             @mouseleave="onMouseLeave">
          <div class="relative overflow-hidden h-80">
            <img :src="work.image || 'https://placehold.co/600x400/e8e1d6/a19483?text=作品图片'"
                 :alt="work.title"
                 class="w-full h-full object-cover transition-transform duration-700"
                 crossorigin="anonymous">
            <div class="work-card-overlay">
              <div class="text-center px-4">
                <h3 class="work-card-title mb-2">{{ work.title }}</h3>
                <p class="text-cream font-sans text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {{ work.category }} | {{ work.year }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref="buttonEl" class="text-center mt-12 opacity-0 transform translate-y-8">
        <router-link to="/works" class="btn">
          查看全部作品
        </router-link>
      </div>
    </div>

    <!-- 底部装饰分隔元素 -->
    <div class="absolute bottom-0 left-0 w-full h-8 overflow-hidden">
      <div class="w-full h-16 bg-cream transform rotate-1 origin-bottom-left translate-y-8"></div>
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
const featuredWorks = portfolio.featuredWorks;

// 创建引用
const titleEl = ref(null);
const buttonEl = ref(null);
const workCards = ref([]);

// 鼠标悬停效果
const onMouseEnter = (e) => {
  // 图片缩放效果
  gsap.to(e.currentTarget.querySelector('img'), {
    scale: 1.05,
    duration: 0.7,
    ease: 'power2.out'
  });

  // 卡片上升效果
  gsap.to(e.currentTarget, {
    y: -5,
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    duration: 0.3,
    ease: 'power1.out'
  });
};

const onMouseLeave = (e) => {
  // 图片恢复效果
  gsap.to(e.currentTarget.querySelector('img'), {
    scale: 1,
    duration: 0.7,
    ease: 'power2.out'
  });

  // 卡片恢复效果
  gsap.to(e.currentTarget, {
    y: 0,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    duration: 0.5,
    ease: 'power1.out'
  });
};

// 初始化动画
onMounted(() => {
  // 标题动画
  ScrollTrigger.create({
    trigger: titleEl.value,
    start: 'top bottom-=100',
    onEnter: () => {
      gsap.to(titleEl.value, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      });
    },
    once: true
  });

  // 作品卡片动画
  workCards.value.forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      start: 'top bottom-=100',
      onEnter: () => {
        gsap.to(card, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out'
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
