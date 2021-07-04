<template>
  <div
    ref="modal"
    class="
      h-full
      w-full
      z-10
      fixed
      bg-black bg-opacity-75
      top-1/2
      right-1/2
      transform
      -translate-y-1/2
      translate-x-1/2
      flex
      items-center
      justify-center
      to-transparent
    "
    v-bind:class="{ hidden: !active }"
  >
    <div class="mx-4 my-2 p-4 bg-c3 rounded">
      <h1 class="text-3xl mb-2">
        {{ header }}
      </h1>
      <p>
        {{ description }}
      </p>
      <div class="mt-4 flex justify-center sm:justify-start">
        <div class="w-auto p-2">
          <button
            class="
              bg-green-600
              rounded
              p-2
              w-32
              hover:bg-green-700
              focus:outline-none
            "
            @click="yes()"
          >
            Evet
          </button>
        </div>
        <div class="w-auto p-2">
          <button
            class="
              bg-red-600
              rounded
              hover:bg-red-700
              focus:outline-none
              p-2
              w-32
            "
            @click="no()"
          >
            Hayır
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: null,
      description: null,
      currentId: null,
      active: false,
    };
  },
  methods: {
    no() {
      this.$emit(this.currentId, false);
      this.active = false;
    },
    yes() {
      this.$emit(this.currentId, true);
      this.active = false;
    },
  },
  mounted() {
    this.$on("modal", (id, header, description) => {
      this.active = false;
      this.header = header;
      this.description = description;
      this.currentId = id;
      this.active = true;
    });
  },
};
</script>