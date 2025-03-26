<template>
  <v-container>
    <v-row>
      <v-col>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <nav class="menu-nav">
            <v-btn variant="text" to="/" class="menu-btn">Developer</v-btn> |  
            <v-btn variant="text" to="/cv" class="menu-btn">CV</v-btn> |
            <v-btn variant="text" to="/certificates" class="menu-btn">Certificates</v-btn>
          </nav>
          <v-spacer></v-spacer>
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

<style scoped>
  .menu-nav {
    padding: 30px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    color: #978872;
  }

  .menu-btn {
    font-size: clamp(0.6rem, 2.6vw, 0.9rem);
    white-space: nowrap;
    min-width: auto;
    padding: 0 8px;
  }

  @media (max-width: 600px) {
    .menu-nav {
      padding: 10px;
    }

    .menu-btn {
      font-size: clamp(0.4rem, 2.3vw, 0.8rem);
      padding: 0 4px;
    }
  }
</style>