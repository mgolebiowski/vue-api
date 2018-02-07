<script>
import TweetsList from "@/components/TweetsList"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isNotReady: true,
      tweets: []
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
        this.tweets.push(newObj);
      });
      this.isNotReady = false;
    });
  },
  components: {
    "tweets-list": TweetsList
  }
}
</script>

<template>
  <div>
    <h1>{{msg}} | Commits</h1>
    <h3 v-if="isNotReady">Please wait...</h3>
    <tweets-list v-bind:tweets="tweets"></tweets-list>
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
