<template>
  <div
    ref="loadingContainer"
    class="loading-screen fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream px-4"
    :class="{ 'fade-out': isLoaded }"
  >
    <!-- 3D画布容器 - 在小屏幕上缩小 -->
    <div class="canvas-container relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
      <canvas ref="canvas" class="w-full h-full"></canvas>
    </div>

    <!-- 文字容器 -->
    <div class="text-container mt-4 sm:mt-6 relative overflow-hidden">
      <h1
        ref="logoText"
        class="text-3xl sm:text-4xl md:text-5xl font-handwriting text-taupe opacity-0 transform translate-y-8"
      >
        Fueny
      </h1>
    </div>

    <!-- 加载进度条 - 响应式宽度 -->
    <div class="loading-bar-container mt-6 sm:mt-8 w-36 sm:w-40 md:w-48 h-1 bg-sand overflow-hidden">
      <div
        ref="loadingBar"
        class="h-full bg-taupe w-0"
      ></div>
    </div>

    <!-- 加载文字 -->
    <div class="loading-text mt-3 sm:mt-4">
      <p
        ref="loadingText"
        class="text-xs sm:text-sm text-mocha font-sans opacity-60"
      >
        连接思维的点滴...
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useAppStateStore } from '../../stores/appState';

// Props
const props = defineProps({
  duration: {
    type: Number,
    default: 3.0 // 加载动画持续时间（秒），延长0.5秒
  },
  minDuration: {
    type: Number,
    default: 2.0 // 最小显示时间（秒），延长0.5秒
  }
});

// Refs
const loadingContainer = ref(null);
const canvas = ref(null);
const logoText = ref(null);
const loadingBar = ref(null);
const loadingText = ref(null);

// State
const isLoaded = ref(false);
let scene, camera, renderer, particles, animationFrameId;
let startTime = 0;
let setRendererSize; // 声明函数变量，以便在清理时引用

// Emits
const emit = defineEmits(['loading-complete']);

// 获取全局状态
const appState = useAppStateStore();

// 初始化Three.js场景
const initThreeJS = () => {
  // 创建场景
  scene = new THREE.Scene();

  // 创建相机
  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 5;

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
    antialias: true
  });

  // 根据设备尺寸调整渲染器大小
  setRendererSize = () => {
    // 获取容器尺寸
    const containerWidth = canvas.value.parentElement.clientWidth;
    const containerHeight = canvas.value.parentElement.clientHeight;

    // 设置渲染器尺寸
    renderer.setSize(containerWidth, containerHeight);

    // 设置像素比，但限制最大值以提高性能
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };

  // 初始设置
  setRendererSize();

  // 监听窗口大小变化
  window.addEventListener('resize', setRendererSize);

  // 创建粒子几何体
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 500;

  const posArray = new Float32Array(particlesCount * 3);
  const scaleArray = new Float32Array(particlesCount);

  // 创建点的位置
  for (let i = 0; i < particlesCount * 3; i += 3) {
    // 创建一个球形分布的点云
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const radius = 2 + Math.random() * 1;

    posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
    posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    posArray[i + 2] = radius * Math.cos(phi);

    scaleArray[i / 3] = Math.random() * 2 + 1;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));

  // 创建点材质
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    sizeAttenuation: true,
    color: new THREE.Color('#8B7355'), // 棕色，符合网站主题
    transparent: true,
    opacity: 0.8,
  });

  // 创建点云
  particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);
};

// 动画循环
const animate = (timestamp) => {
  if (!startTime) startTime = timestamp;
  const elapsedTime = (timestamp - startTime) / 1000;

  // 旋转粒子
  if (particles) {
    particles.rotation.x = elapsedTime * 0.1;
    particles.rotation.y = elapsedTime * 0.15;
  }

  // 渲染场景
  renderer.render(scene, camera);

  // 继续动画循环
  animationFrameId = requestAnimationFrame(animate);
};

// 开始加载动画
const startLoadingAnimation = () => {
  // 显示文字动画
  gsap.to(logoText.value, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.2
  });

  // 加载进度条动画
  gsap.to(loadingBar.value, {
    width: '100%',
    duration: props.duration,
    ease: 'power1.inOut',
    onComplete: () => {
      // 确保至少显示最小持续时间
      const currentTime = performance.now();
      const elapsedTime = (currentTime - startTime) / 1000;

      if (elapsedTime < props.minDuration) {
        setTimeout(completeLoading, (props.minDuration - elapsedTime) * 1000);
      } else {
        completeLoading();
      }
    }
  });
};

// 完成加载
const completeLoading = () => {
  isLoaded.value = true;

  // 淡出动画
  gsap.to(loadingContainer.value, {
    opacity: 0,
    duration: 0.8,
    ease: 'power2.inOut',
    onComplete: () => {
      // 标记首次访问已完成
      appState.markFirstVisitComplete();

      // 通知父组件加载完成
      emit('loading-complete');

      // 清理Three.js资源
      cleanup();
    }
  });
};

// 清理资源
const cleanup = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }

  // 移除窗口大小变化监听器
  window.removeEventListener('resize', setRendererSize);

  if (scene) {
    // 清理Three.js资源
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        if (object.material.map) object.material.map.dispose();
        object.material.dispose();
      }
    });

    renderer.dispose();
    scene = null;
    camera = null;
    renderer = null;
    particles = null;
  }
};

// 生命周期钩子
onMounted(() => {
  // 初始化Three.js
  initThreeJS();

  // 开始动画循环
  startTime = performance.now();
  animationFrameId = requestAnimationFrame(animate);

  // 开始加载动画
  startLoadingAnimation();
});

onBeforeUnmount(() => {
  cleanup();
});
</script>

<style scoped>
.loading-screen {
  transition: opacity 0.8s ease-in-out;
}

.fade-out {
  pointer-events: none;
}

.canvas-container {
  transform: scale(1);
  transition: transform 0.5s ease-in-out;
}

.loading-screen:hover .canvas-container {
  transform: scale(1.05);
}

.loading-bar-container {
  border-radius: 2px;
}

.loading-bar {
  transition: width 0.2s ease-out;
}
</style>
