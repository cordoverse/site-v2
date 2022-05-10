<template>
  <div>
    <Banner banner-image="events-banner.jpeg" banner-text="Proximos Eventos" />
    <v-container class="custom-container">
      <v-row class="pt-4">
        <v-col
          cols="12"
          lg="4"
          md="3"
          v-for="(event, i) in eventsList"
          :key="i"
        >
          <v-card class="backgroundDark">
            <img
              class="event-image"
              :src="require(`@/assets/images/${event.image}`)"
              alt=""
            />
            <div class="pa-4">
              <v-card-title>{{ event.name }}</v-card-title>
              <v-card-text>
                <span v-for="(eventDate, i) in event.dates" :key="i"
                  >{{ eventDate }}
                  <span class="mx-1" v-if="event.dates.length - 1 !== i"
                    >-</span
                  >
                </span>
              </v-card-text>
              <v-card-text>
                {{ event.description }}
              </v-card-text>
              <v-card-actions class="d-flex justify-end">
                <v-btn to="/event" class="px-4" color="primary"
                  >Ver evento
                  <v-icon right class="mr-0">mdi-chevron-right</v-icon></v-btn
                >
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Banner from "@/components/common/BannerCommon.vue";
export default {
  title: "Eventos",
  components: {
    Banner,
  },
  data() {
    return {
      eventsList: [
        {
          name: "Finde Cripto CBA",
          description:
            "Desde el CORDOVERSE, con más de 300 miembros, CRIPTOECOSYSTEM desde CABA y MUJERES EN CRITPO nos hemos unido sin fines de lucro para potenciar proyectos Blockchain en la comunidad con un .TREMENDO EVENTO PRESENCIAL EN LA CAPITAL CORDOBESA!! ",
          dates: ["14 de mayo", "15 de mayo"],
          image: "events/findecriptobanner.jpg",
        },
      ],
    };
  },
  mounted(){
    if(this.eventsList.length === 1){
      this.$router.push("/event")
    }
  }
};
</script>

<style lang="scss" scoped>
.event-image {
  max-width: 100%;
}
</style>
