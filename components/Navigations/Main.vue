<template>
  <nav>
    <ul>
      <ItemMenu v-for="item in items"
        :url="item.url"
        :title="item.title"
      />
    </ul>
  </nav>
</template>

<script lang="ts" setup>
  defineProps({
    items: {
      type: Array,
      default: [
        {
          "url": "/1",
          "title": "Главный Пункт меню 1"
        },
        {
          "url": "/2",
          "title": "Главный Пункт меню 2"
        },
        {
          "url": "/3",
          "title": "Главный Пункт меню 3"
        }
      ]
    }
  })
</script>

<style scoped>
  ul {
    display: flex;
    justify-content: center;
    gap: 1em
  }
</style>