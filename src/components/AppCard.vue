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
    <h3>Titolo: {{ movie.title }}</h3>
    <h5>Titolo originale:{{ movie.original_title }}</h5>
    <h5>Lingua:</h5>
</template>

<style scoped></style>