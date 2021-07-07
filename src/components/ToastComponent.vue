<template>
  <div
    class="flex flex-col fixed p-4"
    v-bind:class="{
      'top-2 right-2': align == 'top-right',
      'top-2 left-2': align == 'top-left',
      'bottom-2 right-2': align == 'bottom-right',
      'bottom-2 left-2': align == 'bottom-left',
    }"
  >
    <div
      v-for="(item, i) in list"
      :key="i"
      class="toast transition p-2 my-1 rounded"
      v-bind:class="{ ['bg-' + (item.color || 'black')]: true }"
    >
      <h1 class="text-xl font-semibold">{{ item.name }}</h1>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toast {
  animation-name: fade;
  animation-duration: 1s;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

<script>
export default {
  props: ["list", "align"],

  watch: {
    list() {
      let item = this.list[this.list.length - 1];
      setTimeout(async () => {
        this.list = this.list.splice(
          this.list.findIndex((e) => e == item),
          1
        );
      }, item.delay || 5000);
    },
  },
};
</script>
