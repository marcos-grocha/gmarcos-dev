<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="text-center mb-4">
        <h1 class="text-h4 font-weight-bold">Graduação e Especializações</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <!-- Certificado 1 -->
        <v-card 
          class="mb-6" 
          variant="elevated" 
          elevation="3"
          :class="{'rounded-lg': $vuetify.display.mdAndUp}"
        >
          <v-card-item>
            <v-card-title class="text-h5 font-weight-bold">
              <v-icon icon="mdi-school" class="me-2" color="primary"></v-icon>
              Superior de Tecnologia em Jogos Digitais
            </v-card-title>
            <v-card-subtitle class="mt-2 text-subtitle-1">
              Universidade Tiradentes - Concluído em 2024.2
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-expansion-panels v-model="panels.degree" variant="accordion">
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <span class="font-weight-medium">Competências do Curso</span>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-table density="compact" class="rounded">
                    <thead>
                      <tr>
                        <th class="text-left">Módulo</th>
                        <th class="text-right">Carga Horária</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(competence, i) in skills" :key="i">
                        <td>{{ competence.module }}</td>
                        <td class="text-right">{{ competence.hours }}h</td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
            <p class="text-caption text-center mt-4">
              Código de validação: 398.398.fa8a23e84690cd025191d8e29381f42b7db5db92226ebf9a99f549ee5b80ffb5
            </p>
          </v-card-text>
        </v-card>

        <!-- Certificado 2 -->
        <v-card 
          class="mb-6" 
          variant="elevated" 
          elevation="3"
          :class="{'rounded-lg': $vuetify.display.mdAndUp}"
        >
          <v-card-item>
            <v-card-title class="text-h5 font-weight-bold">
              <v-icon icon="mdi-code-tags" class="me-2" color="primary"></v-icon>
              Treinamento Imersivo em Desenvolvimento Web - TreinaDev - Turma 13
            </v-card-title>
            <v-card-subtitle class="mt-2 text-subtitle-1">
              Campus Code - Concluído em 2025.1
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-expansion-panels v-model="panels.treina" variant="accordion">
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <span class="font-weight-medium">Competências do Curso</span>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <p>Desenvolvimento Web com foco em Ruby on Rails, cobrindo:</p>
                  <v-chip-group>
                    <v-chip v-for="(skill, i) in trainaDevSkills" :key="i" color="primary" variant="outlined" size="small">
                      {{ skill }}
                    </v-chip>
                  </v-chip-group>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
            <p class="text-caption text-center mt-4">
              Chave de acesso: 51N4XfxZafGZh8eVigMEuetN
            </p>
          </v-card-text>
        </v-card>

        <!-- Certificado 3 -->
        <v-card 
          class="mb-6" 
          variant="elevated" 
          elevation="3"
          :class="{'rounded-lg': $vuetify.display.mdAndUp}"
        >
          <v-card-item>
            <v-card-title class="text-h5 font-weight-bold">
              <v-icon icon="mdi-language-java" class="me-2" color="primary"></v-icon>
              Java COMPLETO Programação Orientada a Objetos + Projetos
            </v-card-title>
            <v-card-subtitle class="mt-2 text-subtitle-1">
              Udemy - Concluído em 2024.1
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-expansion-panels v-model="panels.java" variant="accordion">
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <span class="font-weight-medium">Competências do Curso</span>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-chip-group>
                    <v-chip v-for="(skill, i) in javaSkills" :key="i" color="primary" variant="outlined" size="small">
                      {{ skill }}
                    </v-chip>
                  </v-chip-group>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
            <p class="text-caption text-center mt-4">
              Código da credencial: UC-5a93c6e1-e4d1-4e04-b261-81e7d739d6c3
            </p>
          </v-card-text>
        </v-card>

        <!-- Certificado 4 -->
        <v-card 
          class="mb-6" 
          variant="elevated" 
          elevation="3"
          :class="{'rounded-lg': $vuetify.display.mdAndUp}"
        >
          <v-card-item>
            <v-card-title class="text-h5 font-weight-bold">
              <v-icon icon="mdi-language-java" class="me-2" color="primary"></v-icon>
              Java COMPLETO: Do Zero ao Profissional + Projetos!
            </v-card-title>
            <v-card-subtitle class="mt-2 text-subtitle-1">
              Udemy - Concluído em 2023.2
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-expansion-panels v-model="panels.javinha" variant="accordion">
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <span class="font-weight-medium">Competências do Curso</span>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-chip-group>
                    <v-chip v-for="(skill, i) in javinhaSkills" :key="i" color="primary" variant="outlined" size="small">
                      {{ skill }}
                    </v-chip>
                  </v-chip-group>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
            <p class="text-caption text-center mt-4">
              Código da credencial: Processando...
            </p>
          </v-card-text>
        </v-card>
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
  .v-expansion-panel-title {
    padding: 12px;
  }

  @media (max-width: 600px) {
    .v-card-title {
      font-size: 1.25rem !important;
    }
    
    .v-card-subtitle {
      font-size: 0.9rem !important;
    }
  }
</style>