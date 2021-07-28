import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md',
      },
      theme: { dark: false ,
        themes: {
          light: {
            primary: '#9B72AA',
            text: '#444444',
            accent: '#FAF3F3',
         
          },
          dark: {
            primary: '#4C4C6D',
            accent: '#444444'
          },
        },}
});