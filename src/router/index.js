import { createRouter, createWebHistory } from 'vue-router'
import AddTask from '../components/AddTask.vue'
import HomePage from '../views/HomePage.vue'
import AllTasks from '../components/AllTasks.vue'
import BaseWindow from '../ui/BaseWindow.vue'
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
    },
    {
      path: '/allTasks', component: AllTasks
    },
    {
      path: '/taskAction', component: BaseWindow
    }
  ]
})

export default router
