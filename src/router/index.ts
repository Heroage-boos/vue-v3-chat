import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/home/Home.vue'

console.log('meta.env)meta.env)', import.meta.env)
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/chat/Chat.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/cloudShop',
    name: 'CloudShop',
    component: () => import('../views/cloudShop/index.vue')
  },
  {
    path: '/util',
    name: 'Util',
    component: () => import('../views/util/index.vue')
  },
  {
    path: '/webNav',
    name: 'WebNav',
    component: () => import('../views/webNav/index.vue')
  },
  {
    path: '/hotTop',
    name: 'HotTop',
    component: () => import('../views/hotTop/index.vue')
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('../views/community/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
