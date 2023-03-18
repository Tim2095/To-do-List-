<template>
  <button :class="props.bgr">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['btnName', 'bgr'])
</script>

<style lang="scss" scoped>
@media (min-width: 320px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */

  .add {
    background: #1ab8db;
    padding: 1.1rem 3.6rem;
  }

  .cancel {
    background: #ff0000;
    padding: 1.1rem 2.6rem;
  }

  .add,
  .cancel {
    display: flex;
    justify-content: center;
    align-self: center;
    border-radius: 20px;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Montserrat';
    border: none;
  }
}
</style>
