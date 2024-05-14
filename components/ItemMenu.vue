<template>
  <li>
    <NuxtLink v-if="url" :to="url" :class="`${size}`">{{ title }}</NuxtLink>
    <span v-else :class="`${size}`">{{ title }}</span>
  </li>
  
</template>

<script lang="ts" setup>
  defineProps({
    title: {
      type: String
    },
    url: {
      type: String
    },
    size: {
      type: String
    }
  })
</script>

<style scoped>
  a, span {
    @apply font-medium;
  }
  a:hover {
    color: var(--primary);
  }
</style>