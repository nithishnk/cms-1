import Vue from 'vue';
import VueResource from 'vue-resource';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import colors from 'vuetify/es5/util/colors';
import Root from './components/Root.vue';
import store from './store';

Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.base,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3,
  },
});
Vue.use(VueResource);

new Vue({
  el: '#root',
  store,
  render: createElement => createElement(Root),
});
