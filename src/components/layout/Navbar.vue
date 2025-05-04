<template>
  <div>
    <!-- Overlay for closing menu when clicking outside -->
    <div
      v-if="isMenuOpen"
      @click="closeMenu"
      class="fixed inset-0 bg-charcoal bg-opacity-20 z-40 md:hidden transition-opacity duration-300"
    ></div>

    <header class="bg-cream bg-opacity-90 backdrop-blur-sm border-b border-taupe border-opacity-20 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <router-link to="/" class="flex items-center" @click="closeMenu">
              <span class="font-handwriting text-2xl text-slate">Fueny</span>
            </router-link>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-8">
            <router-link to="/" class="nav-link">首页</router-link>
            <router-link to="/works" class="nav-link">作品集</router-link>
            <router-link to="/services" class="nav-link">服务</router-link>
            <router-link to="/about" class="nav-link">关于</router-link>
            <router-link to="/contact" class="nav-link">联系</router-link>
          </nav>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              @click="toggleMenu"
              class="mobile-menu-button p-2 rounded-md text-slate hover:text-charcoal hover:bg-sand focus:outline-none focus:ring-2 focus:ring-inset focus:ring-taupe transition-colors duration-200"
              aria-label="主菜单"
            >
              <i class="bi" :class="isMenuOpen ? 'bi-x-lg' : 'bi-list'"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        class="md:hidden bg-cream bg-opacity-95 backdrop-blur-sm border-b border-taupe border-opacity-20 overflow-hidden transition-all duration-300 ease-in-out"
        :class="isMenuOpen ? 'max-h-60' : 'max-h-0'"
      >
        <div class="px-4 py-3 space-y-2">
          <router-link
            @click="closeMenu"
            to="/"
            class="nav-link block py-3 px-4 rounded-md hover:bg-sand transition-colors duration-200"
          >
            首页
          </router-link>
          <router-link
            @click="closeMenu"
            to="/works"
            class="nav-link block py-3 px-4 rounded-md hover:bg-sand transition-colors duration-200"
          >
            作品集
          </router-link>
          <router-link
            @click="closeMenu"
            to="/services"
            class="nav-link block py-3 px-4 rounded-md hover:bg-sand transition-colors duration-200"
          >
            服务
          </router-link>
          <router-link
            @click="closeMenu"
            to="/about"
            class="nav-link block py-3 px-4 rounded-md hover:bg-sand transition-colors duration-200"
          >
            关于
          </router-link>
          <router-link
            @click="closeMenu"
            to="/contact"
            class="nav-link block py-3 px-4 rounded-md hover:bg-sand transition-colors duration-200"
          >
            联系
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isMenuOpen = ref(false);

// 切换菜单状态
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;

  // 如果菜单打开，添加滚动锁定
  if (isMenuOpen.value) {
    document.body.classList.add('overflow-hidden', 'md:overflow-auto');
  } else {
    document.body.classList.remove('overflow-hidden', 'md:overflow-auto');
  }
};

// 关闭菜单
const closeMenu = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
    document.body.classList.remove('overflow-hidden', 'md:overflow-auto');
  }
};

// 监听ESC键关闭菜单
const handleEscKey = (event) => {
  if (event.key === 'Escape' && isMenuOpen.value) {
    closeMenu();
  }
};

// 监听窗口大小变化，在大屏幕上自动关闭菜单
const handleResize = () => {
  if (window.innerWidth >= 768 && isMenuOpen.value) {
    closeMenu();
  }
};

// 添加事件监听器
onMounted(() => {
  window.addEventListener('keydown', handleEscKey);
  window.addEventListener('resize', handleResize);
});

// 移除事件监听器
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscKey);
  window.removeEventListener('resize', handleResize);
  document.body.classList.remove('overflow-hidden', 'md:overflow-auto');
});
</script>
