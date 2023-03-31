export async function postUser(
  user: string,
  pass: string
): Promise<void | undefined> {
  const url = 'https://reqres.in';
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const User = JSON.stringify({
    username: user,
    password: pass,
  });

  await fetch(url + '/api/login', {
    method: 'POST',
    headers: myHeaders,
    body: User,
  })
    .then((req) => req.json())
    .then((data) => {
      const t = data;
      const tkn = t.token;

      if (tkn == undefined) {
        throw new Error('wrong username or password');
      }

      if (!t) {
        throw new Error(t.error);
      }


      setTimeout(() => {
        window.location.href = '/#/order';
      }, 1000);

      console.log(t.token);

      localStorage.setItem('token', t.token);
    });
}
