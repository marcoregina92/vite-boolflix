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
        <input @keyup.enter="searchMovie" type="text" placeholder="Inserisci film o serie tv" v-model="store.getInput">
        <button @click="searchMovie">Cerca</button>
    </div>
</template>

<style scoped>
input {
    width: 300px;
    padding: 8px;
    border-radius: 9px;
    margin-right: 8px;
    border: 0;
}

input:focus-visible {
    outline: 2px solid #d22f27;
    box-shadow: #d22f27;
}

input:hover {
    box-shadow: 0 0 5pt 0.5pt #d22f27;
}

input:focus {
    box-shadow: 0 0 5pt 2pt #d22f27;
    outline-width: 0px;
}

button {
    padding: 8px;
    border: 0px;
    background-color: #d22f27;
    color: white;
    border-radius: 9px;
}

button:active {
    outline: 2px solid #d22f27;
    opacity: .8;
}

button:hover {
    box-shadow: 0 0 5pt 0.5pt #d22f27;

}
</style>