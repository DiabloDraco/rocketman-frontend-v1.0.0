import { api } from 'src/boot/axios';

async function getCategory () {
  let res = await api.get('/categories')
  console.log(res.data.data);
  return await res.data.data
}


export {
  getCategory
}
