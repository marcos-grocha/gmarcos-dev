<template>
  <div class="home">
    <img alt="Marcos" src="../assets/gmarcos.png" class="circular-image">
    <HelloWorld msg="Boas Vindas!"/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'HomeView',
    components: {
      HelloWorld
    }
  }
</script>

<style>
  .circular-image {
    width: 200px; /* Define a largura desejada */
    aspect-ratio: 1 / 1; /* Mantém a proporção 1:1 */
    object-fit: cover; /* Garante que a imagem cubra todo o espaço sem distorção */
    border-radius: 50%; /* Torna a imagem circular */
  }
</style>
