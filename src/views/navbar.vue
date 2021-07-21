<template>
<div>
  <v-app-bar app flat color="pink" hide-on-scroll>
    <!-- <v-container> -->
      <v-row justify="end" dense>
        <v-col>
          <v-btn icon @click="drawer=!drawer">
            <v-icon>
              menu
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn icon>
            <v-icon>
              home
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn icon>
            <v-icon>
              home
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn icon>
            <v-icon>
              home
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    <!-- </v-container> -->
  </v-app-bar>
  <v-navigation-drawer class="mt-md-16 mt-12 "  absolute :value="drawer" @transitionend="transitionend" > 
     <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 grey--text">
            Categories
          </v-list-item-title>
         
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <!-- <v-icon>{{ item.icon }}</v-icon> -->
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
</v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data(){
    return{
      drawer:false,
      items:[]
    }
  },
  methods:{
    transitionend(e){
      console.log(e);
    },
    async categories(){
      const response =await fetch('https://api.giphy.com/v1/gifs/categories?api_key=z3Dsbbz6C34QALysXK6NLftjy4t24UnJ')
     const data=await response.json();
     console.log(data);
     
     data.data.forEach(element => {
       this.items.push({name:element.name})
       
     });

    }
  }
  ,created(){
    this.categories();
  }
};
</script>
