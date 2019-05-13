<template>
  <div id="app" class="background">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  height: 100%;
}

.background {
  background-repeat: no-repeat;
  background-color: lightgrey;
  background-image: url('./assets/pollution.jpg');
  background-attachment: fixed, fixed;
  background-size: cover;
  background-position: center;
}

.my-container {
  height: 100%;
  min-height: 800px;
  width: 60%;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 3%;

  // tablets
  @media (max-width: 768px) {
    width: 80%;
  }
  // phones
  @media (max-width: 475px) {
    width: 90%;
    padding: 3% 0 3% 0;
  }
}

</style>
