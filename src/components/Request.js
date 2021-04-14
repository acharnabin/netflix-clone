const API_KEY="334830915e11651f473416fa17f037fb";
const Baseurl="https://api.themoviedb.org/3"
const requests ={
    fetch_trending: `${Baseurl}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetch_netflix_originals: `${Baseurl}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetch_most_popular_movies:`${Baseurl}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    fetch_action_movies:`${Baseurl}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetch_comedy_movies:`${Baseurl}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetch_horror_movies:`${Baseurl}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetch_romantic_movies:`${Baseurl}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetch_documentries_movies:`${Baseurl}/discover/movie?api_key=${API_KEY}&with_genres=99`,


};

export default requests;