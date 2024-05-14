<template>
  <header class="optfap-header">
    <div class="container flex flex-col gap-4 p-4">
      <div class="optfap-desktop-menus flex gap-4 sm:gap-7 md:gap-10">
        <Logo />
        <div class="gap-1 sm:gap-3 md:gap-[.5rem]">
          <Navigation :ul_class="`gap-4`" :items="data?.data[1]?.attributes?.items" size="text-xs" class="flex" :data-grid-area="1" />
          <Navigation :ul_class="`gap-4`" :items="data?.data[2]?.attributes?.items" size="text-xs" class="flex sm:justify-end" :data-grid-area="2" />
          <Navigation :ul_class="`gap-4`" :items="data?.data[5]?.attributes?.items" size="text-xs" class="flex sm:justify-end" :data-grid-area="3" />
        </div>
      </div>
      <Navigation :ul_class="`sm:gap-6 md:gap-8 lg:gap-10`" :items="data?.data[0]?.attributes?.items" size="text-sm" class="" :data-grid-area="4" />
    </div>
  </header>
</template>

<script lang="ts" setup>
  import { useAsyncData } from 'nuxt/app';
  import qs from 'qs';

  const config = useRuntimeConfig(),
        API_BACKEND_DOMAIN = config.public.api_base;

  const queryNavigationsObject = {
    populate: {
      items: {
        populate: {
          icon: {
            fields: ['url']
          }
        }
      },
    }
  };
  
  const { data } = useAsyncData('data', async () => {
    const response = await fetch(`${API_BACKEND_DOMAIN}/api/navigations?${qs.stringify(queryNavigationsObject)}`);
    return response.json()
  })

</script>

<style lang="scss">

  .optfap-header {
    border-bottom: 1px solid var(--gray);
  }

  .optfap-desktop-menus {
    @import "~/assets/styles/mixins/breakpoints.scss";
    & > div {
      flex: 1;
      display: grid;
      grid-template-areas: "area-1" "area-2" "area-3";
      & > [data-grid-area="1"] {
        grid-area: area-1;
      }
      & > [data-grid-area="2"] {
        grid-area: area-2;
        & > ul {
          display: flex;
          justify-content: end;
        }
      }
      & > [data-grid-area="3"] {
        grid-area: area-3;
      }

      @include md {
        grid-template-areas: "area-1 area-2" "area-3 area-3";
      }
      
    }

  }
</style>