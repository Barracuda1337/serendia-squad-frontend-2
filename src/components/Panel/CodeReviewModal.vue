<template>
  <div
    @click.self="$emit('close', null)"
    class="fixed bg-black bg-opacity-70 h-full w-full z-50 flex items-center justify-center transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <div
      class="py-6 px-4 bg-c3 rounded overflow-y-scroll"
      style="min-width: 40%; max-width: 90%; max-height: 80%"
    >
      <h1 class="text-2xl font-medium mb-8">İnceleme Bekleyen Kodlar</h1>
      <section class="flex flex-col">
        <div
          v-for="(code, i) in codes"
          :key="i"
          @click="code.active = !code.active"
          class="code-review-card w-full my-1 py-2 px-4 items-center cursor-pointer transition bg-c2 bg-opacity-20 hover:bg-opacity-30 rounded flex flex-col"
          v-bind:class="{ active: code.code.active }"
        >
          <div class="flex flex-row w-full h-12 justify-between items-center h-full">
            <img class="w-8 h-8 object-fit rounded-full" :src="code.user.avatar" alt />
            <span class="font-medium">{{ code.user.username }}</span>
            <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </div>
          <div class="flex flex-col text-left w-full mt-2" v-bind:class="{ hidden: !code.active }">
            <ul>
              <li class="py-2 flex flex-row items-center">
                <svg class="mr-2" style="width: 24px; height: 24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z"
                  />
                </svg>
                <span>{{ code.code.name }}</span>
              </li>
              <li class="py-2 flex flex-row items-center">
                <svg class="mr-2" style="width: 24px; height: 24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z"
                  />
                </svg>
                <span>{{ code.code.tags.join(", ") }}</span>
              </li>
              <li class="py-2 flex flex-row items-center">
                <svg class="mr-2" style="width: 24px; height: 24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 7V13H7V11.5H11V7H12.5Z"
                  />
                </svg>
                <span>{{ code.code.date.toLocaleDateString() }}</span>
              </li>
              <li class="py-2">
                <button class="py-2 px-4 mr-2 bg-blue-500 hover:bg-blue-600 rounded">İncele</button>
                <button class="py-2 px-4 mr-2 bg-red-500 hover:bg-red-600 rounded">Reddet</button>
                <button class="py-2 px-4 bg-red-600 hover:bg-red-700 rounded">Yasakla</button>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full mt-4 flex justify-center flex-row">
          <button
            @click="updatePage(page.currentPage - 1)"
            class="p-2 mr-2 rounded-l text-center w-10 text-xl bg-c2 bg-opacity-20 hover:bg-opacity-30 text-bold focus:outline-none"
            v-text="'<'"
          ></button>
          <button
            v-for="(v, i) in page.pages"
            :key="i"
            class="text-center mx-1 p-2 w-10 text-xl text-bold bg-c2 bg-opacity-20 hover:bg-opacity-30 focus:outline-none"
            v-bind:class="{ 'bg-c3': v == page.currentPage }"
            @click="updatePage(v)"
            v-text="v"
          ></button>
          <button
            @click="updatePage(page.currentPage + 1)"
            class="p-2 ml-2 w-10 rounded-r text-center text-xl text-bold bg-c2 bg-opacity-20 hover:bg-opacity-30 focus:outline-none"
            v-text="'>'"
          ></button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Pagination from "@/services/Pagination.js";

export default {
  props: ["select"],
  data() {
    return {
      page: null,
      codes: [
        {
          active: false,
          user: {
            username: "Alosha#3779",
            avatar:
              "https://cdn.discordapp.com/avatars/558016135052787773/0c3472678fd7ff9d2c95452a58ce28b0.webp?size=2048",
          },
          code: {
            name: "Avatar Komut",
            tags: ["JavaScript", "Bot"],
            date: new Date(Date.now()),
          },
        },
      ],
    };
  },
  async mounted() {
    this.page = Pagination(200, 1, 7, 7);
  },

  methods: {
    updatePage(newPage) {
      this.page = Pagination(200, newPage, 7, 7);
    },
  },
};
</script>

<style lang="scss" scoped>
.code-review-card {
  &.active {
    div svg {
      transform: rotate(180deg);
    }
  }
}
</style>
