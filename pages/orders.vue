<template>
  <div class="container p-4">
    <h1 class="text-[1.5rem] font-bold">Корзина</h1>
    <h2 class="text-[1.25rem] font-bold">Ваш заказ</h2>
    <table>
      <thead>
        <tr>
          <th>Параметры заказа</th>
          <th>Количество</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Описание
          </td>
          <td>
            100
          </td>
          <td>
            3030
          </td>
        </tr>
      </tbody>
    </table>
    <div class="orders-table rounded-2xl overflow-hidden">
      <div class="orders-table-head flex items-center">
        <div class="p-4 text-center">Параметры заказа</div>
        <div class="p-4 text-center">Количество</div>
        <div class="p-4 text-center">Цена</div>
      </div>
      <div class="orders-table-content mt-[-1px]">
        <div class="relative p-4">
          
          <div v-for="orders in getOrdersCustomPrint">
            <div v-for="settings in orders">
              <div v-for="parameter in settings?.attributes?.parameters">
                <div class="flex items-center gap-2 absolute top-4 right-4">
                  <NuxtImg :src="`/icons/copy.svg`" />
                  <NuxtImg :src="`/icons/trash.svg`" />
                </div>
                <p>{{ parameter.title }}: {{ parameter.value }}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          100
        </div>
        <div>
          3090 руб.
        </div>
      </div>
    </div>

  <PlacingAnOrder />
  
  </div>
  
</template>

<script lang="ts" setup>
  import axios from "axios";
  const { data } = await axios.get('http://localhost:1337/api/orders?filters[userID][$eq]=3&populate[custom_print_options][populate]=*', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzE1OTUyNDI5LCJleHAiOjE3MTg1NDQ0Mjl9.CCQvBDxL3LIY6vGW8eA0hkTzKJgE2HyPS4Gnl0s7BPU',
    },
  });
  const getOrdersCustomPrint = ref([data?.data[0]?.attributes?.custom_print_options?.data]);
  data?.data[0]?.attributes?.custom_print_options?.data.forEach((custom_print_options: any) => {
    // console.log(custom_print_options);
    let custom_options = [];
    let temp_parameter = [];

    custom_print_options?.attributes?.parameters?.forEach((parameters: any) => {
      // console.log(parameters);
      
      temp_parameter.push({
        "title": parameters.title,
        "value": parameters.value
      });
      // console.log(temp_parameter);
    })
    custom_options.push({temp_parameter});
    console.log(custom_options);
    
  });
  
</script>

<style>

.orders-table-head, .orders-table-content {
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  border: 1px solid var(--dark-gray);
  background-color: var(--dark-gray);
  grid-gap: 1px;

  & > div {
    background-color: white;
  }
}

.opt-fap-table {
    
}
.orders-table-head {
  background-color: var(--gray);
}
</style>