<template>
  <div class="page-container py-20">
    <div class="max-w-4xl mx-auto">
      <h1 class="section-title">Connect the Dots <span class="text-mocha">(点悟)</span></h1>
      
      <!-- 概念介绍部分 -->
      <div class="mb-16">
        <div class="prose max-w-none">
          <p class="text-lg text-slate leading-relaxed mb-6">
            {{ portfolio.connectTheDots.introduction }}
          </p>
          
          <div class="relative my-12 p-8 bg-sand bg-opacity-30 rounded-sm border-l-4 border-taupe">
            <div class="absolute -top-5 -left-5 w-10 h-10 flex items-center justify-center bg-taupe text-white rounded-full">
              <i class="bi bi-quote text-xl"></i>
            </div>
            <p class="italic text-mocha">{{ portfolio.connectTheDots.quote }}</p>
            <p class="text-right text-sm text-slate mt-2">— {{ portfolio.connectTheDots.quoteAuthor }}</p>
          </div>
        </div>
      </div>
      
      <!-- 核心原则部分 -->
      <div class="mb-16">
        <h2 class="text-2xl font-serif text-slate mb-8">核心原则</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(principle, index) in portfolio.connectTheDots.principles" :key="index" 
               class="p-6 border border-sand hover:border-taupe transition-colors duration-300 rounded-sm">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 flex items-center justify-center bg-taupe text-white rounded-full mr-4">
                <i :class="principle.icon"></i>
              </div>
              <h3 class="text-xl font-serif text-mocha">{{ principle.title }}</h3>
            </div>
            <p class="text-slate">{{ principle.description }}</p>
          </div>
        </div>
      </div>
      
      <!-- 应用领域部分 -->
      <div class="mb-16">
        <h2 class="text-2xl font-serif text-slate mb-8">应用领域</h2>
        <div class="relative">
          <div class="absolute top-0 bottom-0 left-1/2 w-0.5 bg-sand"></div>
          <div v-for="(application, index) in portfolio.connectTheDots.applications" :key="index" 
               class="relative mb-12">
            <div :class="[
              'flex flex-col md:flex-row gap-8 items-center', 
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            ]">
              <div class="md:w-1/2 z-10">
                <div :class="[
                  'p-6 bg-white shadow-md rounded-sm border-l-4', 
                  index % 2 === 0 ? 'md:text-right md:border-r-4 md:border-l-0' : ''
                ]" :style="{ borderColor: application.color }">
                  <h3 class="text-xl font-serif mb-3" :style="{ color: application.color }">
                    {{ application.title }}
                  </h3>
                  <p class="text-slate">{{ application.description }}</p>
                </div>
              </div>
              <div class="md:w-1/2 z-10 flex justify-center">
                <div class="w-16 h-16 rounded-full flex items-center justify-center" 
                     :style="{ backgroundColor: application.color }">
                  <i :class="['text-white text-2xl', application.icon]"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 实践方法部分 -->
      <div>
        <h2 class="text-2xl font-serif text-slate mb-8">实践方法</h2>
        <div class="bg-sand bg-opacity-20 p-8 rounded-sm">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(method, index) in portfolio.connectTheDots.methods" :key="index" 
                 class="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="text-center mb-4">
                <span class="inline-block w-12 h-12 rounded-full bg-taupe text-white flex items-center justify-center text-xl font-serif">
                  {{ index + 1 }}
                </span>
              </div>
              <h3 class="text-center text-lg font-serif text-mocha mb-3">{{ method.title }}</h3>
              <p class="text-slate text-center">{{ method.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePortfolioStore } from '../stores/portfolio';

const portfolio = usePortfolioStore();
</script>

<style scoped>
.prose p {
  margin-bottom: 1.5rem;
}
</style>
