<script lang="ts" setup>
import Aside__item from './aside__item/aside__item.vue';

let history = '';
window.location.pathname;
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
        <slot name="Toxirrrr"></slot>
      </ul>
    </div>
    <div class="aside__top">
      <q-input
        model-value=""
        prepend
        rounded
        shadow-text="......................................................"
        outlined
        icon="warning"
        class="white"
        bg-color="white"
        type="text"
        label="Mijozni qidiring"
      >
        <template v-slot:append>
          <q-icon name="search"  />
        </template>
      </q-input>
    </div>
  </aside>
  <div></div>
</template>

<style lang="scss">
.aside {
  display: flex;
  .aside__top {
    padding: 15px 0;
    padding-left: 253px;
    background-color: rgb(46, 52, 68);
  }

  .aside__wrapper {
    position: fixed;
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
