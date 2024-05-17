<template>
  <div>
    <form class="flex flex-col gap-5 p-5">
      <FormInput
        title="Имя"
        name="firstName"
      />
      <FormInput
        title="Фамилия"
        name="lastName"
      />
      <FormInput
        title="Телефон"
        name="phone"
      />
      <FormInput
        title="E-mail"
        name="firstName"
        type="email"
      />
      <FormInput
        title="Название компании"
        name="company"
      />
      <FormInput
        title="Пароль"
        name="password"
        type="password"
      />
      <FormInput
        title="Подтвердите пароль"
        name="retryPassword"
        type="password"
      />
    </form>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
</style>