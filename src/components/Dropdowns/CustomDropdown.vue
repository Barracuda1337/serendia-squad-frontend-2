<template>
  <div
    class="sm:absolute sm:-mt-2 sm:bottom-0 sm:left-0 sm:transform sm:translate-y-full"
    v-bind:class="{ hidden: !this.status }"
  >
    <div class="py-2 bg-c2 rounded-lg">
      <a
        v-for="(item, i) in items"
        :key="i"
        class="block px-4 py-2 rounded hover:bg-c3"
        >{{ item }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "status"],
};
</script>