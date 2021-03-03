import { fetchMoviesDetailsBegin, fetchMoviesDetailsFailure, fetchMoviesDetailsSuccess } from "../MoviesAction";

export function fetchMoviesDetail() {
  debugger
    return dispatch => {
      debugger
      dispatch(fetchMoviesDetailsBegin());
      return fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=80d21f39055539da7429467ef13486c6&language=en-US&page=1")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          debugger
          dispatch(fetchMoviesDetailsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchMoviesDetailsFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }