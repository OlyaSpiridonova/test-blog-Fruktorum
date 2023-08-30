<template>
  <NuxtLink
    v-if="isLink"
    class="base-button"
    :class="['base-button-' + props.type]"
    :to="to"
    ><slot
  /></NuxtLink>
  <button v-else class="base-button" :class="['base-button-' + props.type]">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  to: {
    type: String,
    required: false,
  },
});
const isLink = computed(() => props.to !== undefined);
</script>

<style lang="scss" scoped>
.base-button {
  padding: 10px 50px;
  display: inline-block;
  border-radius: 2px;
  cursor: pointer;
  color: #fff;
  border: none;
  text-decoration: none;
  max-width: 16rem;

  &-read {
    background: #1b1b1b;
    &:hover {
      background: #3657d3;
    }
  }

  &-subscribe {
    background: #3657d3;
    &:hover {
      background: none;
      border: 1px solid #3657d3;
    }
  }
}
</style>
