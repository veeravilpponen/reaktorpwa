import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const SET_COUNTRIES = 'SET_COUNTRIES'
const SET_COUNTRY_EMISSIONS = 'SET_COUNTRY_EMISSIONS'
const SET_COMPARE_EMISSIONS = 'SET_COMPARE_EMISSIONS'

const store = {
  state: function () {
    let baseState = {
      countries: [],
      countryEmissions: [],
      compareEmissions: { 'years': null }
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
    [SET_COMPARE_EMISSIONS]: (state, { compareEmissions }) => {
      state.compareEmissions = compareEmissions
    }
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
    loadCompareEmissions ({ commit, state }, data) {
      axios.post('http://localhost:5000/compare', { data }).then((response) => {
        commit(SET_COMPARE_EMISSIONS, { compareEmissions: response.data.results })
      })
    }
  },
  getters: {
    countries: state => state.countries,
    countryEmissions: state => state.countryEmissions,
    compareEmissions: state => state.compareEmissions
  }
}

export default new Vuex.Store(store)
