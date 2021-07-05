<template>
  <div id="app" class="h-full">
    <OverlayComponent class="z-10" :active="active" />
    <ToastComponent :list="list" align="top-right" />
    <NavbarComponent />
    <DefaultModal />
    <div class="lg:container md:container sm:container sm:max-w-full sm:px-4">
      <router-view
        :user="user"
        @add:toast="list.push($event)"
        @overlay="active = $event"
      />
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import OverlayComponent from "@/components/OverlayComponent.vue";
import ToastComponent from "@/components/ToastComponent.vue";
import DefaultModal from "@/components/Modals/DefaultModal.vue";

export default {
  data() {
    return {
      active: true,
      list: [],
      user: {
        authorized: true,
      },
    };
  },

  components: {
    NavbarComponent,
    OverlayComponent,
    ToastComponent,
    DefaultModal,
  },

  watch: {
    $route() {
      this.active = true;
    },
  },
};
</script>
