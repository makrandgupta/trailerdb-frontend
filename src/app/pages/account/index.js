/* ============
 * Account Index Page
 * ============
 *
 * Page where the user can view the account information
 */

export default {
  data () {
    return {
      account: this.$store.state.account,
    }
  },
  components: {
    VLayout: require('layouts/default/default.vue'),
    VPanel: require('components/panel/panel.vue'),
  },
};
