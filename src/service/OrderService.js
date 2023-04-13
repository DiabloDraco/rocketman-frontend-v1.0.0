import { api } from "src/boot/axios"


async function getOrder () {
  let res = await api.get('/order')
  return await res.data.data
}

export   {
   getOrder
}