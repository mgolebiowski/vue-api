<script>
export default {
  name: "CommitItem",
  props: {
    commit: Object
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
    <h3>{{commit.author}}</h3>
    <p>{{commit.content}}</p>
    <p class="to-right">{{processDate(commit.date)}}</p>
    <hr>
  </div>
</template>

<style>
  p.to-right{
    text-align: right;
  }
</style>


