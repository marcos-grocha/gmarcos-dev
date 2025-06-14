<template>
  <v-container class="projects-container">
    <v-row class="mt-8">
      <v-col cols="12">
        <div class="text-center mb-12">
          <h2 class="projects-title">Meus Projetos</h2>
          <div class="title-divider"></div>
          <p class="projects-subtitle">Uma seleção dos meus trabalhos mais recentes</p>
        </div>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col 
        v-for="project in projects" 
        :key="project.id" 
        cols="12" 
        sm="6" 
        md="4"
        class="mb-4"
      >
        <v-card 
          class="project-card mx-auto h-100" 
          elevation="0"
          height="100%"
          @mouseover="onCardHover"
          @mouseleave="onCardLeave"
        >
          <div class="image-container">
            <v-img
              :src="project.image"
              height="220px"
              cover
              class="project-image"
            >
              <template v-slot:placeholder>
                <v-row align="center" justify="center" class="fill-height">
                  <v-progress-circular 
                    indeterminate 
                    color="var(--color-primary)"
                    size="32"
                  ></v-progress-circular>
                </v-row>
              </template>
              <div class="image-overlay">
                <div class="overlay-content">
                  <v-btn
                    v-if="project.demo && !isFakeDemoLink(project.demo)"
                    class="overlay-btn demo-btn"
                    variant="elevated"
                    :href="project.demo"
                    target="_blank"
                    size="small"
                  >
                    <v-icon left size="16">mdi-eye</v-icon>
                    Demo
                  </v-btn>
                  <v-btn
                    class="overlay-btn code-btn"
                    variant="elevated"
                    :href="project.repository"
                    target="_blank"
                    size="small"
                  >
                    <v-icon left size="16">mdi-code-braces</v-icon>
                    Código
                  </v-btn>
                </div>
              </div>
            </v-img>
          </div>
          
          <div class="card-content">
            <v-card-title class="project-title">
              {{ project.title }}
            </v-card-title>
            
            <v-card-text class="project-description">
              <p>{{ project.description }}</p>
              
              <div class="tech-stack mt-4">
                <v-chip
                  v-for="(tech, i) in project.technologies"
                  :key="i"
                  class="tech-chip"
                  size="small"
                  variant="flat"
                >
                  {{ tech }}
                </v-chip>
              </div>
            </v-card-text>
          </div>
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
      },
      
      onCardHover(event) {
        event.currentTarget.classList.add('card-hover');
      },
      
      onCardLeave(event) {
        event.currentTarget.classList.remove('card-hover');
      }
    },
  };
</script>

<style scoped>
  .projects-container {
    padding: var(--spacing-xl) var(--spacing-md);
  }

  .projects-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-md);
    background: var(--gradient-warm);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .title-divider {
    width: 60px;
    height: 4px;
    background: var(--gradient-accent);
    margin: 0 auto var(--spacing-md);
    border-radius: var(--radius-pill);
  }

  .projects-subtitle {
    color: var(--color-text-secondary);
    font-size: 1.1rem;
    font-weight: 400;
    margin: 0;
  }

  .project-card {
    border-radius: var(--radius-large);
    background: var(--color-bg-primary);
    border: var(--border-light);
    transition: all var(--transition-medium);
    overflow: hidden;
    position: relative;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gradient-warm);
    opacity: 0;
    transition: opacity var(--transition-medium);
  }

  .project-card:hover::before,
  .project-card.card-hover::before {
    opacity: 1;
  }

  .project-card:hover,
  .project-card.card-hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-heavy);
    border-color: var(--color-primary-alpha-30);
  }

  .image-container {
    position: relative;
    overflow: hidden;
  }

  .project-image {
    transition: transform var(--transition-slow);
  }

  .project-card:hover .project-image,
  .project-card.card-hover .project-image {
    transform: scale(1.05);
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity var(--transition-medium);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .project-card:hover .image-overlay,
  .project-card.card-hover .image-overlay {
    opacity: 1;
  }

  .overlay-content {
    display: flex;
    gap: var(--spacing-sm);
  }

  .overlay-btn {
    backdrop-filter: blur(10px);
    border-radius: var(--radius-medium);
    text-transform: none;
    font-weight: 600;
    transition: all var(--transition-fast);
  }

  .demo-btn {
    background: var(--gradient-red) !important;
    color: var(--color-text-light) !important;
    box-shadow: var(--shadow-red-glow);
  }

  .demo-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-red-glow), 0 8px 25px rgba(160, 98, 92, 0.4);
  }

  .code-btn {
    background: var(--gradient-primary) !important;
    color: var(--color-text-light) !important;
    box-shadow: var(--shadow-glow);
  }

  .code-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow), 0 8px 25px var(--color-primary-alpha-40);
  }

  .card-content {
    padding: var(--spacing-lg);
  }

  .project-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-sm);
    line-height: 1.3;
    padding: 0;
  }

  .project-description {
    padding: 0;
  }

  .project-description p {
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin-bottom: 0;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
  }

  .tech-chip {
    background: var(--color-primary-alpha-15) !important;
    color: var(--color-primary-dark) !important;
    border: 1px solid var(--color-primary-alpha-20);
    border-radius: var(--radius-small);
    font-weight: 500;
    font-size: 0.75rem;
    transition: all var(--transition-fast);
  }

  .tech-chip:hover {
    background: var(--color-primary-alpha-20) !important;
    border-color: var(--color-primary-alpha-30);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    .projects-title {
      font-size: 2rem;
    }
    
    .projects-container {
      padding: var(--spacing-lg) var(--spacing-sm);
    }
    
    .card-content {
      padding: var(--spacing-md);
    }
  }

  /* Animações personalizadas */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .project-card {
    animation: fadeInUp 0.6s ease-out;
  }

  .project-card:nth-child(1) { animation-delay: 0.1s; }
  .project-card:nth-child(2) { animation-delay: 0.2s; }
  .project-card:nth-child(3) { animation-delay: 0.3s; }
  .project-card:nth-child(4) { animation-delay: 0.4s; }
  .project-card:nth-child(5) { animation-delay: 0.5s; }
  .project-card:nth-child(6) { animation-delay: 0.6s; }
</style>