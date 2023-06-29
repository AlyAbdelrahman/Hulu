const API_KEY = process.env.API_KEY;

export default {
    fetchingTrendind:{
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchComedyMovies:{
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies:{
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies:{
        title: 'Romance',
        url: `/dicover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fettchMystery:{
        title: 'Mystery',
        url: `/dicover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    FetchSciFi:{
        title: 'TrendSci-Fi',
        url: `/trending/movie?api_key=${API_KEY}&with_genres=878`
    },
    FetchWestern:{
        title: 'Western',
        url: `/trending/movie?api_key=${API_KEY}&with_genres=37`
    },
    FetchAnimation:{
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    FetchTV:{
        title: 'TV Movie',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
}