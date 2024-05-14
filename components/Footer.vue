<template>
  <footer class="optfap-footer">
    <div class="optfap-footer-wrap container grid gap-[1rem] p-4">
      <div class="flex flex-col gap-4" data-grid-area="social">
        <h4 class="text-sm font-medium hidden md:block">Мы в социальных сетях</h4>
        <ul class="flex items-center gap-2">
          <li>
            <a href="vk.com">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.6274" cy="12.6274" r="12.6274" fill="black"/>
                <path d="M4 8.67743C4 8.67743 4.18897 8.48388 4.37794 8.3871C4.37794 8.3871 4.56691 8.3871 4.6614 8.3871C5.41728 8.3871 6.17316 8.48388 6.92904 8.3871C7.30698 8.3871 7.49595 8.58065 7.68492 8.87098C7.87389 9.35486 8.15735 9.83873 8.34632 10.3226C8.72426 11 9.1022 11.7742 9.57463 12.3549C9.66911 12.5484 9.85808 12.6452 9.95257 12.742C10.236 12.9356 10.425 12.8388 10.614 12.5484C10.614 12.3549 10.7084 12.0646 10.8029 11.871C10.8029 11.0968 10.8029 10.2258 10.8029 9.45163C10.8029 9.06453 10.5195 8.7742 10.0471 8.67743C9.7636 8.67743 9.7636 8.58065 9.95257 8.29033C10.1415 8.09678 10.425 8 10.7084 8H13.4485C13.4485 8 14.1099 8.29033 14.1099 8.87098C14.1099 9.93551 14.1099 10.9033 14.1099 11.9678C14.1099 12.1613 14.1099 12.2581 14.1099 12.4517C14.1099 12.4517 14.1099 12.6452 14.2044 12.742C14.3934 12.9356 14.5823 13.0323 14.7713 12.742C14.9603 12.5484 15.1493 12.3549 15.2437 12.1613C15.9996 11.1936 16.5665 10.0323 17.039 8.96776C17.039 8.96776 17.039 8.7742 17.1334 8.67743C17.1334 8.48388 17.4169 8.3871 17.6059 8.29033H20.3459C20.3459 8.29033 20.6294 8.29033 20.8184 8.29033C21.1018 8.29033 21.1963 8.58065 21.1018 8.87098C21.0073 9.35486 20.8184 9.74196 20.5349 10.1291C19.8735 11 19.3066 11.871 18.6452 12.8388C18.5507 13.0323 18.4562 13.1291 18.3617 13.3227C18.2673 13.613 18.2673 13.8065 18.3617 14.0001C18.4562 14.1936 18.5507 14.2904 18.7397 14.3872C19.2121 14.8711 19.779 15.4517 20.2515 15.9356C20.5349 16.2259 20.7239 16.5162 20.9128 16.9033C20.9128 17.0001 21.0073 17.1937 21.0073 17.2904C21.0073 17.6776 20.8184 17.9679 20.4404 17.9679H17.7948C17.2279 17.9679 16.7555 17.6776 16.3776 17.1937C15.9996 16.8066 15.6217 16.4195 15.2437 15.9356C15.2437 15.8388 15.0548 15.742 14.9603 15.6453C14.5823 15.4517 14.2989 15.4517 14.1099 15.8388C14.0154 16.1291 13.9209 16.4195 13.8265 16.8066C13.8265 16.9033 13.8265 17.0969 13.8265 17.2904C13.8265 17.6776 13.6375 17.8711 13.2595 17.8711C11.6533 17.9679 10.236 17.6776 8.91323 16.8066C8.06286 16.2259 7.49595 15.4517 6.83456 14.6775C6.07867 13.2259 5.13382 11.3871 4.28346 9.54841C4.28346 9.35486 4.09449 9.06453 4 8.87098V8.67743Z" fill="white"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="tg.me">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.8823" cy="12.6274" r="12.6274" fill="black"/>
                <path d="M19.3885 5.23327C18.6712 4.75117 17.7147 5.15292 17.4756 5.23327L4.244 10.9381C3.52663 11.1792 2.88896 11.822 2.96867 12.7058C3.04838 13.5093 3.68604 13.9914 4.244 14.2325L7.1932 15.277C7.43233 16.7233 7.91057 19.4552 8.06999 20.0177C8.30911 20.7408 8.38882 20.9015 8.38882 20.9015C8.62795 21.0622 8.94678 21.2229 9.26561 21.1426L13.0119 19.4552L15.0046 21.1426C15.0046 21.1426 15.6423 21.3836 15.9611 21.3836C16.2799 21.3836 16.4393 21.3836 16.5988 21.2229C17.3161 20.9015 17.635 20.1784 17.7147 19.857L20.1059 6.75992V6.59922C20.1059 6.03677 19.8668 5.55467 19.4683 5.23327H19.3885ZM15.722 18.9731L10.6206 14.7146C12.5336 12.7862 15.4828 9.89357 15.722 9.73287C15.9611 9.49182 15.8814 9.41147 15.8814 9.41147C15.8814 9.09007 15.4031 9.41147 15.4031 9.41147L8.38882 13.5093H8.22941L5.75845 12.5451L17.7944 7.48307L15.722 19.0535V18.9731Z" fill="white"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <Navigation
        class="flex items-center"
        ul_class="gap-1 sm:gap-4 flex flex-col sm:flex-row"
        link_class="font-medium"
        data-grid-area="main_menu"
        :items="data?.data[3]?.attributes?.items"
      />
      <div data-grid-area="contacts">
        <h4 class="text-sm font-medium d-none">Контакты</h4>
        <ul>
          <li>График работы: 10:00 - 18:00 ПН-ПТ</li>
          <li><a href="tel:+74952510877">+7 (495) 251-08-77</a></li>
          <li><a href="mailto:info@fineart-print.ru">info@fineart-print.ru</a></li>
          <li><a href="#">Москsва, ул. Зорге 15, к. 1</a></li>
        </ul>
      </div>
      <Navigation
        class="flex items-center justify-between"
        ul_class="flex flex-1 flex-col gap-[.5em] sm:flex-row justify-between gap-4"
        link_class="font-normal text-black opacity-50 hover:opacity-100"
        data-grid-area="bottom_menu"
        :items="data?.data[4]?.attributes?.items"
      />
    </div>
  </footer>
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

<style lang="scss" scoped>
  @import "~/assets/styles/mixins/breakpoints.scss";

  .optfap-footer {
    background-color: var(--gray);

    & a:hover svg :is(circle) {
      stroke: var(--primary);
      fill: var(--primary);
    }
  }

  .optfap-footer-wrap {
    grid-template-areas: "main_menu" "social" "contacts" "bottom_menu";
    @include sm {
      grid-template-areas: "main_menu main_menu" "contacts social" "bottom_menu bottom_menu";
    }
  }
  [data-grid-area=main_menu] {
    grid-area: main_menu;
  }
  [data-grid-area=social] {
    grid-area: social;
  }
  [data-grid-area=contacts] {
    grid-area: contacts;
  }
  [data-grid-area=bottom_menu] {
    grid-area: bottom_menu;
  }
</style>