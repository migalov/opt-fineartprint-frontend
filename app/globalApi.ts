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


// Шапка
export async function getHeaderData() {
    return await axiosClient.get(`/navigations?${qs.stringify(queryNavigationsHeaderObject)}`).then(resp => {
        console.log(flattenAttributes(resp?.data?.data));
        return flattenAttributes(resp?.data?.data)
    })
}


// Подвал
export async function getFooterData() {
  return await axiosClient.get(`/navigations?${qs.stringify(queryNavigationsFooterObject)}`).then(resp => {
      console.log(flattenAttributes(resp?.data?.data));
      return flattenAttributes(resp?.data?.data)
  })
}


// Регистрация пользователя
export async function registerUserService() {
  const url = new URL("/api/auth/local/register", API_URL);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "Guest 1",
        password: "123123123",
        email: "guest1@mail.ru",
      }),
      cache: "no-cache",
    });


    return response.json();
  } catch (error) {
    console.error("Registration Service Error:", error);
  }
}

// Изменение компании авторизованного пользователя
export async function putCompany(id: string) {
  return await axiosClient.put(`/companies/${id}`, {
    data: {
      title: "ООО Изменения",
      bankIdentificationCode: 11111111,
      individualTaxpayerNumber: 1111,
      codeReason: 111,
      checkingAccount: 111,
      correspondentAccount: 111,
      userID: id
    }
  }).then(response => {
    console.log(response);
  });
}

// Создание кампании авторизованного пользователя
export async function postCompany() {
  return await axiosClient.post(`/companies/`, {
    data: {
      title: "Фантики",
      bankIdentificationCode: 33333333,
      individualTaxpayerNumber: 943432,
      codeReason: 3244444,
      checkingAccount: 3344432,
      correspondentAccount: 435555,
    }
  }).then(response => {
    console.log(response);
  });
}

// Оформление заказа на имя выбранной компании
export async function postOrder() {
  return await axiosClient.post(`/orders`, {
    data: {
      status: "В производстве",
      userID: "6",
      typeDelivery: "Доставка",
      city: "Москва",
      house: "2",
      partHouse: "1",
      street: "ул. Зорге",
      comment: "Срочно приезжайте",
      company: {
        connect: [1]
      }
    }
  }).then(response => {
    console.log(response);
  });
}

export async function getOrdersUser(id: string) {
  return await axiosClient.get(`/orders?filters[id]=${id}`).then(resp => {
      console.log(flattenAttributes(resp?.data?.data));
      return flattenAttributes(resp?.data?.data)
  })
}