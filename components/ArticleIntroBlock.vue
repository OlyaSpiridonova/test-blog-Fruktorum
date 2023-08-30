<template lang="pug">
.intro-block
    .intro-block-img
      img(:src="data.image" alt="image")
    .intro-block-descr
      h1 {{ data.title }}
      .intro-block-descr-time {{ data.reading_time }} мин время чтения
      .intro-block-descr-views {{ data.views_count }} прочитали статью
      p {{ data.short_description }}
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.intro-block {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media (max-width: 779px) {
    flex-direction: column;
  }
  &-img {
    img {
      border-radius: 2px 220px 2px 2px;
      width: 100%;
    }
  }
  &-descr {
    h1 {
      font-size: 56px;
      font-weight: 800;
      @media (max-width: 1200px) {
        font-size: 30px;
      }
      @media (max-width: 959px) {
        font-size: 25px;
      }
    }
    &-time {
      padding-top: 30px;
      display: flex;
      align-self: center;
      color: #8d959c;
      font-size: 14px;
      font-weight: 400;
      &::before {
        content: url("../assets/icons/time.svg");
        padding-right: 8px;
      }
    }
    &-views {
      display: flex;
      align-self: center;
      color: #8d959c;
      font-size: 14px;
      font-weight: 400;
      &::before {
        content: url("../assets/icons/eye.svg");
        padding-right: 8px;
      }
    }
    p {
      padding-top: 50px;
      font-size: 20px;
      font-weight: 400;
      color: #1b1b1b;
      @media (max-width: 1200px) {
        padding-top: 20px;
        font-size: 12px;
      }
      @media (max-width: 959px) {
        padding-top: 20px;
        font-size: 12px;
      }
    }
  }
}
</style>
