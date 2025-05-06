<template>
  <div :class="{ 'isFirstVisit': shouldAnimate }">
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

// 使用appState中的isFirstVisit标志
// 这样可以确保在第一次访问网站时显示动画
const shouldAnimate = appState.isFirstVisit;

// 将动画标志提供给子组件
provide('isFirstVisit', shouldAnimate);

// 标记首次访问已完成，这样下次不会再显示动画
// 但是如果用户刷新页面，appState中的isFirstVisit不会被重置
appState.markFirstVisitComplete();
</script>
