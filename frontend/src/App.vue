<script setup>
import { onMounted, ref } from 'vue'
import { LucideGithub, LucideLinkedin, LucideExternalLink, LucideMail } from 'lucide-vue-next'
import ProjectCard from './components/ProjectCard.vue'
import SkillBadge from './components/SkillBadge.vue'

const projects = ref([])

const skills = ['Spring Boot', 'Java 17', 'Vue 3', 'PostgreSQL', 'Docker', 'AWS', 'TypeScript', 'Vite', 'Pinia', 'Spring Security']

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:8080/api/projects')
    if (response.ok) {
      projects.value = await response.json()
    }
  } catch (error) {
    console.error('Failed to fetch projects:', error)
    // Fallback data if backend is not running
    projects.value = [
      {
        id: 1,
        title: 'Enterprise ERP System (Offline)',
        description: 'A full-scale ERP system built with Spring Boot microservices and Vue 3 dashboard.',
        tags: 'Spring Boot, Vue 3, PostgreSQL, Docker',
        githubUrl: '#',
        demoUrl: '#'
      },
      {
        id: 2,
        title: 'Cloud Analytics Pro (Offline)',
        description: 'Real-time data visualization platform with high-performance backend processing.',
        tags: 'Java 17, Vite, Tailwind, MongoDB',
        githubUrl: '#',
        demoUrl: '#'
      }
    ]
  }
})
</script>

<template>
  <header class="glass fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[1100px] z-[1000] py-3 px-6">
    <nav class="container mx-auto flex justify-between items-center">
      <div class="text-2xl font-extrabold font-outfit">Portfolio.</div>
      <div class="hidden md:flex gap-8">
        <a href="#projects" class="hover:text-spring-green transition-colors">Projects</a>
        <a href="#skills" class="hover:text-spring-green transition-colors">Skills</a>
        <a href="#about" class="hover:text-spring-green transition-colors">About</a>
        <a href="#contact" class="hover:text-spring-green transition-colors">Contact</a>
      </div>
    </nav>
  </header>

  <main class="container mx-auto px-6">
    <section class="pt-48 pb-24 text-center">
      <div class="inline-block px-4 py-2 bg-spring-green/10 text-spring-green rounded-full text-sm font-semibold mb-6 border border-spring-green/20">
        Available for Work
      </div>
      <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight font-outfit">
        Building <span class="gradient-text">Premium</span> Full-Stack Solutions
      </h1>
      <p class="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
        Specializing in Java/Spring Boot backends and modern Vue 3 frontends. 
        I bridge the gap between robust architecture and stunning user interfaces.
      </p>
      <div class="flex flex-col md:flex-row justify-center items-center gap-8">
        <button class="bg-spring-green hover:bg-spring-green/90 text-white px-8 py-3 rounded-xl font-bold transition-transform hover:-translate-y-1">
          View My Work
        </button>
        <div class="flex gap-6 text-zinc-400">
          <a href="#" class="hover:text-spring-green transition-colors"><LucideGithub /></a>
          <a href="#" class="hover:text-spring-green transition-colors"><LucideLinkedin /></a>
        </div>
      </div>
    </section>

    <section id="projects" class="mb-32">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-2 font-outfit">Featured Projects</h2>
        <p class="text-zinc-400">A showcase of my recent technical work.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </section>

    <section id="skills" class="mb-32">
      <h2 class="text-4xl font-bold mb-12 text-center font-outfit">Technical Expertise</h2>
      <div class="flex flex-wrap justify-center gap-4">
        <SkillBadge v-for="skill in skills" :key="skill" :name="skill" />
      </div>
    </section>

    <footer id="contact" class="glass text-center py-16 px-8 mb-16">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-4xl font-bold mb-4 font-outfit">Let's build something together</h2>
        <p class="text-zinc-400 mb-8">Currently looking for new opportunities in Full-Stack Development.</p>
        <a href="mailto:hello@example.com" class="inline-flex items-center gap-2 bg-spring-green text-white px-8 py-3 rounded-xl font-semibold hover:-translate-y-1 transition-transform">
          <LucideMail :size="20" /> Get In Touch
        </a>
      </div>
    </footer>
  </main>
</template>

<style scoped>
/* Scoped styles are mostly replaced by Tailwind classes above */
</style>
