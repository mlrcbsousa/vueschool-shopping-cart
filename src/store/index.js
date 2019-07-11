import Vue from 'vue'
import Vuex from 'vuex'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  getters: {
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },
  actions: {
    fetchProducts (context) {
      shop.getProducts(products => {
        context.commit('setProducts', products)
      })
    }
  },
  mutations: {
    setProducts (state, products) {
      state.products = products
    }
  }
  // modules
})
