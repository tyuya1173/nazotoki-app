<template>
    <div class="clear-screen">
      <div class="clear-box">
        <h1 class="clear-title">🎉 ゲームクリア！ 🎉</h1>
        <p class="clear-message">
          おめでとうございます！<br />
          あなたは全ての謎を解き明かし、<br />
          見事システムを復旧させました。
        </p>
        <p class="clear-subtext">
          知恵とひらめき、そして粘り強さが勝利を導きました。
        </p>
        <button class="home-button" @click="goHome">タイトルへ戻る</button>
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
  .clear-screen {
    background: linear-gradient(to bottom, #fdfdfd, #d4edda);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
  
  .clear-box {
    background-color: white;
    padding: 3rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    max-width: 600px;
    width: 100%;
    animation: fadeIn 1s ease-in-out;
  }
  
  .clear-title {
    font-size: 2.5rem;
    color: #28a745;
    margin-bottom: 1rem;
  }
  
  .clear-message {
    font-size: 1.4rem;
    line-height: 1.8;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .clear-subtext {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .home-button {
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .home-button:hover {
    background-color: #218838;
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