
<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
import LineChart from './LineChart.js'
export default {
  name: 'Compare',
  props:['country1', 'country2', 'years'],
  components: {
    LineChart
  },
  data () {
    return {
      datacollection: {}
    }
  },
  mounted () {
    this.fillData()
  },
  watch: {
    country1: function () {
      this.fillData()
    }
  },
  methods: {
    fillData () {
      if (this.country1 && this.country2) {
        this.datacollection = {
          labels: this.years,
          datasets: [
            {
              label: this.country1.name,
              backgroundColor: 'rgba(173, 216, 230, 0.6)',
              data: this.country1.data
            }, {
              label: this.country2.name,
              backgroundColor: 'rgba(,190, 190, 190 0.01)',
              data: this.country2.data
            }
          ]
        }
      } else {
        this.datacollection = {
          labels: this.years,
          datasets: [
            {
              label: this.country1.name,
              backgroundColor: 'rgba(173, 216, 230, 0.6)',
              data: this.country1.data
            }
          ]
        }
      }
    }
  }
}
</script>

<style>

</style>
