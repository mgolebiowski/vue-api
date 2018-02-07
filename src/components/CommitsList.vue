<script>
import CommitItem from "@/components/CommitItem";
export default {
  name: "CommitsList",
  props: { commits: Array },
  components: {
    "commit-item": CommitItem
  }
}
</script>

<template>
  <div>
    <commit-item
          v-for="commit in commits"
          v-bind:key="commit.id"
          v-bind:commit="commit">
    </commit-item>
  </div>
</template>
