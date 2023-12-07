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

        <div class="flip-card">
            <div class="flip-card-inner">

                <div class="flip-card-front">
                    <img v-if="movie.poster_path" :src="this.store.poster + movie.poster_path" alt="">
                    <h3 v-else class="text-center"> NESSUNA IMMAGINE DISPONIBILE</h3>
                </div>

                <div class="flip-card-back">
                    <h3>Titolo: {{ movie.title }}</h3>
                    <h5>Titolo originale:{{ movie.original_title }}</h5>
                    <img v-if="store.flag.includes(movie.original_language)" :src="'/' + movie.original_language + '.png'"
                        class="flag" alt="">
                    <h5 v-else> {{ this.movie.original_language }} </h5>

                    <div class="">

                        <div v-if="(Math.round(movie.vote_average / 2)) == 0" class="">
                            <h5>Voto: 0</h5>
                        </div>

                        <span v-if="(Math.round(movie.vote_average / 2)) == 1" class="">
                            <h5>Voto:</h5>
                            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
                        </span>

                        <span v-if="(Math.round(movie.vote_average / 2)) == 2" class="">
                            <h5>Voto:</h5>
                            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
                            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
                        </span>

                        <span v-if="(Math.round(movie.vote_average / 2)) == 3" class="">
                            <h5>Voto:</h5>
                            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
                            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
                            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
                        </span>

                        <span v-if="(Math.round(movie.vote_average / 2)) == 4" class="">
                            <h5>Voto:</h5>
                            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
                            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
                            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
                            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
                        </span>

                        <span v-if="(Math.round(movie.vote_average / 2)) == 5" class="">
                            <h5>Voto:</h5>
                            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
                            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
                            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
                            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
                            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
                        </span>

                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<style scoped>
.singleCard {
    width: calc(100% / 6 - 20px);
    margin: 10px;
    height: 345px;
}

.flag {
    width: 30px;
    height: 20px;
}

img {
    width: 100%;
    height: 345px;
    object-fit: cover;
}

.gold {
    color: gold;
}

.flip-card {
    background-color: transparent;
    width: 100%;
    height: 100%;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    background-color: #bbb;
    color: black;
}

.flip-card-back {
    background-color: rgb(22, 22, 22);
    color: white;
    transform: rotateY(180deg);
}
</style>