export function postUser(User: BodyInit) {
  fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: {
      User,
    },
  })
    .then((data) => JSON.stringify(data))
    .then((json) => console.log(json));
}
