<template>
  <v-app>
    <Menu/>
    
    <router-view/>

    <v-spacer></v-spacer>
    <Rodape/>
  </v-app>
</template>

<script>
  import Menu from '../src/components/Menu.vue'
  import Rodape from './components/Rodape.vue';
  
  export default {
    name: 'App',
    components: {
      Menu,
      Rodape
    },

    data: () => ({
      //
    }),
  }
</script>
