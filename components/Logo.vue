<template lang="pug">
.logo(@click="$router.push('/')")
  img(src="../assets/icons/Logo.png" alt="logo")
</template>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
  height: 32px;
  width: fit-content;
}
</style>
