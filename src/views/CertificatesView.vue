<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">

        <p class="text-center text-h4">Graduação e Especializações</p><br>
        <v-card elevation="4" class="pa-4">
          <v-card-title class="text-h6">
            Superior de Tecnologia em Jogos Digitais
          </v-card-title>
          <v-card-subtitle class="text-subtitle-1 mt-2">
            Universidade Tiradentes - Concluído em 2024.2
          </v-card-subtitle>
          <v-expansion-panels v-model="panel" flat>
            <v-expansion-panel>
              <v-expansion-panel-title>Competências do Curso</v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th class="text-left">Módulo</th>
                      <th class="text-left">Carga Horária</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="competence in skills" :key="competence.module">
                      <td>{{ competence.module }}</td>
                      <td>{{ competence.hours }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <br>
            <p class="text-caption">Código de validação: 398.398.fa8a23e84690cd025191d8e29381f42b7db5db92226ebf9a99f549ee5b80ffb5</p>
          </v-expansion-panels>
        </v-card>

        <v-divider :thickness="20" class="border-opacity-0"></v-divider>

        <v-card elevation="4" class="pa-4">
          <v-card-title class="text-h6">
            Treinamento Imersivo em Desenvolvimento Web - TreinaDev - Turma 13
          </v-card-title>
          <v-card-subtitle class="text-subtitle-1">
            Campus Code - Concluído em 2025.1
          </v-card-subtitle>
          <v-expansion-panels flat>
            <v-expansion-panel
              title="Competências do Curso"
              text="Desenvolvimento Web com foco em Ruby on Rails, cobrindo programação em Ruby com boas práticas, desenvolvimento web utilizando o framework Rails, controle de versão com Git, criação e integração de APIs, Test Driven Development (TDD), pair programming, metodologias ágeis (como Scrum e Kanban) além de experiência prática em um time de desenvolvimento."
              >
            </v-expansion-panel>
            <br>
            <p class="text-caption">Chave de acesso: 51N4XfxZafGZh8eVigMEuetN</p>
          </v-expansion-panels>
        
          <v-divider :thickness="20" class="border-opacity-0"></v-divider>

          <v-card-title class="text-h6">
            Java COMPLETO Programação Orientada a Objetos + Projetos
          </v-card-title>
          <v-card-subtitle class="text-subtitle-1">
            Udemy - Concluído em 2024.1
          </v-card-subtitle>
          <v-expansion-panels flat>
            <v-expansion-panel
              title="Competências do Curso"
              text="Java, OO, UML, JDBC, JavaFX, Spring Boot, JPA, Hibernate, MySQL, MongoDB, Maven, Spring Data JPA e Spring Data MongoDB."
              >
            </v-expansion-panel>
            <br>
            <p class="text-caption">Código da credencial: UC-5a93c6e1-e4d1-4e04-b261-81e7d739d6c3</p>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        panel: null,
        skills: [
          { module: 'Animação e Modelagem de Jogos', hours: 480, },
          { module: 'Roteiros, Worldbuilding, Programação, Ilustração e Negócios', hours: 480, },
          { module: 'UI/UX, Animação e Desenvolvimento de Jogos', hours: 480, },
          { module: 'Fundamentos de IA e de Game Design', hours: 480, },
          { module: 'Fundamentos iniciais no Design de Jogos', hours: 480, },
        ],
      }
    },
  }
</script>