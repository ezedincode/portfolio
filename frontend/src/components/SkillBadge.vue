<script setup>
defineProps({
  name: String,
  icon: String
})
</script>

<template>
  <div class="glass px-6 py-3 flex items-center justify-center transition-all duration-200 hover:bg-spring-green/10 hover:border-spring-green/50 hover:scale-105 cursor-default">
    <span class="font-medium text-sm">{{ name }}</span>
  </div>
</template>

<style scoped>
</style>
