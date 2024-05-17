import axios from "axios";

// export default defineEventHandler(async (event) => {
//   return 'Hello Nitro'
// })

export default defineEventHandler(async (event) => {
  return await axios.get('http://localhost:1337/api/orders?filters[userID][$eq]=3&populate[custom_print_options][populate]=*', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzE1OTUyNDI5LCJleHAiOjE3MTg1NDQ0Mjl9.CCQvBDxL3LIY6vGW8eA0hkTzKJgE2HyPS4Gnl0s7BPU',
      },
    })
})