<script setup>
import { computed } from 'vue'
import {
  siApachekafka,
  siDocker,
  siJavascript,
  siJsonwebtokens,
  siJunit5,
  siMongodb,
  siMysql,
  siOpenjdk,
  siPostgresql,
  siRabbitmq,
  siRedis,
  siSpring,
  siSpringboot,
  siSpringsecurity,
  siVuedotjs
} from 'simple-icons'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const ICONS_BY_SKILL = {
  Java: siOpenjdk,
  'Spring Boot': siSpringboot,
  'Spring Cloud': siSpring,
  'Spring Security': siSpringsecurity,
  'JWT authentication': siJsonwebtokens,
  'JavaScript': siJavascript,
  'Vue.js': siVuedotjs,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  MongoDB: siMongodb,
  Kafka: siApachekafka,
  Redis: siRedis,
  RabbitMQ: siRabbitmq,
  Docker: siDocker,
  'JUnit 5': siJunit5,
  Mockito: null
}

const normalizedName = computed(() => props.name.replace(/\s*\(.*\)\s*$/, ''))
const icon = computed(() => ICONS_BY_SKILL[normalizedName.value] ?? null)
</script>

<template>
  <span class="inline-flex items-center gap-2 text-xs px-3 py-1 bg-spring-green/10 text-spring-green rounded-full font-semibold">
    <svg v-if="icon" viewBox="0 0 24 24" class="w-4 h-4 shrink-0" aria-hidden="true">
      <path :d="icon.path" fill="currentColor" />
    </svg>
    <span>{{ name }}</span>
  </span>
</template>

<style scoped>
</style>
