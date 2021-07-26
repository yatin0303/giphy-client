import Vue from 'vue'
import VueRouter from 'vue-router'

import searchBar from '../views/search.vue'
import trending from '../components/trending.vue'
import random from '../components/random.vue'
import notFound from '../views/notfound.vue'
Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'trending',name:'default'},
  {path:'/search/:tag',component:searchBar,name:'search'},
  {path:'/trending',component:trending,name:'trending'},
  {path:'/categories/:category',component:random,name:'category'},
  {
    path: "/:notfound(.*)*",
    component: notFound,
  },

  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
