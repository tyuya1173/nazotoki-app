<template>
    <div class="timer">
      ⏱ 残り時間：{{ formattedTime }}
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, onMounted, onUnmounted, ref } from 'vue'
  import { useGameState } from '@/store/gameState'
  
  const gameState = useGameState()
  const now = ref(Date.now())
  
  let timerInterval: number
  
  onMounted(() => {
    timerInterval = setInterval(() => {
      now.value = Date.now()
    }, 1000)
  })
  
  onUnmounted(() => {
    clearInterval(timerInterval)
  })
  
  const remaining = computed(() => {
    if (!gameState.startTime) return gameState.timeLimit
    return Math.max(0, gameState.startTime + gameState.timeLimit - now.value)
  })
  
  const formattedTime = computed(() => {
    const totalSeconds = Math.floor(remaining.value / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  })
  </script>
  
  <style scoped>
  .timer {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #222;
    color: #fff;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    z-index: 1000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  </style>