<template lang="pug">
.article-block
  .article-block-title {{ data.title }}
  .article-block-list
    .article-block-list-item(v-for="article in data.articles")
      img(:src="article.image" class="article-block-list-item-image")
      .article-block-list-item-title {{ article.title }}
      .article-block-list-item-btn
        base-button(type="read" :to="article.link") Читать
</template>

<script setup>
import BaseButton from "./UI/BaseButton.vue";
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.article-block {
  margin-top: 100px;
  &-title {
    font-size: 34px;
    font-weight: 800;
    padding-bottom: 3rem;
  }
  &-list {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1.87rem;
    margin-bottom: 3.12rem;

    &-item {
      display: grid;
      align-content: space-between;
      &-image {
        max-height: 20rem;
        width: 100%;
        object-fit: cover;
      }
      &-title {
        font-size: 22px;
        font-weight: 800;
        padding-top: 1.25rem;
        padding-bottom: 1.8rem;
      }
    }
  }
}
</style>
