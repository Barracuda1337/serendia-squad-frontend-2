<template>
  <div
    class="absolute w-48 -mt-2 bottom-0 left-0 transform translate-y-full"
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