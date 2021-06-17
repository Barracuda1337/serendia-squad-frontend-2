<template>
  <div id="app" class="h-full">
    <OverlayComponent :active="active" />
    <NavbarComponent />
    <div class="container">
      <router-view @overlay="active = $event" />
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import OverlayComponent from "@/components/OverlayComponent.vue";

export default {
  data() {
    return {
      active: true,
    };
  },

  components: {
    NavbarComponent,
    OverlayComponent,
  },
  
  watch: {
    $route() {
      this.active = true;
    },
  },
};
</script>
