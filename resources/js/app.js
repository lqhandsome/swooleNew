window.Vue = require('vue');
import {vueBaberrage} from 'vue-baberrage';
Vue.use(vueBaberrage);

Vue.component('tasks-component', require('./components/TasksComponent.vue').default);
Vue.component('danmu-component', require('./components/DanmuComponent.vue').default);
