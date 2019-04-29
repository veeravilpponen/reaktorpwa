<template>
  <div>
    <h3>CO2 -Emissions</h3>
    <div class="form-group">
      <input id="search_filter" type="text" placeholder="Search for country" v-model="search">
      <div id="per_capita" class="checkbox">
        <label><input type="checkbox" value="">Per capita</label>
      </div>
    </div>
    <div v-for="country in filteredCountries" :key="country.id">
      <h2>{{ country }}</h2>
    </div>
    <!-- <b-button @click="callCountry">Get country info</b-button> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../store'
export default {
  name: 'Hello',
  data() {
    return {
      search: '',
    }
  },
  mounted: function () {
    this.$store.dispatch('loadCountries')
  },
  methods: {
    // callCountry() {
    //   this.$store.dispatch('loadByCountry', this.search)
    // }
  },
  watch: {

  },
  computed: {
    ...mapGetters(['countries']),
    filteredCountries() {
      return store.getters.countries.filter(item => {
         return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }
  }
}
</script>

<style>
  #search_filter {
    background-image: url('/assets/search.png');
    background-position: 10px 12px;
    background-repeat: no-repeat;
    width: 40%;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-bottom: 12px;
  }
</style>
