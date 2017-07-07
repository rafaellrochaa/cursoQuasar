// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Vuex from 'vuex'
import Quasar from 'quasar'
import router from './router'

Vue.use(Vuex)
Vue.use(Quasar) // Install Quasar Framework

import VuexStore from './vuex/store'

const store = new Vuex.Store(VuexStore)

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    history: false,
    store,
    render: h => h(require('./App'))
  })
})
