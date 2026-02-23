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
  <div class="glass flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-spring-green/50">
    <div v-if="project.imageUrl" class="h-48 bg-cover bg-center border-b border-black/10 dark:border-white/10" :style="{ backgroundImage: `url(${project.imageUrl})` }"></div>
    <div v-else class="h-48 bg-radial from-spring-green/10 to-zinc-100 dark:from-spring-green/20 dark:to-zinc-900 flex items-center justify-center border-b border-black/10 dark:border-white/10">
      <div class="text-spring-green opacity-40">
        <LucideExternalLink :size="48" />
      </div>
    </div>
    <div class="p-6 grow flex flex-col">
      <h3 class="text-xl font-bold mb-3 font-outfit">{{ project.title }}</h3>
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
