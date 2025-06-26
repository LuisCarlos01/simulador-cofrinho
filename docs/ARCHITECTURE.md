# 🏗️ Arquitetura do Projeto

## 📁 Estrutura de Diretórios

```
📦 simulador-cofrinho
├── 📂 docs/               # Documentação do projeto
│   ├── 📂 assets/        # Imagens e recursos da documentação
│   ├── 📜 ARCHITECTURE.md # Documentação da arquitetura
│   ├── 📜 CONTRIBUTING.md # Guia de contribuição
│   └── 📜 CHANGELOG.md    # Registro de alterações
├── 📂 public/            # Arquivos públicos
│   └── 📜 index.html     # Página principal
├── 📂 src/               # Código fonte
│   ├── 📂 css/          # Estilos
│   │   └── 📜 style.css # Estilos principais
│   └── 📂 js/           # JavaScript
│       └── 📜 script.js # Lógica principal
├── 📜 .eslintrc.json    # Configuração do ESLint
├── 📜 .prettierrc       # Configuração do Prettier
├── 📜 .gitignore        # Arquivos ignorados pelo Git
├── 📜 LICENSE           # Licença MIT
├── 📜 README.md         # Documentação principal
└── 📜 package.json      # Configuração do projeto
```

## 🔧 Tecnologias Utilizadas

- **Frontend:**
  - HTML5
  - CSS3 (Grid Layout, Flexbox)
  - JavaScript ES6+
  - LocalStorage API

- **Desenvolvimento:**
  - ESLint
  - Prettier
  - Husky
  - Git Hooks

## 🏛️ Padrões de Projeto

### 1. Padrão de Módulo
- Utilização de classes ES6
- Encapsulamento de funcionalidades
- Separação de responsabilidades

### 2. Observer Pattern
- Sistema de eventos para atualização da interface
- Comunicação desacoplada entre componentes

### 3. Factory Pattern
- Criação padronizada de elementos da interface
- Reutilização de código

## 💾 Persistência de Dados

- LocalStorage para armazenamento
- Formato JSON para serialização
- Estrutura de dados otimizada

## 🔐 Segurança

- Validação de entrada de dados
- Sanitização de valores
- Proteção contra XSS

## 📱 Responsividade

- Design Mobile First
- Grid Layout responsivo
- Media Queries estratégicas
- Breakpoints padronizados

## 🎨 Padrões de Código

### JavaScript
```javascript
// Padrão de nomenclatura
const nomeDeVariavel = 'camelCase';
class NomeDeClasse {}
const CONSTANTE_GLOBAL = 'UPPERCASE';

// Organização de métodos
class Componente {
  // Construtor
  constructor() {}

  // Métodos públicos
  metodoPublico() {}

  // Métodos privados
  #metodoPrivado() {}
}
```

### CSS
```css
/* Organização de propriedades */
.componente {
  /* Posicionamento */
  position: relative;
  
  /* Box model */
  display: flex;
  margin: 0;
  padding: 0;
  
  /* Visual */
  background: #fff;
  border: 1px solid #ddd;
  
  /* Tipografia */
  font-size: 16px;
  color: #333;
}
```

## 🔄 Ciclo de Vida

1. Inicialização
   - Carregamento do DOM
   - Setup de eventos
   - Restauração do estado

2. Operação
   - Manipulação de dados
   - Atualização da interface
   - Persistência automática

3. Finalização
   - Limpeza de recursos
   - Salvamento do estado

## 🔍 Boas Práticas

1. **DRY (Don't Repeat Yourself)**
   - Reutilização de código
   - Componentes modulares
   - Funções utilitárias

2. **KISS (Keep It Simple, Stupid)**
   - Código simples e direto
   - Funções pequenas e focadas
   - Nomes descritivos

3. **SOLID**
   - Single Responsibility
   - Open/Closed
   - Interface Segregation
   - Dependency Inversion 