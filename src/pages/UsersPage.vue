<template>
  <section class="user">
    <div class="user__wrapper">
      <h2 class="user__header text-h6">Available users</h2>

      <ul class="user__list">
        <li class="user__item q-pa-none">
          <div class="user__item-text">
            <p class="user__item-id">1.   </p>
            <p class="user__item-header text-h6">Toxir Turayev</p>
          </div>
          <div class="user__item-btn-wrapper flex no-wrap">
            <q-icon
              name="edit"
              class="lg"
              size="xs"
              color="white"
              style="padding: 10px 8.5px; border-radius: 50%"
            />
            <q-icon
              name="delete"
              class="bg-red-14"
              size="xs"
              color="white"
              style="padding: 10px 8.5px; border-radius: 50%"
            />
          </div>
        </li>
        <li class="user__item q-pa-none">
          <div class="user__item-text">
            <p class="user__item-id">1.   </p>
            <p class="user__item-header text-h6">Toxir Turayev</p>
          </div>
          <div class="user__item-btn-wrapper flex no-wrap">
            <q-icon
              name="edit"
              class="lg"
              size="xs"
              color="white"
              style="padding: 10px 8.5px; border-radius: 50%"
            />
            <q-icon
              name="delete"
              class="bg-red-14"
              size="xs"
              color="white"
              style="padding: 10px 8.5px; border-radius: 50%"
            />
          </div>
        </li>
        <li class="user__item q-pa-none">
          <div class="user__item-text">
            <p class="user__item-id">1.   </p>
            <p class="user__item-header text-h6">Toxir Turayev</p>
          </div>
          <div class="user__item-btn-wrapper flex no-wrap">
            <q-icon
              name="edit"
              class="lg"
              size="xs"
              color="white"
              style="padding: 10px 8.5px; border-radius: 50%"
            />
            <q-icon
              name="delete"
              class="bg-red-14"
              size="xs"
              color="white"
              style="padding: 10px 8.5px; border-radius: 50%"
            />
          </div>
        </li>
      </ul>

      <q-btn flat class="bg-green-12  text-lowercase"> Qo’shish </q-btn>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.user {
  .user__wrapper {
    .user__header {
    }
    .user__list {
      max-width: 426px;
      width: 100%;
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      padding: 15px 20px;
      gap: 18px;
      .user__item {
        display: flex;
        justify-content: space-between;
      }
      .user__item-text {
        align-items: center;
        display: flex;
      }
      .user__item-id {
        display: inline-block !important;
        width: 10px;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        margin: 0;
        height: 20px;
      }
      .user__item-header {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        margin: 0;
      }
      .user__item-btn-wrapper {
        display: flex !important;
        flex-direction: row !important;
        gap: 30px;
        justify-content: end;
        i {
          background-color: #008c06;
        }
      }
    }
  }
}
</style>
