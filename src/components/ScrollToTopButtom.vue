<template>
  <v-btn class="scroll-to-top-btn" icon elevation="4" @click="scrollToTop">
    <v-icon>mdi-arrow-up</v-icon>
  </v-btn>
</template>

<script setup>
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
</script>

<style scoped>
  .scroll-to-top-btn {
    background-color: #978872;
    color: white;
    display: block;
    margin: 20px auto; /* Centraliza horizontalmente e adiciona margem vertical */
    position: relative; /* Posicionamento relativo para ficar no fluxo normal da página */
  }
</style>