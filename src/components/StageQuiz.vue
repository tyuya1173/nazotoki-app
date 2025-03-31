<template>
    <div class="stage-quiz">
      <img :src="quizImagePath" alt="ステージクイズ画像" class="quiz-image" />
  
      <input
        v-model="answerInput"
        class="answer-input"
        placeholder="答えを入力"
        @keydown.enter="submitAnswer"
      />
  
      <div class="buttons">
        <button class="submit-button" @click="submitAnswer">送信</button>
        <button class="hint-button" @click="$emit('hint')">ヒント</button>
      </div>
  
      <p v-if="showError" class="error-message">❌ 答えが違います。</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, computed } from 'vue'
  
  interface Props {
    stageId: number
    correctAnswer: string
    showError: boolean
  }
  
  const props = defineProps<Props>()
  const emit = defineEmits<{
    (e: 'submit', answer: string): void
    (e: 'hint'): void
  }>()
  
  const answerInput = ref('')
  
  const submitAnswer = () => {
    emit('submit', answerInput.value.trim())
  }
  
  const quizImagePath = computed(() =>
    new URL(`../assets/quizzes/quiz${props.stageId}.png`, import.meta.url).href
  )
  </script>
  
  <style scoped>
  .stage-quiz {
    text-align: center;
    margin: 0 auto;
    max-width: 800px;
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