<template>
  <div class="container">
    <h3>CO2 -Emissions</h3>
    <p>{{ this.selected }}</p>
    <cool-select id="search_filter" v-model="selected" :items="countries" placeholder="Select name">
      <div id="per_capita" class="checkbox">
        <label><input type="checkbox" value="">Per capita</label>
      </div>
      <template slot="item" slot-scope="{ item }">
        <div style="display: flex;">
          <div>{{ item }}</div>
        </div>
      </template>
    </cool-select>
    <!-- <p>{{ countryInfo }}</p> -->
  </div>
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
      selected: null,
    }
  },
  mounted: function () {
    this.$store.dispatch('loadCountries')
    this.$store.dispatch('loadByCountry', { country: "Finland" })
  },
  computed: {
    ...mapGetters(['countries', 'countryInfo']),
  },
  methods: {
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
