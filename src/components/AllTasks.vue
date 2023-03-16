<template>
  <div class="all-tasks__container">
    <header class="all-tasks__header">
      <div class="all-task__logo">
        <img src="../assets/img/Logo.png" alt="logo" />
      </div>
      <div class="tasks__ammount">
        <h4>8 tasks</h4>
        <h4>View all</h4>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.all-tasks__header {
  background: #222222;
  color: #fff;

  .all-task__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.8rem;
    transform: translateY(50%); 
    
  }
}
</style>
