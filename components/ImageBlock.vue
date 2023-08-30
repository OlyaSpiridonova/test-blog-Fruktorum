<template lang="pug">
.image-block
  img(:src="data.src")
  span Опубликовано 20.08.2022, Unsplash
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
.image-block {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    border-radius: 2px 220px 2px 2px;
    @media (max-width: 1200px) {
      width: 80%;
    }
  }
  span {
    margin-left: 85%;
    font-size: 14px;
    font-weight: 400;
    color: #8d959c;
    @media (max-width: 1200px) {
      font-size: 10px;
      margin-left: 65%;
    }
  }
}
</style>
