export async function postUser(
  user: string,
  pass: string
  ): Promise<void | undefined> {
    const url = 'http://64.227.144.105:3000/api/';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const User = JSON.stringify({
      login: user,
      password: pass,
    });

    await fetch(url + 'auth/sign-in', {
      method: 'POST',
      headers: myHeaders,
      body: User,
      redirect: 'follow'
    })
    .then((req) => req.json())
    .then((data) => {
      try {
        const t = data;
        const tkn = t.token;

        console.log(t)

        if (tkn == undefined) {
          throw new Error('wrong username or password');
        }

        if (!t) {
          throw new Error(t.error);
        }

        setTimeout(() => {
          window.location.href = '/#/order';
        }, 1000);

        localStorage.setItem('token', t.token);
      } catch (error) {
        if(error instanceof Error){
          throw Error(error.message)
        }
      }
    });
  }
