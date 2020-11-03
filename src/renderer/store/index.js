import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'
import modules from './modules'

import getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules,
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  getters,
  strict: debug
})
