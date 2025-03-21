<template>
  <v-container>
    <v-card
      elevation="4"
      class="pa-4 profile-card"
      :style="{ overflow: 'hidden' }"
    >
      <v-row justify="center">
        <v-col cols="12" md="8">
          <div class="profile-header">
            <!-- Usando o componente v-banner do Vuetify 3 -->
            <v-banner
              color="primary"
              rounded
              class="mb-4"
            >
              <template v-slot:prepend>
                <v-icon
                  icon="mdi-code-tags"
                  size="large"
                ></v-icon>
              </template>
              <v-banner-text>
                <div ref="titleEl" class="text-body-1 font-weight-bold"></div>
              </v-banner-text>
            </v-banner>
            
            <v-card-subtitle class="text-h6 d-flex align-center flex-wrap">
              <v-icon icon="mdi-account-tie" class="mr-2"></v-icon>
              <span>MARCOS GUIMARÃES</span> 
              <v-spacer></v-spacer>
              <v-btn
                color="#978872"
                variant="tonal"
                to="/certificates"
                prepend-icon="mdi-certificate"
                class="ml-2"
              >
                Certificates
              </v-btn>
            </v-card-subtitle>
          </div>
          
          <v-divider class="my-3"></v-divider>
          
          <v-card-text>
            <p class="mb-4">
              Software Developer especialista em Ruby on Rails, construindo soluções web através de Desenvolvimento Orientado a Testes (Test Driven Development) e práticas ágeis, garantindo a qualidade do código.
            </p>
            <p>
              Tenho boa familiaridade com Java Spring e, apesar da minha especialização, sou um profissional ávido por conhecimento, determinado, autodidata, adaptável e organizado. Apaixonado pelo processo de aprendizagem em novas tecnologias e motivado a buscar excelência em minhas soluções.
            </p>
            
            <!-- Usando v-expansion-panels do Vuetify 3 -->
            <v-expansion-panels v-model="expandedPanel" variant="accordion" class="mt-4">
              <v-expansion-panel title="Habilidades Técnicas">
                <v-expansion-panel-text>
                  <v-row>
                    <v-col
                      v-for="(skill, i) in skills"
                      :key="i"
                      cols="12"
                      sm="6"
                    >
                      <div class="d-flex justify-space-between align-center">
                        <span>{{ skill.name }}</span>
                        <span>{{ skill.level }}%</span>
                      </div>
                      <v-progress-linear
                        :model-value="skill.level"
                        color="#978872"
                        height="10"
                        rounded
                        bg-color="primary-lighten-3"
                        class="mt-1"
                      ></v-progress-linear>
                    </v-col>
                  </v-row>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-col>

        <v-col cols="12" sm="4" md="3" class="text-center d-flex flex-column align-center justify-center">
          <div class="profile-image-container">
            <v-hover v-slot="{ isHovering, props }">
              <v-avatar
                v-bind="props"
                size="180"
                :class="{ 'elevation-10': isHovering, 'elevation-2': !isHovering }"
                class="profile-avatar transition-swing"
              >
                <v-img
                  :src="gmarcos"
                  alt="Marcos"
                  cover
                />
              </v-avatar>
            </v-hover>
            
            <!-- Órbita de tecnologias Ruby -->
            <div class="tech-orbit">
              <div 
                v-for="(tech, index) in rubyTechIcons" 
                :key="index" 
                class="tech-icon"
                :style="getOrbitPosition(index, rubyTechIcons.length)"
              >
                <v-tooltip :text="tech.name" location="top">
                  <template v-slot:activator="{ props }">
                    <v-avatar
                      v-bind="props"
                      :color="tech.color"
                      :image="tech.image"
                      size="32"
                      class="tech-avatar"
                    >
                      <v-icon v-if="!tech.image" :icon="tech.icon" color="white"></v-icon>
                    </v-avatar>
                  </template>
                </v-tooltip>
              </div>
            </div>
          </div>
          
          <!-- Usando v-card-actions para agrupar ações -->
          <v-card-actions class="justify-center mt-4">
            <!-- <v-btn 
              color="#978872"
              prepend-icon="mdi-download"
              @click="downloadCV"
            >
              Download CV
            </v-btn> -->
            <v-btn
              icon
              color="#978872"
              variant="text"
              @click="revealContacts = !revealContacts"
            >
              <v-icon icon="mdi-email"></v-icon>
            </v-btn>
          </v-card-actions>
          
          <!-- Dialog para contato usando recursos do Vuetify 3 -->
          <v-dialog v-model="revealContacts" max-width="400">
            <v-card>
              <v-card-title class="text-h5">
                Entre em contato
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item prepend-icon="mdi-email" title="Email" subtitle="gmarcos@gmail.com"></v-list-item>
                  <v-list-item prepend-icon="mdi-phone" title="Telefone" subtitle="+55 (79) 99963-0944"></v-list-item>
                  <v-list-item prepend-icon="mdi-map-marker" title="Localização" subtitle="Aracaju - SE, Brasil"></v-list-item>
                </v-list>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#978872" text @click="revealContacts = false">Fechar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      
      <!-- Usando snackbar do Vuetify 3 -->
      <v-snackbar
        v-model="snackbar.show"
        :timeout="3000"
        :color="snackbar.color"
      >
        {{ snackbar.text }}
        <template v-slot:actions>
          <v-btn
            variant="text"
            @click="snackbar.show = false"
          >
            Fechar
          </v-btn>
        </template>
      </v-snackbar>
    </v-card>
  </v-container>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import gmarcosImage from '../assets/gmarcos.png';

  // Dados reativos
  const gmarcos = ref(gmarcosImage);
  const expandedPanel = ref(0);
  const revealContacts = ref(false);
  const titleEl = ref(null);
  const titleInterval = ref(null);
  const titles = [
    'Solucionador de Problemas',
    'Pedreiro de Software',
    'Dev Café e Código',
    'Especialista Ruby on Rails',
    'Entusiasta TDD'
  ];
  const currentTitleIndex = ref(0);
  const currentCharIndex = ref(0);
  const isDeleting = ref(false);
  const typingSpeed = ref(90);
  const snackbar = ref({
    show: false,
    text: '',
    color: 'success'
  });

  // Dados de habilidades
  const skills = ref([
    { name: 'Ruby on Rails', level: 97, color: 'error' },
    { name: 'Java Spring', level: 80, color: 'success' },
    { name: 'TDD', level: 91, color: 'info' },
    { name: 'Vue.js', level: 75, color: 'success' },
    { name: 'Scrum', level: 86, color: 'warning' }
  ]);

  // Ícones de tecnologias Ruby
  const rubyTechIcons = ref([
    { icon: 'mdi-language-ruby', name: 'Ruby', color: '#CC342D' },
    { icon: 'mdi-language-ruby-on-rails', name: 'Ruby on Rails', color: '#CC0000' }
  ]);

  // Métodos
  function getOrbitPosition(index, total) {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 90; // Raio da órbita
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    
    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  }

  function downloadCV() {
    snackbar.value = {
      show: true,
      text: 'Download do CV iniciado!',
      color: 'success'
    };
    // Implementação: window.open('/caminho/para/meu-cv.pdf', '_blank');
  }

  function typeWriter() {
    const currentTitle = titles[currentTitleIndex.value];
    
    if (!isDeleting.value) {
      // Digitando
      currentCharIndex.value++;
      if (titleEl.value) {
        titleEl.value.textContent = currentTitle.substring(0, currentCharIndex.value);
      }
      
      // Se terminou de digitar o título atual
      if (currentCharIndex.value === currentTitle.length) {
        isDeleting.value = true;
        clearInterval(titleInterval.value); // Para o intervalo atual
        setTimeout(() => {
          typingSpeed.value = 15; // Define velocidade de apagar
          titleInterval.value = setInterval(typeWriter, typingSpeed.value); // Reinicia após a pausa
        }, 700); // Define a pausa (700ms)
      }
    } else {
      // Apagando
      currentCharIndex.value--;
      if (titleEl.value) {
        titleEl.value.textContent = currentTitle.substring(0, currentCharIndex.value);
      }
      
      // Se terminou de apagar
      if (currentCharIndex.value === 0) {
        isDeleting.value = false;
        currentTitleIndex.value = (currentTitleIndex.value + 1) % titles.length;
        typingSpeed.value = 90; // Define velocidade de digitar
        clearInterval(titleInterval.value); // Para o intervalo atual
        titleInterval.value = setInterval(typeWriter, typingSpeed.value); // Reinicia com velocidade de digitar
      }
    }
  }

  // Ciclo de vida
  onMounted(() => {
    // Iniciar o efeito de digitação
    titleInterval.value = setInterval(typeWriter, typingSpeed.value);
  });

  onBeforeUnmount(() => {
    // Limpar o intervalo quando o componente for desmontado
    if (titleInterval.value) {
      clearInterval(titleInterval.value);
    }
  });
</script>

<style scoped>
  .profile-card {
    border-radius: 12px;
    position: relative;
  }

  .profile-avatar {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    border: 3px solid var(--v-primary-base);
  }

  .profile-image-container {
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tech-orbit {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .tech-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    animation: orbit 15s linear infinite;
  }

  .tech-avatar {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
  }

  .tech-avatar:hover {
    transform: scale(1.2);
  }

  @keyframes orbit {
    0% {
      transform: rotate(0deg) translateX(90px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translateX(90px) rotate(-360deg);
    }
  }
</style>