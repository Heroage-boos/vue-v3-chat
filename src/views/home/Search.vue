<template>
  <form class="search-form">
    <input type="text" placeholder="搜索..." />
    <button type="submit">搜索</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ConSearch'
})
</script>

<style lang="scss" scoped>
.search-form {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

input[type='text'] {
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  width: 300px;
  max-width: 100%;
}

button[type='submit'] {
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  margin-left: 10px;
  cursor: pointer;
}
</style>
