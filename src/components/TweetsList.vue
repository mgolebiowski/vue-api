<script>
import TweetItem from "@/components/TweetItem";
export default {
  name: "TweetsList",
  props: { tweets: Array },
  data () {
    return {
    }
  },
  components: {
    "tweet-item": TweetItem
  }
}
</script>

<template>
  <div>
    <tweet-item
          v-for="tweet in tweets"
          v-bind:key="tweet.id"
          v-bind:tweet="tweet">
    </tweet-item>
  </div>
</template>
