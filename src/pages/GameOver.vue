<template>
    <div class="gameover-screen">
      <div class="gameover-box">
        <h1 class="gameover-title">🕒 タイムアップ...</h1>
        <p class="gameover-message">
          残念！時間内にすべての謎を解くことはできませんでした。
        </p>
        <p class="gameover-subtext">
          謎はあなたの挑戦を待っています。<br />
          またの挑戦をお待ちしています！
        </p>
        <button class="retry-button" @click="goHome">タイトルへ戻る</button>
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
  .gameover-screen {
    background: linear-gradient(to bottom, #fdfdfd, #f8d7da);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
  
  .gameover-box {
    background-color: white;
    padding: 3rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    max-width: 600px;
    width: 100%;
    animation: fadeIn 1s ease-in-out;
  }
  
  .gameover-title {
    font-size: 2.5rem;
    color: #dc3545;
    margin-bottom: 1rem;
  }
  
  .gameover-message {
    font-size: 1.4rem;
    line-height: 1.8;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .gameover-subtext {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .retry-button {
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .retry-button:hover {
    background-color: #c82333;
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