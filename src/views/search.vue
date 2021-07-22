<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <!-- <v-form @submit.prevent="fetchimg">
          <v-text-field prepend-icon="search" v-model="search" @click="find">
          </v-text-field>
        </v-form> -->

        <v-card
          height="400px"
          max-width="800px"
          class="my-5 pa-5"
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
        <v-btn @click="showmore">load more</v-btn>
      </v-col>
    </v-row>
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
  computed:{
    tags(){
    return this.$route.params.tag
    }
  },
  methods: {
    find() {
      console.log(this.search);
    },
    isloaded(e) {
      console.log(this.picarray[e].loaded);
      this.picarray[e].loaded = true;
      console.log(this.picarray[e].loaded);
    },
    async showmore(){
         const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=z3Dsbbz6C34QALysXK6NLftjy4t24UnJ&q=${this.tags}&limit=5&offset=6`);
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
    async fetchimg() {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=z3Dsbbz6C34QALysXK6NLftjy4t24UnJ&q=${this.tags}&limit=5`
      );
      this.picarray = [];
      const data = await response.json();
      console.log(data);
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
    this.fetchimg();
  }
};
</script>
