<template>
  <div class="status-bar">
      <p>Done</p>
      <ul>
          <!-- <li v-for="todo in todos.filter(todo => todo.completed)" :key="todo.id"> // khong nen code vay vi rat xau va ban code -->
          <li v-for="todo in doneTodos" :key="todo.id">
              {{ todo.title }}
          </li>
      </ul>
  </div>
</template>

<script>

export default {
    name: 'StatusBar',
    computed: {
        doneTodos () {
            return this.$store.state.todos.filter(todo => todo.completed)
        }
    }
}
</script>

<style>
.status-bar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
</style>