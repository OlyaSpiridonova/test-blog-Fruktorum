<template lang="pug">
input(:type="props.typeInput" :placeholder="props.placeholder")
</template>

<script setup>
const props = defineProps({
  typeInput: {
    type: String,
    require: true,
  },
  placeholder: {
    type: String,
    require: true,
  },
});
</script>

<style lang="scss" scoped>
input {
  border: none;
  padding: 1rem 1rem 0.4rem 0.5rem;
  background: none;
  border-bottom: 1px solid #8d959c;
  color: #fff;
  margin: 0;

  &:focus,
  &:focus-visible {
    outline: unset;
    border: none;
    border-bottom: 1px solid #3657d3;
  }
}
</style>
