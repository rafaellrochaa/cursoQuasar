// import axios from 'axios'

export default {
  state: {
    list: [],
    one: {}
  },
  mutations: {
    update (state, config) {
      state[config.state] = config.data
    }
  },
  actions: {
    productList (context) {
      /* return axios.get('http://localhost:8082/dist/products.json')
      .then((res) => {
        context.commit('update', {
          state: 'list',
          data: res.data.Produtos
        })
      }) */
      let products = require('../../Dados/products.json')
      context.commit('update', {
        state: 'list',
        data: products.Produtos
      })
    }
  }
}
