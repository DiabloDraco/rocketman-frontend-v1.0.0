<script lang="ts" setup>
// import { ref } from 'vue';
import Aside__item from './aside__item/aside__item.vue';

// function setup() {
//   return {
//     search: ref(''),
//   };
// }
function exit() {
  window.localStorage.removeItem('token');
  window.location.href = '/#/login';
}
</script>

<template>
  <aside class="aside" style="background-color: #2e3444">
    <div class="aside__wrapper">
      <div class="aside__top-wrapper">
        <div class="aside__img-wrapper">
          <a href="/">
            <img
              src="../../assets/icons/rocketman__logo.svg"
              width="161"
              height="32.5"
              alt="Rocketman Logo"
              class="aside__img"
            />
          </a>
        </div>
        <ul class="aside__list">
          <Aside__item
            image="/src/assets/icons/aside__order.svg"
            header="Buyurtmalar"
            link="/Order"
            active="aside__item-active"
          />
          <Aside__item
            image="/src/assets/icons/aside__customer.svg"
            header="Mijozlar"
            link="/customer"
            active="aside__item-active"
          />
          <Aside__item
            image="/src/assets/icons/aside__products.svg"
            header="Mahsulotlar"
            link="/products"
            active="aside__item-active"
          />
          <Aside__item
            image="/src/assets/icons/aside__suggestions.svg"
            header="Takliflar"
            link="/suggestions"
            active="aside__item-active"
          />
        </ul>
      </div>
      <ul class="aside__list">
        <Aside__item
          image="/src/assets/icons/aside__settings.svg"
          header="Sozlamalar"
          link="/settings"
        />
      </ul>
    </div>
    <div class="aside__top">
      <div class="aside__top-wrapper">
        <q-input
          model-value=""
          prepend
          rounded
          shadow-text=".............................."
          outlined
          class="white"
          bg-color="white"
          type="text"
          label="Mijozni qidiring"
          input-style="width: 500px;"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <div class="aside__top-r">
          <div class="aside__top-img-wrapper">
            <img
              class="aside__top-img"
              src="../../assets/icons/profile__img.svg"
              width="15"
              height="19"
            />
          </div>
          <details class="detailss">
            <summary>John Doe</summary>
            <div class="details__wrapper">
              <button @click="exit" class="aside__btn">Log Out</button>
            </div>
          </details>
        </div>
      </div>
    </div>
  </aside>
</template>

<style lang="scss">
.aside__top-r {
  margin-right: 20px;
  max-width: 117px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 9px;
  color: white;
}

.detailss {
  position: relative;
  button {
    position: absolute;
  }
}
.aside {
  display: flex;
  .aside__top {
    padding: 15px 0;
    padding-left: 253px;
    background-color: rgb(46, 52, 68);
    width: 100%;
    .aside__top-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .aside__top-r {
        transition: all 0.4s ease;
        margin-right: 30px;
        display: flex;
        align-items: center;
        gap: 9px;
        summary {
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 15px;
          color: #ffffff;
        }
      }
      .aside__top-img-wrapper {
        background: #eaeaea;
        display: flex;
        border-radius: 50%;
        align-items: center;
        width: 35px;
        height: 35px;
        padding: 8px 10px;
        img {
        }
      }

      .aside__btn {
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        padding: 5px 14px;
        width: 100%;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 5px;
      }
    }
  }

  .aside__wrapper {
    position: absolute;
    background-color: rgb(46, 52, 68);
    left: 0;
    top: 0;
    bottom: 0;
    max-width: 224px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .aside__img-wrapper {
      padding: 25.3px 33px 23px 30px;
      box-shadow: inset -1px -1px 0px #303030;
    }
    .aside__list {
      margin: 0;
      padding: 0;
      padding-top: 20px;
    }
  }
}
</style>
