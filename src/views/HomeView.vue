<template>
  <!-- Menu -->
  <Profile />
  <Projects />
  <!-- Rodape -->
</template>

<script>
  import { defineComponent } from 'vue';

  // Components
  import Profile from '../components/Profile.vue';
  import Projects from '../components/Projects.vue';

  export default defineComponent({
    name: 'HomeView',

    components: {
      Profile,
      Projects,
    }
  });
</script>
