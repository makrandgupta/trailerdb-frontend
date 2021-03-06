/* ============
 * Vuex Actions
 * ============
 *
 * All the actions that can be used
 * inside the store
 */
import * as types from './mutation-types';

// Account
export const getAccount = ({ commit }, account) => {
  commit(types.GET_ACCOUNT, account);
};

// Auth
export const login = ({ commit }, token) => {
  commit(types.LOGIN, token);
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
};

export const checkAuthentication = ({ commit }) => {
  commit(types.CHECK_AUTHENTICATION);
};

export const setAuthError = ({ commit }, error) => {
  commit(types.SET_AUTH_ERROR, error);
};

export const getMovie = ({ commit }, movie) => {
  commit(types.GET_MOVIE, movie);
};
