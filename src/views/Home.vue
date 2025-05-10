<template>
  <div>
    <Hero />
    <FeaturedWorks />
    <ServicesPreview />
    <AboutPreview />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAppStateStore } from '../stores/appState';
import Hero from '../components/home/Hero.vue';
import FeaturedWorks from '../components/home/FeaturedWorks.vue';
import ServicesPreview from '../components/home/ServicesPreview.vue';
import AboutPreview from '../components/home/AboutPreview.vue';

// 为keep-alive定义组件名称
defineOptions({
  name: 'Home'
});

// 获取全局状态
const appState = useAppStateStore();

// 仍然标记首次访问已完成，这只影响加载动画
// 但是如果用户刷新页面，appState中的isFirstVisit不会被重置
appState.markFirstVisitComplete();

// 组件挂载时确保滚动到顶部
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
