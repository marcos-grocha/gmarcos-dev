<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6" md="4">
        <h3 class="text-h5 mt-6 mb-2">Fale comigo</h3>
        <v-list>
          <v-list-item>
            <v-btn
              href="mailto:gmarcos.dev@gmail.com"
              target="_blank"
              rel="noopener"
              color="primary"
              variant="text"
            >
              Através do email
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn
              href="https://wa.me/+5579999630944"
              target="_blank"
              rel="noopener"
              color="primary"
              variant="text"
            >
              Através do WhatsApp
            </v-btn>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col cols="6" md="4">
        <h3 class="text-h5 mt-6 mb-2">Vamos nos conectar!</h3>
        <v-list>
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
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Rodape'
  }
</script>