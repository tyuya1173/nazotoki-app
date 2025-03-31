<template>
  <div class="final-stage-screen">
    <div class="final-stage-box">
      <h2 class="final-title">最終ステージ：最後の試練</h2>

      <img :src="finalImagePath" alt="最後の問題" class="final-image" />

      <input
        v-model="userAnswer"
        placeholder="最後の答えを入力"
        class="answer-input"
      />
      <button @click="checkAnswer" class="submit-button">送信</button>

      <p v-if="showError" class="error-message">❌ 答えが違います。</p>

      <Timer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { answers } from '@/assets/answers'
import Timer from '@/components/Timer.vue'
import { useGameState } from '@/store/gameState'

const router = useRouter()
const userAnswer = ref('')
const showError = ref(false)
const finalAnswer = answers.final
const gameState = useGameState()

// 画像は public/quizzes/final.png に置いておくのが確実
const finalImagePath = computed(() => `/quizzes/final.png`)

const checkAnswer = () => {
  if (userAnswer.value.trim() === finalAnswer) {
    router.push('/clear')
  } else {
    showError.value = true
  }
}

watch(
  () => gameState.isTimeUp,
  (isTimeUp) => {
    if (isTimeUp) {
      router.push('/gameover')
    }
  }
)
</script>

<style scoped>
.final-stage-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #fff5f5, #fce8e8);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.final-stage-box {
  background: white;
  padding: 3rem 4rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  text-align: center;
  max-width: 600px;
  width: 90%;
}

.final-title {
  font-size: 2.2rem;
  font-weight: bold;
  color: #c82333;
  margin-bottom: 1.5rem;
}

.final-image {
  width: 100%;
  max-width: 500px;
  margin: 1.5rem auto;
  display: block;
  border: 2px solid #ccc;
  border-radius: 10px;
}

.answer-input {
  padding: 0.8rem;
  font-size: 1.1rem;
  width: 80%;
  max-width: 400px;
  margin: 1rem auto;
  display: block;
  border: 1px solid #888;
  border-radius: 6px;
}

.submit-button {
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-button:hover {
  background-color: #b52a3b;
}

.error-message {
  color: red;
  margin-top: 1rem;
  font-weight: bold;
}
</style>