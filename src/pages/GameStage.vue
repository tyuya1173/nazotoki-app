<template>
  <div class="game-stage-wrapper">
    <div class="game-stage">
      <h2>ステージ {{ stageId }}</h2>

      <img :src="quizImagePath" alt="謎解き画像" class="quiz-image" />

      <input
        v-model="userAnswer"
        placeholder="答えを入力"
        class="answer-input"
      />
      <div class="buttons">
        <button @click="checkAnswer" class="submit-button">送信</button>
        <button @click="goToHint" class="hint-button">ヒント</button>
      </div>

      <p v-if="showError" class="error-message">
        ❌ 答えが違います。もう一度試してみてください。
      </p>

      <Timer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { answers } from '@/assets/answers'
import Timer from '@/components/Timer.vue'
import { useGameState } from '@/store/gameState'

const route = useRoute()
const router = useRouter()
const stageId = Number(route.params.id)
const userAnswer = ref('')
const showError = ref(false)

const quizImagePath = computed(() =>
  new URL(`../assets/quizzes/quiz${stageId}.png`, import.meta.url).href
)

const checkAnswer = () => {
  const correct = answers.quizzes[stageId]
  if (userAnswer.value.trim() === correct) {
    if (stageId === 17) {
      router.push('/final')
    } else {
      router.push(`/stage/${stageId + 1}`)
    }
  } else {
    showError.value = true
  }
}

const goToHint = () => {
  router.push(`/hint/${stageId}`)
}

const gameState = useGameState()
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
.game-stage-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #f0f4ff, #dbeaff);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.game-stage {
  background: white;
  padding: 2.5rem 3rem;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
  max-width: 800px;
  width: 90%;
}

.quiz-image {
  width: 100%;
  max-width: 600px;
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

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.submit-button,
.hint-button {
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  transition: background 0.3s ease;
}

.submit-button {
  background-color: #007bff;
  color: white;
}

.submit-button:hover {
  background-color: #0056b3;
}

.hint-button {
  background-color: #ffc107;
  color: #333;
}

.hint-button:hover {
  background-color: #e0a800;
}

.error-message {
  color: red;
  margin-top: 1rem;
  font-weight: bold;
}
</style>