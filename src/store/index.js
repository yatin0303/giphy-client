import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories:[]
  },
  mutations: {
    setItem(state,payload){
      state.categories=payload
     
    }
  },
  actions: {
    async categories(context) {
      
      const response = await fetch(
        "https://api.giphy.com/v1/gifs/categories?api_key=z3Dsbbz6C34QALysXK6NLftjy4t24UnJ"
      );
      const data = await response.json();
        const items=[]
      data.data.forEach((element) => {
        items.push({ name: element.name });
      });
      context.commit('setItem',items)
    }
  },
  getters: {
    getItems(state){
      return state.categories;
    }
  }
})
