<template>
  <v-container>
    <v-row>
      <v-col>
        <div 
          class="modern-menu"
          :class="{ 'scrolled': isScrolled }"
        >
          <nav class="menu-nav">
            <div class="menu-container">
              <v-btn
                v-for="(item, index) in menuItems"
                :key="item.name"
                :to="item.path"
                variant="text"
                class="menu-btn"
                :class="{ 'active': $route.path === item.path }"
                @mouseover="hoveredIndex = index"
                @mouseleave="hoveredIndex = null"
              >
                <v-icon 
                  :icon="item.icon" 
                  size="18"
                  class="menu-icon"
                />
                <span class="menu-text">{{ item.name }}</span>
                
                <!-- Indicador de hover/active -->
                <div 
                  class="menu-indicator"
                  :class="{ 
                    'active': $route.path === item.path,
                    'hovered': hoveredIndex === index 
                  }"
                />
              </v-btn>
            </div>
          </nav>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ModernMenu',
    data() {
      return {
        isScrolled: false,
        hoveredIndex: null,
        menuItems: [
          {
            name: 'Developer',
            path: '/',
            icon: 'mdi-code-tags'
          },
          {
            name: 'CV',
            path: '/cv',
            icon: 'mdi-account-box'
          },
          {
            name: 'Certificates',
            path: '/certificates',
            icon: 'mdi-certificate'
          }
        ]
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        this.isScrolled = window.scrollY > 50
      }
    }
  }
</script>

<style scoped>
  .modern-menu {
    position: relative;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    transition: all var(--transition-medium);
  }

  .menu-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-lg) 0;
  }

  .menu-container {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    background: var(--color-red-alpha-15);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: var(--radius-pill);
    padding: var(--spacing-sm) var(--spacing-md);
    border: var(--border-red-light);
    box-shadow: 
      var(--shadow-red-medium),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  .menu-btn {
    position: relative;
    font-weight: 500;
    font-size: 14px;
    text-transform: none;
    letter-spacing: 0.5px;
    color: var(--color-red);
    border-radius: 25px;
    padding: 12px var(--spacing-lg);
    min-width: auto;
    height: auto;
    transition: all var(--transition-medium);
    overflow: hidden;
  }

  .menu-btn:hover {
    color: var(--color-red-dark);
    background: var(--color-accent-alpha-20);
    transform: translateY(-2px);
    box-shadow: var(--shadow-accent-medium);
  }

  .menu-btn.active {
    color: var(--color-text-light);
    background: var(--gradient-red);
    box-shadow: var(--shadow-red-glow);
  }

  .menu-icon {
    margin-right: var(--spacing-sm);
    transition: transform var(--transition-fast);
  }

  .menu-btn:hover .menu-icon {
    transform: scale(1.1);
  }

  .menu-text {
    position: relative;
    z-index: 2;
  }

  .menu-indicator {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--gradient-accent);
    border-radius: 1px;
    transform: translateX(-50%);
    transition: width var(--transition-medium);
  }

  .menu-indicator.hovered {
    width: 80%;
    background: var(--gradient-warm);
  }

  .menu-indicator.active {
    width: 100%;
    background: var(--gradient-earth);
  }

  /* Efeito adicional de brilho no hover */
  .menu-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-accent-alpha-20),
      transparent
    );
    transition: left var(--transition-slow);
    z-index: 1;
  }

  .menu-btn:hover::before {
    left: 100%;
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .menu-container {
      background: var(--color-red-alpha-20);
      border-color: var(--color-red-alpha-30);
    }
    
    .menu-btn {
      color: var(--color-red-light);
    }
    
    .menu-btn:hover {
      color: var(--color-accent-light);
      background: var(--color-red-alpha-30);
    }
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .menu-container {
      padding: var(--spacing-xs) 12px;
      gap: var(--spacing-xs);
    }
    
    .menu-btn {
      padding: 10px var(--spacing-md);
      font-size: 13px;
    }
    
    .menu-icon {
      margin-right: var(--spacing-xs);
    }
  }

  @media (max-width: 480px) {
    .menu-nav {
      padding: 12px 0;
    }
    
    .menu-container {
      padding: var(--spacing-xs) var(--spacing-sm);
      gap: 2px;
    }
    
    .menu-btn {
      padding: var(--spacing-sm) 12px;
      font-size: 12px;
    }
    
    .menu-text {
      display: none;
    }
    
    .menu-icon {
      margin-right: 0;
    }
  }

  /* Animações suaves */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .modern-menu {
    animation: fadeInUp 0.6s ease-out;
  }

  /* Animação de pulsação para o item ativo */
  @keyframes subtlePulse {
    0%, 100% { 
      box-shadow: var(--shadow-red-glow); 
    }
    50% { 
      box-shadow: var(--shadow-accent-glow); 
    }
  }

  .menu-btn.active {
    animation: subtlePulse 3s ease-in-out infinite;
  }
</style>