import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// 注册GSAP插件
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// 检测设备类型
const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// 检测是否为移动设备
const isMobileDevice = () => {
  return window.innerWidth < 768;
};

// 初始化页面动画
export const initPageAnimations = () => {
  // 只在非触摸设备上添加鼠标跟随效果
  if (!isTouchDevice()) {
    initMouseFollower();
  }
  
  // 初始化滚动动画
  initScrollAnimations();
  
  // 初始化导航动画
  initNavigationAnimations();
  
  // 初始化背景效果
  initBackgroundEffect();
  
  // 初始化悬停效果
  initHoverEffects();
};

// 鼠标跟随效果
const initMouseFollower = () => {
  // 创建鼠标跟随元素
  const follower = document.createElement('div');
  follower.className = 'cursor-follower';
  document.body.appendChild(follower);
  
  // 创建鼠标指针元素
  const pointer = document.createElement('div');
  pointer.className = 'cursor-pointer';
  document.body.appendChild(pointer);
  
  // 初始位置
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;
  let pointerX = 0, pointerY = 0;
  
  // 鼠标移动事件
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // 鼠标悬停在可点击元素上时的效果
  const hoverables = document.querySelectorAll('a, button, .work-card, .social-icon, .nav-link');
  hoverables.forEach(hoverable => {
    hoverable.addEventListener('mouseenter', () => {
      gsap.to(follower, { scale: 1.5, duration: 0.3, backgroundColor: 'rgba(139, 115, 85, 0.1)' });
      gsap.to(pointer, { scale: 0.5, duration: 0.3 });
    });
    
    hoverable.addEventListener('mouseleave', () => {
      gsap.to(follower, { scale: 1, duration: 0.3, backgroundColor: 'rgba(139, 115, 85, 0.05)' });
      gsap.to(pointer, { scale: 1, duration: 0.3 });
    });
  });
  
  // 动画循环
  gsap.ticker.add(() => {
    // 计算跟随位置（带有延迟效果）
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    // 计算指针位置（更快的跟随）
    pointerX += (mouseX - pointerX) * 0.2;
    pointerY += (mouseY - pointerY) * 0.2;
    
    // 应用位置
    gsap.set(follower, { x: followerX, y: followerY });
    gsap.set(pointer, { x: pointerX, y: pointerY });
  });
  
  // 当鼠标离开页面时隐藏
  document.addEventListener('mouseleave', () => {
    gsap.to(follower, { opacity: 0, duration: 0.3 });
    gsap.to(pointer, { opacity: 0, duration: 0.3 });
  });
  
  // 当鼠标进入页面时显示
  document.addEventListener('mouseenter', () => {
    gsap.to(follower, { opacity: 1, duration: 0.3 });
    gsap.to(pointer, { opacity: 1, duration: 0.3 });
  });
};

// 滚动触发动画
const initScrollAnimations = () => {
  // 为所有带有.animate-fade-up类的元素添加淡入上升动画
  gsap.utils.toArray('.animate-fade-up').forEach(element => {
    gsap.fromTo(element, 
      { y: 50, opacity: 0 }, 
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
  
  // 为所有带有.animate-fade-in类的元素添加淡入动画
  gsap.utils.toArray('.animate-fade-in').forEach(element => {
    gsap.fromTo(element, 
      { opacity: 0 }, 
      {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
  
  // 为所有带有.animate-scale-in类的元素添加缩放动画
  gsap.utils.toArray('.animate-scale-in').forEach(element => {
    gsap.fromTo(element, 
      { scale: 0.8, opacity: 0 }, 
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
};

// 导航动画
const initNavigationAnimations = () => {
  // 导航链接悬停效果
  gsap.utils.toArray('.nav-link').forEach(link => {
    const underline = document.createElement('span');
    underline.className = 'nav-underline';
    link.appendChild(underline);
    
    gsap.set(underline, { 
      width: '0%', 
      height: '1px', 
      backgroundColor: '#8B7355', 
      position: 'absolute',
      bottom: '0',
      left: '50%',
      transformOrigin: 'center',
      opacity: 0
    });
    
    link.addEventListener('mouseenter', () => {
      gsap.to(underline, { 
        width: '100%', 
        opacity: 1, 
        left: '0%',
        duration: 0.3, 
        ease: 'power1.out' 
      });
    });
    
    link.addEventListener('mouseleave', () => {
      gsap.to(underline, { 
        width: '0%', 
        opacity: 0,
        left: '50%', 
        duration: 0.3, 
        ease: 'power1.in' 
      });
    });
  });
};

// 背景效果
const initBackgroundEffect = () => {
  // 创建背景动画元素
  const bgEffect = document.createElement('div');
  bgEffect.className = 'background-effect';
  document.body.appendChild(bgEffect);
  
  // 创建粒子
  const particleCount = isMobileDevice() ? 15 : 30;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'bg-particle';
    
    // 随机大小
    const size = Math.random() * 10 + 5;
    
    // 随机位置
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // 随机透明度
    const opacity = Math.random() * 0.07 + 0.03;
    
    gsap.set(particle, {
      width: size + 'px',
      height: size + 'px',
      x: posX + 'vw',
      y: posY + 'vh',
      backgroundColor: '#8B7355',
      borderRadius: '50%',
      opacity: opacity,
      position: 'absolute'
    });
    
    bgEffect.appendChild(particle);
    
    // 创建浮动动画
    gsap.to(particle, {
      x: '+=' + (Math.random() * 10 - 5) + 'vw',
      y: '+=' + (Math.random() * 10 - 5) + 'vh',
      duration: Math.random() * 20 + 20,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });
  }
};

// 悬停效果
const initHoverEffects = () => {
  // 为按钮添加悬停效果
  gsap.utils.toArray('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, { 
        scale: 1.05, 
        duration: 0.3, 
        ease: 'power1.out' 
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, { 
        scale: 1, 
        duration: 0.3, 
        ease: 'power1.in' 
      });
    });
  });
  
  // 为卡片添加悬停效果
  gsap.utils.toArray('.work-card').forEach(card => {
    gsap.set(card, { 
      transformOrigin: 'center',
      transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    });
    
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { 
        y: -10, 
        scale: 1.02,
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        duration: 0.3 
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { 
        y: 0, 
        scale: 1,
        boxShadow: '0 0 0 rgba(0,0,0,0)',
        duration: 0.5 
      });
    });
  });
};

export default {
  initPageAnimations
};
