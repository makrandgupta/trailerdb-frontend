import { GET_MOVIE, SET_MOVIE_ERROR } from './../../mutation-types';

export default {
  [GET_MOVIE](state, movie) {
    state.data = movie;
    // state.name = movie.name;
    // state.actors = movie.actors;
    // state.comments = movie.comments;
    // state.description = movie.description;
    // state.director= movie.director;
    // state.ratings = movie.ratings;
    // state.thumbnail = movie.thumbnail;
    // state.trailer = movie.trailer;
  },
  [SET_MOVIE_ERROR](state, error) {
    state.error = error;
  },
};
