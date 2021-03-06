/* ============
 * Vuex Store
 * ============
 *
 * The store of the application
 *
 * http://vuex.vuejs.org/en/index.html
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import * as actions from './actions';

// Modules
import account from './modules/account';
import auth from './modules/auth';
import movie from './modules/movie';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  /**
   * Assign the actions to the store
   */
  actions,

  /**
   * Assign the getters to the store
   */
  getters: {
    authError(state) {
      return state.auth.error;
    },
    movieError(state) {
      return state.movie.error;
    },
    movie(state) {
      return state.movie.data;
    },
  },

  /**
   * Assign the modules to the store
   */
  modules: {
    account,
    auth,
    movie,
  },

  /**
   * If strict mode should be enabled
   */
  strict: debug,

  /**
   * Plugins used in the store
   */
  plugins: debug ? [createLogger()] : [],
});
