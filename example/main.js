// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueClipboards from 'vue-clipboards';
import Vuetify from 'vuetify';
// import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
import App from './App';
import router from './router';
import VuetifyGoogleAutocomplete from '../src/vga/index';

Vue.use(VueClipboards);

const vuetifyOptions = {};
Vue.use(Vuetify);

Vue.use(VuetifyGoogleAutocomplete, {
  // apiKey: 'AIzaSyDyJUwEpWPLTDZrX9TVeq5m8vGQScqyZCA',
  apiKey: 'AIzaSyCKizLJY8yg_bPu1rPUzo8-c9JZ5jXDeU0',
});

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    navigatePreviousPage() {
      switch (this.$route.path) {
        case '/': {
          this.$router.push('/page-3');
          break;
        }
        case '/page-2': {
          this.$router.push('/page-1');
          break;
        } case '/page-3': {
          this.$router.push('/page-2');
          break;
        } default: {
          this.$router.push('/');
          break;
        }
      }
    },

    navigateNextPage() {
      switch (this.$route.path) {
        case '/': {
          this.$router.push('/page-1');
          break;
        } case '/page-1': {
          this.$router.push('/page-2');
          break;
        } case '/page-2': {
          this.$router.push('/page-3');
          break;
        } default: {
          this.$router.push('/');
          break;
        }
      }
    },
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  vuetify: new Vuetify(vuetifyOptions),
});
