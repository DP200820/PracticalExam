export const FETCH_MOVIESDETAILS_BEGIN   = 'FETCH_MOVIESDETAILS_BEGIN';
export const FETCH_MOVIESDETAILS_SUCCESS = 'FETCH_MOVIESDETAILS_SUCCESS';
export const FETCH_MOVIESDETAILS_FAILURE = 'FETCH_MOVIESDETAILS_FAILURE';

export const fetchMoviesDetailsBegin = () => ({
  type: FETCH_MOVIESDETAILS_BEGIN
});

export const fetchMoviesDetailsSuccess = moviesDetails => ({
  type: FETCH_MOVIESDETAILS_SUCCESS,
  payload: { moviesDetails }
});

export const fetchMoviesDetailsFailure = error => ({
  type: FETCH_MOVIESDETAILS_FAILURE,
  payload: { error }
});