
<template>
  <div class="small">
    <line-chart :chart-data="datacollection" v-bind:options="options"></line-chart>
  </div>
</template>

<script>
import LineChart from './LineChart.js'
export default {
  name: 'Compare',
  props:['country1', 'country2', 'years', 'percapita'],
  components: {
    LineChart
  },
  data () {
    return {
      // chart data
      datacollection: {},
      // to be passed to LineChart as props, chart styling and axis names
      options: {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Emissions (kt)',
              fontStyle: 'bold'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Years',
              fontStyle: 'bold'
            }
          }]
        }
      }
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
      // fill chart with data of two countries
      if (this.country1 && this.country2 && this.country2.name != null) {
        this.datacollection = {
          labels: this.years,
          datasets: [
            {
              label: this.country1.name,
              backgroundColor: 'rgba(173, 216, 230, 0.5)',
              borderColor: 'rgba(121,151,161, 0.5)',
              data: this.country1.data
            },
            {
              label: this.country2.name,
              backgroundColor: 'rgba(190, 190, 190, 0.8)',
              borderColor: 'rgba(133,133,133, 0.5)',
              data: this.country2.data
            }
          ]
        }
      // fill chart with data of one country
      } else {
        this.datacollection = {
          labels: this.years,
          datasets: [
            {
              label: this.country1.name,
              backgroundColor: 'rgba(173, 216, 230, 0.5)',
              borderColor: 'rgba(173, 216, 230, 1)',
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
