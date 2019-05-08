<template>
  <b-container class="my-container">
    <h3>CO<sup>2</sup> -Emissions</h3>
    <p>Check carbon dioxide emissions in your country</p>
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
    ModelSelect
  },
  data() {
    return {
      fields: ['year','emissions'],
      selected_country: { text: null },
      per_capita: false,
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

<style lang="scss">

  body {
    min-height: 800px;
  }

  .inputs {
    width: 50%;
    margin: auto;

    // tablets
    @media (max-width: 768px) {
      width: 70%
    }
    // phones
    @media (max-width: 475px) {
      width: 90%
    }
  }

  .image {
    max-width: 100%;
    height: auto;
    display: block;

  }

</style>
