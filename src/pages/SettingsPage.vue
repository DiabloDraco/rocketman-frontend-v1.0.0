<template>
  <LayoutHi>
    <section class="setting">
      <div class="setting__wrapper">
        <ul class="setting__list">
          <li class="setting__item">
            <router-link class="settngs__item-link" to="/settings/users"
              >Users</router-link
            >
          </li>
          <li class="setting__item">
            <router-link class="settngs__item-link" to="/settings/drivers"
              >Drivers</router-link
            >
          </li>
          <li class="setting__item">
            <router-link class="settngs__item-link" to="/settings/info"
              >Infos</router-link
            >
          </li>
          <li class="setting__item">
            <router-link class="settngs__item-link" to="/settings/payment"
              >Payment</router-link
            >
          </li>
        </ul>
      </div>
    </section>
    <router-view></router-view>
  </LayoutHi>
</template>

<script setup>
import LayoutHi from 'src/layouts/layoutHi.vue';
if(window.location.href == '/#/settings'){
  window.location.href = '/#/settings/users';
}
window.location.href = '/#/settings/users';
</script>

<style scoped lang="scss">
.setting {
  &__wrapper {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    .setting__list {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 150px;
      max-width: 340px;
      display: flex;
    }
    .setting__item {
      .settngs__item-link {
        border-radius: 150px;
        width: 82px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: black;
      }
      .router-link-active {
        background-color: #2e3444;
        color: #ffffff;
      }
    }
  }
}
</style>
