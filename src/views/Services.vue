<template>
  <div class="py-12 bg-cream">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-slate mb-4">我的服务</h1>
        <p class="text-lg text-charcoal max-w-3xl mx-auto">
          除了主要项目外，我还提供了一系列专业服务和工具，帮助您实现数据驱动的解决方案和优化用户体验。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- 博客站 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
          <div class="h-48 bg-sand flex items-center justify-center">
            <i class="bi bi-journal-richtext text-6xl text-slate"></i>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-slate mb-2">技术博客</h3>
            <p class="text-charcoal mb-4">
              分享我在机器学习、前端开发和数据科学领域的见解、教程和最佳实践。
            </p>
            <a href="https://fueny.top" target="_blank" class="inline-block px-4 py-2 bg-sand text-slate rounded hover:bg-taupe hover:text-white transition-colors duration-300">
              访问博客
            </a>
          </div>
        </div>

        <!-- 便签站 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
          <div class="h-48 bg-sand flex items-center justify-center">
            <i class="bi bi-sticky text-6xl text-slate"></i>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-slate mb-2">在线便签</h3>
            <p class="text-charcoal mb-4">
              简洁高效的在线便签工具，支持Markdown格式，帮助您随时记录和整理想法。
            </p>
            <a href="https://memos.fueny.cn" target="_blank" class="inline-block px-4 py-2 bg-sand text-slate rounded hover:bg-taupe hover:text-white transition-colors duration-300">
              使用便签
            </a>
          </div>
        </div>

        <!-- PDF智能处理系统 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
          <div class="h-48 bg-sand flex items-center justify-center">
            <i class="bi bi-file-earmark-pdf text-6xl text-slate"></i>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-slate mb-2">PDF智能处理系统</h3>
            <p class="text-charcoal mb-4">
              基于大型语言模型的PDF处理工具，可以将PDF转换为Markdown，建立向量数据库，并生成内容摘要。
            </p>
            <a href="https://github.com/fueny/PLA" target="_blank" class="inline-block px-4 py-2 bg-sand text-slate rounded hover:bg-taupe hover:text-white transition-colors duration-300">
              查看项目
            </a>
          </div>
        </div>

        <!-- 记忆英语单词 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
          <div class="h-48 bg-sand flex items-center justify-center">
            <i class="bi bi-translate text-6xl text-slate"></i>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-slate mb-2">记忆英语单词</h3>
            <p class="text-charcoal mb-4">
              智能英语单词学习工具，结合间隔重复和情境记忆技术，帮助您高效记忆和掌握英语词汇。
            </p>
            <a href="https://vocabulary.fueny.cn" target="_blank" class="inline-block px-4 py-2 bg-sand text-slate rounded hover:bg-taupe hover:text-white transition-colors duration-300">
              开始学习
            </a>
          </div>
        </div>

        <!-- 开源项目 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
          <div class="h-48 bg-sand flex items-center justify-center">
            <i class="bi bi-code-square text-6xl text-slate"></i>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-slate mb-2">开源项目</h3>
            <p class="text-charcoal mb-4">
              我的开源贡献和项目，包括机器学习库、前端组件和实用工具。
            </p>
            <a href="https://github.com/fueny" target="_blank" class="inline-block px-4 py-2 bg-sand text-slate rounded hover:bg-taupe hover:text-white transition-colors duration-300">
              查看项目
            </a>
          </div>
        </div>

        <!-- 技术咨询 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
          <div class="h-48 bg-sand flex items-center justify-center">
            <i class="bi bi-chat-square-text text-6xl text-slate"></i>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-slate mb-2">技术咨询</h3>
            <p class="text-charcoal mb-4">
              提供机器学习、前端开发和数据科学领域的专业咨询服务，解决您的技术难题。
            </p>
            <router-link to="/contact" class="inline-block px-4 py-2 bg-sand text-slate rounded hover:bg-taupe hover:text-white transition-colors duration-300">
              联系我
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
  document.title = '我的服务 - Fueny';
});
</script>
