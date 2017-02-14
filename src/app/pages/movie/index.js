import movieService from "./../../services/movie";
import {mapGetters} from "vuex";
import {videoPlayer} from "vue-video-player";

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
        poster: '',
      }
    }
  },
  methods: {
    getData(id) {
      movieService.fetch(id);
      this.videoOptions.src = this.movie.trailer;
      this.videoOptions.poster = this.movie.thumnbail;
    },
  },
  computed: {
    ...mapGetters(['movie', 'movieError']),
  },
  watch:{
    id (newId){
      this.getData(newId);
    },
  },
  created () {
    this.getData(this.id);
  },
  components: {
    VLayout: require('layouts/default/default.vue'),
    VPanel: require('components/panel/panel.vue'),
    videoPlayer,
  },
};
