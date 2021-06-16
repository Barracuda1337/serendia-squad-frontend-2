<template>
  <div id="app">
    <NavbarComponent />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  components: {
    NavbarComponent
  }
}
</script>
