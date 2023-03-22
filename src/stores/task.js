import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useTaskStore = defineStore('task', () => {
  const tasks = ref([
    {
      id: 1,
      title: 'home1 and to do more of course1',
      date: '01.22.1292',
      description: 'yues to do it'
    },
    {
      id: 2,
      title: 'home2 and to do more of course2',
      date: '01.22.1292',
      description: 'yues to do it'
    },
    {
      id: 3,
      title: 'home3 and to do more of course3',
      date: '01.22.1292',
      description: 'yues to do it'
    },
    {
      id: 4,
      title: 'home4 and to do more of course4',
      date: '01.22.1292',
      description: 'yues to do it'
    },
    {
      id: 5,
      title: 'home5 and to do more of course5',
      date: '01.22.1292',
      description: 'yues to do it'
    },     
    {
      id: 6,
      title: 'home6 and to do more of course5',
      date: '01.22.1292',
      description: 'yues to do it'
    },   
    {
      id: 7,
      title: 'home7 and to do more of course5',
      date: '01.22.1292',
      description: 'yues to do it'
    },   
    {
      id: 8,
      title: 'home8 and to do more of course5',
      date: '01.22.1292',
      description: 'yues to do it'
    },   
    {
      id: 9,
      title: 'home9 and to do more of course5',
      date: '01.22.1292',
      description: 'yues to do it'
    },   
    {
      id: 10,
      title: 'home10 and to do more of course5',
      date: '01.22.1292',
      description: 'yues to do it'
    },   
  ])

  const deleteTask = (taskName) => {
    const findIndexToDo = tasks.value.findIndex(toDo => toDo.title === taskName)
    tasks.value.splice(findIndexToDo, 1)
  }
  
  return { tasks, deleteTask, }
})
