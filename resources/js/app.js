window.Vue = require('vue');
import {vueBaberrage} from 'vue-baberrage';
Vue.use(vueBaberrage);
import App from './components/DanmuComponent'
 Vue.component('App', App);

new Vue({ el: '#lqhandsome'})
