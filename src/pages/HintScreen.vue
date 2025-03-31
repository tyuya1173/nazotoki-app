<template>
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
        <button @click="goBack" class="back-button">戻る</button>
      </div>
  
      <p v-if="showError" class="error-message">❌ 答えが違います。</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { answers } from '@/assets/answers'
  
  const route = useRoute()
  const router = useRouter()
  const stageId = Number(route.params.id)
  
  const userAnswer = ref('')
  const showError = ref(false)
  const showHint = ref(false)
  
  const hintText = answers.hints[stageId] || '(ヒント未設定)'
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
  .hint-screen {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
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