<template>
  <b-container class="my-container">
    <h3>CO<sup>2</sup> -Emissions</h3>
    <p>Check carbon dioxide emissions in your country</p>
    <div class="inputs">
      <model-select class="select1" v-model="selected_country1" :options="countries" placeholder="Search / select a country">
      </model-select>
      <b-button class="button" v-if="show_country2 == false" @click="showCountry2()">Add country for comparison</b-button>
      <model-select v-if="show_country2" class="select2" v-model="selected_country2" :options="countries" placeholder="Search / select a country">
      </model-select>
      <b-button class="button" v-if="show_country2" @click="hideCountry2()">Show one country only</b-button>
      <br>
      <div v-if="selected_country1.text != null" id="check_capita" class="checkbox">
        <label><input type="checkbox" v-model="per_capita" >Per capita</label>
      </div>
    </div>
    <br>
    <div class="charts">
      <Compare v-if="compareEmissions.years && this.selected_country2.text != null" v-bind:country1="compareEmissions.countries[0]" v-bind:country2="compareEmissions.countries[1]" v-bind:years="compareEmissions.years" v-bind:percapita="this.per_capita" />
      <Compare v-if="countryEmissions.years && this.selected_country2.text == null" v-bind:country1="countryEmissions.countries[0]" v-bind:years="countryEmissions.years" v-bind:percapita="this.per_capita" />
    </div>
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
      selected_country1: { value: null, text: null },
      selected_country2: { value: null, text: null },
      per_capita: false,
      show_country2: false
    }
  },
  watch: {
    // when the value of selected country / per capita option changes, call defined method
    selected_country1: function () {
      // we know that country1 changed, now we need to if country2 has some value
      if (this.selected_country2.text == null) {
        // loads emissions for ONE country
        this.loadEmissions()
      } else {
        // loads emissions for TWO country
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
    },
    // show country2 select input
    showCountry2: function () {
      this.show_country2 = true
    },
    // hide country2 select input
    hideCountry2: function () {
      this.show_country2 = false
      // update country 2 to be null
      this.selected_country2 = { value: null, text: null }
      // and then make an api call to update one country to the chart
      this.loadEmissions()
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

  .button {
    margin: 10px;
  }

</style>
