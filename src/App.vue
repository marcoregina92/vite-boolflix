<script>
import axios from 'axios';
import { store } from "./store.js"
import AppSearch from "./components/AppSearch.vue"
import AppMovie from "./components/AppMovie.vue"
import AppSerieTv from "./components/AppSerieTv.vue"

export default {
  components: {
    AppSearch,
    AppMovie,
    AppSerieTv

  },
  data() {
    return {
      store
    }
  },
  mounted() {
    this.addTitles();
  },
  methods: {
    addTitles() {

      const options = {
        method: 'GET',
        url: this.store.apiMovie,
        params: {
          query: `${store.getInput}`,
          include_adult: 'false',
          language: 'it-IT',
          page: '1',
          api_key: this.store.apiKey
        },
        headers: {
          accept: 'application/json',
          // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTZjZDNkODkwYTEzZjJkMzljZGE0Y2RkMjliNGVlMSIsInN1YiI6IjY1NmRlNGE0M2RjMzEzMDBjNGZhODVjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3rp3IUheMRIcI7xEEqrY1sYqScRBK3_pe1qqhmzto40'
        }
      };

      const options2 = {
        method: 'GET',
        url: this.store.apiSerie,
        params: {
          query: `${store.getInput}`,
          include_adult: 'false',
          language: 'it-IT',
          page: '1',
          api_key: this.store.apiKey
        },
        headers: {
          accept: 'application/json',
          // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTZjZDNkODkwYTEzZjJkMzljZGE0Y2RkMjliNGVlMSIsInN1YiI6IjY1NmRlNGE0M2RjMzEzMDBjNGZhODVjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3rp3IUheMRIcI7xEEqrY1sYqScRBK3_pe1qqhmzto40'
        }
      };

      axios
        .request(options)
        .then(function (response) {
          store.movies = response.data.results;
        })
        .catch(function (error) {
          console.error(error)
        });

      axios
        .request(options2)
        .then(function (response) {
          store.serieTv = response.data.results;
        })
        .catch(function (error) {
          console.error(error)
        });
    }
  }
}

</script>




<template>
  <header class="d-flex justify-content-between align-items-center mt-2 p-4">
    <div class="input">
      <img src="../public/logo-boolflix.png" alt="">
    </div>

    <div>
      <AppSearch @search="addTitles" />
    </div>
  </header>

  <h2>Film</h2>

  <div class="boxCard">
    <AppMovie v-for="movie in store.movies" :movie="movie" />
  </div>

  <h2>Serie Tv</h2>

  <div class="boxCard">
    <AppSerieTv v-for="serie in store.serieTv" :tv="serie" />
  </div>
</template>



<style scoped>
.boxCard {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
}


h2 {
  text-align: center;
}
</style>