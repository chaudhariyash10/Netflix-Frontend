const API_KEY = "d94a34f28c45dd49be10aaeba955060b";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflix0riginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};

export default requests;  


// fetchTrending: `7trending/all/week?api_key=${API_KEY}&language%3en-US', fetchNetflix0riginals: /discover/tv?api_key=$(API_KEY)&with_networks 213',

// fetchTopRated: /movie/top_rated?api_key=${API_KEY)&language=en-Us,

// fetchActionMovies: /discover/movie?api_key3${API_KEY)&with_genres%-28', fetchHorrorMovies: /discover/movie?api_key$(API_KEY)with genres-27,

// fetchComedyMovies: '/discover/movie?ap1_key=${API_KEY)&with_genres=35,

// fetchRomanceMovies: /discover/movie?api_key $(API_KEY)& with genres 10749,

// fetchDocumentaries: /discover/movie?api_key=$(API_KEY)&with genres-99