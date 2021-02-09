<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-main>
      <shopping-cart
        v-if="!checkout"
        @checkout="submitCheckout"
      ></shopping-cart>
      <v-snackbar v-model="snackbar" timeout="3000" top>
        Your order has been submitted successfully!
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import ShoppingCart from "./components/shopping-cart/ShoppingCart.vue";

export default {
  name: "App",
  components: {
    ShoppingCart,
  },
  data() {
    return {
      checkout: false,
      snackbar: false,
    };
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  methods: {
    submitCheckout() {
      this.checkout = this.snackbar = true;
    },
  },
};
</script>

<style></style>
