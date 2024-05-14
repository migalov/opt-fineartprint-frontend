<template>
  <header class="optfap-header">
    <div class="container optfap-header-wrap bg-amber-100 p-4">
      <div class="optfap-desktop-menus flex bg-amber-300">
        <Logo />
        <div class="gap-1 sm:gap-3 md:gap-[.5rem]">
          <NavigationsMini size="text-xs" class="bg-sky-200" :data-grid-area="1" />
          <NavigationsMini size="text-xs" class="lg:justify-end bg-sky-300" :data-grid-area="2" />
          <NavigationsMini size="text-xs" class="bg-sky-400" :data-grid-area="3" />
        </div>
      </div>
      <NavigationsMini size="text-sm" class="bg-sky-400" :data-grid-area="4" />
    </div>
    
  </header>
</template>

<script lang="ts" setup>
  // import { useAsyncData } from 'nuxt/app';
  // import qs from 'qs';
  // const { data } = useAsyncData('data', async () => {
  //   const response = await fetch('http://localhost:1337/api/navigations?filters[id][$in][0]=1&filters[id][$in][1]=2&fields[0]=slug&populate[items][fields][0]=title&populate[items][fields][1]=url');
  //   return response.json()
  // })
  // const queryObjectNavigations = {
  //   filters: {
  //     id: {
  //       $in: ['main'],
  //     }
  //   },
  //   fields: ['slug'],
  //   populate: {
  //     items: {
  //       fields: ['title', 'url']
  //     }
  //   }
  // }

</script>

<style lang="scss">



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