<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="4" class="pa-4">
          <v-card-title class="text-h4">
            {{ msg }}
          </v-card-title>
          
          <v-card-subtitle class="text-h6 mt-2">
            MARCOS GUIMARÃES ROCHA
          </v-card-subtitle>
          <v-card-text>
            Brasileiro, 27 anos <br>
            Aracaju – SE <br>
            (79) 99963-0944 <br>
            gmarcos.dev@gmail.com
          </v-card-text>

          <v-btn color="#978872" variant="text" to="/curriculo">Curriculo</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Profile',
    props: {
      msg: String
    }
  }
</script>
