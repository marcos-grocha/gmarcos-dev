<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="4" class="pa-4">
          <v-card-title class="text-h4">
            {{ msg }}
          </v-card-title>
          
          <v-card-subtitle class="text-h6 mt-2">
            Marcos Araujo Goulart
          </v-card-subtitle>

          <v-card-text>
            gmarcos.dev@gmail.com | (79) 99963-0944
          </v-card-text>
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
