<template>
  <button :class="props.bgr">
    <slot ></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['btnName', 'bgr'])
</script>

<style lang="scss" scoped>
@import '../assets/fonts';
.add {
  background: #1AB8DB;
  padding: 1.1rem 3.6rem;
}

.cancel {
  background: #FF0000;
  padding: 1.1rem 2.6rem;
}

.add, .cancel {
  display: flex;
  justify-content: center;
  align-self: center;
  border-radius: 20px;
  color: #FFFFFF;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Montserrat';
  border: none;
}


</style>