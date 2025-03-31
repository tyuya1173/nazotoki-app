<template>
  <div class="rule-screen">
    <div class="rule-box">
      <h1 class="rule-title">📜 ゲームルール</h1>
      <ul class="rule-list">
        <li>🕒 制限時間は <strong>1時間30分</strong> です。</li>
        <li>🧩 ステージは <strong>全18問</strong> あります。</li>
        <li>💡 各ステージには <strong>ヒント</strong> ボタンがあります。</li>
        <li>⚠️回答は必ず、ひらがなでお願いします。正しく正誤判定できません</li>
        <li>⚠️リロードしないようにしてください...バグるかも🙇</li>
        <li>⚠️何か不具合があったら、運営に声をかけてください</li>
        <li>☕️みんなで協力して、楽しい良い時間にしてください</li>
        <li>それではいってらっしゃい</li>
      </ul>
      <button class="start-button" @click="startGame">スタート</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useGameState } from '@/store/gameState'

const router = useRouter()
const gameState = useGameState()

const startGame = () => {
  gameState.startTimer()
  router.push('/stage/1')
}
</script>

<style scoped>
.rule-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #fdfdfd, #d4edda);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 0;
}

.rule-box {
  background: white;
  padding: 3rem 4rem;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 600px;
  width: 90%;
}

.rule-title {
  font-size: 2.4rem;
  margin-bottom: 1.8rem;
  color: #2c3e50;
}

.rule-list {
  text-align: left;
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 2.5rem;
  line-height: 1.8;
  list-style: none;
  padding: 0;
}

.start-button {
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.start-button:hover {
  background-color: #218838;
}
</style>