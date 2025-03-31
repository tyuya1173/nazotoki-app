<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
    <Timer />
  </div>
</template>

<script setup lang="ts">
import Timer from '@/components/Timer.vue'
</script>

<style>
/* 全体リセット & ベーススタイル */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  font-family: 'Segoe UI', 'Noto Sans JP', sans-serif;
  background-color: #fafafa;
  color: #333;
}

button {
  cursor: pointer;
}

input {
  font-family: inherit;
}
</style>