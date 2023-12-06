<script>
import axios from 'axios';
import { store } from "./store.js"
import AppMovie from "./components/AppMovie.vue"
import AppCard from "./components/AppCard.vue"
import AppSerieTv from "./components/AppSerieTv.vue"

export default {
  components: {
    AppMovie,
    AppCard,
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
        url: "https://api.themoviedb.org/3/search/movie?api_key=896cd3d890a13f2d39cda4cdd29b4ee1&query=",
        params: {
          query: `${store.getInput}`,
          include_adult: 'false',
          language: 'it-IT',
          page: '1',
          api_key: '896cd3d890a13f2d39cda4cdd29b4ee1'
        },
        headers: {
          accept: 'application/json',
          // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTZjZDNkODkwYTEzZjJkMzljZGE0Y2RkMjliNGVlMSIsInN1YiI6IjY1NmRlNGE0M2RjMzEzMDBjNGZhODVjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3rp3IUheMRIcI7xEEqrY1sYqScRBK3_pe1qqhmzto40'
        }
      };

      const options2 = {
        method: 'GET',
        url: "https://api.themoviedb.org/3/search/movie?api_key=896cd3d890a13f2d39cda4cdd29b4ee1&query=",
        params: {
          query: `${store.getInput}`,
          include_adult: 'false',
          language: 'it-IT',
          page: '1',
          api_key: '896cd3d890a13f2d39cda4cdd29b4ee1'
        },
        headers: {
          accept: 'application/json',
          // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTZjZDNkODkwYTEzZjJkMzljZGE0Y2RkMjliNGVlMSIsInN1YiI6IjY1NmRlNGE0M2RjMzEzMDBjNGZhODVjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3rp3IUheMRIcI7xEEqrY1sYqScRBK3_pe1qqhmzto40'
        }
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.results);
          store.movies = response.data.results;
        })
        .catch(function (error) {
          console.error(error)
        });

      axios
        .request(options2)
        .then(function (response) {
          console.log("serietv run" + response.data.results);
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
  <h1>Film</h1>

  <AppMovie @search="addTitles" />

  <div class="d-flex flex-wrap">
    <AppCard v-for="movie in store.movies" :movie="movie" />
  </div>

  <h2>Serie Tv</h2>

  <div class="d-flex flex-wrap">
    <AppSerieTv v-for="serie in store.serieTv" :tv="serie" />
  </div>
</template>



<style scoped></style>