<template>
    <div id="page">
        <h1>Ma page</h1>
        <p>
           C'est MA Page !
        </p>
         <button type="button" v-on:click="home()">Déconnexion</button>
    </div>
</template>

<script>
export default {
  name: 'page',
  data() {
    return {};
  },
  methods: {
    home() {
      this.$emit("authenticated", false);
      this.$router.replace({ name: "Home" });
    }
  }
};
</script>

<style scoped>
    #page {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>
