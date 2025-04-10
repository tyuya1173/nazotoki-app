<template>
  <div class="hint-screen-wrapper">
    <div class="hint-screen">
      <h2>ヒントステージ {{ stageId }}</h2>

      <img :src="hintImagePath" alt="ヒントクイズ" class="hint-image" />

      <input
        v-model="userAnswer"
        placeholder="ヒントクイズの答えを入力"
        class="answer-input"
      />

      <button @click="checkAnswer" class="submit-button">送信</button>

      <div v-if="showHint" class="hint-box">
        <p class="hint-text">💡 ヒント：{{ hintText }}</p>
      </div>

      <button @click="goBack" class="back-button">戻る</button>

      <p v-if="showError" class="error-message">❌ 答えが違います。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { answers } from '@/assets/answers'
import { hints } from '@/assets/hints'

const route = useRoute()
const router = useRouter()
const stageId = Number(route.params.id)

const userAnswer = ref('')
const showError = ref(false)
const showHint = ref(false)

const hintText = hints.hints[stageId] || '(ヒント未設定)'
const correctAnswer = answers.hints[stageId]

const hintImagePath = computed(() =>
  new URL(`../assets/quizzes/hint${stageId}.png`, import.meta.url).href
)

const checkAnswer = () => {
  if (userAnswer.value.trim() === correctAnswer) {
    showError.value = false
    showHint.value = true
  } else {
    showError.value = true
    showHint.value = false
  }
}

const goBack = () => {
  router.push(`/stage/${stageId}`)
}
</script>

<style scoped>
.hint-screen-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #fff8e1, #fffde7);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  min-height: 100vh;
  padding: 2rem;
}

.hint-screen {
  background: white;
  padding: 2.5rem 3rem;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
  max-width: 800px;
  width: 90%;
}

.hint-image {
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

.submit-button {
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  background-color: #ffc107;
  color: #333;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 1rem;
}

.submit-button:hover {
  background-color: #e0a800;
}

.hint-box {
  margin-top: 2rem;
  background: #f8f9fa;
  border-left: 5px solid #28a745;
  padding: 1rem;
  border-radius: 6px;
}

.hint-text {
  font-size: 1.1rem;
  color: #333;
}

.back-button {
  margin-top: 1rem;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #218838;
}

.error-message {
  color: red;
  margin-top: 1rem;
  font-weight: bold;
}
</style>