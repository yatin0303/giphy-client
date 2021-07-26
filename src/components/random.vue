<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <v-card
          height="auto"
          max-width="1200px"
          width="auto"
          class="my-5"
          v-for="pic in picarray"
          :key="pic.src"
        >
          <v-lazy
          v-model="pic.loaded"
            :options="{
              threshold: 0.5,
            }"
            transition="scale-transition"
          >
            <v-img
              @load="isloaded(pic.id)"
              max-height="350px"
              :src="pic.src"
            ></v-img>
          </v-lazy>
        </v-card>
        
      </v-col>
    </v-row>
    <v-layout justify-center>
     <v-btn @click="showmore">load more</v-btn>
     </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      key: "z3Dsbbz6C34QALysXK6NLftjy4t24UnJ",
      picarray: [],
    };
  },
  methods: {
    isloaded(e) {
     
      this.picarray[e].loaded = true;
     
    },
    async showmore(){
        const tag =this.$route.params.category
        let offset = this.picarray.length
         const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=z3Dsbbz6C34QALysXK6NLftjy4t24UnJ&q=${tag}&limit=20&offset=${offset}`);
        const data = await response.json();
        let id = this.picarray.length-1;
        data.data.forEach((element) => {
        this.picarray.push({
          src: element.images.original.url,
          loaded: false,
          id: id++,
        });
      });
    },
    async fetchimg(e) {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=z3Dsbbz6C34QALysXK6NLftjy4t24UnJ&q=${e}&limit=25`
      );
      this.picarray = [];
      const data = await response.json();
      
      let id = 0;
      data.data.forEach((element) => {
        this.picarray.push({
          src: element.images.original.url,
          loaded: false,
          id: id++,
        });
      });
      console.log(this.picarray);
     
    },
  },
  created(){
    console.log('henlo');
      this.fetchimg(this.$route.params.category||'animals');
  },
  watch:{
    $route(){
      this.fetchimg(this.$route.params.category);
    }
  }
};
</script>
