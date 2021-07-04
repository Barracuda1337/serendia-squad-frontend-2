<template>
  <div class="flex flex-col items-center">
    <div id="page" class="my-6 text-center">
      <h1 class="text-5xl font-semibold uppercase mb-2">Lorem Ipsum</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam inventore
        voluptatibus sint architecto illo adipisci dolore rerum sapiente ipsa
        eaque corporis nulla, placeat ratione nobis quo a dicta blanditiis. In?
      </p>
    </div>
    <!-- Search Box -->
    <div id="search" class="flex flex-col items-center my-2">
      <CodeSearchComponent class="tutorial" @update:search="search = $event" />
      <div
        id="shortcuts"
        class="mt-2 text-center justify-center flex flex-wrap w-6/6"
      >
        <div
          class="
            p-2
            bg-c2
            cursor-pointer
            transition
            hover:bg-c3
            transform
            hover:scale-105
            rounded
            m-1
          "
        >
          En Çok Beğenilen
        </div>
        <div
          class="
            p-2
            bg-c2
            cursor-pointer
            transition
            hover:bg-c3
            transform
            hover:scale-105
            rounded
            m-1
          "
        >
          En Çok Yorumlanan
        </div>
        <div
          class="
            p-2
            bg-c2
            cursor-pointer
            transition
            hover:bg-c3
            transform
            hover:scale-105
            rounded
            m-1
          "
        >
          En Çok Görüntülenen
        </div>
        <div
          class="
            p-2
            bg-c2
            cursor-pointer
            transition
            hover:bg-c3
            transform
            hover:scale-105
            rounded
            m-1
          "
        >
          En Yeni
        </div>
        <div
          class="
            p-2
            bg-c2
            cursor-pointer
            transition
            hover:bg-c3
            transform
            hover:scale-105
            rounded
            m-1
          "
        >
          En Eski
        </div>
      </div>
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
    <div class="my-4 flex flex-wrap w-full justify-center">
      <button @click="page -= 1" class="p-2 rounded-l text-center bg-c2 w-10 text-xl hover:bg-c3 text-semibold focus:outline-none" v-text="'<'"></button>
      <button v-for="i in Math.max(page * 7 - 7, page * 7, 1)" :key="i" class="text-center p-2 w-10 hover:bg-c3 text-xl text-semibold bg-c2 focus:outline-none" v-text="i"></button>
      <button @click="page += 1" class="p-2 w-10 rounded-r text-center bg-c2 text-xl hover:bg-c3 text-semibold focus:outline-none" v-text="'>'"></button>
    </div>
  </div>
</template>

<script>
import CodeSearchComponent from "@/components/Code/CodeSearchComponent.vue";
import CodeCardComponent from "@/components/Code/CodeCardComponent.vue";

import CodeService from "@/services/CodeService.js";

export default {
  data() {
    return {
      search: null,
      page: 1,
      pageCount: 200,
    };
  },

  methods: {
    async getCodes() {
      return CodeService.getCodes(this.page);
    },
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
