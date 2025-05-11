<template>
  <div class="md:hidden fixed bottom-0 left-0 right-0 bg-cream bg-opacity-95 backdrop-blur-sm border-t border-taupe border-opacity-30 z-50 shadow-md mobile-nav-container">
    <div class="flex justify-around items-center h-16">
      <router-link
        to="/"
        class="mobile-nav-link"
        active-class="mobile-nav-active"
      >
        <i class="bi bi-house-door text-lg"></i>
        <span class="text-xs mt-1">首页</span>
      </router-link>

      <router-link
        to="/works"
        class="mobile-nav-link"
        active-class="mobile-nav-active"
      >
        <i class="bi bi-grid text-lg"></i>
        <span class="text-xs mt-1">作品集</span>
      </router-link>

      <router-link
        to="/connect-the-dots"
        class="mobile-nav-link"
        active-class="mobile-nav-active"
      >
        <i class="bi bi-diagram-3 text-lg"></i>
        <span class="text-xs mt-1">点悟</span>
      </router-link>

      <router-link
        to="/services"
        class="mobile-nav-link"
        active-class="mobile-nav-active"
      >
        <i class="bi bi-briefcase text-lg"></i>
        <span class="text-xs mt-1">服务</span>
      </router-link>

      <router-link
        to="/about"
        class="mobile-nav-link"
        active-class="mobile-nav-active"
      >
        <i class="bi bi-person text-lg"></i>
        <span class="text-xs mt-1">关于</span>
      </router-link>

      <router-link
        to="/contact"
        class="mobile-nav-link"
        active-class="mobile-nav-active"
      >
        <i class="bi bi-envelope text-lg"></i>
        <span class="text-xs mt-1">联系</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isMobile = ref(window.innerWidth < 768);

// 检测窗口大小变化
const handleResize = () => {
  isMobile.value = window.innerWidth < 768;

  // 根据设备类型添加或移除类
  if (isMobile.value) {
    document.body.classList.add('has-mobile-nav');
  } else {
    document.body.classList.remove('has-mobile-nav');
  }
};

// 在组件挂载时添加类以确保页面内容不被底部导航栏遮挡
onMounted(() => {
  handleResize(); // 初始检测
  window.addEventListener('resize', handleResize);
});

// 在组件卸载前移除事件监听器和类
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  document.body.classList.remove('has-mobile-nav');
});
</script>

<style scoped>
.mobile-nav-container {
  /* 为底部导航添加安全区域内边距（适配全面屏手机） */
  padding-bottom: env(safe-area-inset-bottom, 0);
  /* 添加底部导航栏动画 */
  animation: slideUpNav 0.5s ease-out forwards;
}

.mobile-nav-link {
  @apply flex flex-col items-center justify-center w-full py-2 text-slate hover:text-charcoal transition-colors duration-200;
  position: relative;
  /* 添加图标和文字动画 */
  opacity: 0;
  animation: fadeInNav 0.5s ease-out forwards;
}

/* 为每个导航项添加延迟，创建交错动画效果 */
.mobile-nav-link:nth-child(1) { animation-delay: 0.1s; }
.mobile-nav-link:nth-child(2) { animation-delay: 0.15s; }
.mobile-nav-link:nth-child(3) { animation-delay: 0.2s; }
.mobile-nav-link:nth-child(4) { animation-delay: 0.25s; }
.mobile-nav-link:nth-child(5) { animation-delay: 0.3s; }
.mobile-nav-link:nth-child(6) { animation-delay: 0.35s; }

.mobile-nav-active {
  @apply text-charcoal;
  position: relative;
}

.mobile-nav-active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background-color: var(--color-taupe);
  border-radius: 1px;
  /* 添加指示器动画 */
  animation: scaleInIndicator 0.3s ease-out forwards;
}

/* 添加点击反馈效果 */
.mobile-nav-link:active {
  transform: scale(0.95);
}

/* 定义动画 */
@keyframes slideUpNav {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes fadeInNav {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleInIndicator {
  from {
    transform: translateX(-50%) scaleX(0);
  }
  to {
    transform: translateX(-50%) scaleX(1);
  }
}
</style>
