<script>
import CommitsList from "@/components/CommitsList"
export default {
  name: 'Commits',
  data () {
    return {
      msg: 'Vue.js App',
      show: true,
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
      this.show = false;
    });
  },
  render: function(createElement){
    const h = createElement;
    let elements = [];
    elements.push(h('h1', `${this.msg} | Commits`));
    elements.push(h('h3', {directives: [{name: 'show', value: this.show, expression: 'show'}],}, `Please wait...`));
    elements.push(h(CommitsList, {props: { commits: this.commits} }));

    return h('div', {}, elements)
  },
  components: {
    "commits-list": CommitsList
  }
}
</script>

<style lang="css" scoped>
  div{
    width:550px;
    margin: 0 auto;
  }
  h1, h3{
    text-align: center;
  }
</style>
