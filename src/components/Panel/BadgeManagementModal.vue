<template>
  <div
    @click.self="$emit('close', null)"
    class="fixed bg-black bg-opacity-70 h-full w-full z-50 flex items-center justify-center transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <div
      class="py-6 px-4 bg-c3 rounded overflow-y-scroll"
      style="min-width: 40%; max-width: 90%; max-height: 80%"
    >
      <h1 class="text-2xl font-medium mb-8">Rozetler</h1>
      <section class="flex flex-col">sa</section>
    </div>
  </div>
</template>

<script>
export default {
  props: ["select"],
};
</script>
