import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      // children: [
      //   {
      //     path: ''
      //     name: 'xx',
      //   }
      // ]
    },
  ],
  // to utilize the browser's history API for navigation mode: 'history'
  mode: 'history',
});
