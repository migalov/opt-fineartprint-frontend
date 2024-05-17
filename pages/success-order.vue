<template>
  <div class="container p-4">
      <TypographyH1>Спасибо за ваш заказ № {{ order }}</TypographyH1>
      <p>Счёт придёт вам на почту<br />после оплаты заказ пойдёт в работу</p>
      <p class="font-bold">Статус заказа можно увидеть в <a href="/personal">кабинете</a></p>
      <p class="font-bold">Уведомление о готовности заказа придёт вам на почту </p>
      <div class="mt-7 flex flex-col gap-4">
        <TypographyH2>Ваш персональный менеджер</TypographyH2>
        <div class="flex gap-4">
          <NuxtImg :width="114" :height="114" :src="`/photos/avatar-manager-bg.png`" />
          <div class="flex flex-col justify-between">
            <h3 class="font-bold">Дмитрий Кумченко</h3>
            <div class="">
              <p><a href="+74952150877">+7 (495) 215-08-77</a> доб. 110</p>
              <p><a href="mailto:d.kumchenko@fineart-print.ru">d.kumchenko@fineart-print.ru</a></p>
            </div>
            <a class="btn block w-[224px] py-[.5em] text-center rounded-[15px] font-medium" href="https://wa.me/+74952150877">Написать в WhatsApp</a>
          </div>
        </div>
        
      </div>
  </div>

</template>

<script lang="ts" setup>
  defineProps({
    order: {
      type: String,
      default: "0001"
    }
  })
</script>

<style>
  .btn {
    background-color: var(--primary);
    color: var(--black);
    &:hover {
      color: var(--white);
      text-decoration: none;
    }
  }
</style>