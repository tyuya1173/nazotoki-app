<template>
  <div
    class="timer"
    :class="{ clickable: isClickable }"
    @click="handleClick"
  >
    ⏱ 残り時間：{{ formattedTime }}
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useGameState } from '@/store/gameState'
import { useRouter } from 'vue-router'

const props = defineProps<{ stageId?: number }>()
const gameState = useGameState()
const router = useRouter()

const now = ref(Date.now())
let timerInterval: number

onMounted(() => {
  timerInterval = setInterval(() => {
    now.value = Date.now()
    checkTimeUp()
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

// ステージ18のときだけクリック可能
const isClickable = computed(() => props.stageId === 18)

const handleClick = () => {
  if (isClickable.value) {
    router.push('/final')
  }
}

// タイムアップ検出して遷移
const checkTimeUp = () => {
  const isExpired = remaining.value <= 0

  // console.log('[checkTimeUp]');
  // console.log('remaining(ms):', remaining.value);
  // console.log('isExpired:', isExpired);
  // console.log('gameState.isTimeUp:', gameState.isTimeUp);

  if (isExpired && !gameState.isTimeUp) {
    gameState.isTimeUp = true
    router.push('/gameover')
  }
}
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
  z-index: 9999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  user-select: none;
  pointer-events: auto;
}

.clickable {
  cursor: pointer;
  background: #222;
  transition: background 0.3s ease;
}

.clickable:hover {
  background: #0056b3;
}
</style>