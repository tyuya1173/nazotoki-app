import { defineStore } from 'pinia'

export const useGameState = defineStore('gameState', {
  state: () => ({
    startTime: null as null | number,
    timeLimit: 90 * 60 * 1000, // 1.5時間 (ms)
  }),
  getters: {
    timeRemaining(state): number {
      if (!state.startTime) return state.timeLimit
      return Math.max(0, state.startTime + state.timeLimit - Date.now())
    },
    isTimeUp(): boolean {
      return this.timeRemaining <= 0
    }
  },
  actions: {
    startTimer() {
      this.startTime = Date.now()
    },
    reset() {
      this.startTime = null
    }
  }
})