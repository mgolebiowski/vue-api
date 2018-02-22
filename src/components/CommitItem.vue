<script>
export default {
  name: 'CommitItem',
  props: {
    comps: Array,
    compsProps: Object
  },
  components: {},
  render (h) {

    const compRenderArray = this.comps.reduce((acc, comp) => {
      acc.push(
        h(comp.name, {
          props: this.compsProps[comp.name]
        })
      );
      return acc;
    }, []);

    compRenderArray.push(h("hr"));
    return h("div", {}, compRenderArray);
  }
}
</script>
<style>
  p.to-right{
    text-align: right;
  }
</style>


