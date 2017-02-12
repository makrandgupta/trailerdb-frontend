import Vue from 'vue';
import parseLink from 'parse-link-header';
export default {
  props: {
    base_url: {
      type: String,
      required: true,
    },
    custom_template : '',
    options: {
      type: Object,
      required: false,
      default () {
        return {
          pageSize: 1,
          p: 0
        }
      }
    }
  },
  data () {
    return {
      currentPage: '',
      lastPage: '',
      nextPageParams: {},
      prevPageParams: {},
    }
  },
  methods: {
    fetchData (options) {
      let self = this;
      options = options || this.options;
      Vue.$http.get(this.base_url, { params: options})
        .then(function (response) {
          self.handleResponse(response);
        }).catch(function (response) {
        console.log('Fetching data failed.', response);
      });
    },
    handleResponse (response) {
      this.makePagination(response.headers);
      this.$emit('update', response.data);
    },
    makePagination (headers) {
      let parsed_links = parseLink(headers.link);
      if (parsed_links.next) {
        this.currentPage = parsed_links.next.p;
      }
      else if (parsed_links.prev) {
        this.currentPage = parseInt(parsed_links.prev.p) + 2;
      }
      else {
        this.currentPage = 1;
      }
      this.lastPage = headers['x-total-count'];

      if(parsed_links.next){
        this.nextPageParams = {
          p: parsed_links.next.p,
          pageSize: parsed_links.next.pageSize,
        };
      } else {
        this.nextPageParams = {};
      }

      if(parsed_links.prev){
        this.prevPageParams = {
          p: parsed_links.prev.p,
          pageSize: parsed_links.prev.pageSize,
        };
      } else {
        this.prevPageParams = {};
      }
    },
  },
  watch : {
    options () {
      this.fetchData();
    }
  },
  created () {
    this.fetchData();
  }
}
