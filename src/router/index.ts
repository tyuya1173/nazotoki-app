import { createRouter, createWebHistory } from 'vue-router'

// ページコンポーネントのインポート
import StartScreen from '../pages/StartScreen.vue'
import HackedMessage from '../pages/HackedMessage.vue'
import RuleScreen from '../pages/RuleScreen.vue'
import GameStage from '../pages/GameStage.vue'
import HintScreen from '../pages/HintScreen.vue'
import FinalStage from '../pages/FinalStage.vue'
import GameClear from '../pages/GameClear.vue'
import GameOver from '../pages/GameOver.vue'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: StartScreen
  },
  {
    path: '/hacked',
    name: 'HackedMessage',
    component: HackedMessage
  },
  {
    path: '/rules',
    name: 'Rule',
    component: RuleScreen
  },
  {
    path: '/stage/:id',
    name: 'Stage',
    component: GameStage,
    props: true
  },
  {
    path: '/hint/:id',
    name: 'Hint',
    component: HintScreen,
    props: true
  },
  {
    path: '/final',
    name: 'FinalStage',
    component: FinalStage
  },
  {
    path: '/clear',
    name: 'GameClear',
    component: GameClear
  },
  {
    path: '/gameover',
    name: 'GameOver',
    component: GameOver
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router