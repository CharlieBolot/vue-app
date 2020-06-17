<template>
  <div class="test">
    <h1>Test de boutton </h1>
      <button v-on:click="count++">Vous m'avez cliqué {{ count }} fois.</button>
  </div>   
</template>

<script>
export default {
  name: 'test',
  props: {
    count: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
