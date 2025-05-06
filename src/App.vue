<template>
  <!-- 加载页面 - 只在首页路径为"/"时显示 -->
  <LoadingScreen
    v-if="showLoadingScreen"
    @loading-complete="onLoadingComplete"
  />

  <!-- 主应用内容 -->
  <div
    class="min-h-screen flex flex-col"
    :class="{ 'opacity-0': !contentVisible }"
  >
    <Navbar />
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <keep-alive include="Home">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStateStore } from './stores/appState';
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import LoadingScreen from './components/common/LoadingScreen.vue';

// 状态
const contentVisible = ref(false);

// 全局状态
const appState = useAppStateStore();

// 路由
const router = useRouter();

// 计算属性：是否显示加载屏幕
// 只有在当前路径为"/"（首页）时才显示加载动画
const showLoadingScreen = computed(() => {
  return router.currentRoute.value.path === '/' && !appState.initialLoadComplete;
});

// 监听路由变化
watch(() => router.currentRoute.value, () => {
  // 路由变化时滚动到顶部
  window.scrollTo(0, 0);
}, { deep: true });

// 加载完成处理
const onLoadingComplete = () => {
  // 只标记初始加载完成，不影响isFirstVisit标志
  appState.markInitialLoadComplete();
  contentVisible.value = true;
};

// 初始化
onMounted(() => {
  // 获取当前路径
  const currentPath = router.currentRoute.value.path;

  // 如果不是首页，立即标记加载完成
  if (currentPath !== '/') {
    appState.markInitialLoadComplete();
    contentVisible.value = true;
    console.log('非首页加载，跳过加载动画');
  } else {
    // 如果是首页，等待加载动画完成
    console.log('首页加载，显示加载动画');
    // 内容初始不可见，等待加载动画完成后显示
    contentVisible.value = false;
  }
});
</script>

<style scoped>
.min-h-screen {
  transition: opacity 0.8s ease-in-out;
}
</style>
