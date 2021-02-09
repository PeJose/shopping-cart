<template>
  <v-card
    :color="$vuetify.theme.themes[theme].secondary"
    elevation="0"
    class="bordered px-4 py-2 mb-5"
  >
    <v-row>
      <v-col>
        <div class="text-body-2 font-weight-bold">SHIPPING</div>
      </v-col>
      <v-col align="right">
        <div class="text-body-2 font-weight-bold">${{ Shipping }}</div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "ShippingCard",
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
    Shipping() {
      return this.$store.getters.Shipping;
    },
  },
};
</script>

<style></style>
