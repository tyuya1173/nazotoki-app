<template>
    <div class="hint-quiz">
      <img :src="hintImagePath" alt="ヒント問題画像" class="hint-image" />
  
      <input
        v-model="answerInput"
        placeholder="ヒントクイズの答えを入力"
        class="answer-input"
        @keydown.enter="submitAnswer"
      />
  
      <button class="submit-button" @click="submitAnswer">送信</button>
  
      <p v-if="showError" class="error-message">❌ 答えが違います。</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  
  interface Props {
    stageId: number
    correctAnswer: string
  }
  
  const props = defineProps<Props>()
  const emit = defineEmits<{
    (e: 'success'): void
  }>()
  
  const answerInput = ref('')
  const showError = ref(false)
  
  const hintImagePath = computed(() =>
    new URL(`../assets/quizzes/hint${props.stageId}.png`, import.meta.url).href
  )
  
  const submitAnswer = () => {
    if (answerInput.value.trim() === props.correctAnswer) {
      showError.value = false
      emit('success')
    } else {
      showError.value = true
    }
  }
  </script>
  
  <style scoped>
  .hint-quiz {
    text-align: center;
    margin: 0 auto;
    max-width: 800px;
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
  
  .error-message {
    color: red;
    margin-top: 1rem;
    font-weight: bold;
  }
  </style>