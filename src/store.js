
import { reactive } from 'vue'

export const store = reactive({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: { query: 'war', include_adult: 'false', language: 'it-IT', page: '1' },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTZjZDNkODkwYTEzZjJkMzljZGE0Y2RkMjliNGVlMSIsInN1YiI6IjY1NmRlNGE0M2RjMzEzMDBjNGZhODVjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3rp3IUheMRIcI7xEEqrY1sYqScRBK3_pe1qqhmzto40'
    }



    // apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=896cd3d890a13f2d39cda4cdd29b4ee1&query=",
});