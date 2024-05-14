<template>
  <li>
    <NuxtLink v-if="url" :to="url" :class="`${size} flex items-center gap-2`">
      <NuxtImg :width="12" v-if="icon_url" :src="`${API_BACKEND_DOMAIN}${icon_url}`" />
      <span>{{ title }}</span>
    </NuxtLink>
    <div v-else class="flex items-center gap-2">
      <NuxtImg v-if="icon_url" :width="12" :src="`${API_BACKEND_DOMAIN}${icon_url}`" />
      <span :class="`${size}`">{{ title }}</span>
    </div>
    
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
    },
    icon_url: {
      type: String
    }
  })
  const config = useRuntimeConfig(),
        API_BACKEND_DOMAIN = config.public.api_base;
</script>

<style scoped>
  a, span {
    @apply font-medium;
  }
  a:hover {
    color: var(--primary);
  }
</style>