<template>
  <v-container>
    <v-row class="mt-8">
      <v-col cols="12">
        <h2 class="text-h4 font-weight-bold mb-4 text-center">Meus Projetos</h2>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col 
        v-for="project in projects" 
        :key="project.id" 
        cols="12" 
        sm="6" 
        md="4"
        >
        <v-card class="mx-auto h-100" elevation="3" height="100%">
          <v-img
            :src="project.image"
            height="200px"
            cover
            class="bg-grey-lighten-2"
          >
            <template v-slot:placeholder>
              <v-row align="center" justify="center" class="fill-height">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          
          <v-card-title>{{ project.title }}</v-card-title>
          
          <v-card-text>
            <div>{{ project.description }}</div>
            <v-chip-group class="mt-2">
              <v-chip
                v-for="(tech, i) in project.technologies"
                :key="i"
                size="small"
                color="primary"
                variant="outlined"
              >
                {{ tech }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
            
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              v-if="project.demo"
              color="primary"
              variant="text"
              :href="isFakeDemoLink(project.demo) ? undefined : project.demo"
              target="_blank"
              :disabled="!project.demo || isFakeDemoLink(project.demo)"
              >
              Demo
            </v-btn>

            <v-btn
              color="primary"
              variant="text"
              :href="project.repository"
              target="_blank"
              >
              Código
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { projects } from '@/data/projects.js';

  export default {
    name: 'Projects',

    data() {
      return {
        projects: projects,
      };
    },

    methods: {
      isFakeDemoLink(link) {
        return link === 'https://404.gmarcos.dev';
      }
    },
  };
</script>