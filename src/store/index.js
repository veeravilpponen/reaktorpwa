import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const SET_COUNTRIES = 'SET_COUNTRIES'
const SET_COUNTRYINFO = 'SET_COUNTRYINFO'

const store = {
  state: function () {
    let baseState = {
      countries: [],
      countryInfo: []
    }
    return baseState
  },
  mutations: {
    [SET_COUNTRIES]: (state, { countries }) => {
      state.countries = countries
    },
    [SET_COUNTRYINFO]: (state, { countryInfo }) => {
      state.countryInfo = countryInfo
    },
  },
  actions: {
    loadCountries ({ commit, state }) {
      axios.get('http://localhost:5000/countries').then((response) => {
        commit(SET_COUNTRIES, { countries: response.data.countries })
      })
    },
    loadByCountry ({ commit, state }, data) {
      axios.post('http://localhost:5000/country', { data }).then((response) => {
        console.log(response.data)
        commit(SET_COUNTRYINFO, { countryInfo: response.data.result })
      })
    },
  },
  getters: {
    countries: state => state.countries,
    countryInfo: state => state.countryInfo
  }
}

export default new Vuex.Store(store)
