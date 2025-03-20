<template>
  <v-container>
    <v-card elevation="4" class="pa-4">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card-subtitle class="text-h6 mt-2">
            MARCOS GUIMARÃES <v-btn color="#978872" variant="text" to="/certificates">- Certificates -</v-btn>
          </v-card-subtitle>
          <v-card-text>
            Software Developer especialista em Ruby on Rails, construindo soluções web através de Desenvolvimento Orientado a Testes (Test Driven Development) e práticas ágeis, garantindo a qualidade do código.
            <br><br>
            Tenho boa familiaridade com Java Spring e, apesar da minha especialização, sou um profissional ávido por conhecimento, determinado, autodidata, adaptável e organizado. Apaixonado pelo processo de aprendizagem em novas tecnologias e motivado a buscar excelência em minhas soluções.
          </v-card-text>
        </v-col>

        <v-col cols="12" sm="4" md="3" class="text-center">
          <img alt="Marcos" :src="gmarcos" class="circular-image">
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  import gmarcosImage from '../assets/gmarcos.png'; // Importa a imagem
  export default {
    name: 'Profile',
    props: {
      msg: String
    },
    data() {
      return {
        gmarcos: gmarcosImage, // Disponibiliza a imagem no template
      };
    },
  }
</script>
