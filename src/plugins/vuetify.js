import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    themes: {
      light: {
        primary: colors.shades.white,
        secondary: colors.grey.lighten3,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.shades.white, // Not automatically applied
      },
    },
  },
});
