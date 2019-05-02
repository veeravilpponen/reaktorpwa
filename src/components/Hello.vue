<template>
  <b-container class="container">
    <h3>CO2 -Emissions</h3>
    <p>{{ this.selected_country }}</p>
    <cool-select id="search_filter" v-model="selected_country" :items="countries" placeholder="Select country">
      <template slot="item" slot-scope="{ item }">
        <div style="display: flex;">
          <div>{{ item }}</div>
        </div>
      </template>
    </cool-select>
    <div id="check_capita" class="checkbox">
      <label><input type="checkbox" v-model="per_capita" >Per capita</label>
    </div>
    <b-table hover :fields="fields" :items="countryEmissions"></b-table>
  </b-container>
</template>

<script>

import { mapGetters } from 'vuex'
import store from '../store'
import { CoolSelect } from "vue-cool-select";

export default {
  name: 'Hello',
  components: {
    CoolSelect
  },
  data() {
    return {
      fields: ['year','emission'],
      selected_country: null,
      per_capita: null
    }
  },
  // when the value of selected country changes, call defined function
  watch: {
    selected_country: function () {
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
      this.$store.dispatch('loadCountryEmissions', { country: this.selected_country })
    }
  }
}

</script>

<style>
  /* .container {
    text-align: center;
  } */

  #search_filter {
    width: 40%;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-bottom: 12px;
  }
</style>
