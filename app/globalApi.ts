import axios from "axios";
import qs from "qs";
import { flattenAttributes } from "./lib/utils";

const API_URL = process.env.NEXT_PUBLIC_DOMAIN_BACKEND;

const axiosClient = axios.create({
    baseURL: `${API_URL}/api`
});

const queryNavigationsHeaderObject = {
    filters: {
        id: {
            $eq: [1, 2, 3, 6],
        },
    },
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

  const queryNavigationsFooterObject = {
    filters: {
        id: {
            $eq: [4, 5],
        },
    },
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

const getCalculation = () => axiosClient.get(`/calculators/1?populate[parameters][populate][inputs]=*`);
// const getDataHeader = () => axiosClient.get(`/navigations?${qs.stringify(queryNavigationsObject)}`);

export default {
    getCalculation,
    // getDataHeader
}

export async function getHeaderData() {
    return await axiosClient.get(`/navigations?${qs.stringify(queryNavigationsHeaderObject)}`).then(resp => {
        console.log(flattenAttributes(resp?.data?.data));
        return flattenAttributes(resp?.data?.data)
    })
}

export async function getFooterData() {
  return await axiosClient.get(`/navigations?${qs.stringify(queryNavigationsFooterObject)}`).then(resp => {
      console.log(flattenAttributes(resp?.data?.data));
      return flattenAttributes(resp?.data?.data)
  })
}