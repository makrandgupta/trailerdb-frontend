import Vue from 'vue';
import accountTransformer from './../../transformers/account';
import store from './../../store';

// When the request succeeds
const success = (account) => {
  account = accountTransformer.fetch(account);
  store.dispatch('getAccount', account);
};

// When the request fails
const failed = (error) => {
  store.dispatch('setAuthError', error.data);
};

export default () => {
  Vue.$http.get('/auth/account')
    .then((response) => {
      success(response.data);
    })
    .catch((error) => {
      failed(error);
    });
};
