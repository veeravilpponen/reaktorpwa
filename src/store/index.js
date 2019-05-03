import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const SET_COUNTRIES = 'SET_COUNTRIES'
const SET_COUNTRY_EMISSIONS = 'SET_COUNTRY_EMISSIONS'

const store = {
  state: function () {
    let baseState = {
      countries: [],
      countryEmissions: []
    }
    return baseState
  },
  mutations: {
    [SET_COUNTRIES]: (state, { countries }) => {
      state.countries = countries
    },
    [SET_COUNTRY_EMISSIONS]: (state, { countryEmissions }) => {
      state.countryEmissions = countryEmissions
    },
  },
  actions: {
    loadCountries ({ commit, state }) {
      axios.get('http://localhost:5000/countries').then((response) => {
        commit(SET_COUNTRIES, { countries: response.data.countries })
      })
    },
    loadCountryEmissions ({ commit, state }, data) {
      axios.post('http://localhost:5000/emissions', { data }).then((response) => {
        commit(SET_COUNTRY_EMISSIONS, { countryEmissions: response.data.results })
      })
    },
  },
  getters: {
    countries: state => state.countries,
    countryEmissions: state => state.countryEmissions
  }
}

export default new Vuex.Store(store)
