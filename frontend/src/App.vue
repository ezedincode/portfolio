<script setup>
import { onMounted, ref } from 'vue'
import { LucideGithub, LucideLinkedin, LucideExternalLink, LucideMail, LucideMoon, LucideSun } from 'lucide-vue-next'
import ProjectCard from './components/ProjectCard.vue'
import SkillBadge from './components/SkillBadge.vue'
import { downloadCV } from '../storage/storage.js'

const profile = {
  name: 'Ezedin Ahmed',
  title: 'Backend Developer',
  email: 'ezedinadefa@gmail.com',
  location: 'Dessie, Ethiopia',
  phone: '+251964240012',
  nationality: 'Ethiopian',
  githubHandle: '@ezedincode',
  githubUrl: 'https://github.com/ezedincode'
}

const featuredProjects = [
  {
    id: 1,
    title: 'Bookstore Backend (Intern Project)',
    description: 'Spring Boot backend with PostgreSQL, JWT authentication, REST APIs, and role-based access control for Admin and User features. Containerized with Docker for consistent deployment.',
    tags: 'Spring Boot, PostgreSQL, JWT, Docker',
    githubUrl: profile.githubUrl
  },
  {
    id: 2,
    title: 'School Grade Management System',
    description: 'Distributed school management system using Java and Spring Cloud microservices with API Gateway routing, Kafka messaging, automated notifications, and Swagger API documentation.',
    tags: 'Java, Spring Cloud, API Gateway, Kafka',
    githubUrl: profile.githubUrl
  },
  {
    id: 3,
    title: 'HTTP Servlet Server',
    description: 'Lightweight multi-threaded HTTP server built from scratch in Java with a custom request dispatcher, JSON body parsing, and a controller annotation system for concurrent client connections.',
    tags: 'Java, HTTP, Multithreading, JSON',
    githubUrl: profile.githubUrl
  },
  {
    id: 4,
    title: 'Load Balancer',
    description: 'Java-based load balancer that distributes incoming HTTP traffic across multiple backend servers using algorithms like Round Robin and health monitoring for improved fault tolerance.',
    tags: 'Java, Load Balancing, HTTP, Monitoring',
    githubUrl: profile.githubUrl
  },
  {
    id: 5,
    title: 'E-commerce Microservices',
    description: 'Microservices-based e-commerce system built with Spring Boot, separate services for core functions, service discovery, and an API Gateway via Spring Cloud for a scalable architecture.',
    tags: 'Spring Boot, Microservices, Spring Cloud, Discovery',
    githubUrl: profile.githubUrl
  }
]

const projects = ref(featuredProjects)

const education = {
  degree: 'Computer Engineering',
  school: 'Bahir Dar University',
  period: '2022/07 – present',
  location: 'Bahir Dar, Ethiopia',
  coursework: 'Algorithms, Data Structures, Database Management, Network Security, Software Design'
}

const experience = [
  {
    id: 'wollo-intern',
    role: 'Backend Developer - Intern',
    company: 'Wollo University',
    period: '2024/01 – 2024/05',
    location: 'Dessie, Ethiopia',
    highlights: [
      'Developed a Spring Boot bookstore backend with PostgreSQL, JWT auth, and REST APIs.',
      'Implemented secure role-based access control for Admin and User functionalities.',
      'Designed and optimized database schema for Books, Users, Orders, and Cart items.',
      'Containerized the full application using Docker for consistent deployment.'
    ]
  }
]

const isDark = ref(document.documentElement.classList.contains('dark'))

function applyTheme(dark) {
  document.documentElement.classList.toggle('dark', dark)
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

function toggleTheme() {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
}

async function handleDownloadResume() {
  try {
    await downloadCV()
  } catch (error) {
    console.error(error)
  }
}

const skillsByCategory = [
  {
    title: 'Language',
    items: ['Java', 'JavaScript (learning)']
  },
  {
    title: 'Frameworks',
    items: ['Spring Boot', 'Spring Cloud', 'Vue.js (learning)']
  },
  {
    title: 'DataBases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB']
  },
  {
    title: 'Messaging & Cache',
    items: ['Kafka', 'Redis', 'RabbitMQ']
  },
  {
    title: 'DevOps',
    items: ['Docker']
  },
  {
    title: 'Test',
    items: ['JUnit 5', 'Mockito']
  },
  {
    title: 'Security',
    items: ['Spring Security', 'JWT authentication']
  }
]

onMounted(() => {
  // Keep in sync with the pre-hydration theme script in index.html
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme === 'dark' || storedTheme === 'light') {
    isDark.value = storedTheme === 'dark'
    applyTheme(isDark.value)
  }
})
</script>

<template>
  <header class="glass fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-275 z-1000 py-3 px-6">
    <nav class="container mx-auto flex justify-between items-center">
      <div class="text-2xl font-extrabold font-outfit">Portfolio.</div>
      <div class="flex items-center gap-4">
        <div class="hidden md:flex gap-8">
          <a href="#projects" class="hover:text-spring-green transition-colors">Projects</a>
          <a href="#skills" class="hover:text-spring-green transition-colors">Skills</a>
          <a href="#about" class="hover:text-spring-green transition-colors">About</a>
          <a href="#contact" class="hover:text-spring-green transition-colors">Contact</a>
        </div>

        <button
          type="button"
          class="inline-flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 backdrop-blur-xl transition-colors w-11 h-11"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to night mode'"
          :title="isDark ? 'Light mode' : 'Night mode'"
          @click="toggleTheme"
        >
          <LucideSun v-if="isDark" :size="18" />
          <LucideMoon v-else :size="18" />
        </button>
      </div>
    </nav>
  </header>

  <main class="container mx-auto px-6">
    <section class="pt-48 pb-24 text-center">
      <div class="inline-block px-4 py-2 bg-spring-green/10 text-spring-green rounded-full text-sm font-semibold mb-6 border border-spring-green/20">
        Available for Work
      </div>
      <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight font-outfit">
        {{ profile.name }}
      </h1>
      <div class="text-lg font-semibold text-spring-green mb-4">{{ profile.title }}</div>
      <p class="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10">
        Backend Developer with a strong interest in designing robust and scalable server-side systems.
        Enjoys solving complex problems, building clean APIs, and ensuring reliable system integration.
        Continuously learning and applying modern backend technologies and architectures, while actively developing skills in Vue.js for frontend integration.
      </p>
      <div class="flex flex-col md:flex-row justify-center items-center gap-8">
        <a href="#projects" class="bg-spring-green hover:bg-spring-green/90 text-white px-8 py-3 rounded-xl font-bold transition-transform hover:-translate-y-1">
          View My Work
        </a>
        <button
          type="button"
          class="border border-spring-green/30 text-spring-green px-8 py-3 rounded-xl font-bold transition-transform hover:-translate-y-1 hover:bg-spring-green/10"
          @click="handleDownloadResume"
        >
          Download Resume
        </button>
        <div class="flex gap-6 text-zinc-600 dark:text-zinc-400">
          <a :href="profile.githubUrl" target="_blank" rel="noreferrer" class="hover:text-spring-green transition-colors" :aria-label="'GitHub ' + profile.githubHandle" :title="profile.githubHandle">
            <LucideGithub />
          </a>
        </div>
      </div>
    </section>

    <section id="projects" class="mb-32 bg-[#eaece7] dark:bg-transparent rounded-2xl p-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-2 font-outfit">Featured Projects</h2>
        <p class="text-zinc-600 dark:text-zinc-400">A showcase of my recent technical work.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </section>

    <section id="skills" class="mb-32">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-2 font-outfit">Technical Skills</h2>
        <p class="text-zinc-600 dark:text-zinc-400">Technologies I use and continue learning.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="category in skillsByCategory"
          :key="category.title"
          class="glass p-6 transition-all duration-300 hover:-translate-y-2 hover:border-spring-green/50"
        >
          <h3 class="text-xl font-bold mb-4 font-outfit">{{ category.title }}</h3>
          <div class="flex flex-wrap gap-2">
            <SkillBadge v-for="item in category.items" :key="item" :name="item" />
          </div>
        </div>
      </div>
    </section>

    <section class="mb-32">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-2 font-outfit">Work Experience</h2>
        <p class="text-zinc-600 dark:text-zinc-400">Hands-on backend development experience.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="job in experience"
          :key="job.id"
          class="glass p-6 transition-all duration-300 hover:-translate-y-2 hover:border-spring-green/50"
        >
          <h3 class="text-xl font-bold mb-1 font-outfit">{{ job.role }}</h3>
          <div class="text-spring-green font-semibold">{{ job.company }}</div>
          <div class="text-sm text-zinc-600 dark:text-zinc-400 mt-2">{{ job.period }} • {{ job.location }}</div>

          <ul class="mt-4 text-sm text-zinc-700 dark:text-zinc-300 list-disc pl-5 space-y-2">
            <li v-for="point in job.highlights" :key="point">{{ point }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="about" class="mb-32">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-2 font-outfit">About Me</h2>
        <p class="text-zinc-600 dark:text-zinc-400">A quick summary and education background.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="glass p-6 transition-all duration-300 hover:-translate-y-2 hover:border-spring-green/50">
          <h3 class="text-xl font-bold mb-3 font-outfit">Profile</h3>
          <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Backend Developer with a strong interest in designing robust and scalable server-side systems.
            Enjoys solving complex problems, building clean APIs, and ensuring reliable system integration.
            Continuously learning and applying modern backend technologies and architectures, while actively developing skills in Vue.js for frontend integration.
          </p>
        </div>

        <div class="glass p-6 transition-all duration-300 hover:-translate-y-2 hover:border-spring-green/50">
          <h3 class="text-xl font-bold mb-3 font-outfit">Details</h3>
          <div class="space-y-2 text-zinc-700 dark:text-zinc-300">
            <div><span class="font-semibold">Email:</span> {{ profile.email }}</div>
            <div><span class="font-semibold">Phone:</span> {{ profile.phone }}</div>
            <div><span class="font-semibold">Location:</span> {{ profile.location }}</div>
            <div><span class="font-semibold">Nationality:</span> {{ profile.nationality }}</div>
            <div>
              <span class="font-semibold">GitHub:</span>
              <a :href="profile.githubUrl" target="_blank" rel="noreferrer" class="ml-2 text-spring-green hover:underline">{{ profile.githubHandle }}</a>
            </div>
          </div>
        </div>

        <div class="glass p-6 md:col-span-2 transition-all duration-300 hover:-translate-y-2 hover:border-spring-green/50">
          <h3 class="text-xl font-bold mb-3 font-outfit">Education</h3>
          <div class="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <div class="font-semibold">{{ education.degree }} — {{ education.school }}</div>
            <div class="text-zinc-600 dark:text-zinc-400">{{ education.period }} • {{ education.location }}</div>
            <div class="mt-2 text-sm">Relevant coursework: {{ education.coursework }}</div>
          </div>
        </div>
      </div>
    </section>

    <footer id="contact" class="glass text-center py-16 px-8 mb-16">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-4xl font-bold mb-4 font-outfit">Let's build something together</h2>
        <p class="text-zinc-600 dark:text-zinc-400 mb-2">Open to backend roles and internship opportunities.</p>
        <p class="text-zinc-600 dark:text-zinc-400 mb-8">{{ profile.location }} • {{ profile.phone }}</p>
        <a :href="'mailto:' + profile.email" class="inline-flex items-center gap-2 bg-spring-green text-white px-8 py-3 rounded-xl font-semibold hover:-translate-y-1 transition-transform">
          <LucideMail :size="20" /> Get In Touch
        </a>
      </div>
    </footer>
  </main>
</template>

<style scoped>
/* Scoped styles are mostly replaced by Tailwind classes above */
</style>
