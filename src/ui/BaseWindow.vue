<template>
  <div>
    <div class="overlay"></div>
    <div class="action-window">
      <div class="action-content">
        <div class="action-content__title">
          <h2>
            <slot></slot>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '../router/index.js'

const moveToAllTask = () => {
  setTimeout(() => {
    router.push('/allTasks')
  }, 3000)
}
moveToAllTask()
</script>

<style lang="scss" scoped>
@media (min-width: 320px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  .overlay {
  }

  .action-window {
    display: flex;
    justify-content: center;
    align-items: center;
   
    border-radius: 10px;
    background: linear-gradient(180deg, #e50000 13.1%, rgba(21, 147, 175, 0.66) 73.31%);
    height: 100vh;

    .action-content {
      background: #222222;
      padding: 1.8rem 6.1rem;
      border-radius: 10px;
    }
    .action-content__title {
      color: #fff;
      text-align: center;
      font-size: 2rem;
    }
  }
}
</style>
