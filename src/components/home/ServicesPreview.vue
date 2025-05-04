<template>
  <section class="py-12 bg-sand bg-opacity-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h2 class="text-2xl md:text-3xl font-bold text-slate mb-4">我的服务</h2>
        <p class="text-lg text-charcoal max-w-3xl mx-auto">
          探索我提供的专业服务和工具，助力您的项目和创意实现。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 博客服务 -->
        <div class="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105">
          <div class="flex items-center mb-4">
            <i class="bi bi-journal-richtext text-3xl text-slate mr-3"></i>
            <h3 class="text-xl font-semibold text-slate">技术博客</h3>
          </div>
          <p class="text-charcoal mb-4">
            分享机器学习、前端开发和数据科学领域的见解和教程。
          </p>
        </div>

        <!-- 便签服务 -->
        <div class="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105">
          <div class="flex items-center mb-4">
            <i class="bi bi-sticky text-3xl text-slate mr-3"></i>
            <h3 class="text-xl font-semibold text-slate">在线便签</h3>
          </div>
          <p class="text-charcoal mb-4">
            简洁高效的在线便签工具，支持Markdown格式。
          </p>
        </div>

        <!-- PDF智能处理系统 -->
        <div class="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105">
          <div class="flex items-center mb-4">
            <i class="bi bi-file-earmark-pdf text-3xl text-slate mr-3"></i>
            <h3 class="text-xl font-semibold text-slate">PDF智能处理系统</h3>
          </div>
          <p class="text-charcoal mb-4">
            基于大型语言模型的PDF处理工具，提供文档转换和摘要生成。
          </p>
        </div>
      </div>

      <div class="text-center mt-8">
        <router-link to="/services" class="inline-block px-6 py-3 bg-taupe text-white rounded-md hover:bg-slate transition-colors duration-300">
          查看全部服务
        </router-link>
      </div>
    </div>
  </section>
</template>
