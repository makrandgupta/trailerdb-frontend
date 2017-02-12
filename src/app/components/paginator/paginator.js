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
      config: {
        remoteData: 'data',
        remoteCurrentPage: 'currentPage',
        remoteLastPage: 'lastPage',
        remoteNextPageUrl: 'nextPageParams',
        remotePrevPageUrl: 'prevPageParams',
        previousButtonText: 'Previous',
        nextButtonText: 'Next'
      }
    }
  },
  methods: {
    fetchData (options) {
      var self = this;
      options = options || this.options;
      // console.log('req options', options);
      Vue.$http.get(this.base_url, { params: options})
        .then(function (response) {
          console.log('headers', response.headers);
          self.handleResponse(response);
        }).catch(function (response) {
        console.log('Fetching data failed.', response);
      });
    },
    handleResponse (response) {
      this.makePagination(response.headers);
      // let data = utils.getNestedValue(response.data, this.config.remoteData);
      this.$emit('update', response.data);
    },
    makePagination (headers) {
      let parsed_links = parseLink(headers.link);
      console.log('parsed headers', parsed_links);
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
