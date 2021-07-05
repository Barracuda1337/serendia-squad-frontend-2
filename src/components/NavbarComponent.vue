<template>
  <nav class="bg-c2">
    <div
      class="
        navbar
        container
        mb-4
        px-4
        flex flex-col
        sm:flex-row
        w-full
        items-center
      "
    >
      <router-link
        to="/"
        class="
          w-full
          mt-2
          sm:mt-0
          sm:w-max
          text-center
          cursor-pointer
          flex-shrink
          blank
          mr-2
          font-semibold
          text-xl
        "
      >
        Serendia Squad
      </router-link>

      <div
        class="flex-none w-full sm:w-max sm:flex items-center flex-shrink"
        v-bind:class="{ hidden: !active }"
      >
        <template v-for="(nav, i) in navs">
          <router-link v-if="!nav.dropdown" v-bind:key="i" :to="nav.to">
            <div
              class="
                flex flex-col
                items-center
                cursor-pointer
                p-4
                transition
                h-14
                hover:bg-c3
                hover:text-c4
                w-full
                sm:block
                sm:w-max
              "
            >
              {{ nav.name }}
            </div>
          </router-link>
          <div v-bind:key="i" v-else>
            <div
              v-bind:class="{ relative: nav.dropdown }"
              v-on:click="nav.active = !nav.active"
              class="
                flex flex-col
                items-center
                cursor-pointer
                p-4
                transition
                h-auto
                sm:h-14
                hover:bg-c3
                hover:text-c4
                w-full
                sm:block
                sm:w-max
              "
            >
              <div class="flex items-center justify-between">
                {{ nav.name }}
                <svg
                  v-if="!nav.active"
                  style="width: 24px; height: 24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                  />
                </svg>
                <svg
                  v-else
                  style="width: 24px; height: 24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
                  />
                </svg>
              </div>
              <Dropdown
                v-model="dropdown"
                class="w-full sm:w-48"
                v-if="nav.dropdown"
                :status="nav.active"
                :items="nav.items || []"
              />
            </div>
          </div>
        </template>
        <!-- Nav Items -->
      </div>
      <div class="flex flex-grow justify-end">
        <div
          class="
            flex
            items-center
            cursor-pointer
            p-4
            transition
            h-14
            hover:bg-c3
            hover:text-c4
            hidden
            sm:block
          "
        >
          Giriş Yap
        </div>
        <div
          @click="active = !active"
          class="
            nav
            flex
            items-center
            cursor-pointer
            p-4
            transition
            hover:bg-c3
            hover:text-c4
            h-14
            w-full
            block
            sm:w-max
            sm:hidden
          "
        >
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
            />
          </svg>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Dropdown from "@/components/Dropdowns/CustomDropdown.vue";

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      dropdown: null,
      navs: [
        {
          name: "Kodlar",
          to: "/codes",
          dropdown: true,
          items: ["JavaScript", "HTML/CSS", "Diğer"],
          active: false,
        },
        {
          name: "Özel Kodlar",
          to: "/codes",
          dropdown: true,
          items: ["Hazır Altyapılar", "Projeler", "Diğer"],
          active: false,
        },
        {
          name: "Servisler",
          to: "/services",
          dropdown: true,
          items: ["Uptime", "Kod Çevirici", "Araçlar"],
          active: false,
        },
        { name: "S.S.S.", to: "/faq", dropdown: false, active: false },
      ],
      active: false,
    };
  },

  watch: {
    dropdown(n) {
      this.$route.push(n);
    }
  }

};
</script>
