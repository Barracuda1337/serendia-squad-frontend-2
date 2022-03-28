<template>
  <div class="home flex items-center flex-col w-full h-full text-center">
    <div class="header flex flex-col w-full items-center my-6">
      <img class="rounded-3xl" src="../assets/serendiaSquad.gif" height="200px" width="200px" />
      <h1 class="text-4xl font-bold mt-4">Serendia Squad</h1>
      <p class="mt-2 w-4/6 md:w-full text-xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>

    <div class="lg:flex lg:flex-row md:flex md:flex-row sm:flex-col w-full my-16">
      <div v-for="i in 3" :key="i" class="lg:w-2/6 md:w-3/6 sm:w-full p-4">
        <div
          class="bg-c2 bg-opacity-50 rounded-xl p-4"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias repellat dolore asperiores in praesentium hic illum. Distinctio, commodi, facilis dolore quae non doloremque ullam natus, corporis a aliquid sequi!</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$emit("overlay", false);
  }
}
</script>
