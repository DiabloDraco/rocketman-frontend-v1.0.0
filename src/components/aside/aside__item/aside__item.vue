<script lang="ts" setup>
const item = defineProps({
  image: String,
  header: String,
  link: String,
  class: String,
});
</script>

<template>
  <li class="aside__item">
    <router-link
      class="aside__item-link"
      class-active="active"
      :to="item?.link || '/'"
      :class="item.class"
    >
      <img :src="item.image" alt="aside" class="aside__item-img" />
      <h2 class="aside__item-header">{{ item.header }}</h2>
    </router-link>
  </li>
</template>

<style lang="scss">
.aside__item {
  transition: all 0.4s ease-in;

  /* padding: 24px 37px 0 30px; */
  .aside__item-link {
    opacity: 0.6;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    padding: 24px 0;
  }
  .router-link-active {
    position: relative;
    opacity: 1;
    box-shadow: 10px 10x 10px 10px rgb(255, 0, 0);
    ::before {
      position: absolute;
      border-left: 4px solid #fff;
      width: 4px;
      height: auto;
      left: 0;
      top: 0;
      bottom: 0;
      content: '';
    }
  }
  .aside__item-header {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 15px;
    margin-left: 30px;
    margin-bottom: 1px;
  }

  transition: all 0.6s ease;
  :hover {
    transition: all 0.6s ease;
    background-color: #424856;
  }
}
</style>
