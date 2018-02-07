<script>
import CommitItem from "@/components/CommitItem";
export default {
  name: "CommitsList",
  props: { commits: Array },
  data () {
    return {
      paginate: ['commitsPag']
    }
  },
  components: {
    "commit-item": CommitItem
  }
}
</script>

<template>
  <div>
    <paginate-links for="commitsPag" :show-step-links="true"></paginate-links>
    <paginate
      ref="paginator"
      name="commitsPag"
      :list="commits"
      :per="5"
      tag="div">
      <commit-item
            v-for="commit in paginated('commitsPag')"
            v-bind:key="commit.id"
            v-bind:commit="commit">
      </commit-item>
    </paginate>
    <span v-if="$refs.paginator">
      Viewing {{$refs.paginator.pageItemsCount}} results
    </span>
  </div>
</template>


<style>
  ul.paginate-links{
    list-style: none;
    text-align: center;
  }
  ul.paginate-links li{
    display: inline-block;
    width: 50px;
  }
  ul.paginate-links > li.active > a{
    font-weight: bold;
  }
</style>

