import { api } from 'src/boot/axios';

async function getFoods() {
  let res = api.get('/foods')
  return res.data.data
}


export {
  getFoods
}
