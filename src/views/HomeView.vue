<template>
  <div class="banner">
    <v-container class="custom-container">
      <v-row class="d-flex align-center">
        <!-- <v-col cols="12" lg="6" md="6" class="pa-4">
          <h1>Primera comunidad crypto de Córdoba</h1>
          <p class="my-4">
            Desde Cordoverse tenemos como objetivo conectar a la sociedad de la
            Provincia de Córdoba con el conocimiento y funcionamiento de las
            nuevas tecnologías digitales aplicadas en nuestra vida cotidiana que
            generan nuevas prácticas para mejorar nuestra calidad de vida y un
            mejor entendimiento del mundo.
          </p>
          <v-btn color="primary">Quiero ser parte</v-btn>
        </v-col>
        <v-col class="d-flex align-center justify-center">
          <img class="logo" src="@/assets/images/banner.png" alt="" />
        </v-col> -->
        <v-col class="text-center">
          <img
            class="banner-image"
            src="../assets/images/logo-cordoverse-square.png"
            alt=""
          />
          <h1>Comunidad crypto de Córdoba (🇦🇷)</h1>
          <p>
            Desde Cordoverse tenemos como objetivo conectar a la sociedad de la
            Provincia de Córdoba con el conocimiento y funcionamiento de las
            nuevas tecnologías digitales aplicadas en nuestra vida cotidiana que
            generan nuevas prácticas para mejorar nuestra calidad de vida y un
            mejor entendimiento del mundo.
          </p>
          <v-btn class="mt-4" x-large color="primary" to="/events">Proximos Eventos</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  title: "Home",
  components: {},
};
</script>

<style scoped>
.banner {
  min-height: 80vh;
  display: flex;
  align-items: center;
}
.banner-image {
  margin: -50px 0;
  width: calc(250px + 5rem)
}
.banner h1 {
    font-size: calc(20px + 1.5vw)
}
.banner p {
    font-size: calc(16px + 0.4vw)
}
</style>
