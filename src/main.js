import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './assets/css/main.css'
import './assets/css/animations.css'
import { initPageAnimations } from './utils/animation'

// 创建应用实例
const pinia = createPinia()
const app = createApp(App)

// 使用插件
app.use(pinia)
app.use(router)

// 挂载应用
app.mount('#app')

// 页面加载完成后处理
window.addEventListener('load', () => {
  // 移除加载类
  document.documentElement.classList.remove('js-loading')

  // 预加载关键资源
  const preloadLinks = [
    // 预加载字体和图标
    { rel: 'preload', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css', as: 'style' },
    // 预加载背景图片
    { rel: 'preload', href: 'https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', as: 'image' }
  ]

  // 添加预加载链接
  preloadLinks.forEach(link => {
    const linkEl = document.createElement('link')
    Object.entries(link).forEach(([key, value]) => {
      linkEl.setAttribute(key, value)
    })
    document.head.appendChild(linkEl)
  })

  // 检测触摸设备
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

  if (isTouchDevice) {
    // 为触摸设备添加类
    document.documentElement.classList.add('touch-device')

    // 修复300ms点击延迟问题
    const fastClick = document.createElement('script')
    fastClick.src = 'https://cdn.jsdelivr.net/npm/fastclick@1.0.6/lib/fastclick.min.js'
    fastClick.onload = () => {
      if (typeof FastClick !== 'undefined') {
        FastClick.attach(document.body)
      }
    }
    document.head.appendChild(fastClick)

    // 修复iOS上的滚动问题
    document.addEventListener('touchmove', (e) => {
      if (document.body.classList.contains('overflow-hidden') && !e.target.closest('.scrollable')) {
        e.preventDefault()
      }
    }, { passive: false })
  }

  // 等待DOM完全加载后初始化动画
  setTimeout(() => {
    initPageAnimations()
  }, 500)
})
