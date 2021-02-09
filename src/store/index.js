import Vue from "vue";
import Vuex from "vuex";
import products_mock from "@/assets/data/products.json";

Vue.use(Vuex);

const state = {
  subtotal: 0,
  total: 0,
  shipping: 0,
  shipping_1: 23.80,
  shipping_2: 0,
  products: [],
  products_mock: products_mock,
};

const getters = {
  SubTotal: (state) => {
    return state.subtotal.toFixed(2);
  },
  GrandTotal: (state) => {
    return state.total.toFixed(2);
  },
  Shipping: (state) => {
    return state.shipping.toFixed(2);
  },
};

const mutations = {
  change_product(state, product) {
    let index = state.products.findIndex(
      (a) => a.productId === product.productId
    );
    if (index !== -1) {
      state.products[index] = product;
    } else {
      state.products.push(product);
    }
  },
  remove_product(state, id) {
    let index = state.products.findIndex((a) => a.productId === id);
    if (index !== -1) {
      state.products.splice(index, 1);
    }
  },
  calculate_total(state) {
    let sum = 0;
    sum += state.products.reduce(
      (sum, { price, quantity }) => sum + price * quantity,
      0
    );
    if (sum > 100 || sum === 0) {
      state.shipping = state.shipping_2;
    } else {
      state.shipping = state.shipping_1;
    }
    state.subtotal = sum;
    state.total = sum + state.shipping;
  },
};

const actions = {
  change_products(context, products) {
    for (let index in products) {
      products[index].price = context.state.products_mock.filter(
        (a) => a.id === products[index].productId
      )[0].price;
      context.commit("change_product", products[index]);
    }
    context.commit("calculate_total");
  },
  delete_product(context, id) {
    context.commit("remove_product", id);
    context.commit("calculate_total");
  },
};

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
});
