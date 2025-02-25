<template>
  <v-container>
    <v-row>
      <v-col>
          <v-toolbar flat>
              <v-toolbar-title>gmarcos-dev</v-toolbar-title>
              <v-spacer></v-spacer>
              <nav>
                <v-btn color="#978872" variant="text" to="/">Home</v-btn> |
                <v-btn color="#978872" variant="text" to="/about">About</v-btn> |
                <v-btn color="#978872" variant="text" to="/projects">Projects</v-btn> |
                <v-btn color="#978872" variant="text" to="/certificates">Certificates</v-btn> |
                <v-btn color="#978872" variant="text" to="/contact">Contact</v-btn>
              </nav>
          </v-toolbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Menu'
  }
</script>

<style>
  nav {
  padding: 30px;
  }
</style>
