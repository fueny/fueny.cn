<template>
  <div class="not-found-container min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 bg-texture bg-cover bg-center opacity-10"></div>
    
    <!-- 漂浮的点 -->
    <div class="dots-container absolute inset-0 pointer-events-none">
      <div v-for="n in 20" :key="n" class="floating-dot"></div>
    </div>
    
    <!-- 主要内容 -->
    <div class="text-center relative z-10 max-w-2xl mx-auto">
      <!-- 404数字 -->
      <h1 class="text-9xl md:text-[12rem] font-handwriting text-taupe opacity-80 leading-none mb-6 animate-float">
        404
      </h1>
      
      <!-- 标题 -->
      <h2 class="text-3xl md:text-4xl font-serif text-slate mb-6">
        页面迷失在思维的海洋中
      </h2>
      
      <!-- 描述 -->
      <p class="text-lg text-mocha mb-10 max-w-lg mx-auto">
        看起来你试图连接的点并不存在。也许这是一个机会，去发现新的连接和可能性。
      </p>
      
      <!-- 按钮 -->
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <router-link to="/" class="btn">
          返回首页
        </router-link>
        <router-link to="/connect-the-dots" class="btn">
          探索"点悟"
        </router-link>
      </div>
      
      <!-- 迷路的点 -->
      <div class="lost-dot mt-16 relative mx-auto">
        <div class="dot-body"></div>
        <div class="dot-eyes">
          <div class="dot-eye left"></div>
          <div class="dot-eye right"></div>
        </div>
        <div class="dot-mouth"></div>
        <div class="dot-question">?</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

// 生成随机数字在指定范围内
const random = (min, max) => Math.random() * (max - min) + min;

// 初始化漂浮的点
const initFloatingDots = () => {
  const dots = document.querySelectorAll('.floating-dot');
  
  dots.forEach(dot => {
    // 随机大小
    const size = random(5, 15);
    
    // 随机位置
    const posX = random(0, 100);
    const posY = random(0, 100);
    
    // 随机透明度
    const opacity = random(0.1, 0.3);
    
    // 随机动画持续时间
    const duration = random(15, 30);
    
    // 应用样式
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${posX}%`;
    dot.style.top = `${posY}%`;
    dot.style.opacity = opacity;
    dot.style.animationDuration = `${duration}s`;
    
    // 随机延迟
    dot.style.animationDelay = `${random(0, 5)}s`;
  });
};

// 动画迷路的点
const animateLostDot = () => {
  const lostDot = document.querySelector('.lost-dot');
  
  // 随机移动
  setInterval(() => {
    const moveX = random(-5, 5);
    const moveY = random(-2, 2);
    
    lostDot.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }, 2000);
  
  // 眨眼动画
  setInterval(() => {
    const eyes = document.querySelectorAll('.dot-eye');
    eyes.forEach(eye => {
      eye.style.height = '1px';
      setTimeout(() => {
        eye.style.height = '4px';
      }, 200);
    });
  }, 4000);
};

// 定时器引用
let dotAnimationInterval;
let blinkInterval;

onMounted(() => {
  initFloatingDots();
  
  // 设置动画间隔
  dotAnimationInterval = setInterval(() => {
    animateLostDot();
  }, 100);
  
  // 眨眼动画
  blinkInterval = setInterval(() => {
    const eyes = document.querySelectorAll('.dot-eye');
    eyes.forEach(eye => {
      eye.style.height = '1px';
      setTimeout(() => {
        eye.style.height = '4px';
      }, 200);
    });
  }, 4000);
});

onBeforeUnmount(() => {
  // 清理定时器
  clearInterval(dotAnimationInterval);
  clearInterval(blinkInterval);
});
</script>

<style scoped>
.not-found-container {
  background-color: var(--color-cream);
}

/* 漂浮的点 */
.floating-dot {
  position: absolute;
  background-color: #8B7355;
  border-radius: 50%;
  opacity: 0.2;
  animation: float-around linear infinite;
}

@keyframes float-around {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(20px, -15px);
  }
  50% {
    transform: translate(-10px, -25px);
  }
  75% {
    transform: translate(-25px, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
}

/* 迷路的点 */
.lost-dot {
  width: 80px;
  height: 80px;
  position: relative;
  transition: transform 2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.dot-body {
  width: 100%;
  height: 100%;
  background-color: #8B7355;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dot-eyes {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  display: flex;
  justify-content: space-between;
}

.dot-eye {
  width: 8px;
  height: 4px;
  background-color: #fff;
  border-radius: 50%;
  transition: height 0.2s ease;
}

.dot-mouth {
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 8px;
  border-radius: 0 0 10px 10px;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
}

.dot-question {
  position: absolute;
  top: -30px;
  right: -10px;
  font-size: 36px;
  font-weight: bold;
  color: #8B7355;
  opacity: 0.8;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* 浮动动画 */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
