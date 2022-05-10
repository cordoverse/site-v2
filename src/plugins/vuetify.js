import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#FB2AAB",
        secondary: "#fff",

        backgroundDark: "#2b1a33",

        background: "#260E30"
      },
    },
  },
});
