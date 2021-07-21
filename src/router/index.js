import Vue from 'vue'
import VueRouter from 'vue-router'

import searchBar from '../views/search.vue'
import trending from '../components/trending.vue'
import random from '../components/random.vue'
Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'trending',name:'default'},
  {path:'/home',component:searchBar,name:'search'},
  {path:'/trending',component:trending,name:'trending'},
  {path:'/random',component:random,name:'random'},
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
