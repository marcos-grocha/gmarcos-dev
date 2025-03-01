<template>
  <v-container class="home">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="9">
        <Profile msg="Boas Vindas! Esse é o meu Portifólio." />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { defineComponent } from 'vue';

  // Components
  import Profile from '../components/Profile.vue';

  export default defineComponent({
    name: 'HomeView',

    components: {
      Profile,
    },
    data() {
      return {
        //
      };
    },
  });
</script>

<style>
  .circular-image {
    width: 200px; /* Define a largura desejada */
    aspect-ratio: 1 / 1; /* Mantém a proporção 1:1 */
    object-fit: cover; /* Garante que a imagem cubra todo o espaço sem distorção */
    border-radius: 50%; /* Torna a imagem circular */
  }
</style>
