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

<style lang="scss">
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #5c5470;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
