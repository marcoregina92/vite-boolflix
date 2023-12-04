<script>
import axios from 'axios';
import { store } from "./store.js"
import AppMovie from "./components/AppMovie.vue"
import AppCard from "./components/AppCard.vue"

export default {
  components: {
    AppMovie,
    AppCard

  },
  data() {
    return {
      store
    }
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      let indirizzo = this.store;

      axios
        .request(indirizzo)
        .then(function (response) {
          console.log(response.data);
          console.log(indirizzo)
        })
        .catch(function (error) {
          console.error(error)
        });
    }
  }
}

</script>




<template>
  <h1>BoolFlix</h1>

  <AppMovie />

  <AppCard />
</template>



<style scoped></style>