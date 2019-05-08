<template>
  <b-container class="my-container">
    <div class="graph">
      <line-chart :chart-data="datacollection"></line-chart>
    </div>
  </b-container>
</template>

<script>
import LineChart from './LineChart.js'

export default {
  components: {
    LineChart
  },
  data () {
    return {
      datacollection: null
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: ['2000', '2001', '2002'],
        datasets: [
          {
            label: 'Emissions 1',
            backgroundColor: 'rgba(173, 216, 230, 0.6)',
            data: ['20140', '20594', '22043']
          }, {
            label: 'Emissions 2',
            backgroundColor: 'rgba(,190, 190, 190 0.6)',
            data: ['17190', '18210', '17081']
          }
        ]
      }
    }
  }
}
</script>

<style>
  .graph {
    max-width: 600px;
    margin: auto;
  }
</style>
