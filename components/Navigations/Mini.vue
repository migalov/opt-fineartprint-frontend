<template>
  <nav :class="position == `right` && `right`" :data-grid-area="id">
    <ul>
      <ItemMenu v-for="item in items"
        :url="item.url"
        :title="item.title"
        :size="size"
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
          "title": "Пункт меню 2"
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
  .right {
    display: flex;
    justify-content: end;
  }
  ul {
    display: flex;
    justify-content: center;
    gap: 1em
  }
</style>