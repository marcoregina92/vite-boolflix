<script>

export default {
    name: "AppCard",
    props: {
        movie: Object
    },

    methods: {

    },

    mounted() {
    }
}
</script>

<template>
    <div class="singleCard">
        <h3>Titolo: {{ movie.title }}</h3>
        <h5>Titolo originale:{{ movie.original_title }}</h5>
        <h5>Lingua:</h5>
        <h5>Voto: {{ movie.vote_average }}</h5>
    </div>
</template>

<style scoped>
.singleCard {
    width: calc(100% / 6 - 20px);
    background-color: teal;
    border: 2px solid goldenrod;
    margin: 10px;
    padding: 10px;

}
</style>