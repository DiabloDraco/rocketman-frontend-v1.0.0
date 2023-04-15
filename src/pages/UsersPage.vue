<script setup>
import { ref } from 'vue';
import { getUser, deleteUser } from 'src/service/SettingsService.js';

const rows = ref([]);
const delId = ref();
console.log(delId);

async function userGet() {
  let token = window.localStorage.getItem('Authorization');
  let res = await getUser({ token });
  rows.value = res;
}
async function delUser() {
  let token = window.localStorage.getItem('Authorization');
  let res = await deleteUser({ token }, delId.value);
  return res;
}

userGet();

function openModalEdit() {
  fixed.value = true;
}

function openModalDel(id) {
  fixed2.value = true;
  delId.value = id;
}

const fixed = ref(false);
const fixed2 = ref(false);
</script>

<template>
  <section class="user q-mt-xl q-pl-md">
    <div class="user__wrapper">
      <h2 class="user__header text-h6 q-pb-lg">Available users</h2>

      <ul class="user__list">
        <li
          v-for="row in rows"
          :key="row.id"
          :id="row.id"
          class="user__item q-pa-none"
        >
          <div class="user__item-text">
            <p class="user__item-id">{{ row.id || 1 }}</p>
            <p class="user__item-header text-h6">. {{ row.login }}</p>
          </div>
          <div class="user__item-btn-wrapper flex no-wrap">
            <q-icon
              name="edit"
              class="lg"
              @click="openModalEdit"
              size="xs"
              color="white"
              :id="row.id"
              style="padding: 10px 8.5px; border-radius: 50%"
            />
            <q-icon
              name="delete"
              class="bg-red-14"
              size="xs"
              @click="openModalDel(row.id)"
              color="white"
              style="padding: 10px 8.5px; border-radius: 50%"
            />
          </div>
        </li>
        <!-- <li class="user__item q-pa-none">
        <div class="user__item-text">
          <p class="user__item-id">2.</p>
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
          <p class="user__item-id">3.</p>
          <p class="user__item-header text-h6">Toxir</p>
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
      </li> -->
      </ul>
      <q-btn
        flat
        class="user__btn text-capitalize"
        style="
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          color: white !important;
        "
      >
        Qo’shish
      </q-btn>
    </div>
    <q-dialog v-model="fixed">
      <q-card>
        <q-card-section class="q-px-lg">
          <div class="text-h6">Terms of Agreement</div>
          <q-input model-value=""></q-input>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Decline" color="primary" v-close-popup />
          <q-btn flat label="Accept" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="fixed2">
      <q-card>
        <q-card-section class="q-px-lg">
          <div class="text-h6">USERNI OCHIRISHGA ROZIMISIZ</div>
          <q-btn
            label="ROZIMAN"
            style="display: inline-block; margin: 0 auto"
            :onclick="delUser(delId.value)"
          ></q-btn>
        </q-card-section>
        <q-separator />
      </q-card>
    </q-dialog>
  </section>
</template>

<style lang="scss" scoped>
.user {
  .user__wrapper {
    max-width: 426px;
    width: 100%;
    .user__btn {
      display: flex;
      margin-left: auto;
      background: #3eb597;
      border-radius: 5px;
      padding: 0 35px;
    }
    .user__list {
      margin-bottom: 30px;
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
