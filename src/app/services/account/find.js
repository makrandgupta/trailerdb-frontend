import Vue from "vue";
import accountTransformer from "./../../transformers/account";
import store from "./../../store";

// When the request succeeds
const success = (account) => {
  account = accountTransformer.fetch(account);
  store.dispatch('getAccount', account);
};

// When the request fails
const failed = (error) => {
  // TODO figure out how to display error message to frontend
  store.dispatch('setAuthError', error.data);
};

export default () => {
  /*   Normally you would perform an AJAX-request.
   * But to get the example working, the data is hardcoded.
   *
   * With the include REST-client Axios, you can do something like this:
   */
  Vue.$http.get('/auth/account')
    .then((response) => {
      success(response.data);
    })
    .catch((error) => {
      failed(error);
    });

  // const succeeds = true;

  // if (succeeds) {
  //   success({
  //     first_name: 'John',
  //     last_name: 'Doe',
  //     email: 'john@doe.com',
  //   });
  // } else {
  //   failed();
  // }
};
