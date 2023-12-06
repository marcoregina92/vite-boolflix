
import { reactive } from 'vue'

export const store = reactive({
    movies: [],
    getInput: "",
    serieTv: [],

    // API:
    apiMovie: "https://api.themoviedb.org/3/search/movie",
    apiSerie: "https://api.themoviedb.org/3/search/tv",
    apiKey: '896cd3d890a13f2d39cda4cdd29b4ee1'
    // apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=896cd3d890a13f2d39cda4cdd29b4ee1&query=",
});

