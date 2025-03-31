<template>
    <div class="final-stage">
      <h2>最終ステージ：最後の試練</h2>
  
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
  
  const finalImagePath = computed(() =>
    new URL(`../assets/quizzes/final.png`, import.meta.url).href
  )
  
  const checkAnswer = () => {
    if (userAnswer.value.trim() === finalAnswer) {
      router.push('/clear')
    } else {
      showError.value = true
    }
  }
  
  // 時間切れで自動的にゲームオーバーへ
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
  .final-stage {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  .final-image {
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
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #c82333;
  }
  
  .error-message {
    color: red;
    margin-top: 1rem;
    font-weight: bold;
  }
  </style>