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

        <!-- <h3>Titolo: {{ tv.name }}</h3>
                <h5>Titolo originale:{{ tv.original_name }}</h5>
                <img v-if="store.flag.includes(tv.original_language)" :src="'/' + tv.original_language + '.png'" class="flag"
                    alt="">
                <h5 v-else> {{ tv.original_language }}</h5>
                <h5>Voto: {{ tv.vote_average }}</h5> -->
        <img :src="this.store.poster + tv.poster_path" alt="">


    </div>
</template>

<style scoped>
.singleCard {
    width: calc(100% / 6 - 20px);
    background-color: teal;
    margin: 10px;

}

.flag {
    width: 25px;
}

img {
    width: 100%;
    height: 100%;
}
</style>