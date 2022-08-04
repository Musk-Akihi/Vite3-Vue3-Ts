<template>
  <div class="app">
    <a href="https://cn.vitejs.dev/" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <h2>Hello World！I'm Musk！</h2>
  </div>
</template>

<script setup lang="ts">
console.log(import.meta.env)
console.log('👻👻👻👻👻👻👻👻👻👻')
</script>

<style lang="scss" scoped>
.app {
  color: $color-blue;
  .logo {
    width: 145px;
    height: 145px;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
}
</style>
