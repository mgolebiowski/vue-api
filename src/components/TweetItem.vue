<script>
export default {
  name: "TweetItem",
  props: {
    tweet: Object
  },
  methods: {
    processDate (date) {
      let dateObj = new Date(date);
      return dateObj.toGMTString();
    }
  }
}
</script>

<template>
  <div>
    <h3>{{tweet.author}}</h3>
    <p>{{tweet.content}}</p>
    <p class="to-right">{{processDate(tweet.date)}}</p>
    <hr>
  </div>
</template>

<style>
  p.to-right{
    text-align: right;
  }
</style>


