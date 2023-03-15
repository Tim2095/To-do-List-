<template>
  <div class="add-task__container">
    <div class="add-task__header">
      <h3>add task</h3>
      <router-link to="/">
        <img src="../assets/img/Vector.png" alt="close-task" />
      </router-link>
    </div>
    <div class="add-task__logo">
      <img src="../assets/img/Logo.png" alt="logo" />
    </div>

    <form>
      <div class="title-content">
        <label for="title">Title</label>
        <input type="text" id="title" placeholder="Enter task title" />
      </div>
      <div class="description-content">
        <label for="description">Description</label>
        <input type="text" id="description"  placeholder="Enter task description"/>
      </div>
      <div class="endingDate-content">
        <label for="endingDate">Date end</label>
        <input type="date" id="endingDate"/>
      </div>
      <div class="task-btn-actions">
        <task-button bgr="add">Add</task-button>
        <task-button bgr="cancel">Cancel</task-button>
      </div>
    </form>
  </div>
</template>

<script setup>
import TaskButton from '../ui/TaskButton.vue'
</script>

<style lang="scss" scoped>
@import '../assets/fonts';
.add-task__container {
  max-width: 312px;
  margin: 0 auto;
  height: 100vh;
  padding: 1rem;
  .add-task__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: #1AB8DB;
      font-size: 1.6rem;
      font-weight: 700;
      font-family: 'Montserrat';
      text-transform: uppercase;
    }
  }

  .add-task__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4.3rem;
  }

  form {
    margin-top: 6.2rem;
    display: flex;
    flex-flow: column;
    gap: 2.8rem;
    .title-content,
    .description-content,
    .endingDate-content {
      display: flex;
      flex-flow: column;
      gap: 0.9rem;
    }

    label {
      color: #000000;
      font-size: 2rem;
      font-weight: 500;
      font-family: 'Montserrat';
    }

    input {
      height: 4rem;
      border: 1px solid rgba(26, 184, 219, 0.85);
      border-radius: 10px;
      font-size: 1.6rem;
      padding-left: 1rem;
    }

    input[type=date] {
      width: 100%;
      background: transparent;
    }

    .task-btn-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
