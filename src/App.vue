<template>
  <v-app>
    
    <side-bar></side-bar>
    <!-- <nav-drawer></nav-drawer> -->
    
    
    <v-main>
       <tab-view></tab-view>
      <v-container>
       
    <!-- <search-bar app></search-bar> -->
   <v-fade-transition mode="out-in">
     <keep-alive>
        <router-view ></router-view>
        </keep-alive>
</v-fade-transition>
<v-fab-transition>
 <v-btn
  v-show="scrolled"
     large
        class="float"
        fab
        dark
        small
        color="primary"
        @click="goToTop"
      >
         <v-icon>expand_less</v-icon>
      </v-btn>
      </v-fab-transition>
    </v-container>
    </v-main>
    
  </v-app>
</template>
<script>
// import navBar from './views/navbar.vue'
import tabView from './views/tabs.vue'
import sideBar from './views/sidebar.vue'
// import searchBar from './views/search.vue'
// import navDrawer from './views/drawer.vue'
export default {
  components:{tabView,sideBar},
  data(){
    return{
      scrollval:0
    }
  },
  methods:{
    goToTop(){
      window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
    },
  },mounted(){
  
      window.addEventListener('scroll',()=>{
         this.scrollval=window.top.scrollY
      });
  },
  computed:{
    scrolled(){
      if(this.scrollval>500){
        return true
      }
      else return false
    }
  }
  
}
</script>
<style lang="scss" scoped>
.float{
  position: fixed;
  bottom:5vh;
  left:80vw;
  z-index: 10;
}
.float#scroll-up {
    display: none !important;
}
</style>