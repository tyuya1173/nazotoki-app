<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
    <Timer :stageId="currentStageId" />
  </div>
</template>

<script setup lang="ts">
import Timer from '@/components/Timer.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// ルートからステージ番号を抽出（例：/stage/1 → 1）
const currentStageId = computed(() => {
  const stageParam = route.params.id
  const stageNumber = Number(stageParam)
  return isNaN(stageNumber) ? undefined : stageNumber
})
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