import axios from "axios"; 

axios.defaults.baseURL = "https://api.themoviedb.org/3";


export const API_KEY = '98b03a6dbdbff755e542e0974ad218d2';

export const getTrendingMovies = async () => {
    const resp = await axios.get(`/trending/movie/day?`, {
        params: {
            api_key: API_KEY,
            page: 1,
    }
    })
    return resp.data.results;
}

export const getMoviesByQuery = async query => {
  const resp = await axios.get(
    `/search/movie?&language=en-US&query=${query}&page=1&include_adult=false`,
    {
      params: {
        api_key: API_KEY,
        page: 1,
      },
    }
  );
  return resp.data.results;
};
