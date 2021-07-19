<template>
  <v-app>
    <v-app-bar app></v-app-bar>
    <v-navigation-drawer app> </v-navigation-drawer>
    <v-main>
      <v-container fluid>
    <search-bar app></search-bar>
    </v-container>
    </v-main>
  </v-app>
</template>
<script>
// import navBar from './views/navbar.vue'
import searchBar from './views/search.vue'
export default {
  components:{searchBar}
  
}
</script>