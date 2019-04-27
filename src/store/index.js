import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const MY_FUNCTION = 'MY_FUNCTION'

const store = {
  state: function () {
    greeting: {}
  },
  mutations: {
    [MY_FUNCTION]: (state, { greeting }) => {
      state.greeting = greeting
    },
  },
  actions: {
    loadThing ({ commit, state }) {
      axios.get('http://localhost:5000/hello').then((response) => {
        commit(MY_FUNCTION, { greeting: response.data.greeting })
        console.log(response.data.greeting)
      })
    },
  },
  getters: {
    greeting: state => state.greeting,
  }
}

export default new Vuex.Store(store)
