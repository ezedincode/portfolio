<script setup>
import { LucideGithub, LucideExternalLink } from 'lucide-vue-next'

defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="glass flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-spring-green/50 group">
    <div v-if="project.imageUrl" class="relative h-48 border-b border-black/10 dark:border-white/10 overflow-hidden">
      <img :src="project.imageUrl" :alt="project.title" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0"></div>
    </div>
    <div v-else class="relative h-48 bg-zinc-100 dark:bg-white/5 flex items-center justify-center border-b border-black/10 dark:border-white/10 overflow-hidden group">
      <div class="text-spring-green opacity-40">
        <LucideExternalLink :size="48" />
      </div>
      <div class="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0"></div>
    </div>
    <div class="p-6 grow flex flex-col">
      <h3 class="text-xl font-bold mb-1 font-outfit">{{ project.title }}</h3>
      <p v-if="project.category" class="text-[11px] font-semibold text-spring-green uppercase tracking-[0.15em] mb-3">
        {{ project.category }}
      </p>
      <p class="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 grow">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2 mb-6">
        <span v-for="tag in project.tags?.split(',')" :key="tag" class="text-[10px] px-3 py-1 bg-spring-green/10 text-spring-green rounded-full font-bold uppercase tracking-wider">
          {{ tag.trim() }}
        </span>
      </div>
      <div class="flex gap-4">
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="text-zinc-600 dark:text-zinc-400 hover:text-spring-green transition-colors">
          <LucideGithub :size="20" />
        </a>
        <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" class="text-zinc-600 dark:text-zinc-400 hover:text-spring-green transition-colors">
          <LucideExternalLink :size="20" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
