<template>
  <v-app-bar app color="backgroundDark">
    <v-container class="custom-container d-flex align-center">
      <router-link class="d-flex align-center" to="/"><img class="logo" src="@/assets/images/logo.svg" alt="" /></router-link>
      <v-spacer></v-spacer>
      <v-btn color="primary" to="/events">Eventos</v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
    name: "NavbarCommon"
};
</script>

<style lang="scss" scoped>
.logo {
  height: 40px;
}
</style>
