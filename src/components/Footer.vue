<template>
  <v-footer padless class="d-block">
    <v-card class="backgroundDark darken-1" flat tile>
      <v-container class="custom-container">
        <v-row class="d-flex align-center">
          <v-col cols="auto" class="align-center d-none d-lg-block">
            <v-card-title>
              <strong class="subheading"
                >En el mundo cripto, las comunidades lo son todo.
                Conectemos!</strong
              >
            </v-card-title></v-col
          >
          <v-col class="d-flex" :class="$vuetify.breakpoint.mobile ? 'justify-center' : 'justify-end'">
            <v-btn
              v-for="icon in socialNetworks"
              :href="icon.url"
              target="blank"
              :key="icon"
              class="mx-4"
              dark
              icon
            >
              <v-icon size="24px">
                {{ icon.icon }}
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card color="backgroundDark darken-2" flat tile>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Cordoverse</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterCommon",
  data() {
    return {
      socialNetworks: [
        {
          name: "Discord",
          url: "https://discord.gg/uu3qXPBUNF",
          icon: "mdi-discord",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/Cordoverse",
          icon: "mdi-twitter",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/cordoverse/",
          icon: "mdi-instagram",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
