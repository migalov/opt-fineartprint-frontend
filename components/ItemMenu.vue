<template>
  <li>
    <NuxtLink v-if="url" :to="url">{{ title }}</NuxtLink>
    <span v-else>{{ title }}</span>
  </li>
  
</template>

<script lang="ts" setup>
  defineProps({
    title: {
      type: String
    },
    url: {
      type: String
    }
  })
</script>

<style scoped>
  a:hover {
    color: var(--primary);
  }
</style>