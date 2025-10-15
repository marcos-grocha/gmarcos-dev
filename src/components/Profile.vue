<template>
  <v-container fluid class="pa-0">
    <div class="profile-hero">
      <!-- Background com gradiente -->
      <div class="hero-background"></div>
      
      <!-- Conteúdo principal -->
      <v-container class="py-12">
        <v-row justify="center" align="center" class="min-height-screen">
          <!-- Seção da imagem e informações básicas -->
          <v-col cols="12" lg="5" class="text-center">
            <div class="profile-section">
              <!-- Container da imagem com órbita -->
              <div class="profile-image-container mb-8">
                <v-hover v-slot="{ isHovering, props }">
                  <div 
                    v-bind="props"
                    class="profile-avatar-wrapper"
                    :class="{ 'avatar-hovered': isHovering }"
                  >
                    <v-avatar
                      size="200"
                      class="profile-avatar"
                    >
                      <v-img
                        :src="gmarcos"
                        alt="Marcos Guimarães"
                        cover
                      />
                    </v-avatar>
                    
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
                              size="40"
                              class="tech-avatar"
                            >
                              <v-icon :icon="tech.icon" color="white" size="24"></v-icon>
                            </v-avatar>
                          </template>
                        </v-tooltip>
                      </div>
                    </div>
                  </div>
                </v-hover>
              </div>

              <!-- Nome e título -->
              <div class="profile-title-section mb-6">
                <h1 class="profile-name">MARCOS GUIMARÃES</h1>
                <div class="typing-container">
                  <div ref="titleEl" class="typing-text"></div>
                  <span class="typing-cursor">|</span>
                </div>
              </div>

              <!-- Botões de ação -->
              <div class="profile-actions">
                <v-btn
                  class="contact-btn"
                  size="large"
                  @click="revealContacts = !revealContacts"
                >
                  <v-icon icon="mdi-email" class="mr-2"></v-icon>
                  Entrar em Contato
                </v-btn>
              </div>
            </div>
          </v-col>

          <!-- Seção de conteúdo -->
          <v-col cols="12" lg="7">
            <div class="content-section">
              <!-- Card de descrição -->
              <v-card class="description-card mb-6" elevation="0">
                <v-card-text class="pa-8">
                  <div class="description-content">
                    <h2 class="section-title mb-4">
                      <v-icon icon="mdi-code-tags" class="mr-3"></v-icon>
                      Sobre Mim
                    </h2>
                    <p class="description-text mb-4">
                      Software Developer especialista em <strong>Ruby on Rails</strong>, construindo soluções web através de 
                      <strong>Desenvolvimento Orientado a Testes (TDD)</strong> e <strong>práticas ágeis</strong>, garantindo a qualidade do código.
                    </p>
                    <p class="description-text">
                      Tenho boa familiaridade com outras tecnologias como <strong>Java Spring</strong>, Container <strong>Docker</strong>, <strong>JavaScript</strong>... e, apesar da minha especialização, sou um profissional 
                      ávido por conhecimento, determinado, autodidata, adaptável e organizado. Apaixonado pelo processo de 
                      aprendizagem em novas tecnologias e motivado a buscar excelência em minhas soluções.
                    </p>
                  </div>
                </v-card-text>
              </v-card>

              <!-- Card de habilidades -->
              <v-card class="skills-card" elevation="0">
                <v-card-text class="pa-8">
                  <h2 class="section-title mb-6">
                    <v-icon icon="mdi-brain" class="mr-3"></v-icon>
                    Habilidades Técnicas
                  </h2>
                  
                  <v-row>
                    <v-col
                      v-for="(skill, i) in skills"
                      :key="i"
                      cols="12"
                      md="6"
                      class="mb-4"
                    >
                      <div class="skill-item">
                        <div class="skill-header">
                          <span class="skill-name">{{ skill.name }}</span>
                          <span class="skill-percentage">{{ skill.level }}%</span>
                        </div>
                        <div class="skill-bar-container">
                          <v-progress-linear
                            :model-value="skill.level"
                            height="8"
                            rounded
                            class="skill-bar"
                            :class="`skill-${skill.level >= 90 ? 'expert' : skill.level >= 80 ? 'advanced' : 'intermediate'}`"
                          ></v-progress-linear>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Dialog de contato -->
    <v-dialog v-model="revealContacts" max-width="500" class="contact-dialog">
      <v-card class="contact-card">
        <div class="contact-header">
          <h3 class="contact-title">
            <v-icon icon="mdi-email-outline" class="mr-2"></v-icon>
            Vamos Conversar?
          </h3>
          <v-btn
            icon
            variant="text"
            @click="revealContacts = false"
            class="close-btn"
          >
            <v-icon icon="mdi-close"></v-icon>
          </v-btn>
        </div>
        
        <v-card-text class="contact-content">
          <div class="contact-list">
            <div class="contact-item">
              <v-icon icon="mdi-email" class="contact-icon"></v-icon>
              <div class="contact-info">
                <span class="contact-label">Email</span>
                <span class="contact-value">gmarcos.dev@gmail.com</span>
              </div>
            </div>
            
            <div class="contact-item">
              <v-icon icon="mdi-phone" class="contact-icon"></v-icon>
              <div class="contact-info">
                <span class="contact-label">Telefone</span>
                <span class="contact-value">+55 (79) 99963-0944</span>
              </div>
            </div>
            
            <div class="contact-item">
              <v-icon icon="mdi-map-marker" class="contact-icon"></v-icon>
              <div class="contact-info">
                <span class="contact-label">Localização</span>
                <span class="contact-value">Aracaju - SE, Brasil</span>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Snackbar -->
    <v-snackbar
      v-model="snackbar.show"
      :timeout="3000"
      :color="snackbar.color"
      class="custom-snackbar"
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
  </v-container>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import gmarcosImage from '../assets/gmarcos.png';

  // Dados reativos
  const gmarcos = ref(gmarcosImage);
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
    { name: 'Ruby on Rails', level: 97 },
    { name: 'Java Spring', level: 86 },
    { name: 'Vue.js', level: 88 },
    { name: 'Docker', level: 74},
    { name: 'TDD', level: 93 },
    { name: 'XP', level: 72 },
    { name: 'Scrum', level: 91 },
    { name: 'Git e GitHub', level: 95 }
  ]);

  // Ícones de tecnologias Ruby
  const rubyTechIcons = ref([
    { icon: 'mdi-language-ruby', name: 'Ruby', color: '#CC342D' },
    { icon: 'mdi-language-ruby-on-rails', name: 'Ruby on Rails', color: '#CC0000' }
  ]);

  // Métodos
  function getOrbitPosition(index, total) {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 110;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    
    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  }

  function typeWriter() {
    const currentTitle = titles[currentTitleIndex.value];
    
    if (!isDeleting.value) {
      currentCharIndex.value++;
      if (titleEl.value) {
        titleEl.value.textContent = currentTitle.substring(0, currentCharIndex.value);
      }
      
      if (currentCharIndex.value === currentTitle.length) {
        isDeleting.value = true;
        clearInterval(titleInterval.value);
        setTimeout(() => {
          typingSpeed.value = 15;
          titleInterval.value = setInterval(typeWriter, typingSpeed.value);
        }, 700);
      }
    } else {
      currentCharIndex.value--;
      if (titleEl.value) {
        titleEl.value.textContent = currentTitle.substring(0, currentCharIndex.value);
      }
      
      if (currentCharIndex.value === 0) {
        isDeleting.value = false;
        currentTitleIndex.value = (currentTitleIndex.value + 1) % titles.length;
        typingSpeed.value = 90;
        clearInterval(titleInterval.value);
        titleInterval.value = setInterval(typeWriter, typingSpeed.value);
      }
    }
  }

  // Ciclo de vida
  onMounted(() => {
    titleInterval.value = setInterval(typeWriter, typingSpeed.value);
  });

  onBeforeUnmount(() => {
    if (titleInterval.value) {
      clearInterval(titleInterval.value);
    }
  });
</script>

<style scoped>
  /* ===== LAYOUT PRINCIPAL ===== */
  .profile-hero {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
  }

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-warm);
    opacity: 0.05;
    z-index: 0;
  }

  .hero-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 20%, var(--color-primary-alpha-10) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, var(--color-accent-alpha-10) 0%, transparent 50%);
  }

  .min-height-screen {
    min-height: 100vh;
  }

  /* ===== SEÇÃO DO PERFIL ===== */
  .profile-section {
    position: relative;
    z-index: 2;
  }

  .profile-image-container {
    position: relative;
    width: 240px;
    height: 240px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile-avatar-wrapper {
    position: relative;
    transition: var(--transition-medium);
  }

  .profile-avatar {
    border: 4px solid var(--color-primary);
    box-shadow: var(--shadow-heavy);
    transition: var(--transition-medium);
  }

  .avatar-hovered .profile-avatar {
    transform: scale(1.05);
    box-shadow: var(--shadow-glow);
    border-color: var(--color-accent);
  }

  /* ===== ÓRBITA DE TECNOLOGIAS ===== */
  .tech-orbit {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  .tech-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    animation: orbit 15s linear infinite;
    pointer-events: all;
  }

  .tech-avatar {
    box-shadow: var(--shadow-medium);
    transition: var(--transition-medium);
    border: 2px solid var(--color-bg-primary);
  }

  .tech-avatar:hover {
    transform: scale(1.3);
    box-shadow: var(--shadow-heavy);
  }

  @keyframes orbit {
    0% {
      transform: rotate(0deg) translateX(110px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translateX(110px) rotate(-360deg);
    }
  }

  /* ===== TÍTULOS E TEXTO ===== */
  .profile-title-section {
    text-align: center;
  }

  .profile-name {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 1rem;
    letter-spacing: 2px;
  }

  .typing-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60px;
    margin-bottom: 1rem;
  }

  .typing-text {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color-primary);
    min-width: 300px;
    text-align: center;
  }

  .typing-cursor {
    color: var(--color-accent);
    font-size: 1.5rem;
    animation: blink 1s infinite;
    margin-left: 2px;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  /* ===== BOTÕES DE AÇÃO ===== */
  .profile-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .contact-btn {
    background: var(--gradient-primary) !important;
    color: var(--color-text-light) !important;
    border-radius: var(--radius-pill) !important;
    padding: 0 2rem !important;
    font-weight: 600 !important;
    letter-spacing: 0.5px !important;
    box-shadow: var(--shadow-medium) !important;
    transition: var(--transition-medium) !important;
  }

  .contact-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-heavy) !important;
  }

  /* ===== SEÇÃO DE CONTEÚDO ===== */
  .content-section {
    position: relative;
    z-index: 2;
    padding-left: 2rem;
  }

  .description-card,
  .skills-card {
    background: var(--color-bg-primary) !important;
    border: var(--border-light) !important;
    border-radius: var(--radius-large) !important;
    box-shadow: var(--shadow-light) !important;
    transition: var(--transition-medium) !important;
  }

  .description-card:hover,
  .skills-card:hover {
    box-shadow: var(--shadow-medium) !important;
    transform: translateY(-2px);
  }

  .section-title {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--color-text-primary);
    display: flex;
    align-items: center;
  }

  .section-title .v-icon {
    color: var(--color-primary);
  }

  .description-text {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
  }

  .description-text strong {
    color: var(--color-red-dark);
    font-weight: 600;
  }

  /* ===== HABILIDADES ===== */
  .skill-item {
    margin-bottom: 1.5rem;
  }

  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .skill-name {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .skill-percentage {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-primary);
  }

  .skill-bar-container {
    position: relative;
  }

  .skill-bar {
    border-radius: var(--radius-small) !important;
    overflow: hidden !important;
  }

  .skill-expert .v-progress-linear__background {
    background-color: var(--color-accent-alpha-20) !important;
  }

  .skill-expert .v-progress-linear__determinate {
    background: var(--gradient-accent) !important;
  }

  .skill-advanced .v-progress-linear__background {
    background-color: var(--color-primary-alpha-20) !important;
  }

  .skill-advanced .v-progress-linear__determinate {
    background: var(--gradient-primary) !important;
  }

  .skill-intermediate .v-progress-linear__background {
    background-color: var(--color-red-alpha-20) !important;
  }

  .skill-intermediate .v-progress-linear__determinate {
    background: var(--gradient-red) !important;
  }

  /* ===== DIALOG DE CONTATO ===== */
  .contact-card {
    border-radius: var(--radius-large) !important;
    overflow: hidden !important;
  }

  .contact-header {
    background: var(--gradient-primary);
    color: var(--color-text-light);
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .contact-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    display: flex;
    align-items: center;
  }

  .close-btn {
    color: var(--color-text-light) !important;
  }

  .contact-content {
    padding: 2rem !important;
  }

  .contact-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: var(--radius-medium);
    background: var(--color-bg-secondary);
    transition: var(--transition-medium);
  }

  .contact-item:hover {
    background: var(--color-primary-alpha-10);
    box-shadow: var(--shadow-light);
  }

  .contact-icon {
    color: var(--color-primary) !important;
    font-size: 1.5rem !important;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
  }

  .contact-label {
    font-size: 0.9rem;
    color: var(--color-text-muted);
    font-weight: 500;
  }

  .contact-value {
    font-size: 1.1rem;
    color: var(--color-text-primary);
    font-weight: 600;
  }

  /* ===== RESPONSIVIDADE ===== */
  @media (max-width: 1280px) {
    .content-section {
      padding-left: 0;
      margin-top: 2rem;
    }
  }

  @media (max-width: 768px) {
    .profile-name {
      font-size: 2rem;
    }

    .typing-text {
      font-size: 1.2rem;
      min-width: 250px;
    }

    .profile-image-container {
      width: 200px;
      height: 200px;
    }

    .profile-avatar {
      width: 160px !important;
      height: 160px !important;
    }

    .tech-icon {
      animation: orbit 12s linear infinite;
    }

    @keyframes orbit {
      0% {
        transform: rotate(0deg) translateX(90px) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translateX(90px) rotate(-360deg);
      }
    }

    .description-card,
    .skills-card {
      margin: 0 1rem;
    }

    .section-title {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .profile-name {
      font-size: 1.5rem;
      letter-spacing: 1px;
    }

    .typing-text {
      font-size: 1rem;
      min-width: 200px;
    }

    .profile-image-container {
      width: 160px;
      height: 160px;
    }

    .profile-avatar {
      width: 140px !important;
      height: 140px !important;
    }

    @keyframes orbit {
      0% {
        transform: rotate(0deg) translateX(70px) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translateX(70px) rotate(-360deg);
      }
    }
  }
</style>