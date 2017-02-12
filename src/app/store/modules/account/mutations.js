import {GET_ACCOUNT} from "./../../mutation-types";

export default {
  [GET_ACCOUNT](state, account) {
    state.id = account.id;
    state.username = account.username;
    state.email = account.email;
    state.firstName = account.firstName;
    state.lastName = account.lastName;
  },
};
