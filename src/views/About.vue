<template>
  <div class="page-container py-20">
    <div class="max-w-4xl mx-auto">
      <h1 class="section-title">关于我</h1>

      <div class="flex flex-col md:flex-row gap-12 mb-16">
        <div class="md:w-1/3">
          <div class="sticky top-32">
            <img
              :src="portfolio.artist.portrait"
              alt="艺术家肖像"
              class="w-full h-auto rounded-sm shadow-lg mb-6"
              crossorigin="anonymous"
              onerror="this.src='https://placehold.co/800x600/e8e1d6/a19483?text=艺术家肖像'">
            <h2 class="text-2xl font-handwriting text-slate mb-2">{{ portfolio.artist.name }}</h2>
            <p class="text-mocha font-sans text-sm mb-4">{{ portfolio.artist.title }}</p>

            <div class="flex mt-4">
              <a v-for="social in portfolio.social" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer" class="social-icon mr-3">
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="md:w-2/3">
          <div class="prose max-w-none">
            <p class="whitespace-pre-line">{{ portfolio.artist.longBio }}</p>

            <h3>{{ portfolio.philosophy.title }}</h3>
            <p class="text-slate mb-4">{{ portfolio.philosophy.description }}</p>
            <div class="mb-6">
              <ul class="list-disc pl-5 space-y-2">
                <li v-for="(point, index) in portfolio.philosophy.keyPoints" :key="index" class="text-slate">
                  {{ point }}
                </li>
              </ul>
            </div>

            <h3>专业技能</h3>
            <div class="space-y-4">
              <div v-for="skill in portfolio.skills" :key="skill.name" class="mb-4">
                <div class="flex justify-between mb-1">
                  <span class="font-sans text-sm text-slate">{{ skill.name }}</span>
                  <span class="font-sans text-sm text-mocha">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-sand rounded-sm h-1.5">
                  <div class="bg-taupe h-1.5 rounded-sm" :style="{ width: `${skill.level}%` }"></div>
                </div>
              </div>
            </div>

            <h3>展览经历</h3>
            <div class="space-y-4">
              <div v-for="exhibition in portfolio.exhibitions" :key="exhibition.title" class="border-l-2 border-taupe pl-4 py-2">
                <div class="font-sans text-sm text-mocha mb-1">{{ exhibition.year }}</div>
                <div class="font-serif text-slate">{{ exhibition.title }}</div>
                <div class="font-sans text-sm text-slate mt-1">{{ exhibition.location }}</div>
              </div>
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
