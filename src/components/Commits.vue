<script>
import CommitsList from "@/components/CommitsList"
export default {
  name: 'Commits',
  data () {
    return {
      msg: 'Vue.js App',
      isNotReady: true,
      commits: []
    }
  },
  created () {
    this.$http.get("https://api.github.com/repos/mgolebiowski/cqrs_exploration/commits").then(response => {
      response.body.forEach((commit) => {
        this.commits.push(
          {
            id: commit["sha"],
            author: commit["commit"]["author"]["name"],
            content: commit["commit"]["message"],
            date: commit["commit"]["author"]["date"]
          }
        );
      });
      this.isNotReady = false;
    });
  },
  components: {
    "commits-list": CommitsList
  }
}
</script>

<template>
  <div>
    <h1>{{msg}} | Commits</h1>
    <h3 v-if="isNotReady">Please wait...</h3>
    <commits-list v-bind:commits="commits"></commits-list>
  </div>
</template>

<style lang="css" scoped>
  div{
    width:550px;
    margin: 0 auto;
  }
  h1, h3{
    text-align: center;
  }
</style>
