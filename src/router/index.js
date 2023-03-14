import { createRouter, createWebHistory } from 'vue-router'
import AddTask from '../components/AddTask.vue'
import HomePage from '../views/HomePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', redirect: '/main'
    },
    {
      path: '/main', component: HomePage
    },
    {
      path: '/addTask', component: AddTask
    }
  ]
})

export default router
