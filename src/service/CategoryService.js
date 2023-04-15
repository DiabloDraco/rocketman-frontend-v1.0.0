async function getCategory () {
  let res = await api.get('/categories')
  return await res.data.data
}


export {
  getCategory
}
