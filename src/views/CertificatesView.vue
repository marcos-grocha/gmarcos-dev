<template>
  <v-container fluid class="certificates-container">
    <!-- Header com gradiente -->
    <div class="header-section">
      <v-row>
        <v-col cols="12" class="text-center">
          <div class="header-content">
            <v-icon 
              icon="mdi-certificate" 
              size="48" 
              class="header-icon mb-4"
            ></v-icon>
            <h1 class="header-title">Graduação e Especializações</h1>
            <p class="header-subtitle">Formação acadêmica e certificações profissionais</p>
          </div>
        </v-col>
      </v-row>
    </div>

    <v-row justify="center" class="certificates-grid">
      <v-col cols="12" md="10" lg="8">
        <!-- Certificado 1 -->
        <div class="certificate-card-wrapper" data-aos="fade-up" data-aos-delay="100">
          <v-card 
            class="certificate-card mb-8" 
            variant="elevated" 
            elevation="0"
          >
            <div class="card-accent-bar degree-accent"></div>
            <v-card-item class="card-header">
              <div class="card-icon-wrapper degree-icon">
                <v-icon icon="mdi-school" size="24"></v-icon>
              </div>
              <div class="card-title-section">
                <v-card-title class="card-title">
                  Superior de Tecnologia em Jogos Digitais
                </v-card-title>
                <v-card-subtitle class="card-subtitle">
                  Universidade Tiradentes • Concluído em 2024.2
                </v-card-subtitle>
              </div>
            </v-card-item>

            <v-card-text class="card-content">
              <v-expansion-panels v-model="panels.degree" variant="popout" class="custom-expansion">
                <v-expansion-panel class="expansion-panel">
                  <v-expansion-panel-title class="expansion-title">
                    <div class="expansion-header">
                      <v-icon icon="mdi-format-list-bulleted" size="20" class="me-2"></v-icon>
                      <span>Competências do Curso</span>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text class="expansion-content">
                    <div class="skills-table-wrapper">
                      <v-table density="compact" class="skills-table">
                        <thead>
                          <tr>
                            <th class="table-header">Módulo</th>
                            <th class="table-header text-right">Carga Horária</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(competence, i) in skills" :key="i" class="table-row">
                            <td class="table-cell">{{ competence.module }}</td>
                            <td class="table-cell text-right">
                              <span class="hours-badge">{{ competence.hours }}h</span>
                            </td>
                          </tr>
                        </tbody>
                      </v-table>
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
              
              <div class="validation-code">
                <v-icon icon="mdi-shield-check" size="16" class="me-2"></v-icon>
                <span>398.398.fa8a23e84690cd025191d8e29381f42b7db5db92226ebf9a99f549ee5b80ffb5</span>
              </div>
            </v-card-text>
          </v-card>
        </div>

        <!-- Certificado 2 -->
        <div class="certificate-card-wrapper" data-aos="fade-up" data-aos-delay="200">
          <v-card 
            class="certificate-card mb-8" 
            variant="elevated" 
            elevation="0"
          >
            <div class="card-accent-bar treina-accent"></div>
            <v-card-item class="card-header">
              <div class="card-icon-wrapper treina-icon">
                <v-icon icon="mdi-code-tags" size="24"></v-icon>
              </div>
              <div class="card-title-section">
                <v-card-title class="card-title">
                  Treinamento Imersivo em Desenvolvimento Web - TreinaDev - Turma 13
                </v-card-title>
                <v-card-subtitle class="card-subtitle">
                  Campus Code • Concluído em 2025.1
                </v-card-subtitle>
              </div>
            </v-card-item>

            <v-card-text class="card-content">
              <v-expansion-panels v-model="panels.treina" variant="popout" class="custom-expansion">
                <v-expansion-panel class="expansion-panel">
                  <v-expansion-panel-title class="expansion-title">
                    <div class="expansion-header">
                      <v-icon icon="mdi-format-list-bulleted" size="20" class="me-2"></v-icon>
                      <span>Competências do Curso</span>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text class="expansion-content">
                    <p class="skills-description">Desenvolvimento Web com foco em Ruby on Rails, cobrindo:</p>
                    <div class="skills-chips">
                      <v-chip 
                        v-for="(skill, i) in trainaDevSkills" 
                        :key="i" 
                        class="skill-chip" 
                        size="small"
                        variant="flat"
                      >
                        {{ skill }}
                      </v-chip>
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
              
              <div class="validation-code">
                <v-icon icon="mdi-key" size="16" class="me-2"></v-icon>
                <span>51N4XfxZafGZh8eVigMEuetN</span>
              </div>
            </v-card-text>
          </v-card>
        </div>

        <!-- Certificado 3 -->
        <div class="certificate-card-wrapper" data-aos="fade-up" data-aos-delay="300">
          <v-card 
            class="certificate-card mb-8" 
            variant="elevated" 
            elevation="0"
          >
            <div class="card-accent-bar java-accent"></div>
            <v-card-item class="card-header">
              <div class="card-icon-wrapper java-icon">
                <v-icon icon="mdi-language-java" size="24"></v-icon>
              </div>
              <div class="card-title-section">
                <v-card-title class="card-title">
                  Java COMPLETO Programação Orientada a Objetos + Projetos
                </v-card-title>
                <v-card-subtitle class="card-subtitle">
                  Udemy • Concluído em 2024.1
                </v-card-subtitle>
              </div>
            </v-card-item>

            <v-card-text class="card-content">
              <v-expansion-panels v-model="panels.java" variant="popout" class="custom-expansion">
                <v-expansion-panel class="expansion-panel">
                  <v-expansion-panel-title class="expansion-title">
                    <div class="expansion-header">
                      <v-icon icon="mdi-format-list-bulleted" size="20" class="me-2"></v-icon>
                      <span>Competências do Curso</span>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text class="expansion-content">
                    <div class="skills-chips">
                      <v-chip 
                        v-for="(skill, i) in javaSkills" 
                        :key="i" 
                        class="skill-chip" 
                        size="small"
                        variant="flat"
                      >
                        {{ skill }}
                      </v-chip>
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
              
              <div class="validation-code">
                <v-icon icon="mdi-certificate" size="16" class="me-2"></v-icon>
                <span>UC-5a93c6e1-e4d1-4e04-b261-81e7d739d6c3</span>
              </div>
            </v-card-text>
          </v-card>
        </div>

        <!-- Certificado 4 -->
        <div class="certificate-card-wrapper" data-aos="fade-up" data-aos-delay="400">
          <v-card 
            class="certificate-card mb-8" 
            variant="elevated" 
            elevation="0"
          >
            <div class="card-accent-bar javinha-accent"></div>
            <v-card-item class="card-header">
              <div class="card-icon-wrapper javinha-icon">
                <v-icon icon="mdi-language-java" size="24"></v-icon>
              </div>
              <div class="card-title-section">
                <v-card-title class="card-title">
                  Java COMPLETO: Do Zero ao Profissional + Projetos!
                </v-card-title>
                <v-card-subtitle class="card-subtitle">
                  Udemy • Concluído em 2023.2
                </v-card-subtitle>
              </div>
            </v-card-item>

            <v-card-text class="card-content">
              <v-expansion-panels v-model="panels.javinha" variant="popout" class="custom-expansion">
                <v-expansion-panel class="expansion-panel">
                  <v-expansion-panel-title class="expansion-title">
                    <div class="expansion-header">
                      <v-icon icon="mdi-format-list-bulleted" size="20" class="me-2"></v-icon>
                      <span>Competências do Curso</span>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text class="expansion-content">
                    <div class="skills-chips">
                      <v-chip 
                        v-for="(skill, i) in javinhaSkills" 
                        :key="i" 
                        class="skill-chip" 
                        size="small"
                        variant="flat"
                      >
                        {{ skill }}
                      </v-chip>
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
              
              <div class="validation-code">
                <v-icon icon="mdi-clock-outline" size="16" class="me-2"></v-icon>
                <span>Processando...</span>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue';

  const panels = ref({
    degree: null,
    treina: null,
    java: null,
    javinha: null
  });

  const skills = [
    { module: 'Animação e Modelagem de Jogos', hours: 480 },
    { module: 'Roteiros, Worldbuilding, Programação, Ilustração e Negócios', hours: 480 },
    { module: 'UI/UX, Animação e Desenvolvimento de Jogos', hours: 480 },
    { module: 'Fundamentos de IA e de Game Design', hours: 480 },
    { module: 'Fundamentos iniciais no Design de Jogos', hours: 480 },
  ];

  const trainaDevSkills = [
    'Ruby', 
    'Rails', 
    'Git', 
    'APIs', 
    'TDD', 
    'Pair Programming',
    'Scrum',
    'Kanban',
    'Desenvolvimento Ágil'
  ];

  const javaSkills = [
    'Java', 
    'OO', 
    'UML', 
    'JDBC', 
    'JavaFX', 
    'Spring Boot', 
    'JPA', 
    'Hibernate', 
    'MySQL', 
    'MongoDB', 
    'Maven', 
    'Spring Data JPA', 
    'Spring Data MongoDB'
  ];

  const javinhaSkills = [
    'Java',
    'Spring Boot',
    'MySQL',
    'MongoDB',
    'JPA',
    'JavaFX',
    'Hibernate', 
    'Programação Funcional',
    'WebService',
    'Java Swing',
    'JavaFX',
    'Estrutura de Dados',
    'Tratamento de Exceções',
    'Stream API',
    'Lambdas'
  ];
</script>

<style scoped>
  /* Container Principal */
  .certificates-container {
    background: linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%);
    min-height: 100vh;
    padding: var(--spacing-xl) var(--spacing-md);
  }

  /* Header Section */
  .header-section {
    background: var(--gradient-warm);
    border-radius: var(--radius-large);
    padding: var(--spacing-xxl) var(--spacing-lg);
    margin-bottom: var(--spacing-xxl);
    box-shadow: var(--shadow-accent-glow);
    position: relative;
    overflow: hidden;
  }

  .header-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, var(--color-primary-alpha-10) 0%, var(--color-red-alpha-10) 100%);
    pointer-events: none;
  }

  .header-content {
    position: relative;
    z-index: 1;
  }

  .header-icon {
    color: var(--color-text-light);
    opacity: 0.9;
  }

  .header-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-text-light);
    margin-bottom: var(--spacing-sm);
    letter-spacing: -0.025em;
  }

  .header-subtitle {
    font-size: 1.125rem;
    color: var(--color-text-light);
    opacity: 0.9;
    margin: 0;
  }

  /* Cards Grid */
  .certificates-grid {
    position: relative;
  }

  /* Certificate Cards */
  .certificate-card-wrapper {
    position: relative;
  }

  .certificate-card {
    background: var(--color-bg-primary);
    border-radius: var(--radius-large);
    border: var(--border-light);
    box-shadow: var(--shadow-light);
    transition: all var(--transition-medium);
    position: relative;
    overflow: hidden;
  }

  .certificate-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-heavy);
  }

  /* Accent Bars */
  .card-accent-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    border-radius: var(--radius-small) var(--radius-small) 0 0;
  }

  .degree-accent {
    background: var(--gradient-primary);
  }

  .treina-accent {
    background: var(--gradient-red);
  }

  .java-accent {
    background: var(--gradient-accent);
  }

  .javinha-accent {
    background: var(--gradient-earth);
  }

  /* Card Header */
  .card-header {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-md);
  }

  .card-icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: var(--radius-medium);
    flex-shrink: 0;
    transition: all var(--transition-fast);
  }

  .degree-icon {
    background: var(--color-primary-alpha-15);
    color: var(--color-primary-dark);
  }

  .treina-icon {
    background: var(--color-red-alpha-15);
    color: var(--color-red-dark);
  }

  .java-icon {
    background: var(--color-accent-alpha-15);
    color: var(--color-accent-dark);
  }

  .javinha-icon {
    background: var(--color-red-muted-alpha-15);
    color: var(--color-red-muted-dark);
  }

  .card-title-section {
    flex: 1;
    min-width: 0;
  }

  .card-title {
    font-size: 1.375rem;
    font-weight: 600;
    color: var(--color-text-primary);
    line-height: 1.3;
    margin-bottom: var(--spacing-xs);
  }

  .card-subtitle {
    font-size: 0.975rem;
    color: var(--color-text-secondary);
    font-weight: 500;
  }

  /* Card Content */
  .card-content {
    padding: 0 var(--spacing-lg) var(--spacing-lg);
  }

  /* Custom Expansion Panels */
  .custom-expansion {
    background: transparent;
    box-shadow: none;
  }

  .expansion-panel {
    background: var(--color-bg-secondary);
    border-radius: var(--radius-medium);
    border: var(--border-light);
    margin-bottom: var(--spacing-md);
    overflow: hidden;
  }

  .expansion-title {
    padding: var(--spacing-md);
    background: var(--color-bg-tertiary);
    border-bottom: var(--border-light);
  }

  .expansion-header {
    display: flex;
    align-items: center;
    font-weight: 500;
    color: var(--color-text-primary);
  }

  .expansion-content {
    padding: var(--spacing-lg);
  }

  /* Skills Description */
  .skills-description {
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-md);
    font-size: 0.975rem;
  }

  /* Skills Chips */
  .skills-chips {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }

  .skill-chip {
    background: var(--color-primary-alpha-15);
    color: var(--color-primary-dark);
    border: 1px solid var(--color-primary-alpha-20);
    font-weight: 500;
    transition: all var(--transition-fast);
  }

  .skill-chip:hover {
    background: var(--color-primary-alpha-20);
    transform: translateY(-1px);
  }

  /* Skills Table */
  .skills-table-wrapper {
    border-radius: var(--radius-small);
    overflow: hidden;
    border: var(--border-light);
  }

  .skills-table {
    background: var(--color-bg-primary);
  }

  .table-header {
    background: var(--color-bg-tertiary);
    color: var(--color-text-primary);
    font-weight: 600;
    font-size: 0.875rem;
    border-bottom: var(--border-medium);
  }

  .table-row {
    transition: background-color var(--transition-fast);
  }

  .table-row:hover {
    background: var(--color-primary-alpha-10);
  }

  .table-cell {
    color: var(--color-text-primary);
    font-size: 0.925rem;
    border-bottom: var(--border-light);
  }

  .hours-badge {
    background: var(--color-red-alpha-15);
    color: var(--color-red-dark);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-pill);
    font-weight: 500;
    font-size: 0.8rem;
  }

  /* Validation Code */
  .validation-code {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: var(--spacing-lg);
    padding: var(--spacing-sm) var(--spacing-md);
    background: var(--color-bg-secondary);
    border: var(--border-light);
    border-radius: var(--radius-small);
    font-family: 'Monaco', 'Consolas', monospace;
    font-size: 0.8rem;
    color: var(--color-text-muted);
    word-break: break-all;
  }

  /* Responsive Design */
  @media (max-width: 960px) {
    .header-title {
      font-size: 2rem;
    }
    
    .header-subtitle {
      font-size: 1rem;
    }
    
    .card-title {
      font-size: 1.25rem;
    }
    
    .card-header {
      flex-direction: column;
      text-align: center;
      gap: var(--spacing-sm);
    }
    
    .card-icon-wrapper {
      align-self: center;
    }
  }

  @media (max-width: 600px) {
    .certificates-container {
      padding: var(--spacing-lg) var(--spacing-sm);
    }
    
    .header-section {
      padding: var(--spacing-lg);
      margin-bottom: var(--spacing-lg);
    }
    
    .header-title {
      font-size: 1.75rem;
    }
    
    .card-title {
      font-size: 1.125rem;
    }
    
    .card-subtitle {
      font-size: 0.875rem;
    }
    
    .validation-code {
      font-size: 0.75rem;
      padding: var(--spacing-xs);
    }
  }

  /* Dark Mode Adjustments */
  @media (prefers-color-scheme: dark) {
    .certificate-card {
      background: var(--color-bg-secondary);
      border: 1px solid var(--color-primary-alpha-20);
    }
    
    .expansion-panel {
      background: var(--color-bg-tertiary);
      border: 1px solid var(--color-primary-alpha-20);
    }
    
    .expansion-title {
      background: var(--color-bg-primary);
    }
    
    .skills-table {
      background: var(--color-bg-secondary);
    }
    
    .table-header {
      background: var(--color-bg-primary);
    }
  }
</style>