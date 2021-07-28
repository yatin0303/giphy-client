<template>
    <v-app-bar app flat color="primary" >
      <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
      <v-app-bar-nav-icon @click="toggle" v-bind="attrs" v-on="on"></v-app-bar-nav-icon> </template>
         <span>Categories</span>
          
          </v-tooltip>
       
      <!-- <v-container> -->
      
        <!-- <v-col cols="0">
          
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon @click="drawer = !drawer" v-bind="attrs" v-on="on">
                <v-icon>
                  menu
                </v-icon>
              </v-btn>
          
            <span>Categories</span>
          </v-tooltip>
        </v-col> -->
        <v-row justify="end" dense class="pt-5" no-gutters>
        <v-col cols=0>
        <!-- <img class="mr-3 mt-4" :src="require('../assets/logo.png')" height="20"/> -->
        </v-col>
        <v-col md="4" cols="5" class="mt-1">
          <v-autocomplete
            :loading="loading"
            no-filter
            filled
            v-model="value"
            :items="suggestions"
            dense
            :search-input="value"
            append-icon="search"
            @update:search-input="suggestion"
            @input="go"
            placeholder="Meme"
            @keydown.enter="temp(value)"
            rounded
          ></v-autocomplete>
        </v-col>
        <v-col cols="auto">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon @click="darkMode" v-bind="attrs" v-on="on">
                <v-icon color="text">
                  {{ mode }}
                </v-icon>
              </v-btn>
            </template>
            <span>Night Mode</span>
          </v-tooltip>
        </v-col>
        <v-col cols="auto">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon router to="/trending" replace v-bind="attrs" v-on="on" >
                <v-icon color="text">
                  whatshot
                </v-icon>
              </v-btn>
            </template>
            <span>Trending</span>
          </v-tooltip>
        </v-col>
      </v-row>
      <!-- </v-container> -->
    </v-app-bar>



</template>
<script>
export default {

  emits:['hello'],
  
  data() {
    return {
      items: [],
      mode: "dark_mode",
      search: false,
      value: "",
      suggestions: [],
      loading: false,
      draw:true
    };
  },
  methods: {
    toggle(){
     this.$emit('hello')
    },

    darkMode() {
      const theme = this.$vuetify.theme.dark;
      this.$vuetify.theme.dark = !theme;
      this.mode = theme ? "dark_mode" : "light_mode";
    },
    searchbar() {
      this.search = !this.search;
    },
    async suggestion(e) {
      this.loading = true;
      const response = await fetch(
        `https://api.giphy.com/v1/tags/related/term=${e}?api_key=z3Dsbbz6C34QALysXK6NLftjy4t24UnJ`
      );

      const data = await response.json();
      this.loading = false;
      this.suggestions = [];
      for (let i = 0; i < 5; i++) {
        this.suggestions.push(data.data[i].name);
      }
    },

    go(e) {
     
      this.$router.replace(`/search/${e}`);
    },
   
  },
};
</script>
<style lang="scss" scoped></style>
