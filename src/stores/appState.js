import { defineStore } from 'pinia';

// 检查当前路径是否是首页
const isHomePage = () => {
  return window.location.pathname === '/' ||
         window.location.pathname === '/index.html' ||
         window.location.pathname === '';
};

export const useAppStateStore = defineStore('appState', {
  state: () => {
    // 从localStorage中获取是否是首次访问的标志
    // 如果没有记录，则认为是首次访问
    const hasVisited = localStorage.getItem('hasVisitedSite') === 'true';

    return {
      // 是否是首次访问网站
      isFirstVisit: !hasVisited,

      // 是否已经完成初始加载
      // 如果当前不是首页，则初始化为true（跳过加载动画）
      initialLoadComplete: !isHomePage()
    };
  },

  actions: {
    // 标记首次访问已完成
    markFirstVisitComplete() {
      this.isFirstVisit = false;
      // 将访问记录保存到localStorage中，这样即使刷新页面也能记住
      localStorage.setItem('hasVisitedSite', 'true');
    },

    // 标记初始加载已完成
    markInitialLoadComplete() {
      this.initialLoadComplete = true;
    },

    // 重置状态（用于刷新页面时）
    reset() {
      // 只有在首页时才重置加载完成标志
      if (isHomePage()) {
        this.initialLoadComplete = false;
      } else {
        // 非首页时，确保加载完成标志为true
        this.initialLoadComplete = true;
      }
    },

    // 仅用于测试：重置所有状态
    resetAll() {
      this.isFirstVisit = true;
      this.initialLoadComplete = false;
    }
  }
});
