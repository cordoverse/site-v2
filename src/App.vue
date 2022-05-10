<template>
  <v-app>
    <Navbar />
    <v-main class="background pb-8">
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default { components: { Navbar, Footer } };
</script>

