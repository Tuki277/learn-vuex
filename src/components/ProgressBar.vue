<template>
  <p class="progress-bar">Progess : {{ progress }} %</p>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ProgressBar',
    computed: mapGetters(['progress'])
}
</script>

<style>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}
</style>