<template>
  <v-container>
    <v-row>
      <v-col>
          <v-toolbar flat>
              <v-toolbar-title><v-btn variant="text" to="/">M.</v-btn></v-toolbar-title>
              <v-spacer></v-spacer>
              <nav>
                <v-btn color="#978872" variant="text" to="/">Dev</v-btn> |  
                <v-btn color="#978872" variant="text" to="/cv">CV</v-btn>
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
