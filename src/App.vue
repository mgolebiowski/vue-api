<template>
  <div id="app">
    <Commits></Commits>
  </div>
</template>

<script>
import Commits from "@/components/Commits";
export default {
  name: 'App',
  components: {
    Commits
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
