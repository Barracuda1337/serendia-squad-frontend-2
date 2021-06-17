<template>
  <div class="flex flex-col items-center">
    <div id="page" class="my-6 text-center">
      <h1 class="text-5xl font-semibold uppercase mb-2">Kodlar</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam inventore
        voluptatibus sint architecto illo adipisci dolore rerum sapiente ipsa
        eaque corporis nulla, placeat ratione nobis quo a dicta blanditiis. In?
      </p>
    </div>
    <!-- Search Box -->
    <div id="search" class="my-2">
      <CodeSearchComponent class="tutorial" @update:search="search = $event" />
    </div>

    <div id="results" class="flex flex-wrap w-full">
      <router-link
        v-for="i in 20"
        :key="i"
        tag="div"
        to="/codes/code/1"
        class="lg:w-2/6 md:w-3/6 sm:w-6/6 p-4"
      >
        <CodeCardComponent />
      </router-link>
    </div>
  </div>
</template>

<script>
import CodeSearchComponent from "@/components/Code/CodeSearchComponent.vue";
import CodeCardComponent from "@/components/Code/CodeCardComponent.vue";

export default {
  data() {
    return {
      search: null,
    };
  },

  mounted() {

    this.$emit("overlay", false);
  },

  components: {
    CodeSearchComponent,
    CodeCardComponent,
  },
};
</script>
