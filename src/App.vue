<template>
  <v-app>
    <Menu/>
    
    <router-view/>

    <v-spacer></v-spacer>
    <Rodape/>
  </v-app>
</template>

<script>
  import Menu from '../src/components/Menu.vue'
  import Rodape from './components/Rodape.vue';
  
  export default {
    name: 'App',
    components: {
      Menu,
      Rodape
    },

    data: () => ({
      //
    }),
  }
</script>

<style>
  :root {
    /* Cores Primárias - Tons de Marrom */
    --color-primary: #978872;
    --color-primary-light: #c4b59e;
    --color-primary-dark: #6b5d4a;
    --color-primary-darker: #54453a;
    
    /* Cores Secundárias */
    --color-secondary: #8d7b68;
    --color-secondary-light: #a69485;
    --color-secondary-dark: #706048;
    
    /* Tons de Vermelho que Harmonizam com Marrom */
    --color-red: #a0625c;
    --color-red-light: #c28b85;
    --color-red-dark: #7d4e49;
    --color-red-darker: #5f3a36;
    
    /* Tons Terrosos - Vermelho Acinzentado */
    --color-red-muted: #9b6b63;
    --color-red-muted-light: #b7857d;
    --color-red-muted-dark: #7a544e;
    
    /* Cor de Destaque - Vermelho Rosado */
    --color-accent: #b37268;
    --color-accent-light: #d09a90;
    --color-accent-dark: #8e5a51;
    
    /* Cores de Texto */
    --color-text-primary: #2d2d2d;
    --color-text-secondary: #6b5d4a;
    --color-text-muted: #978872;
    --color-text-light: #ffffff;
    
    /* Cores de Fundo */
    --color-bg-primary: #ffffff;
    --color-bg-secondary: #faf9f8;
    --color-bg-tertiary: #f5f4f2;
    
    /* Transparências - Marrom */
    --color-primary-alpha-10: rgba(151, 136, 114, 0.1);
    --color-primary-alpha-15: rgba(151, 136, 114, 0.15);
    --color-primary-alpha-20: rgba(151, 136, 114, 0.2);
    --color-primary-alpha-30: rgba(151, 136, 114, 0.3);
    --color-primary-alpha-40: rgba(151, 136, 114, 0.4);
    --color-primary-alpha-50: rgba(151, 136, 114, 0.5);
    
    /* Transparências - Vermelho */
    --color-red-alpha-10: rgba(160, 98, 92, 0.1);
    --color-red-alpha-15: rgba(160, 98, 92, 0.15);
    --color-red-alpha-20: rgba(160, 98, 92, 0.2);
    --color-red-alpha-30: rgba(160, 98, 92, 0.3);
    --color-red-alpha-40: rgba(160, 98, 92, 0.4);
    --color-red-alpha-50: rgba(160, 98, 92, 0.5);
    
    /* Transparências - Accent */
    --color-accent-alpha-10: rgba(179, 114, 104, 0.1);
    --color-accent-alpha-15: rgba(179, 114, 104, 0.15);
    --color-accent-alpha-20: rgba(179, 114, 104, 0.2);
    --color-accent-alpha-30: rgba(179, 114, 104, 0.3);
    
    /* Sombras */
    --shadow-light: 0 2px 8px var(--color-primary-alpha-10);
    --shadow-medium: 0 4px 16px var(--color-primary-alpha-20);
    --shadow-heavy: 0 8px 32px var(--color-primary-alpha-30);
    --shadow-glow: 0 4px 16px var(--color-primary-alpha-50);
    
    /* Sombras Vermelhas */
    --shadow-red-light: 0 2px 8px var(--color-red-alpha-10);
    --shadow-red-medium: 0 4px 16px var(--color-red-alpha-20);
    --shadow-red-glow: 0 4px 16px var(--color-red-alpha-40);
    
    /* Sombras Accent */
    --shadow-accent-light: 0 2px 8px var(--color-accent-alpha-10);
    --shadow-accent-medium: 0 4px 16px var(--color-accent-alpha-20);
    --shadow-accent-glow: 0 4px 16px var(--color-accent-alpha-30);
    
    /* Gradientes */
    --gradient-primary: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    --gradient-secondary: linear-gradient(90deg, var(--color-primary), var(--color-primary-dark));
    --gradient-light: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%);
    
    /* Gradientes com Vermelho */
    --gradient-red: linear-gradient(135deg, var(--color-red) 0%, var(--color-red-dark) 100%);
    --gradient-warm: linear-gradient(135deg, var(--color-primary) 0%, var(--color-red) 100%);
    --gradient-accent: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
    --gradient-earth: linear-gradient(135deg, var(--color-red-muted) 0%, var(--color-primary-dark) 100%);
    
    /* Bordas */
    --border-light: 1px solid var(--color-primary-alpha-20);
    --border-medium: 1px solid var(--color-primary-alpha-30);
    --border-heavy: 1px solid var(--color-primary-alpha-40);
    
    /* Bordas Vermelhas */
    --border-red-light: 1px solid var(--color-red-alpha-20);
    --border-red-medium: 1px solid var(--color-red-alpha-30);
    --border-accent: 1px solid var(--color-accent-alpha-20);
    
    /* Raios de Borda */
    --radius-small: 8px;
    --radius-medium: 16px;
    --radius-large: 24px;
    --radius-pill: 50px;
    
    /* Transições */
    --transition-fast: 0.2s ease;
    --transition-medium: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Espaçamentos */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-xxl: 48px;
  }

  /* ===== TEMA ESCURO ===== */
  /* ...em construção */

  /* ===== CLASSES UTILITÁRIAS ===== */
  .text-primary { color: var(--color-text-primary) !important; }
  .text-secondary { color: var(--color-text-secondary) !important; }
  .text-muted { color: var(--color-text-muted) !important; }
  .text-light { color: var(--color-text-light) !important; }

  /* Classes de Cor - Marrom */
  .bg-primary { background-color: var(--color-primary) !important; }
  .bg-primary-light { background-color: var(--color-primary-light) !important; }
  .bg-primary-dark { background-color: var(--color-primary-dark) !important; }

  /* Classes de Cor - Vermelho */
  .bg-red { background-color: var(--color-red) !important; }
  .bg-red-light { background-color: var(--color-red-light) !important; }
  .bg-red-dark { background-color: var(--color-red-dark) !important; }
  .bg-accent { background-color: var(--color-accent) !important; }

  .text-red { color: var(--color-red) !important; }
  .text-red-light { color: var(--color-red-light) !important; }
  .text-red-dark { color: var(--color-red-dark) !important; }
  .text-accent { color: var(--color-accent) !important; }

  /* Classes de Gradiente */
  .gradient-primary { background: var(--gradient-primary) !important; }
  .gradient-secondary { background: var(--gradient-secondary) !important; }
  .gradient-red { background: var(--gradient-red) !important; }
  .gradient-warm { background: var(--gradient-warm) !important; }
  .gradient-accent { background: var(--gradient-accent) !important; }
  .gradient-earth { background: var(--gradient-earth) !important; }

  /* Classes de Sombra */
  .shadow-light { box-shadow: var(--shadow-light) !important; }
  .shadow-medium { box-shadow: var(--shadow-medium) !important; }
  .shadow-heavy { box-shadow: var(--shadow-heavy) !important; }
  .shadow-red-glow { box-shadow: var(--shadow-red-glow) !important; }
  .shadow-accent-glow { box-shadow: var(--shadow-accent-glow) !important; }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
    transition: background-color var(--transition-medium), color var(--transition-medium);
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-alpha-30);
    border-radius: var(--radius-small);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary-alpha-40);
  }
</style>