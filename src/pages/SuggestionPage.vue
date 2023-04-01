<template>
  <LayoutHi>
    <section class="suggestion">
      <div class="suggettion__wrapper">
        <h2 class="suggestion__header">Taklif va shikoyatlar</h2>

        <ul class="suggestion__list">
          <li class="suggestion__item flex no-wrap">
            <div class="suggestion__item-text-wrapper">
              <div class="suggestion__item-id-wrapper">
                <span class="suggestion__item-id">1</span>
              </div>
              <div class="suggestion__item-name-wrapper">
                <h3 class="suggestion__item-text-header">Bobur Mavlonov</h3>
                <p class="suggestion__item-text-text">01/01/2021</p>
              </div>
              <p class="suggestion__item-text mdi-size-xl">
                Imperdiet arcu auctor ac quis at adipiscing odio morbi blandit.
                Purus ornare mattis tincidunt tellus mauris malesuada facilisi
                urna. Libero, feugiat volutpat diam nullam duis dui sed
                pulvinar. Nunc duis facilisis fringilla etiam. Lorem dignissim
                molestie volutpat in dolor arcu. In vitae fusce
                dignissimsodales.
              </p>
            </div>
            <div class="suggestion__item-icon-wrapper flex no-wrap">
              <q-icon
                name="reply"
                color=""
                size="sm"
                class="bg-blue-1 rounded-borders q-pa-sm q-mr-lg"
              />
              <q-icon
                name="delete"
                color="red"
                size="sm"
                class="bg-red-2 rounded-borders q-pa-sm"
              />
            </div>
          </li>
          <li class="suggestion__item flex no-wrap">
            <div class="suggestion__item-text-wrapper">
              <div class="suggestion__item-id-wrapper">
                <span class="suggestion__item-id">1</span>
              </div>
              <div class="suggestion__item-name-wrapper">
                <h3 class="suggestion__item-text-header">Bobur Mavlonov</h3>
                <p class="suggestion__item-text-text">01/01/2021</p>
              </div>
              <p class="suggestion__item-text mdi-size-xl">
                Imperdiet arcu auctor ac quis at adipiscing odio morbi blandit.
                Purus ornare mattis tincidunt tellus mauris malesuada facilisi
                urna.
              </p>
            </div>
            <div class="suggestion__item-icon-wrapper flex no-wrap">
              <q-icon
                name="reply"
                color=""
                size="sm"
                class="bg-blue-1 rounded-borders q-pa-sm q-mr-lg"
              />
              <q-icon
                name="delete"
                color="red"
                size="sm"
                class="bg-red-2 rounded-borders q-pa-sm"
              />
            </div>
          </li>
          <li class="suggestion__item flex no-wrap">
            <div class="suggestion__item-text-wrapper">
              <div class="suggestion__item-id-wrapper">
                <span class="suggestion__item-id">1</span>
              </div>
              <div class="suggestion__item-name-wrapper">
                <h3 class="suggestion__item-text-header">Bobur Mavlonov</h3>
                <p class="suggestion__item-text-text">01/01/2021</p>
              </div>
              <p class="suggestion__item-text mdi-size-xl">
                Imperdiet arcu auctor ac quis at adipiscing odio morbi blandit.
              </p>
            </div>
            <div class="suggestion__item-icon-wrapper flex no-wrap">
              <q-icon
                name="reply"
                color=""
                size="sm"
                class="bg-blue-1 rounded-borders q-pa-sm q-mr-lg"
              />
              <q-icon
                name="delete"
                color="red"
                size="sm"
                class="bg-red-2 rounded-borders q-pa-sm"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  </LayoutHi>
</template>

<script lang="ts" setup>
import LayoutHi from 'src/layouts/layoutHi.vue';
</script>

<style lang="scss" scoped>
.suggettion__wrapper {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 25px 27px 15px 30px;
  margin-top: 30px;
  margin-right: 30px;
}
.suggestion__header {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;
}

.suggestion__item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  justify-content: space-between;
  padding-top: 15px;
  align-items: start;
  padding-bottom: 15px;

  &:last-child {
    border-bottom: none;
  }
}
.suggestion__item-id-wrapper {
  padding: 15px;
  border-radius: 50%;
  background-color: #e7e7e7;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  margin-right: 10px;
}
.suggestion__item-id {
  margin: 0;
  padding: 0;
  font-style: normal;
  display: inline-block;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  display: inline-block;
  align-items: center;
  color: #000000;
}
.suggestion__item-text-wrapper {
  display: flex;
  width: 100%;
}
.suggestion__item-text-header {
  margin-bottom: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
}
.suggestion__item-text-text {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  opacity: 0.6;
}
.suggestion__item-text {
  margin-left: 45px;
  max-width: 650px;
  width: 100%;
}
</style>
