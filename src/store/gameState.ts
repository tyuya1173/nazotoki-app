import { defineStore } from 'pinia'

export const useGameState = defineStore('gameState', {
  state: () => ({
    startTime: null as null | number,
    timeLimit:  1.5 * 60 * 60 * 1000, // ← 正しい1.5時間（ms）
    isTimeUp: false // ✅ ← stateに移動して変更可能にする
  }),
  getters: {
    timeRemaining(state): number {
      if (!state.startTime) return state.timeLimit
      return Math.max(0, state.startTime + state.timeLimit - Date.now())
    }
  },
  actions: {
    startTimer() {
      this.startTime = Date.now()
      this.isTimeUp = false // ✅ ← タイマー開始時にリセット
    },
    reset() {
      this.startTime = null
      this.isTimeUp = false // ✅ ← ゲーム全体リセット時にもクリア
    }
  }
})