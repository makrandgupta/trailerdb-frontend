import movieService from "./../../services/movie";
import {mapGetters} from "vuex";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      videoOptions: {
        src: '',
        // poster: this.movie.thumbnail,
      }
    }
  },
  methods: {
    getData(id) {
      movieService.fetch(id);
      this.src = this.movie.trailer;
    },
  },
  computed: {
    ...mapGetters(['movie', 'movieError']),
  },
  watch:{
    id (newId){
      this.getData(newId);
    }
  },
  created () {
    this.getData(this.id);
  },
  components: {
    VLayout: require('layouts/minimal/minimal.vue'),
    VPanel: require('components/panel/panel.vue'),
  },
};
