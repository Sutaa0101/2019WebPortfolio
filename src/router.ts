import Vue from 'vue';
import Router from 'vue-router';
import Top from './views/Top.vue';
import About from './views/About.vue';
import Works from './views/Works.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top,
    },
    {
      path: '/top',
      name: 'top',
      component: Top,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/works',
      name: 'works',
      component: Works,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
