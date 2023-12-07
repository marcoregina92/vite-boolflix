<script>

import { store } from "../store"


export default {
    name: "AppSerieTv",
    props: {
        tv: Object
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        console.log(this.tv.original_language)
    }
}
</script>


<template>
    <div class="singleCard">
        <img v-if="tv.poster_path" :src="this.store.poster + tv.poster_path" alt="">
        <h3 v-else class="text-center"> NESSUNA IMMAGINE DISPONIBILE</h3>

        <h3>Titolo: {{ tv.name }}</h3>
        <h5>Titolo originale:{{ tv.original_name }}</h5>
        <img v-if="store.flag.includes(tv.original_language)" :src="'/' + tv.original_language + '.png'" class="flag"
            alt="">
        <h5 v-else> {{ tv.original_language }}</h5>
        <div v-if="(Math.round(tv.vote_average / 2)) == 0" class="">
            <h5>Voto: 0</h5>
        </div>

        <span v-if="(Math.round(tv.vote_average / 2)) == 1" class="">
            <h5>Voto:</h5>
            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
        </span>

        <span v-if="(Math.round(tv.vote_average / 2)) == 2" class="">
            <h5>Voto:</h5>
            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
        </span>

        <span v-if="(Math.round(tv.vote_average / 2)) == 3" class="">
            <h5>Voto:</h5>
            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
        </span>

        <span v-if="(Math.round(tv.vote_average / 2)) == 4" class="">
            <h5>Voto:</h5>
            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
        </span>

        <span v-if="(Math.round(tv.vote_average / 2)) == 5" class="">
            <h5>Voto:</h5>
            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
            <font-awesome-icon :icon="['fas', 'star']" class="gold" />
        </span>

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
    height: 20px;
}

img {
    width: 100%;
    /* height: 100%; */
}

.gold {
    color: gold;
}
</style>