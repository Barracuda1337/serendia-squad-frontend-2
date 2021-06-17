<template>
  <div id="app" class="h-full">
    <OverlayComponent :active="active" />
    <ToastComponent :list="list" align="top-right" />
    <NavbarComponent />
    <div class="container">
      <router-view @add:toast="list.push($event)" @overlay="active = $event" />
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import OverlayComponent from "@/components/OverlayComponent.vue";
import ToastComponent from "@/components/ToastComponent.vue";

export default {
  data() {
    return {
      active: true,
      list: []
    };
  },

  components: {
    NavbarComponent,
    OverlayComponent,
    ToastComponent,
  },
  
  watch: {
    $route() {
      this.active = true;
    },
  },
};
</script>
