<template>
  <v-app>
    <nav-bar></nav-bar>
    <!-- <nav-drawer></nav-drawer> -->
    
    
    <v-main>
       <tab-view></tab-view>
      <v-container>
       
    <!-- <search-bar app></search-bar> -->
    <router-view></router-view>
    </v-container>
    </v-main>
  </v-app>
</template>
<script>
import navBar from './views/navbar.vue'
import tabView from './views/tabs.vue'
// import searchBar from './views/search.vue'
// import navDrawer from './views/drawer.vue'
export default {
  components:{navBar,tabView}
  
}
</script>