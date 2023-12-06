<script>
import { store } from "../store.js"

export default {
    name: "AppMovie",
    data() {
        return {
            store
        }
    },

    methods: {
        searchMovie() {
            this.$emit("search");
        }

    },

    mounted() {
    }
}
</script>

<template>
    <div>
        <input type="text" v-model="store.getInput">
        <button @click="searchMovie">Cerca</button>
    </div>
</template>

<style scoped></style>