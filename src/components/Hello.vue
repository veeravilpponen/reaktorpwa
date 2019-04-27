<template>
  <div>
    <h3>CO2 -Emissions</h3>
    <div class="form-group">
      <input id="country" type="text" placeholder="Search for country">
      <div id="search_filter" class="checkbox">
        <label><input type="checkbox" value="">Per capita</label>
      </div>
    </div>
    <!--
    <p>{{ msg }}</p>
    -->
    <!-- <button @click="myFunction()" >Get string</button> -->
    <p v-if="greeting">{{ greeting.content }}</p>
  </div>
</template>

<script>
// import axios from 'axios';
import { mapGetters } from 'vuex'
export default {
  name: 'Hello',
  data() {
    return {
      // msg: '',
    };
  },
  mounted: function () {
    this.$store.dispatch('loadThing')
  },
  methods: {
  //   getMessage() {
  //     const path = 'http://localhost:5000/hello';
  //     axios.get(path)
  //       .then((res) => {
  //         this.msg = res.data;
  //       })
  //       .catch((error) => {
  //         // eslint-disable-next-line
  //         console.error(error);
  //       });
  //   },
  // },
  // created() {
  //   this.getMessage();
    // myFunction: function () {
    //   this.$store.dispatch('loadThing')
    // }
  },
  computed: {
    ...mapGetters(['greeting'])
  }
};
</script>

<style>
  #country {
    background-image: url('/assets/search.png');
    background-position: 10px 12px;
    background-repeat: no-repeat;
    width: 100%;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-bottom: 12px;
  }
</style>
