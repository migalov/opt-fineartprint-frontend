<template>
  <div class="flex items-center gap-5 relative">
    <input
      class="p-[.55em] rounded-[.55em]"
      :type="type"
      :name="name"
      :id="name"
    >
    <label :for="name" :name="name" :class="`bg-white absolute top-1/2 left-0 -translate-y-1/2 p-1`">{{ title }}</label>
  </div>
  
</template>

<script lang="ts" setup>
  defineProps({
    type: {
      type: String,
      default: "text"
    },
    title: {
      type: String,
      default: "Название поля"
    },
    name: {
      type: String,
      default: "name"
    }
  })
</script>

<style lang="scss" scoped>
  input {
    outline: 2px solid var(--dark-gray);
    &:focus + label {
      @apply top-0
    }
  }
</style>