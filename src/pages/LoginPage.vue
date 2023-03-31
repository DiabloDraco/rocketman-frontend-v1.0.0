<template>
  <div class="login">
    <div class="container">
      <div class="login__wrapper">
        <img src="./../assets/icons/logo.svg" alt="Rocketman Logo" />
        <q-form class="login__inp-wrapper">
          <h2 class="login__header">Kirish</h2>
          <q-input
            class="login__input"
            outlined
            v-model="user"
            label="Login"
            type="text"
            :value="user"
            @:input-name="user = $event.target.value"
          >
          </q-input>
          <q-input
            class="login__input"
            outlined
            v-model="pass"
            label="Parol"
            type="password"
            :value="pass"
            @:input-name="pass = $event.target.value"
          >
          </q-input>
          <q-btn style="color: red" class="login__btn" @click="addUser"
            >Kirish</q-btn
          >
        </q-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { postUser } from '../components/fetch';

if (!window.localStorage.getItem('token')) {
  window.location.href = '/#/login';
}

if (window.localStorage.getItem('token')) {
  window.location.href = '/#/order';
  window.location.reload()
}


export default {
  setup() {
    return {
      user: ref(''),
      pass: ref(''),
    };
  },
  methods: {
    changeInput(e: { target: string }) {
      console.log(e.target.valueOf().toString());
    },
    addUser() {
      postUser(this.user, this.pass);
    },
  },
};
</script>

<style lang="scss">
.login {
  padding-top: 46px;
  .login__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    .login__inp-wrapper {
      margin-top: 42px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      width: 330px;
      padding: 0 31px 35px 39px;
      .login__header {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;
        text-align: center;
        margin-top: 35px;
        margin-bottom: 40px;
      }
      .login__input {
        margin-top: 15px;
        position: relative;
      }

      .login__btn {
        background: #2e3444;
        border-radius: 4px;
        width: 100%;
        margin-top: 30px;
        padding: 17px 0;
      }
      .q-btn__content {
        color: white !important;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #ffffff;
      }
    }
  }
}
.q-field__native::before {
  background-repeat: no-repeat;
  background-image: './../assets/icons/login__user.svg';
}
.q-field__label {
  padding-left: 28px !important;
}
</style>
