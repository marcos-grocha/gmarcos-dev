<template>
  <v-container fluid class="pa-0 pa-sm-4">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card elevation="4" class="curriculum-card">
          <!-- Cabeçalho -->
          <v-card-item class="bg-custom py-4">
            <v-card-title class="text-h4 text-md-h3 text-white text-center text-md-start">
              MARCOS GUIMARÃES ROCHA
            </v-card-title>
          </v-card-item>

          <!-- Informações pessoais -->
          <v-card-text class="text-subtitle-1 pt-4">
            <v-row dense>
              <v-col cols="12" md="6">
                Brasileiro, 27 anos<br>
                Aracaju – SE
              </v-col>
              <v-col cols="12" md="6" class="text-md-end">
                <div>(79) 99963-0944</div>
                <div>gmarcos.dev@gmail.com</div>
              </v-col>
            </v-row>
          </v-card-text>

          <!-- Conteúdo -->
          <v-card-text>
            <h2 class="section-title">OBJETIVO PROFISSIONAL</h2>
            <p class="mb-6">
              Desenvolvedor Back-end com experiência em Ruby on Rails e Java Spring. Busco oportunidades para aplicar 
              minhas habilidades e contribuir com projetos inovadores, sempre disposto a aprender novas tecnologias.
            </p>

            <h2 class="section-title">FORMAÇÃO ACADÊMICA</h2>
            <v-list density="compact" class="mb-4 bg-transparent">
              <v-list-item>
                <v-list-item-title>Análise e Desenvolvimento de Sistemas</v-list-item-title>
                <v-list-item-subtitle>Universidade Tiradentes (2024 – 2026)</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Superior de Tecnologia em Jogos Digitais</v-list-item-title>
                <v-list-item-subtitle>Universidade Tiradentes (Concluído em 2024)</v-list-item-subtitle>
              </v-list-item>
            </v-list>

            <h2 class="section-title">EXPERIÊNCIA PROFISSIONAL</h2>
            <v-timeline density="compact" align="start" class="mb-6">
              <v-timeline-item dot-color="#978872">
                <template v-slot:opposite></template>
                <v-card class="elevation-1 mb-4">
                  <v-card-title class="text-subtitle-1 font-weight-bold">CAMPUS CODE - REMOTO</v-card-title>
                  <v-card-subtitle>Desenvolvedor FullStack - 01/2025 – 02/2025</v-card-subtitle>
                  <v-card-text>
                    <ul class="pl-4">
                      <li>Desenvolvimento de um Aplicativo WEB com Ruby on Rails em uma equipe de seis desenvolvedores.</li>
                      <li>Utilização de Scrum, Pair Programming e TDD (Test Driven Development) para garantir a qualidade do código (97,7% de cobertura).</li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              
              <v-timeline-item dot-color="#978872">
                <template v-slot:opposite></template>
                <v-card class="elevation-1">
                  <v-card-title class="text-subtitle-1 font-weight-bold">RESIDÊNCIA DE SOFTWARE II - ARACAJU/SE</v-card-title>
                  <v-card-subtitle>Desenvolvedor Backend - 02/2024 – 06/2024</v-card-subtitle>
                  <v-card-text>
                    <ul class="pl-4">
                      <li>Desenvolvimento de uma API REST para o sistema de gerenciamento de transações financeiras da Fundarpe (Fundação do Patrimônio Histórico e Artístico de Pernambuco) em uma equipe de oito desenvolvedores.</li>
                      <li>Tecnologias: Java Spring Boot, Banco de dados MySQL, versionamento de código via Git/Github e mais algumas tecnologias agregadas.</li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>

            <h2 class="section-title">FORMAÇÃO COMPLEMENTAR</h2>
            <v-list density="compact" class="mb-4 bg-transparent">
              <v-list-item>
                <v-list-item-title>Treinamento Imersivo em Desenvolvimento Web - TreinaDev - Turma 13</v-list-item-title>
                <v-list-item-subtitle>Campus Code (Carga horária: 135h) – 2025</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Java COMPLETO Programação Orientada a Objetos + Projetos</v-list-item-title>
                <v-list-item-subtitle>Udemy (Carga horária: 54h) – 2024</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Java 2022 COMPLETO: Do zero ao Profissional + Projetos</v-list-item-title>
                <v-list-item-subtitle>Udemy (Carga horária: 65h) – 2023</v-list-item-subtitle>
              </v-list-item>
            </v-list>

            <v-row>
              <v-col cols="12" md="6">
                <h2 class="section-title">HABILIDADES</h2>
                <v-list density="compact" class="mb-4 bg-transparent">
                  <v-list-item>
                    <v-list-item-title><strong>Backend:</strong> Ruby on Rails, Java Spring Boot</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title><strong>Frontend:</strong> VueJS, Vuetify, JavaScript, HTML, CSS</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title><strong>Versionamento:</strong> Git, GitHub</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Scrum, pair programming e TDD</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>

              <v-col cols="12" md="6">
                <h2 class="section-title">IDIOMAS</h2>
                <v-list density="compact" class="mb-4 bg-transparent">
                  <v-list-item>
                    <v-list-item-title>Inglês – básico – CNA idiomas – 2019</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Inglês – intermediário (em evolução)</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>

            <h2 class="section-title">INFORMAÇÕES ADICIONAIS</h2>
            <v-list density="compact" class="mb-4 bg-transparent">
              <v-list-item>
                <v-list-item-title>CNH A/B</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Facilidade no aprendizado de novas tecnologias e ferramentas</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Disponibilidade total de horário</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Disponibilidade para outras regiões</v-list-item-title>
              </v-list-item>
            </v-list>
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
  }

  .section-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--v-primary-base);
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }

  .bg-custom {
    background-color: #978872 !important;
  }

  @media (max-width: 600px) {
    .curriculum-card {
      border-radius: 0;
    }
  }
</style>