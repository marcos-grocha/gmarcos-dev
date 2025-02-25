<template>
  <v-container class="hello">
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
            <!-- Meus Links -->
            <h3 class="text-h5 mt-6 mb-2">Meus Links</h3>
            <v-list>
              <v-list-item>
                <v-btn
                  href="https://github.com/marcos-grocha"
                  target="_blank"
                  rel="noopener"
                  color="primary"
                  variant="text"
                >
                  GitHub
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn
                  href="https://www.linkedin.com/in/marcos-grocha/"
                  target="_blank"
                  rel="noopener"
                  color="primary"
                  variant="text"
                >
                  LinkedIn
                </v-btn>
              </v-list-item>
            </v-list>

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

<style scoped>
  .text-h5 {
    font-weight: 500;
  }
</style>