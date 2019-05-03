<template>
  <b-container class="my-container">
    <h3>CO2 -Emissions</h3>
    <div class="inputs">
      <model-select v-model="selected_country" :options="countries" placeholder="Search select a country">
      </model-select>
      <br>
      <div id="check_capita" class="checkbox">
        <label><input type="checkbox" v-model="per_capita" >Per capita</label>
      </div>
    </div>
    <br>
    <h4 v-if="this.selected_country.text != 'Search / select a country'">{{ this.selected_country.text }}</h4>
    <br>
    <b-table v-if="this.selected_country.text != null && this.selected_country.text != 'Search / select a country'" hover :fields="fields" :items="countryEmissions"></b-table>
  </b-container>
</template>

<script>

import { mapGetters } from 'vuex'
import store from '../store'
import { ModelSelect } from 'vue-search-select'

export default {
  name: 'Hello',
  components: {
    ModelSelect,
  },
  data() {
    return {
      fields: ['year','emissions'],
      selected_country: { text: null },
      per_capita: false
    }
  },
  watch: {
    // when the value of selected country / per capita opttion changes, call defined function
    selected_country: function () {
      this.loadEmissions()
    },
    per_capita: function () {
      this.loadEmissions()
    }
  },
  mounted: function () {
    this.$store.dispatch('loadCountries')
  },
  computed: {
    ...mapGetters(['countries', 'countryEmissions']),
  },
  methods: {
    loadEmissions: function () {
      this.$store.dispatch('loadCountryEmissions', { country: this.selected_country.text, percapita: this.per_capita })
    }
  }
}

</script>

<style>
  .my-container {
    width: 70%;
    background-color: white;
    padding: 5%;
  }

  .inputs {
    width: 50%;
    margin: auto;

    @media (min-width: 576px) {

    }
  }


</style>
