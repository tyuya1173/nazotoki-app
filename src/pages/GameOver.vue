<template>
  <div class="gameover-screen">
    <div class="gameover-box">
      <h1 class="gameover-title">🕒 タイムアップ...</h1>
      <p class="gameover-message">
        残念！時間内にすべての謎を解くことはできませんでした。
      </p>
      <p class="gameover-subtext">
        謎はあなたの挑戦を待っています。<br />
        またの挑戦をお待ちしています！
      </p>
      <button class="retry-button" @click="goHome">タイトルへ戻る</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useGameState } from '@/store/gameState'

const router = useRouter()
const gameState = useGameState()

const goHome = () => {
  gameState.reset()
  router.push('/')
}
</script>

<style scoped>
.gameover-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #fff5f5, #f8d7da);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
}

.gameover-box {
  background-color: white;
  padding: 3rem 4rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 90%;
  animation: fadeIn 1s ease-in-out;
}

.gameover-title {
  font-size: 2.8rem;
  font-weight: bold;
  color: #dc3545;
  margin-bottom: 1.5rem;
}

.gameover-message {
  font-size: 1.4rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 1rem;
}

.gameover-subtext {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
}

.retry-button {
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.retry-button:hover {
  background-color: #b02a37;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>