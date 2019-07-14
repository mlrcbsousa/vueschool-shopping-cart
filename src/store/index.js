import Vue from 'vue'
import Vuex from 'vuex'
import products from "./modules/products";
import cart from "./modules/cart";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products
  },

  state: {
    // no-op
  },

  getters: {
    // no-op
  },

  actions: {
    // no-op
  },

  mutations: {
    // no-op
  }
})
