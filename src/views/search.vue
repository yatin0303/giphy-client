<template><div>

    <v-form @submit.prevent="fetchimg">
    <v-text-field prepend-icon="search" v-model="search" @click="find"> 
    </v-text-field>
    </v-form>
    <v-card height="400px" class="my-5 pa-5" v-for="pic in picarray" :key="pic.src" >
            <v-img
        @load="isloaded(pic.id)"
      :src="pic.src"
    ></v-img>
        <v-skeleton-loader
     class="mx-auto"
      max-width="300"
      type="image"
      :loading="pic.loaded"
      >
      
    
    </v-skeleton-loader>
    </v-card>
    
    </div>

</template>
<script>
export default {
    data(){
        return{
            search:'',
            key:'z3Dsbbz6C34QALysXK6NLftjy4t24UnJ',
            picarray:[]
        }
    },
    methods:{
        find(){
            console.log(this.search);
        },
        isloaded(e){
            console.log(this.picarray[e].loaded)
            this.picarray[e].loaded=false
             console.log(this.picarray[e].loaded)
        },
        async fetchimg(){
            
            const response=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=z3Dsbbz6C34QALysXK6NLftjy4t24UnJ&q=${this.search}&limit=5`)
            this.picarray=[]
            const  data=await response.json();
            console.log(data);
            let id=0
            data.data.forEach(element => {
                
                this.picarray.push({src:element.images.original.url,loaded:true,id:id++})
                
            });
            console.log(this.picarray);
        }
    },
    
};
</script>
