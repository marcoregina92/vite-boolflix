<script>
export default {
    name: "AppSerieTv",
    props: {
        tv: Object
    },
    mounted() {
        console.log(this.tv.original_name)
    }
}
</script>


<template>
    <div class="singleCard">

        <h3>Titolo: {{ tv.title }}</h3>
        <h5>Titolo originale:{{ tv.original_title }}</h5>
        <h5>Lingua:{{ tv.original_language }}</h5>
        <img class="flag" :src="'/' + tv.original_language + '.png'">
        <h5>Voto: {{ tv.vote_average }}</h5>

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

.flag {
    width: 25px;
}
</style>