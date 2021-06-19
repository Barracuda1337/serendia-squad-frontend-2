<template>
  <div class="bg-c2">
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
        <!-- Nav Items -->
        <router-link
          v-for="(nav, i) in navs"
          :key="i"
          :to="nav.to"
          class="
            flex
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
        </router-link>
        <template v-if="active">
          <router-link
            v-for="(nav, i) in activeNavs"
            :key="i"
            :to="nav.to"
            class="
              flex
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
          </router-link>
        </template>
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
            md:block
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
            block
            h-14
            w-full
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { name: "Kodlar", to: "/codes" },
        { name: "Yetkili Başvurusu", to: "/authorized" },
        { name: "Servisler", to: "/services" },
        { name: "S.S.S.", to: "/information" },
      ],
      activeNavs: [
        {
          name: "Giriş Yap",
          to: "/login",
        },
      ],
      active: false,
    };
  },
};
</script>
