<template>
  <div class="slider-block">
    <carousel :items-to-show="1" v-model="currentSlide">
      <slide v-for="slide in prop.data" :key="slide">
        <img :src="slide" alt="slide" />
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script setup>
const prop = defineProps({
  data: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss">
.slider-block {
  padding-top: 100px;
}
.carousel__prev,
.carousel__next {
  width: 60px;
  height: 60px;
  background: #1b1b1b;
}
.carousel__icon {
  fill: white;
}
.carousel__slide {
  img {
    width: 80%;
    @media (max-width: 779px) {
      width: 100%;
    }
  }
}
</style>
