<template>
  <v-row class="my-5" align="center" v-if="!product.hidden">
    <v-col cols="1" align="center" justify="center">
      <v-img
        max-width="20px"
        src="@/assets/images/x-img.png"
        @click="$emit('hide', product)"
      ></v-img>
    </v-col>
    <v-col cols="4" align="center">
      <v-img :src="getImgUrl(product.image)" width="150px"></v-img>
    </v-col>
    <v-col cols="2">
      <div class="text-body-2 font-weight-light">{{ product.name }}</div>
    </v-col>
    <v-col cols="2">
      <div class="text-body-2 font-weight-light">
        ${{ formatPrice(product.price) }}
      </div>
    </v-col>
    <v-col cols="2">
      <v-card tile elevation="0">
        <div class="d-inline bordered px-1 py-1">
          <v-icon
            small
            :color="$vuetify.theme.themes[theme].accent"
            @click="decrement"
            >mdi-minus</v-icon
          >
        </div>
        <div class="d-inline bordered-2 px-2 py-1">{{ productQuantity }}</div>
        <div class="d-inline bordered px-1 py-1">
          <v-icon
            small
            :color="$vuetify.theme.themes[theme].accent"
            @click="increment"
            >mdi-plus</v-icon
          >
        </div>
      </v-card>
    </v-col>
    <v-col cols="1" align="left">
      <v-img
        max-width="20px"
        src="@/assets/images/edit-img.png"
        @click="$emit('update_price')"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ShoppingCardProduct",
  props: ["product", "quantity"],
  data() {
    return {
      productQuantity: 0,
    };
  },
  created() {
    this.productQuantity = this.quantity;
  },
  methods: {
    getImgUrl(imageName) {
      return require("@/assets/images/" + imageName);
    },
    formatPrice(price) {
      return price.toFixed(2);
    },
    increment() {
      this.productQuantity = parseInt(this.productQuantity, 10) + 1;
    },
    decrement() {
      this.productQuantity = parseInt(this.productQuantity, 10) - 1;
    },
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  watch: {
    productQuantity() {
      this.$emit("quantity_change", {
        id: this.product.id,
        quantity: this.productQuantity,
      });
    },
  },
};
</script>

<style></style>
