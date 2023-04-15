import { api } from 'src/boot/axios';

async function getUser({ token }) {
  let res = await api.get('/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res.data.data);
  return res.data.data
}
async function deleteUser({ token }, id) {
  let res = await api.delete('/users/' + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res.data.data);
  return res.data.data
}

export { getUser, deleteUser };
