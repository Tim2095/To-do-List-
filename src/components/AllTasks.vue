<template>
  <div class="all-tasks__container">
    <header class="all-tasks__header">
      <div class="all-task__logo">
        <img src="../assets/img/Logo.png" alt="logo" />
      </div>
    </header>
    <div class="tasks-amount__container">
      <h4 class="task-amount">8 tasks</h4>
      <h4 class="view-all">View all</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 320px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
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
      color: #1AB8DB;
    }
  }
}
</style>
