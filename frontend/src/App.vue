<script setup>
import { onMounted, ref } from 'vue'
import { LucideGithub, LucideLinkedin, LucideExternalLink, LucideMail, LucideMoon, LucideSun, LucideSend, LucideHeart, LucideMessageCircle } from 'lucide-vue-next'
import ProjectCard from './components/ProjectCard.vue'
import SkillBadge from './components/SkillBadge.vue'
import { downloadCV } from '../storage/storage.js'

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ezedin-ahmed-bb01a02b7', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/ezedincode', icon: 'github' },
  { name: 'Telegram', url: 'https://t.me/ezedinibnahmed', icon: 'telegram' },
  { name: 'Email', url: 'mailto:ezedinadefa@gmail.com', icon: 'mail' }
]

import bookStoreImg from './assets/booksStore1.png'
import gradePilotImg from './assets/gradePilot.png'
import httpServletImg from './assets/httpServlet.svg'
import loadBalancerImg from './assets/loadBalancer.svg'
import ecommerceImg from './assets/ecommerce.svg'

const contactForm = ref({ name: '', email: '', message: '' })
const mailtoHref = ref('')

function buildMailto() {
  const { name, email, message } = contactForm.value
  if (!name || !email || !message) {
    mailtoHref.value = ''
    return
  }
  const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
  mailtoHref.value = `mailto:ezedinadefa@gmail.com?subject=${subject}&body=${body}`
}

const profile = {
  name: 'Ezedin Ahmed',
  title: 'Full Stack Developer',
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
    title: 'Online Bookstore',
    description: 'Full-stack web application with a Vue.js frontend and Spring Boot backend. Features PostgreSQL database, JWT authentication, REST APIs, role-based access control for Admin and User, and Docker containerization for consistent deployment.',
    tags: 'Vue.js, Spring Boot, PostgreSQL, JWT, Docker',
    githubUrl: 'https://github.com/ezedincode/online-book-store',
    imageUrl: bookStoreImg
  },
  {
    id: 2,
    title: 'School Grade Management System',
    description: 'Distributed school management system using Java and Spring Cloud microservices with API Gateway routing, Kafka messaging, automated notifications, and Swagger API documentation.',
    tags: 'Java, Spring Cloud, API Gateway, Kafka',
    githubUrl: 'https://github.com/ezedincode/school-grade-management-system',
    imageUrl: gradePilotImg
  },
  {
    id: 3,
    title: 'HTTP Servlet Server',
    description: 'Lightweight multi-threaded HTTP server built from scratch in Java with a custom request dispatcher, JSON body parsing, and a controller annotation system for concurrent client connections.',
    tags: 'Java, HTTP, Multithreading, JSON',
    githubUrl: 'https://github.com/ezedincode/http-servlet-server',
    imageUrl: httpServletImg
  },
  {
    id: 4,
    title: 'Load Balancer',
    description: 'Java-based load balancer that distributes incoming HTTP traffic across multiple backend servers using algorithms like Round Robin and health monitoring for improved fault tolerance.',
    tags: 'Java, Load Balancing, HTTP, Monitoring',
    githubUrl: 'https://github.com/ezedincode/loadbalancer',
    imageUrl: loadBalancerImg
  },
  {
    id: 5,
    title: 'E-commerce Microservices',
    description: 'Microservices-based e-commerce system built with Spring Boot, separate services for core functions, service discovery, and an API Gateway via Spring Cloud for a scalable architecture.',
    tags: 'Spring Boot, Microservices, Spring Cloud, Discovery',
    githubUrl: 'https://github.com/ezedincode/ecommerce-microservice',
    imageUrl: ecommerceImg
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
    title: 'Languages',
    items: ['Java', 'JavaScript', 'HTML/CSS']
  },
  {
    title: 'Backend',
    items: ['Spring Boot', 'Spring Cloud', 'Spring Security', 'REST APIs']
  },
  {
    title: 'Frontend',
    items: ['Vue.js', 'Tailwind CSS', 'Vite']
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB']
  },
  {
    title: 'Messaging & Cache',
    items: ['Kafka', 'Redis', 'RabbitMQ']
  },
  {
    title: 'DevOps & Tools',
    items: ['Docker', 'Git', 'Maven']
  },
  {
    title: 'Testing',
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
  <header class="fixed top-0 left-0 right-0 z-1000">
    <nav class="max-w-6xl mx-auto mt-4 px-6 py-3 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-black/8 dark:border-white/10 shadow-sm dark:shadow-none flex items-center justify-between">
      <a href="#" class="text-2xl font-extrabold font-outfit tracking-tight">EA<span class="text-spring-green">.</span>dev</a>

      <div class="hidden md:flex items-center gap-1">
        <a href="#projects" class="px-4 py-2 rounded-lg text-sm font-medium hover:bg-spring-green/10 hover:text-spring-green transition-all">Projects</a>
        <a href="#skills" class="px-4 py-2 rounded-lg text-sm font-medium hover:bg-spring-green/10 hover:text-spring-green transition-all">Skills</a>
        <a href="#about" class="px-4 py-2 rounded-lg text-sm font-medium hover:bg-spring-green/10 hover:text-spring-green transition-all">About</a>
        <a href="#contact" class="px-4 py-2 rounded-lg text-sm font-medium hover:bg-spring-green/10 hover:text-spring-green transition-all">Contact</a>
      </div>

      <div class="flex items-center gap-3">
        <div class="hidden md:flex items-center gap-2">
          <a v-for="s in socials" :key="s.name" :href="s.url" :target="s.icon === 'mail' ? '_self' : '_blank'" rel="noreferrer" :title="s.name" class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-spring-green hover:bg-spring-green/10 transition-all">
            <LucideLinkedin v-if="s.icon === 'linkedin'" :size="16" />
            <LucideGithub v-else-if="s.icon === 'github'" :size="16" />
            <LucideMessageCircle v-else-if="s.icon === 'telegram'" :size="16" />
            <LucideMail v-else-if="s.icon === 'mail'" :size="16" />
          </a>
        </div>
        <a href="#contact" class="hidden md:inline-flex items-center gap-2 bg-spring-green hover:bg-spring-green/90 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-transform hover:-translate-y-0.5">
          <LucideMail :size="15" /> Hire Me
        </a>
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 backdrop-blur-xl transition-colors w-10 h-10"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to night mode'"
          :title="isDark ? 'Light mode' : 'Night mode'"
          @click="toggleTheme"
        >
          <LucideSun v-if="isDark" :size="16" />
          <LucideMoon v-else :size="16" />
        </button>
      </div>
    </nav>
  </header>

  <main class="container mx-auto px-6">
    <section class="pt-28 pb-24 text-center">
      <div class="inline-block px-4 py-2 bg-spring-green/10 text-spring-green rounded-full text-sm font-semibold mb-6 border border-spring-green/20">
        Available for Opportunities
      </div>
      <p class="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 mb-3 font-semibold">Hi, I'm</p>
      <h1 class="text-3xl md:text-5xl font-bold mb-2 leading-tight font-outfit">
        {{ profile.name }}<span class="text-spring-green">.</span>
      </h1>
      <div class="text-lg font-semibold text-spring-green mb-4">{{ profile.title }} — Spring Boot & Vue.js</div>
      <p class="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        I like building things that work well behind the scenes — APIs, microservices,
        the stuff that keeps apps running smooth. I also enjoy putting together clean UIs
        with Vue.js. Basically, I'm into the whole journey from database to browser.
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
        <div class="flex gap-5 text-zinc-600 dark:text-zinc-400">
          <a v-for="s in socials" :key="s.name" :href="s.url" :target="s.icon === 'mail' ? '_self' : '_blank'" rel="noreferrer" :title="s.name" class="hover:text-spring-green transition-colors">
            <LucideLinkedin v-if="s.icon === 'linkedin'" :size="22" />
            <LucideGithub v-else-if="s.icon === 'github'" :size="22" />
            <LucideMessageCircle v-else-if="s.icon === 'telegram'" :size="22" />
            <LucideMail v-else-if="s.icon === 'mail'" :size="22" />
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
        <p class="text-zinc-600 dark:text-zinc-400">Technologies I work with across the full stack.</p>
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

    <section id="about" class="mb-32">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-2 font-outfit">About Me</h2>
        <p class="text-zinc-600 dark:text-zinc-400">A quick summary and education background.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="glass p-6 transition-all duration-300 hover:-translate-y-2 hover:border-spring-green/50">
          <h3 class="text-xl font-bold mb-3 font-outfit">Profile</h3>
          <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Full Stack Developer with deep expertise in Spring Boot backend systems and Vue.js frontend applications.
            Passionate about building end-to-end solutions — from designing scalable microservices and RESTful APIs
            to crafting intuitive, responsive user interfaces. Focused on clean architecture, reliable system integration,
            and delivering production-ready applications.
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
        <p class="text-zinc-600 dark:text-zinc-400 mb-2">Open to full stack and backend development opportunities.</p>
        <p class="text-zinc-600 dark:text-zinc-400 mb-8">{{ profile.location }} • {{ profile.phone }}</p>

        <div class="text-left space-y-4 max-w-lg mx-auto">
          <div>
            <label for="contact-name" class="block text-sm font-semibold mb-1">Name</label>
            <input
              id="contact-name"
              v-model="contactForm.name"
              type="text"
              placeholder="Your name"
              class="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl focus:outline-none focus:border-spring-green transition-colors"
              @input="buildMailto"
            />
          </div>
          <div>
            <label for="contact-email" class="block text-sm font-semibold mb-1">Email</label>
            <input
              id="contact-email"
              v-model="contactForm.email"
              type="email"
              placeholder="your@email.com"
              class="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl focus:outline-none focus:border-spring-green transition-colors"
              @input="buildMailto"
            />
          </div>
          <div>
            <label for="contact-message" class="block text-sm font-semibold mb-1">Message</label>
            <textarea
              id="contact-message"
              v-model="contactForm.message"
              rows="4"
              placeholder="Tell me about your project or opportunity..."
              class="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl focus:outline-none focus:border-spring-green transition-colors resize-none"
              @input="buildMailto"
            ></textarea>
          </div>
          <a
            :href="mailtoHref || undefined"
            :class="[
              'inline-flex items-center justify-center gap-2 w-full px-8 py-3 rounded-xl font-semibold transition-all',
              mailtoHref
                ? 'bg-spring-green text-white hover:-translate-y-1 cursor-pointer'
                : 'bg-zinc-300 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 cursor-not-allowed'
            ]"
            :aria-disabled="!mailtoHref"
            @click="!mailtoHref && $event.preventDefault()"
          >
            <LucideSend :size="18" /> Send Message
          </a>
          <p class="text-xs text-center text-zinc-500 dark:text-zinc-400">This will open your default email app with the message pre-filled.</p>
        </div>
      </div>
    </footer>

    <div class="text-center pb-8">
      <div class="flex justify-center gap-5 mb-4 text-zinc-500 dark:text-zinc-400">
        <a v-for="s in socials" :key="s.name" :href="s.url" :target="s.icon === 'mail' ? '_self' : '_blank'" rel="noreferrer" :title="s.name" class="hover:text-spring-green transition-colors">
          <LucideLinkedin v-if="s.icon === 'linkedin'" :size="20" />
          <LucideGithub v-else-if="s.icon === 'github'" :size="20" />
          <LucideMessageCircle v-else-if="s.icon === 'telegram'" :size="20" />
          <LucideMail v-else-if="s.icon === 'mail'" :size="20" />
        </a>
      </div>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 inline-flex items-center gap-1">
        Made with <LucideHeart :size="14" class="text-red-500 fill-red-500" /> &copy; 2026 Ezedin
      </p>
    </div>
  </main>
</template>

<style scoped>
/* Scoped styles are mostly replaced by Tailwind classes above */
</style>
