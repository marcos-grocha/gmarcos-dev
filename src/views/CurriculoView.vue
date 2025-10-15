<template>
  <v-container fluid class="pa-0 pa-sm-4">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card elevation="0" class="curriculum-card overflow-hidden">
          <!-- Cabeçalho com gradiente e efeito visual -->
          <div class="header-section">
            <div class="header-bg"></div>
            <div class="header-content">
              <v-card-title class="text-h4 text-md-h3 text-white text-center text-md-start mb-2">
                MARCOS GUIMARÃES ROCHA
              </v-card-title>
              <div class="subtitle-accent">Desenvolvedor Full Stack</div>
            </div>
          </div>

          <!-- Informações pessoais com cards flutuantes -->
          <div class="contact-section">
            <v-row class="contact-cards" no-gutters>
              <v-col cols="12" md="3" class="pa-2">
                <div class="contact-card">
                  <div class="contact-icon">📍</div>
                  <div>
                    <div class="contact-label">Localização</div>
                    <div class="contact-value">Aracaju – SE</div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="3" class="pa-2">
                <div class="contact-card">
                  <div class="contact-icon">👤</div>
                  <div>
                    <div class="contact-label">Idade</div>
                    <div class="contact-value">28 anos</div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="3" class="pa-2">
                <div class="contact-card">
                  <div class="contact-icon">📱</div>
                  <div>
                    <div class="contact-label">Telefone</div>
                    <div class="contact-value">(79) 99963-0944</div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="3" class="pa-2">
                <div class="contact-card">
                  <div class="contact-icon">✉️</div>
                  <div>
                    <div class="contact-label">E-mail</div>
                    <div class="contact-value">gmarcos.dev@gmail.com</div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>

          <!-- Conteúdo principal -->
          <v-card-text class="main-content">
            <!-- Objetivo Profissional -->
            <div class="section-wrapper">
              <h2 class="section-title">
                <span class="section-icon">🎯</span>
                OBJETIVO PROFISSIONAL
              </h2>
              <div class="objective-card">
                <p class="objective-text">
                  Desenvolvedor Back-end com experiência em Ruby on Rails, Java Spring, VueJS e Docker. Busco oportunidades para aplicar minhas habilidades e contribuir com projetos inovadores, sempre disposto a aprender novas tecnologias.
                </p>
              </div>
            </div>

            <!-- Formação Acadêmica -->
            <div class="section-wrapper">
              <h2 class="section-title">
                <span class="section-icon">🎓</span>
                FORMAÇÃO ACADÊMICA
              </h2>
              <div class="education-cards">
                <div class="education-card">
                  <div class="education-status ongoing">Em Andamento</div>
                  <h3 class="education-title">Análise e Desenvolvimento de Sistemas</h3>
                  <p class="education-subtitle">Universidade Tiradentes</p>
                  <p class="education-period">2024 – 2026</p>
                </div>
                <div class="education-card">
                  <div class="education-status completed">Concluído</div>
                  <h3 class="education-title">Superior de Tecnologia em Jogos Digitais</h3>
                  <p class="education-subtitle">Universidade Tiradentes</p>
                  <p class="education-period">Concluído em 2024</p>
                </div>
              </div>
            </div>

            <!-- Experiência Profissional -->
            <div class="section-wrapper">
              <h2 class="section-title">
                <span class="section-icon">💼</span>
                EXPERIÊNCIA PROFISSIONAL
              </h2>
              <div class="experience-timeline">
                <div class="experience-item">
                  <div class="experience-marker current"></div>
                  <div class="experience-card">
                    <div class="experience-header">
                      <h3 class="experience-company">BK Telecom - ARACAJU/SE</h3>
                      <div class="experience-period">06/2025 – 10/2025</div>
                    </div>
                    <div class="experience-role">Desenvolvedor FullStack</div>
                    <ul class="experience-list">
                      <li>Desenvolvimento e manutenção de softwares internos.</li>
                      <li>Utilização de Metodologias Ágeis e Boas Práticas para garantir a qualidade dos sistemas.</li>
                      <li>Tecnologias: Vue.js 3, Java, Spring Boot e Docker como stack principal.</li>
                    </ul>
                  </div>
                </div>

                <div class="experience-item">
                  <div class="experience-marker current"></div>
                  <div class="experience-card">
                    <div class="experience-header">
                      <h3 class="experience-company">CAMPUS CODE - REMOTO</h3>
                      <div class="experience-period">01/2025 – 02/2025</div>
                    </div>
                    <div class="experience-role">Desenvolvedor FullStack</div>
                    <ul class="experience-list">
                      <li>Desenvolvimento de um Aplicativo WEB com Ruby on Rails em uma equipe de seis desenvolvedores.</li>
                      <li>Utilização de Scrum, Pair Programming e TDD (Test Driven Development) para garantir a qualidade do código (97,7% de cobertura).</li>
                    </ul>
                  </div>
                </div>
                
                <div class="experience-item">
                  <div class="experience-marker"></div>
                  <div class="experience-card">
                    <div class="experience-header">
                      <h3 class="experience-company">LACEN + UNIT (RS I) - ARACAJU/SE</h3>
                      <div class="experience-period">02/2025 – 06/2025</div>
                    </div>
                    <div class="experience-role">Desenvolvedor Backend</div>
                    <ul class="experience-list">
                      <li>Desenvolvimento de Website Institucional para o Laboratório Central de Saúde Pública de Sergipe (LACEN/SE).</li>
                      <li>Implementação de recursos de acessibilidade, incluindo VLibras e ajuste de tamanho de fonte, e modo escuro/claro seguindo boas práticas de inclusão digital.</li>
                      <li>Tecnologias: Vue.js 3, Vue CLI 5, Yarn e Node.js como stack principal de front-end</li>
                    </ul>
                  </div>
                </div>
                
                <div class="experience-item">
                  <div class="experience-marker"></div>
                  <div class="experience-card">
                    <div class="experience-header">
                      <h3 class="experience-company">FUNDARPE + UNIT (RS II) - ARACAJU/SE</h3>
                      <div class="experience-period">02/2024 – 06/2024</div>
                    </div>
                    <div class="experience-role">Desenvolvedor Backend</div>
                    <ul class="experience-list">
                      <li>Desenvolvimento de uma API REST para o sistema de gerenciamento de transações financeiras da Fundarpe (Fundação do Patrimônio Histórico e Artístico de Pernambuco) em uma equipe de oito desenvolvedores.</li>
                      <li>Tecnologias: Java Spring Boot, Banco de dados MySQL, versionamento de código via Git/Github e mais algumas tecnologias agregadas.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Formação Complementar -->
            <div class="section-wrapper">
              <h2 class="section-title">
                <span class="section-icon">📚</span>
                FORMAÇÃO COMPLEMENTAR
              </h2>
              <div class="courses-grid">
                <div class="course-card featured">
                  <div class="course-year">2025</div>
                  <h3 class="course-title">Treinamento Imersivo em Desenvolvimento Web - TreinaDev - Turma 13</h3>
                  <p class="course-provider">Campus Code</p>
                  <div class="course-hours">135h</div>
                </div>
                <div class="course-card">
                  <div class="course-year">2024</div>
                  <h3 class="course-title">Java COMPLETO Programação Orientada a Objetos + Projetos</h3>
                  <p class="course-provider">Udemy</p>
                  <div class="course-hours">54h</div>
                </div>
                <div class="course-card">
                  <div class="course-year">2023</div>
                  <h3 class="course-title">Java 2022 COMPLETO: Do zero ao Profissional + Projetos</h3>
                  <p class="course-provider">Udemy</p>
                  <div class="course-hours">65h</div>
                </div>
              </div>
            </div>

            <!-- Habilidades e Idiomas -->
            <v-row class="skills-row">
              <v-col cols="12" md="7">
                <div class="section-wrapper">
                  <h2 class="section-title">
                    <span class="section-icon">⚡</span>
                    HABILIDADES TÉCNICAS
                  </h2>
                  <div class="skills-grid">
                    <div class="skill-category">
                      <h4 class="skill-category-title">Backend</h4>
                      <div class="skill-tags">
                        <span class="skill-tag backend">Ruby on Rails</span>
                        <span class="skill-tag backend">Java Spring Boot</span>
                        <span class="skill-tag backend">Python Flask</span>
                      </div>
                    </div>
                    <div class="skill-category">
                      <h4 class="skill-category-title">Frontend</h4>
                      <div class="skill-tags">
                        <span class="skill-tag frontend">VueJS</span>
                        <span class="skill-tag frontend">Vuetify</span>
                        <span class="skill-tag frontend">JavaScript</span>
                        <span class="skill-tag frontend">HTML/CSS</span>
                      </div>
                    </div>
                    <div class="skill-category">
                      <h4 class="skill-category-title">Versionamento</h4>
                      <div class="skill-tags">
                        <span class="skill-tag tools">Git</span>
                        <span class="skill-tag tools">GitHub</span>
                        <span class="skill-tag tools">GitLab</span>
                      </div>
                    </div>
                    <div class="skill-category">
                      <h4 class="skill-category-title">Metodologia</h4>
                      <div class="skill-tags">
                        <span class="skill-tag backend">Scrum</span>
                        <span class="skill-tag backend">XP</span>
                        <span class="skill-tag backend">Pair Programming</span>
                        <span class="skill-tag backend">TDD</span>
                      </div>
                    </div>
                    <div class="skill-category">
                      <h4 class="skill-category-title">Container</h4>
                      <div class="skill-tags">
                        <span class="skill-tag frontend">Docker</span>
                      </div>
                    </div>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" md="5">
                <div class="section-wrapper">
                  <h2 class="section-title">
                    <span class="section-icon">🌐</span>
                    IDIOMAS
                  </h2>
                  <div class="language-cards">
                    <div class="language-card">
                      <div class="language-flag">🇺🇸</div>
                      <div>
                        <h4 class="language-name">Inglês</h4>
                        <div class="language-level">Intermediário (em evolução)</div>
                        <div class="language-cert">CNA idiomas – 2019</div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>

            <!-- Informações Adicionais -->
            <div class="section-wrapper">
              <h2 class="section-title">
                <span class="section-icon">ℹ️</span>
                INFORMAÇÕES ADICIONAIS
              </h2>
              <div class="additional-info">
                <div class="info-tags">
                  <span class="info-tag">🚗 CNH A/B</span>
                  <span class="info-tag">🚀 Facilidade no aprendizado</span>
                  <span class="info-tag">⏰ Disponibilidade total</span>
                  <span class="info-tag">🌎 Disponível para outras regiões</span>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'CurriculoView'
  }
</script>

<style scoped>
  .curriculum-card {
    max-width: 1000px;
    margin: 0 auto;
    border-radius: var(--radius-large);
    box-shadow: var(--shadow-heavy);
    background: var(--color-bg-primary);
    position: relative;
  }

  /* Cabeçalho moderno */
  .header-section {
    position: relative;
    padding: var(--spacing-xxl) var(--spacing-lg);
    overflow: hidden;
  }

  .header-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-warm);
    opacity: 0.95;
  }

  .header-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent 0%, var(--color-red-alpha-20) 100%);
  }

  .header-content {
    position: relative;
    z-index: 2;
  }

  .subtitle-accent {
    color: var(--color-text-light);
    font-size: 1.2rem;
    font-weight: 300;
    opacity: 0.9;
  }

  /* Cards de contato */
  .contact-section {
    padding: var(--spacing-lg);
    background: var(--color-bg-secondary);
    margin-top: -20px;
    position: relative;
    z-index: 1;
  }

  .contact-cards {
    margin-top: -40px;
  }

  .contact-card {
    background: var(--color-bg-primary);
    border-radius: var(--radius-medium);
    padding: var(--spacing-md);
    box-shadow: var(--shadow-light);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    height: 100%;
    transition: var(--transition-medium);
    border: var(--border-light);
  }

  .contact-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium);
  }

  .contact-icon {
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-primary-alpha-10);
    border-radius: var(--radius-small);
  }

  .contact-label {
    font-size: 0.8rem;
    color: var(--color-text-muted);
    font-weight: 500;
  }

  .contact-value {
    font-size: 0.9rem;
    color: var(--color-text-primary);
    font-weight: 600;
  }

  /* Conteúdo principal */
  .main-content {
    padding: var(--spacing-xxl) var(--spacing-lg);
  }

  .section-wrapper {
    margin-bottom: var(--spacing-xxl);
  }

  .section-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-primary-dark);
    margin-bottom: var(--spacing-lg);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    position: relative;
  }

  .section-title::after {
    content: '';
    flex: 1;
    height: 2px;
    background: var(--gradient-primary);
    margin-left: var(--spacing-md);
    border-radius: var(--radius-small);
  }

  .section-icon {
    font-size: 1.2rem;
  }

  /* Objetivo profissional */
  .objective-card {
    background: var(--gradient-light);
    border-radius: var(--radius-medium);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-light);
    border: var(--border-light);
  }

  .objective-text {
    color: var(--color-text-light);
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0;
    font-weight: 500;
  }

  /* Formação acadêmica */
  .education-cards {
    display: grid;
    gap: var(--spacing-md);
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .education-card {
    background: var(--color-bg-primary);
    border-radius: var(--radius-medium);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-light);
    border: var(--border-light);
    position: relative;
    transition: var(--transition-medium);
  }

  .education-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium);
  }

  .education-status {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-pill);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .education-status.ongoing {
    background: var(--color-accent-alpha-20);
    color: var(--color-accent-dark);
  }

  .education-status.completed {
    background: var(--color-primary-alpha-20);
    color: var(--color-primary-dark);
  }

  .education-title {
    color: var(--color-text-primary);
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
    margin-top: var(--spacing-md);
  }

  .education-subtitle {
    color: var(--color-text-secondary);
    font-weight: 500;
    margin-bottom: var(--spacing-xs);
  }

  .education-period {
    color: var(--color-text-muted);
    font-size: 0.9rem;
  }

  /* Timeline de experiência */
  .experience-timeline {
    position: relative;
    padding-left: var(--spacing-lg);
  }

  .experience-timeline::before {
    content: '';
    position: absolute;
    left: 12px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--gradient-primary);
  }

  .experience-item {
    position: relative;
    margin-bottom: var(--spacing-lg);
  }

  .experience-marker {
    position: absolute;
    left: -18px;
    top: var(--spacing-md);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--color-primary);
    border: 3px solid var(--color-bg-primary);
    box-shadow: var(--shadow-light);
  }

  .experience-marker.current {
    background: var(--color-red);
    box-shadow: var(--shadow-red-glow);
  }

  .experience-card {
    background: var(--color-bg-primary);
    border-radius: var(--radius-medium);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-light);
    border: var(--border-light);
    transition: var(--transition-medium);
  }

  .experience-card:hover {
    transform: translateX(4px);
    box-shadow: var(--shadow-medium);
  }

  .experience-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: var(--spacing-sm);
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }

  .experience-company {
    color: var(--color-text-primary);
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
  }

  .experience-period {
    background: var(--color-primary-alpha-15);
    color: var(--color-primary-dark);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-pill);
    font-size: 0.8rem;
    font-weight: 600;
  }

  .experience-role {
    color: var(--color-accent);
    font-weight: 600;
    margin-bottom: var(--spacing-md);
  }

  .experience-list {
    color: var(--color-text-secondary);
    line-height: 1.6;
    padding-left: var(--spacing-md);
  }

  .experience-list li {
    margin-bottom: var(--spacing-sm);
  }

  /* Cursos */
  .courses-grid {
    display: grid;
    gap: var(--spacing-md);
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .course-card {
    background: var(--color-bg-primary);
    border-radius: var(--radius-medium);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-light);
    border: var(--border-light);
    position: relative;
    transition: var(--transition-medium);
  }

  .course-card.featured {
    border: 2px solid var(--color-accent);
    box-shadow: var(--shadow-accent-glow);
  }

  .course-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium);
  }

  .course-year {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    background: var(--color-red-alpha-15);
    color: var(--color-red-dark);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-pill);
    font-size: 0.75rem;
    font-weight: 600;
  }

  .course-title {
    color: var(--color-text-primary);
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
    line-height: 1.4;
  }

  .course-provider {
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-xs);
  }

  .course-hours {
    color: var(--color-accent);
    font-weight: 600;
    font-size: 0.9rem;
  }

  /* Habilidades */
  .skills-row {
    margin-bottom: var(--spacing-lg);
  }

  .skills-grid {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .skill-category {
    background: var(--color-bg-primary);
    border-radius: var(--radius-medium);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-light);
    border: var(--border-light);
  }

  .skill-category-title {
    color: var(--color-text-primary);
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: var(--spacing-md);
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }

  .skill-tag {
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: var(--radius-pill);
    font-size: 0.85rem;
    font-weight: 500;
    transition: var(--transition-fast);
  }

  .skill-tag.backend {
    background: var(--color-primary-alpha-15);
    color: var(--color-primary-dark);
  }

  .skill-tag.frontend {
    background: var(--color-accent-alpha-15);
    color: var(--color-accent-dark);
  }

  .skill-tag.tools {
    background: var(--color-red-alpha-15);
    color: var(--color-red-dark);
  }

  .skill-tag:hover {
    transform: scale(1.05);
  }

  /* Idiomas */
  .language-cards {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .language-card {
    background: var(--color-bg-primary);
    border-radius: var(--radius-medium);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-light);
    border: var(--border-light);
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
  }

  .language-flag {
    font-size: 2rem;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-primary-alpha-10);
    border-radius: var(--radius-small);
  }

  .language-name {
    color: var(--color-text-primary);
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
  }

  .language-level {
    color: var(--color-accent);
    font-weight: 500;
    margin-bottom: var(--spacing-xs);
  }

  .language-cert {
    color: var(--color-text-muted);
    font-size: 0.85rem;
  }

  /* Informações adicionais */
  .additional-info {
    background: var(--color-bg-primary);
    border-radius: var(--radius-medium);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-light);
    border: var(--border-light);
  }

  .info-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }

  .info-tag {
    background: var(--gradient-earth);
    color: var(--color-text-light);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-pill);
    font-size: 0.9rem;
    font-weight: 500;
    transition: var(--transition-fast);
  }

  .info-tag:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-light);
  }

  /* Responsividade */
  @media (max-width: 960px) {
    .experience-header {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .skills-grid {
      gap: var(--spacing-md);
    }
  }

  @media (max-width: 600px) {
    .curriculum-card {
      border-radius: 0;
      margin: 0 -16px;
    }
    
    .header-section {
      padding: var(--spacing-lg);
    }
    
    .main-content {
      padding: var(--spacing-lg);
    }
    
    .section-wrapper {
      margin-bottom: var(--spacing-lg);
    }
    
    .courses-grid,
    .education-cards {
      grid-template-columns: 1fr;
    }
    
    .contact-cards .v-col {
      padding: var(--spacing-xs);
    }
    
    .info-tags {
      flex-direction: column;
    }
    
    .info-tag {
      text-align: center;
    }
  }
</style>