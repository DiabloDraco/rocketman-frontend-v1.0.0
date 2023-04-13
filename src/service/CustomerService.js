import { api } from "src/boot/axios"
import { getOrder } from "./OrderService"


async function getCustomer () {
  let res = await api.get('/customers')
  let orders = await getOrder()
  res.data.data.map((e)=>{
  return  e.count = orders.filter((ele)=>e?.id == ele?.customer?.id).length
  })
  return await res.data.data
}

export   {
  getCustomer
}