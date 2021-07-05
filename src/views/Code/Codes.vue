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
    <div id="search" class="w-full flex flex-col items-center my-2">
      <CodeSearchComponent class="tutorial" @update:search="search = $event" />
      <div
        id="shortcuts"
        class="w-full mt-2 text-center justify-center flex flex-wrap w-6/6"
      >
        <button
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
            focus:outline-none
          "
        >
          En Çok Beğenilen
        </button>
        <button
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
            focus:outline-none
          "
        >
          En Çok Yorumlanan
        </button>
        <button
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
            focus:outline-none
          "
        >
          En Çok Görüntülenen
        </button>
        <button
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
            focus:outline-none
          "
        >
          En Yeni
        </button>
        <button
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
            focus:outline-none
          "
        >
          En Eski
        </button>
        <button
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
            focus:outline-none
          "
        >
          En Son Güncellenen
        </button>
        <button
          v-if="user"
          class="
            p-2
            bg-green-600
            cursor-pointer
            transition
            hover:bg-green-700
            transform
            hover:scale-105
            rounded
            m-1
            focus:outline-none
            justify-self-stretch
          "
        >
          Kod Paylaş
        </button>
      </div>
    </div>

    <div id="results" class="flex flex-wrap w-full">
      <router-link
        v-for="i in 20"
        :key="i"
        tag="div"
        to="/codes/code/1"
        class="sm:w-6/6 md:w-3/6 lg:w-2/6 p-4"
      >
        <CodeCardComponent />
      </router-link>
    </div>
    <div class="my-4 flex flex-wrap w-full justify-center">
      <button
        @click="updatePage(page.currentPage - 1)"
        class="
          p-2
          mr-2
          rounded-l
          text-center
          bg-c2
          w-10
          text-xl
          hover:bg-c3
          text-bold
          focus:outline-none
        "
        v-text="'<'"
      ></button>
      <button
        v-for="(v, i) in page.pages"
        :key="i"
        class="
          text-center
          mx-1
          p-2
          w-10
          hover:bg-c3
          text-xl text-bold
          bg-c2
          focus:outline-none
        "
        v-bind:class="{ 'bg-c3': v == page.currentPage }"
        @click="updatePage(v)"
        v-text="v"
      ></button>
      <button
        @click="updatePage(page.currentPage + 1)"
        class="
          p-2
          ml-2
          w-10
          rounded-r
          text-center
          bg-c2
          text-xl
          hover:bg-c3
          text-bold
          focus:outline-none
        "
        v-text="'>'"
      ></button>
    </div>
  </div>
</template>

<script>
import CodeSearchComponent from "@/components/Code/CodeSearchComponent.vue";
import CodeCardComponent from "@/components/Code/CodeCardComponent.vue";
import Pagination from "@/services/Pagination.js";

import CodeService from "@/services/CodeService.js";

export default {
  props: ["user"],
  data() {
    return {
      search: null,
      page: {
        currentPage: 1,
        pages: null,
      },
    };
  },

  methods: {
    async getCodes() {
      return CodeService.getCodes(this.page);
    },
    updatePage(newPage) {
      this.page = Pagination(200, newPage, 7, 7);
    },
  },

  mounted() {
    this.page = Pagination(200, 1, 7, 7);
    this.$emit("overlay", false);
  },

  components: {
    CodeSearchComponent,
    CodeCardComponent,
  },
};
</script>
