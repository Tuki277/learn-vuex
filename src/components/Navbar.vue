<template>
  <div class="narbar">
    <h1>My VueX APP</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
        <li v-if="auth.isAuthenticated">
          Total todos: {{ todos.length }}
          <button @click="toggle_auth">Logout</button>
        </li>
        <button v-else @click="toggle_auth">Login</button>
    </ul>
  </div>
</template>

<script>

import { mapMutations, mapState } from "vuex";

export default {
  name: "Navbar",
  computed: mapState(["todos", "auth"]),
  methods: mapMutations(['toggle_auth'])
};
</script>

<style>
.navbar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>