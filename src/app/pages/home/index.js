/* ============
 * Home Index Page
 * ============
 *
 * The home index page
 */

// import VuePaginator from 'vuejs-paginator'

export default {
  data () {
    return {
      movies: [],
      base_url: '/movie/list',
      options: {
        pageSize: 3,
        p: 0,
      },
    }
  },
  components: {
    VMoviecard: require('components/moviecard/moviecard.vue'),
    VPaginator: require('components/paginator/paginator.vue'),
    VLayout: require('layouts/default/default.vue'),
    VPanel: require('components/panel/panel.vue'),
  },
  methods: {
    update(data){
      this.movies = data;
    },
  },
};
