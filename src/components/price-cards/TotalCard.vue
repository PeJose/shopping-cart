<template>
  <v-card
    :color="$vuetify.theme.themes[theme].primary"
    elevation="0"
    class="bordered px-3 py-3 mb-5"
  >
    <v-row
      class="bordered py-0"
      :style="{ background: $vuetify.theme.themes[theme].secondary }"
    >
      <v-col class="py-2">
        <div class="text-body-2 font-weight-bold">CART TOTALS</div>
      </v-col>
    </v-row>
    <v-row class="px-2 py-2">
      <v-col>
        <div class="text-body-2 font-weight-bold">Subtotal</div>
      </v-col>
      <v-col align="right">
        <div class="text-body-2 font-weight-bold">${{ SubTotal }}</div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="px-2 pt-2">
      <v-col>
        <div class="text-body-2 font-weight-bold">Grand Total</div>
      </v-col>
      <v-col align="right">
        <div class="text-body-1 font-weight-bold">${{ GrandTotal }}</div>
      </v-col>
    </v-row>
    <v-row class="px-2 pb-4">
      <v-col>
        <v-btn
          class="white--text py-5"
          tile
          depressed
          small
          block
          :color="$vuetify.theme.themes[theme].accent"
          @click="$emit('checkout')"
          >Proceed to checkout</v-btn
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "TotalCard",
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
    SubTotal() {
      return this.$store.getters.SubTotal;
    },
    GrandTotal() {
      return this.$store.getters.GrandTotal;
    },
  },
};
</script>

<style></style>
