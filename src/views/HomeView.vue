<template>
  <v-container class="home">
    <v-row align="center" justify="center">
      <!-- Coluna para o conteúdo do Profile -->
      <v-col cols="12" sm="8" md="9">
        <Profile msg="Boas Vindas!" />
      </v-col>
      <!-- Coluna para a imagem -->
      <v-col cols="12" sm="4" md="3" class="text-center">
        <img alt="Marcos" :src="gmarcos" class="circular-image">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { defineComponent } from 'vue';

  // Components
  import Profile from '../components/Profile.vue';
  import gmarcosImage from '../assets/gmarcos.png'; // Importa a imagem

  export default defineComponent({
    name: 'HomeView',

    components: {
      Profile,
    },
    data() {
      return {
        gmarcos: gmarcosImage, // Disponibiliza a imagem no template
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
