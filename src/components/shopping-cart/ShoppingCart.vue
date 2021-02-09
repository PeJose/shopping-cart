<template>
  <v-container>
    <v-row class="my-3">
      <div class="text-h5 font-weight-light">Shopping Cart</div>
      <v-spacer></v-spacer>
      <v-btn
        class="white--text text-normal py-5"
        tile
        depressed
        small
        :color="$vuetify.theme.themes[theme].accent"
        @click="$emit('checkout')"
        >Proceed to checkout</v-btn
      >
    </v-row>
    <v-row>
      <v-col class="pl-0 pr-5" cols="9">
        <v-card elevation="0" class="bordered px-8 py-10">
          <v-row class="pb-3" align="center">
            <v-col cols="5"></v-col>
            <v-col cols="2">
              <div class="text-body-2 font-weight-bold">Product Name</div>
            </v-col>
            <v-col cols="2">
              <div class="text-body-2 font-weight-bold">Unit Price</div>
            </v-col>
            <v-col cols="3">
              <div class="text-body-2 font-weight-bold">Qty</div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="py-5">
            <shopping-card-product
              v-for="(product, index) in cart_products"
              :key="index"
              v-show="!product.hidden"
              :product="products.filter((a) => (a.id = product.productId))[0]"
              :quantity="product.quantity"
              @quantity_change="changeQuantity"
              @update_price="updatePrices"
              @hide="hideElement"
            ></shopping-card-product>
          </v-row>
          <v-divider></v-divider>
          <v-row class="pt-5">
            <v-spacer></v-spacer>
            <v-col align="right">
              <v-btn
                class="white--text py-4"
                tile
                depressed
                small
                :color="$vuetify.theme.themes[theme].accent"
                @click="updatePrices"
                >Update Shopping Cart</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col class="pl-5 pr-0" cols="3">
        <shipping-card></shipping-card>
        <total-card @checkout="$emit('checkout')"></total-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cart_products from "@/assets/data/cart_products.json";
import products from "@/assets/data/products.json";
import ShippingCard from "../price-cards/ShippingCard.vue";
import TotalCard from "../price-cards/TotalCard.vue";
import ShoppingCardProduct from "./ShoppingCardProduct.vue";
export default {
  name: "ShoppingCart",
  components: {
    ShippingCard,
    TotalCard,
    ShoppingCardProduct,
  },
  data() {
    return {
      cart_products: cart_products,
      products: products,
    };
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  methods: {
    updatePrices() {
      this.$store.dispatch("change_products", this.cart_products);
    },
    changeQuantity(value) {
      this.cart_products[
        this.cart_products.findIndex((a) => a.productId === value.id)
      ].quantity = value.quantity;
    },
    hideElement(value) {
      let index = this.cart_products.findIndex((a) => a.productId === value.id);
      let product = this.cart_products[index];
      product.hidden = true;
      product.quantity = 0;
      this.$set(this.cart_products, index, product);
      this.$store.dispatch("delete_product", value.id);
    },
  },
};
</script>

<style>
.bordered {
  border: 1px solid lightgray !important;
  border-radius: 0px !important;
}
.bordered-2 {
  border: 2px solid black !important;
  border-radius: 0px !important;
}
.white--text {
  text-transform: none;
}
</style>
