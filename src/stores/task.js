import { defineStore } from "pinia";

export const useTaskStore = defineStore('task', () => {
  const tasks = []
  return {tasks,}
})