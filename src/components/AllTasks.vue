<template>
  <div class="all-tasks__container">
    <header class="all-tasks__header">
      <div class="all-task__logo">
        <img src="../assets/img/Logo.png" alt="logo" />
      </div>
    </header>
    <div class="tasks-amount__container cnt">
      <h4 class="task-amount">{{ taskAmount }} tasks</h4>
      <button class="view-all">View all</button>
    </div>
    <div class="tasks-sort__names cnt">
      <div class="tags-content">
        <p>Ending Date</p>
        <p>Task</p>
      </div>
    </div>
    <ul class="tasks-content__container cnt" v-for="task in tasks" :key="task.title">
      <div class="task-content">
        <li class="task-date">{{ task.date }}</li>
        <li class="task-name">{{ task.title.split(' ').slice(0, 2).join(' ') }}...</li>
        <button class="delete-btn" @click="store.deleteTask(task.title)">Delete</button>
      </div>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/task'
import { computed } from 'vue'
const store = useTaskStore()
const tasks = ref(store.tasks)


const taskAmount = computed(function () {
  return tasks.value.length
})

</script>

<style lang="scss" scoped>
@media (min-width: 320px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */

  .cnt {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  .all-tasks__header {
    background: #222222;
    color: #fff;

    .all-task__logo {
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(50%);
    }
  }

  .tasks-amount__container {
    margin-top: 5.8rem;
    display: flex;
    justify-content: space-between;
    padding-left: 2.6rem;
    padding-right: 2.6rem;
    padding-bottom: 1.3rem;
    border-bottom: 2px solid black;
    border-color: #d9d9d9;

    h4 {
      font-family: 'Montserrat';
    }

    .task-amount {
      font-size: 1.5rem;
      color: #000000;
      font-weight: 500;
    }

    .view-all {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1ab8db;
      cursor: pointer;
      background: none;
      border: none;
    }
  }

  .tasks-sort__names {
    background: #d9d9d9;
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
    border-radius: 4px;
    color: #000000;
    font-weight: 400;
    font-size: 1.6rem;
    margin-bottom: 2rem;

    .tags-content {
      width: 70%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
  }

  .tasks-content__container {
    background: #eeeeee;
    margin-bottom: 0.8rem;
    padding: 1.5rem 0 1.5rem 0;
    position: relative;
  }


  .task-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 0 auto;


    .task-name {
      justify-self: end;
      color: rgba(0, 0, 0, 0.9);
      font-size: 1.6rem;
      font-weight: 400;
      font-family: 'Roboto';
      padding-right: 2rem;
      text-decoration: underline;
    }
    .task-date {
      color: rgba(34, 34, 34, 0.7);
      font-size: 1.6rem;
      font-family: 'Montserrat';
      font-weight: 400;
    }
  }

  .delete-btn {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    margin-left: 3rem;
    right: 1%;
    background: #1ab8db;
    border: none;
    padding: 0.5rem 1rem;
    color: #fff;
    cursor: pointer;
  }
}
</style>
