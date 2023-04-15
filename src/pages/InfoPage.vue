<template>
  <section class="info">
    <div class="info__wrapper">
      <h2
        class="info__header text-h6"
        style="font-weight: 600; font-size: 20px; line-height: 24px"
      >
        Change client info
      </h2>

      <div class="info__label-wrapper">
        <label class="info__label inline-block">
          <p class="info__text">Nomi</p>
          <input class="info__input" type="text" placeholder="Kompaniya nomi" />
        </label>
        <label class="info__label inline-block">
          <p class="info__text">Media link</p>
          <input
            class="info__input"
            type="text"
            placeholder="Media uchun link kiriting"
          />
        </label>
        <label class="info__label inline-block">
          <p class="info__text">Yetkazib berish narxi</p>
          <input
            class="info__input"
            type="text"
            placeholder="masalan: 10 000 so’m"
          />
        </label>
        <label class="info__label inline-block">
          <p class="info__text">Katalog link</p>
          <input
            class="info__input"
            type="text"
            placeholder="Katalog uchun link kiriting"
          />
        </label>
        <label class="info__label inline-block">
          <p class="info__text">Telefon raqam</p>
          <input
            class="info__input"
            type="text"
            placeholder="+998 _ _  _ _ _  _ _  _ _"
          />
        </label>
        <div class="info__btn-wrapper">
          <q-btn class="info__btn text-capitalize">Yangilash</q-btn>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.info {
  .info__wrapper {
    max-width: 840px;
    width: 100%;
    .info__header {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .text-h6 {
    }
    .info__label-wrapper {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      .info__label {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        margin-bottom: 24px;

        .info__text {
          margin: 0;
          padding: 0;
          margin-bottom: 10px;
        }

        .info__input {
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          color: #000000;
          opacity: 0.6;
          padding: 12px 0 13px 15px;
          width: 230px;
        }
      }

      .info__btn-wrapper {
        display: flex;
        .info__btn {
          margin: auto 0;
          padding: 17px 80px 16px !important;
          background: #2e3444;
          border-radius: 5px;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
