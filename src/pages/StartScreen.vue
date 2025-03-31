<template>
  <div class="start-screen">
    <div class="start-box">
      <h1 class="title">ようこそ、謎解きゲームへ</h1>
      <p class="description">
        このゲームは、あなたの頭脳を試す<br />
        連続謎解きチャレンジです。
      </p>
      <button class="start-button" @click="startGame">ゲームスタート</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const startGame = () => {
  router.push('/hacked')
}
</script>

<style scoped>
.start-screen {
  position: fixed; /* ← 背景も画面に固定 */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #f4f9ff, #d6eaff);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
}

.start-box {
  background: white;
  padding: 3rem 4rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 600px;
  width: 90%;
}

.title {
  font-size: 2.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1.3rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.start-button {
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.start-button:hover {
  background-color: #0056b3;
}
</style>