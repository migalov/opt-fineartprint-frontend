<template>
  <nav>
    <ul :class="`${ul_class}`">
      <ItemMenu v-for="item in items"
        :icon_url="item?.icon?.data?.attributes?.url"
        :url="item.custom_url"
        :title="item.title"
        :link_class="link_class"
      />
    </ul>
  </nav>
</template>

<script lang="ts" setup>
  defineProps({
    id: {
      type: String
    },
    size: {
      type: String
    },
    icon_url: {
      type: String
    },
    ul_class: {
      type: String
    },
    link_class: {
      type: String
    },
    items: {
      type: Array,
      default: [
        {
          "url": "/1",
          "title": "Пункт меню 1"
        },
        {
          "url": "/2",
          "title": "Пункт sменю 2"
        },
        {
          "url": "",
          "title": "Пункт меню 3"
        }
      ]
    },
    position: {
      type: Array
    }
  })
</script>

<style scoped>

</style>