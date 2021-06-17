<template>
  <div
    ref="idLoader"
    class="w-full h-full absolute bg-c2 transition bg-opacity-100"
  >
    <div class="flex w-full h-full items-center justify-center">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
  },

  methods: {
    async toggle(state) {
      if (state == true) {
        this.$refs.idLoader.classList.remove("hidden");
        this.$refs.idLoader.classList.remove("opacity-0");
      } else {
        this.$refs.idLoader.classList.add("opacity-0");
        await new Promise((resolve) => setTimeout(() => resolve(1), 500));
        this.$refs.idLoader.classList.add("hidden");
      }
    },
  },

  async mounted() {
    this.toggle(this.active);
  },

  watch: {
    active(value) {
      this.toggle(value);
    },
  },
};
</script>
