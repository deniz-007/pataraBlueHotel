import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/pages/Index.vue'
import BlueHotel from '@/pages/BlueHotel.vue'
import Contact from '@/pages/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/blueHotel',
      name: 'blueHotel',
      component: BlueHotel
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
