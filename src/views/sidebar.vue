    <template>
    <div>
        <nav-bar @hello="mount" ></nav-bar>
    <v-navigation-drawer app :value="state" temporary @input="see" color="accent" >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 grey--text">
            Categories
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.name" link>
          <v-list-item-content @click="categories(item.name)">
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </div>
  </template>
  <script>
      import navBar from './navbar.vue'
  export default {
      components:{navBar},
      data(){
          return{
               items: [],
               state:false
          }
      },
      methods:{
         async category(){
             await this.$store.dispatch('categories')
             const cat=this.$store.getters.getItems;
             this.items=cat
          },
              mount(){
                  
          this.state=!this.state
      },
        see(e){
           if(e===false){
               this.state=!this.state
           }

        },
    
       categories(item) {
      this.$router.push(`/categories/${item}`);
    }
      },
  
      
      created(){
          this.category();
          
      }
  }
  </script>