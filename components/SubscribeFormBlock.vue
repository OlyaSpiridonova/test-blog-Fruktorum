<template>
  <div class="subscribe-form">
    <span>Подпишись на рассылку</span>
    <form>
      <base-input type-input="email" placeholder="Email" />
      <base-button type="subscribe">Подписаться</base-button>
    </form>
  </div>
</template>

<script setup>
import BaseButton from "./UI/BaseButton.vue";
import BaseInput from "./UI/BaseInput.vue";
</script>

<style lang="scss" scoped>
.subscribe-form {
  padding: 35px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  max-width: 100%;
  background: #1b1b1b;

  span {
    margin: 0;
    color: #fefefe;
    font-size: 22px;
    font-weight: 800;
  }
  form {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 37px;
    @media (max-width: 779px) {
      margin: 0 auto;
      gap: 5px;
    }
  }
}
</style>
