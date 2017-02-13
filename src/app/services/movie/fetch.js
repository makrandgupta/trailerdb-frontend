import Vue from 'vue';
import store from './../../store';

// When the request succeeds
const success = (account) => {
  store.dispatch('getMovie', account);
};

// When the request fails
const failed = (error) => {
  store.dispatch('setMovieError', error.data);
};

export default (id) => {
  const url = `/movie/${id}`;
  Vue.$http.get(url)
    .then((response) => {
      success(response.data);
    })
    .catch((error) => {
      failed(error);
    });
};
