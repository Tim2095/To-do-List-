import { defineStore } from "pinia";

export const useTaskStore = defineStore('task', () => {
  const tasks = [{title: 'home work', date: '01.22.1292', description: 'yues to do it'}]
  return {tasks,}
})