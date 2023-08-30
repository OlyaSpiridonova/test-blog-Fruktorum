<template lang="pug">
.form-back
  img(src="@/assets/img/form-img.jpg" alt="form-img")
  .form-back-block
    h1(class="form-back-block-title") Стань участником проекта
    form
      base-input(type="text" placeholder="Имя")
      base-input(type="number" placeholder="Телефон")
      base-input(type="email" placeholder="Email")
      base-button(type="subscribe") Присоединиться

</template>

<script setup>
import BaseInput from "./UI/BaseInput.vue";
import BaseButton from "./UI/BaseButton.vue";
</script>

<style lang="scss" scoped>
.form-back {
  background-color: #1b1b1b;
  padding: 3.75rem;
  gap: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    margin: 0;
    width: 50%;
  }

  &-block {
    display: flex;
    flex-direction: column;
    margin: 0;
    @media (max-width: 1200px) {
      justify-content: center;
      align-items: center;
    }

    &-title {
      color: #fff;
      font-size: 34px;
      font-weight: 800;
    }

    form {
      padding-top: 3rem;
      display: flex;
      flex-direction: column;
      width: 22rem;
      @media (max-width: 779px) {
        width: 100%;
      }

      button {
        margin-top: 3rem;
      }
    }
  }
}
</style>
