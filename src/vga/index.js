import loadGoogleMaps from './helper';
import VuetifyGoogleAutocomplete from './VuetifyGoogleAutocomplete';

// Prevent window from being accessed within non-browser context.
if (typeof window !== 'undefined') {
  window.vgaMapState = {
    initMap: false,
  };

  window.initVGAMaps = () => {
    window.vgaMapState.initMap = true;
  };
}

VuetifyGoogleAutocomplete.install = (Vue, options) => {
  // Set defaults
  options = {
    /*
     * Allow this component to be used in conjunction with vue2-google-maps and loads maps API
     * via the other component.
     *
     * @see https://github.com/MadimetjaShika/vuetify-google-autocomplete/issues/60
     */
    vueGoogleMapsCompatibility: false,
    ...options,
  };

  // add Vue.$vueGoogleMapsCompatibility flag to be used for deferred loading via vue2-google-maps lazy loader
  Vue.mixin({
    created() {
      this.$vueGoogleMapsCompatibility = options.vueGoogleMapsCompatibility;
    },
  });

  if (options.apiKey) {
    if (!options.vueGoogleMapsCompatibility) {
      loadGoogleMaps(options.apiKey, options.version, options.language);
    } // else use vue2-google-maps to load maps via deferred/promise-based loading mechanism on Vue.$gmapApiPromiseLazy
  }

  Vue.component(VuetifyGoogleAutocomplete.name, VuetifyGoogleAutocomplete);
};

export default VuetifyGoogleAutocomplete;
