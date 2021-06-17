<template>
  <div class="navbar bg-c2">
    <div
      class="container mb-4 h-14 px-4 flex w-full items-center justify-between"
    >
      <div class="flex items-center w-3/6 flex-shrink">
        <router-link
          to="/"
          class="cursor-pointer blank mr-2 font-semibold text-xl"
        >
          Serendia Squad
        </router-link>
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
          "
        >
          {{ nav.name }}
        </router-link>
      </div>
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
        "
      >
        Giriş Yap
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
    };
  },
};
</script>
