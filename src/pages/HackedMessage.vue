<template>
  <div class="hacked-screen">
    <div class="message-box">
      <h1 class="alert-title">⚠ パソコンが乗っ取られました ⚠</h1>
      <p class="alert-message">
        セキュリティが突破され、システムが乗っ取られました。<br />
        回復するには謎を解き、最後のパスワードを入力する必要があります。
      </p>
      <button class="next-button" @click="goToRules">次へ</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToRules = () => {
  router.push('/rules')
}
</script>

<style scoped>
.hacked-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  overflow: hidden;
}

.message-box {
  background: #2a2a2a;
  border: 2px solid red;
  border-radius: 12px;
  padding: 2.5rem;
  max-width: 600px;
  width: 90%;
  text-align: center;
  box-shadow: 0 0 20px red;
  animation: pulse 1.5s infinite;
}

.alert-title {
  font-size: 2.2rem;
  color: red;
  margin-bottom: 1.2rem;
}

.alert-message {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #fff;
}

.next-button {
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  background-color: red;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.next-button:hover {
  background-color: #aa0000;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 10px red;
  }
  50% {
    box-shadow: 0 0 30px red;
  }
  100% {
    box-shadow: 0 0 10px red;
  }
}
</style>