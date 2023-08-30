<template lang="pug">
.text-block(v-html="data")
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
.text-block {
  margin: 0 20%;
  padding-top: 100px;
  @media (max-width: 1200px) {
    padding-top: 50px;
  }
  p {
    padding-top: 20px;
  }

  blockquote {
    margin-top: 40px;
    padding-left: 116px;
    background: left 0 no-repeat url("../assets/icons/quotes-left.svg");
    @media (max-width: 779px) {
      padding-left: 0;
      padding-top: 80px;
    }
    p {
      padding-top: 0;
      font-size: 18px;
      font-style: italic;
      font-weight: 300;
    }
    footer {
      color: #8d959c;
      font-size: 14px;
      font-weight: 400;
    }
  }
}
</style>
