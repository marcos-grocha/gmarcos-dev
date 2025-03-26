<template>
  <!-- Menu -->
  <Profile />
  <Projects />
  <ScrollToTopButtom />
  <!-- Rodape -->
</template>

<script>
  import { defineComponent } from 'vue';

  // Components
  import Profile from '../components/Profile.vue';
  import Projects from '../components/Projects.vue';
  import ScrollToTopButtom from '@/components/ScrollToTopButtom.vue';

  export default defineComponent({
    name: 'HomeView',

    components: {
      Profile,
      Projects,
      ScrollToTopButtom
    }
  });
</script>
