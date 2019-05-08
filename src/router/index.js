import Vue from 'vue';
import Router from 'vue-router';
import Emissions from '@/components/Emissions';
import Compare from '@/components/Compare';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Emissions',
      component: Emissions,
    },
    {
      path: '/compareEmissions',
      name: 'Compare',
      component: Compare,
    },
    {
      path: '*',
      redirect: '/'
    },
  ],
  // to utilize the browser's history API for navigation mode: 'history'
  mode: 'history',
});
