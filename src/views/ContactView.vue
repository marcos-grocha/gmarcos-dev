<template>
  <v-container class="hello">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="4" class="pa-4">
          <v-card-text>
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

            <h3 class="text-h5 mt-6 mb-2">Conecte-se comigo</h3>
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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
