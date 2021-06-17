<script>
import Vue from "vue";

export default Vue.mixin({
  mounted() {
    let results = document.querySelectorAll(".tutorial");
    results.forEach((result) => result.classList.add("tutorial-ring"));
  },
});
</script>