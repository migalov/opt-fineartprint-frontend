<template>
  <li>
    <NuxtLink v-if="url" :to="url" :class="`${link_class} flex items-center gap-2`">
      <NuxtImg :width="12" v-if="icon_url" :src="`${API_BACKEND_DOMAIN}${icon_url}`" />
      <span>{{ title }}</span>
    </NuxtLink>
    <div v-else class="flex items-center gap-2">
      <NuxtImg v-if="icon_url" :width="12" :src="`${API_BACKEND_DOMAIN}${icon_url}`" />
      <span :class="`${link_class}`">{{ title }}</span>
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
    link_class: {
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
  a {
    color: inherit;
  }
  a:hover {
    color: var(--primary);
    text-decoration: none;
  }
</style>