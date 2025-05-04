<template>
  <footer class="bg-cream bg-opacity-80 backdrop-blur-sm border-t border-taupe border-opacity-20 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-slate text-sm font-sans">© {{ new Date().getFullYear() }} Fueny. All Rights Reserved</p>
        </div>

        <div class="flex space-x-4">
          <a v-for="social in portfolio.social" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i :class="social.icon"></i>
          </a>
        </div>
      </div>
      <div class="mt-4 text-center text-xs text-slate font-sans">
        <p>Designed by Fueny</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { usePortfolioStore } from '../../stores/portfolio';

const portfolio = usePortfolioStore();
</script>
