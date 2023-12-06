<script>

import { store } from "../store"

export default {
    name: "AppMovieCard",
    props: {
        movie: Object
    },
    data() {
        return {
            store
        }
    },

    methods: {

    },

    mounted() {
        console.log(this.movie.original_language)
    }
}
</script>

<template>
    <div class="singleCard">
        <img :src="this.store.poster + movie.poster_path" alt="">
        <!-- <h3>Titolo: {{ movie.title }}</h3>
        <h5>Titolo originale:{{ movie.original_title }}</h5>
         <img v-if="store.flag.includes(movie.original_language)" :src="'/' + movie.original_language + '.png'" class="flag"
         alt="">
         <h5 v-else> {{ this.movie.original_language }} </h5>
         <h5>Voto: {{ this.movie.vote_average }}</h5> -->
    </div>
</template>

<style scoped>
.singleCard {
    width: calc(100% / 6 - 20px);
    background-color: teal;
    margin: 10px;
}

.flag {
    width: 30px;
}

img {
    width: 100%;
    height: 100%;
}
</style>