<template>
  <v-container class="text-h4">
    {{ msg }}
  </v-container>
  <v-container>
    <v-card elevation="4" class="pa-4">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card-subtitle class="text-h6 mt-2">
            MARCOS GUIMARÃES ROCHA
          </v-card-subtitle>
          <v-card-text>
            Brasileiro, 27 anos <br>
            Aracaju – SE <br>
            (79) 99963-0944 <br>
            gmarcos.dev@gmail.com
          </v-card-text>
          <v-btn color="#978872" variant="text" to="/about">About</v-btn> |
          <v-btn color="#978872" variant="text" to="/curriculo">Curriculum</v-btn>
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
