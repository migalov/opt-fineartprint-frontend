  import { useAsyncData } from 'nuxt/app';
  import qs from 'qs';

  const getNavigationData = (id) => {
        const { data } = useAsyncData('data', async () => {
        const response = await fetch(`http://localhost:1337/api/navigations?${qs.stringify(queryObjectNavigations)}`);
        return response.json()
    })
    const queryObjectNavigations = {
        filters: {
            id: {
                $eq: id,
            },
        },
        fields: ['title','slug'],
        populate: {
            items: {
                fields: ['title', 'url']
            }
        }
    }
  }

  export default getNavigationData;

  