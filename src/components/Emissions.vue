<template>
  <b-container class="my-container">
    <h3>CO<sup>2</sup> -Emissions</h3>
    <p>Check carbon dioxide emissions in your country</p>
    <div class="inputs">
      <model-select class="select1" v-model="selected_country1" :options="countries" placeholder="Search select a country">
      </model-select>
      <model-select class="select2" v-model="selected_country2" :options="countries" placeholder="Search select a country">
      </model-select>
      <br>
      <div id="check_capita" class="checkbox">
        <label><input type="checkbox" v-model="per_capita" >Per capita</label>
      </div>
    </div>
    <br>
    <div class="charts">
      <Compare v-if="compareEmissions.years != null" v-bind:country1="compareEmissions.countries[0]" v-bind:country2="compareEmissions.countries[1]" v-bind:years="compareEmissions.years" />
      <Compare v-if="countryEmissions.years != null && compareEmissions.years == null " v-bind:country1="countryEmissions.countries[0]" v-bind:years="countryEmissions.years" />
    </div>
    <!-- <h4 v-if="this.selected_country1.text != 'Search / select a country'">{{ this.selected_country1.text }}</h4>
    <br>
    <b-table v-if="this.selected_country1.text != null && this.selected_country1.text != 'Search / select a country'" hover :fields="fields" :items="countryEmissions"></b-table>
  -->
  </b-container>
</template>

<script>

import { mapGetters } from 'vuex'
import store from '../store'
import { ModelSelect } from 'vue-search-select'
import Compare from './Compare.vue'

export default {
  name: 'Hello',
  components: {
    ModelSelect,
    Compare
  },
  data() {
    return {
      fields: ['year','emissions'],
      selected_country1: { text: null },
      selected_country2: { text: null },
      per_capita: false,
    }
  },
  watch: {
    // when the value of selected country / per capita opttion changes, call defined function
    selected_country1: function () {
      if (this.selected_country2.text == null) {
        this.loadEmissions()
      } else {
        this.loadCompareEmissions()
      }
    },
    selected_country2: function () {
      if (this.selected_country1.text == null) {
        this.loadEmissions()
      } else {
        this.loadCompareEmissions()
      }
    },
    per_capita: function () {
      if (this.selected_country1.text == null || this.selected_country2.text == null) {
        this.loadEmissions()
      } else {
        this.loadCompareEmissions()
      }
    }
  },
  mounted: function () {
    this.$store.dispatch('loadCountries')
  },
  computed: {
    ...mapGetters(['countries', 'countryEmissions', 'compareEmissions']),
  },
  methods: {
    loadEmissions: function () {
      this.$store.dispatch('loadCountryEmissions', { country1: this.selected_country1.text, country2: this.selected_country2.text, percapita: this.per_capita })
    },
    loadCompareEmissions: function () {
      this.$store.dispatch('loadCompareEmissions', { country1: this.selected_country1.text, country2: this.selected_country2.text, percapita: this.per_capita })
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

  .charts {
    max-width: 600px;
    margin: auto;
  }

</style>
