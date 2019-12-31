import Vue from 'vue';
import Vuetify from 'vuetify';
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';
import VueClipboards from 'vue-clipboards';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import router from './router';
// import vuetify from './plugins/vuetify';

const vuetifyOptions = {};
Vue.use(Vuetify);

Vue.config.productionTip = false;

Vue.use(VueClipboards);
Vue.use(Vuetify);

Vue.use(VuetifyGoogleAutocomplete, {
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

new Vue({
  router,
  // vuetify,
  render: h => h(App),
  vuetify: new Vuetify(vuetifyOptions),
}).$mount('#app');
