<template>
  <div class="isFirstVisit">
    <Hero />
    <FeaturedWorks />
    <ServicesPreview />
    <AboutPreview />
  </div>
</template>

<script setup>
import { provide } from 'vue';
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

// 始终启用动画效果，每次打开主页都显示下滑动画
const alwaysAnimate = true;

// 将动画标志提供给子组件，始终为true
provide('isFirstVisit', alwaysAnimate);

// 仍然标记首次访问已完成，这只影响加载动画，不影响下滑动画
// 但是如果用户刷新页面，appState中的isFirstVisit不会被重置
appState.markFirstVisitComplete();
</script>
