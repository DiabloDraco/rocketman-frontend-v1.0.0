import { api } from 'src/boot/axios'


async function getOrder () {
  let res = await api.get('/order')
  console.log(res.data.data);
  return await res.data.data
}

let getOrderFoods = async () => {
  let res = await api.get('/foods')
  console.log(res.data.data);
  return res.data.data
}

export   {
   getOrder,
   getOrderFoods
}
