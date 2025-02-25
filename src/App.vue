<template>
  <v-app>
    <Menu/>
    
    <router-view/>
  </v-app>
</template>

<script>
  import Menu from '../src/components/Menu.vue'
  
  export default {
    name: 'App',
    components: {
      Menu
    },

    data: () => ({
      //
    }),
  }
</script>
