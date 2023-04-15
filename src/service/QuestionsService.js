import { api } from 'src/boot/axios';

let getQuestions = async() => {
  let res = await api.get('/questions')
  return res.data.data
}


export {
  getQuestions
}
