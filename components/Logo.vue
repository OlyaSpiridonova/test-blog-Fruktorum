<template>
  <div class="logo" @click="$router.push('/')">
    <img src="../assets/icons/Logo.png" alt="logo" />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
  height: 32px;
  width: fit-content;
}
</style>
