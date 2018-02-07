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
      response.body.forEach((Obj) => {
        var newObj = {};
        newObj.id = Obj["sha"];
        newObj.author = Obj["commit"]["author"]["name"];
        newObj.content = Obj["commit"]["message"];
        newObj.date = Obj["commit"]["author"]["date"];
        this.commits.push(newObj);
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
