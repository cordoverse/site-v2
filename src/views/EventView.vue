<template>
  <div>
    <BannerCommon
      banner-image="events/background-astronaut.jpg"
      :banner-text="event.title"
    />
    <v-container class="custom-container">
      <v-row class="pt-4">
        <v-col cols="12" lg="4" md="4">
          <v-row>
            <v-col cols="12">
              <v-card class="pa-4 backgroundDark">
                <v-card-title>
                  <h3>
                    {{ event.title }}
                  </h3>
                </v-card-title>
                <v-card-text>
                  <p>
                    Fechas:
                    <span class="pl-1" v-for="(date, i) in event.dates" :key="i"
                      >{{ date }}
                    </span>
                  </p>
                  <p>
                    Ubicacion: <strong>{{ event.venue.name }}</strong>
                  </p>
                  <p>
                    Direccion: <strong>{{ event.venue.address }}</strong>
                  </p>
                  <v-divider class="my-4"></v-divider>
                  <p>Organizan:</p>
                  <ul>
                    <li v-for="(organizer, i) in event.organizers" :key="i">
                      <strong>{{ organizer }}</strong>
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col v-if="!isMobile" cols="12">
              <v-card class="backgroundDark">
                <v-card-text class="d-flex justify-center align-center">
                  <img
                    class="mr-8"
                    style="max-height: 50px"
                    src="@/assets/images/poap.svg"
                    alt=""
                  />
                  <h4>Este evento incluye un POAP!</h4>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col v-if="!isMobile" cols="12">
              <v-card class="backgroundDark">
                <GmapMap
                  :center="{ lat: -31.4130179, lng: -64.188848 }"
                  :zoom="11"
                  map-type-id="terrain"
                  style="width: 100%; height: 250px"
                  class="event-map"
                  :options="{
                    zoomControl: true,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: true,
                    disableDefaultUi: false,
                  }"
                >
                  <GmapMarker
                    :position="event.venue.coordinates"
                    :clickable="true"
                  />
                </GmapMap>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="8" md="8">
          <v-row>
            <v-col cols="12">
              <v-card class="backgroundDark pa-4">
                <v-card-title>
                  <h3 style="word-break: break-word">
                    Nos re bancan en este proyecto:
                  </h3>
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col
                      cols="6"
                      lg="4"
                      md="4"
                      sm="4"
                      v-for="(sponsor, i) in event.sponsors"
                      :key="i"
                    >
                      <a :href="sponsor.url" target="_blank">
                        <img
                          style="min-width: 100px"
                          :src="require('@/assets/images/' + sponsor.imageUrl)"
                          alt=""
                        />
                      </a>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              v-for="(particularEvent, i) in event.events"
              :key="i"
            >
              <v-card class="backgroundDark pa-4">
                <v-card-title
                  style="word-break: break-word"
                  class="d-flex justify-space-between align-center"
                >
                  <h3 style="overflow-wrap: break-word">
                    {{ particularEvent.name }}
                  </h3>
                  <v-chip>{{ particularEvent.chip }}</v-chip>
                </v-card-title>
                <v-card-text class="pb-0">
                  Horario: {{ particularEvent.startTime }} -
                  {{ particularEvent.endTime }}
                </v-card-text>
                <v-card-text>
                  <p>{{ particularEvent.description }}</p>
                </v-card-text>
                <v-card-text v-if="particularEvent.speakers">
                  Expositores:
                  <v-chip-group column>
                    <v-chip
                      v-for="(speaker, i) in particularEvent.speakers"
                      :key="i"
                      >{{ speaker }}</v-chip
                    >
                  </v-chip-group>
                </v-card-text>
                <v-card-actions class="d-flex justify-end">
                  <v-btn
                    :href="particularEvent.inscriptionUrl"
                    target="_blank"
                    color="primary"
                  >
                    Inscribirse
                    <v-icon right class="mr-0">mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card></v-col
            >
            <v-col v-if="isMobile" cols="12">
              <v-card class="backgroundDark">
                <v-card-text class="d-flex justify-center align-center">
                  <img
                    class="mr-8"
                    style="max-height: 50px"
                    src="@/assets/images/poap.svg"
                    alt=""
                  />
                  <h4>Este evento incluye un POAP!</h4>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col v-if="isMobile" cols="12">
              <v-card class="backgroundDark">
                <GmapMap
                  :center="{ lat: -31.4130179, lng: -64.188848 }"
                  :zoom="11"
                  map-type-id="terrain"
                  style="width: 100%; height: 250px"
                  class="event-map"
                  :options="{
                    zoomControl: true,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: true,
                    disableDefaultUi: false,
                  }"
                >
                  <GmapMarker
                    :position="event.venue.coordinates"
                    :clickable="true"
                  />
                </GmapMap>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BannerCommon from "@/components/common/BannerCommon.vue";

export default {
  data() {
    return {
      event: {
        title: "Finde Cripto CBA",
        dates: ["14/05/2022", "15/05/2022"],
        venue: {
          name: "Bithouse",
          address: "José Roque Funes 1791, Córdoba",
          coordinates: {
            lat: -31.371749538198785,
            lng: -64.23763980174489,
          },
        },
        organizers: ["Cordoverse", "Cripto Ecosystem", "Mujeres en Cripto"],
        sponsors: [
          {
            name: "IbexPay",
            imageUrl: "sponsors/ibex-pay.png",
            url: "https://ibexmercado.com/",
          },
          {
            name: "Paydece",
            imageUrl: "sponsors/paydece.png",
            url: "https://paydece.io/",
          },
          {
            name: "Bitlogic",
            imageUrl: "sponsors/bitlogic.png",
            url: "https://www.bitlogic.io/",
          },
          {
            name: "Defy Education",
            imageUrl: "sponsors/defy-education.png",
            url: "https://www.defyeducation.com/",
          },
          {
            name: "Capy Army",
            imageUrl: "sponsors/capy-army.png",
            url: "https://twitter.com/capyarmy",
          },
          {
            name: "Zeta Chain",
            imageUrl: "sponsors/zeta-chain.png",
            url: "https://www.zetachain.com/",
          },
          {
            name: "CTF Capital",
            imageUrl: "sponsors/ctf-capital.png",
            url: "https://www.ctf.capital/",
          },
          {
            name: "CashCow Protocol",
            imageUrl: "sponsors/cashcow.png",
            url: "https://cashcowprotocol.com/",
          },
        ],
        events: [
          {
            name: "Workshop: Smart contract para mortales",
            description:
              "Acércate a conocer los conceptos fundamentales para que puedas empezar a desarrollarlos en Blockchain. EXCLUSIVO DEVELOPERS!",
            date: "14/05/2022",
            startTime: "11:00",
            endTime: "16:00",
            chip: "Dia 1 - 14/05",
            speakers: ["German Kober", "Santi Moreno", "Simonethg"],
            inscriptionUrl: "https://tinyurl.com/2hatnf2m",
          },
          // {
          //   name: "Desayuno de Mujeres en Cripto",
          //   description:
          //     "Una Expo donde vas a poder recorrer, conocer y conversar con los founders de diferentes proyectos y comunidades del mundo Blockchain.",
          //   date: "14/05/2022",
          //   startTime: "11:00",
          //   endTime: "14:00",
          //   chip: "Dia 2 - 15/05",
          //   inscriptionUrl: "https://tinyurl.com/mwsd5byf",
          // },
          {
            name: "Expo Blockchain",
            description: `Una Expo donde vas a poder recorrer y conocer  diferentes proyectos y comunidades del mundo Blockchain.
              El formato consistirá en una serie de stands con los diferentes proyectos cryptos exponiendo. Además un Espacio dedicado charlas, mentorías y talleres que te esperan.
              `,
            date: "14/05/2022",
            startTime: "13:00",
            endTime: "20:00",
            chip: "Dia 2 - 15/05",
            speakers: [
              "Tok´n Show",
              "CryptoProde",
              "MDEX LATAM",
              "Birlce",
              "Fútbol Eterno",
              "Wonderprize",
              "Criptolab",
              "PayDece",
              "Ibex Pay",
              "Zeta Chain",
            ],
            inscriptionUrl: "https://tinyurl.com/ycfvvvbn",
          },
        ],
      },
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },
  components: { BannerCommon },
  mounted() {
    this.$title = this.event.title;
  },
};
</script>

<style lang="scss" scoped>
.event-map {
  overflow: hidden;
}
p {
  margin-bottom: 5px;
}
</style>
