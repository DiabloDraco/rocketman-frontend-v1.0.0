export async function postUser(
  user: string,
  pass: string
): Promise<void | undefined> {
  const url = 'http://localhost:5002';

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const User = JSON.stringify({
    username: user,
    password: pass,
  });

  await fetch(url + '/login', {
    method: 'POST',
    headers: myHeaders,
    body: User,
  })
    .then((req) => req.json())
    .then((data) => {
      if (data.status == 400) {
        throw new Error('invalid username or password');
      }
      if (data.status == 201) {
        localStorage.setItem('token', data.token);
        window.location.href = '/#/';
      }
    });
}
