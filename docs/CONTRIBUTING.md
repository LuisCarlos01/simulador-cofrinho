# 🤝 Guia de Contribuição

## 📝 Índice

1. [Código de Conduta](#código-de-conduta)
2. [Como Contribuir](#como-contribuir)
3. [Padrões de Código](#padrões-de-código)
4. [Commits](#commits)
5. [Pull Requests](#pull-requests)
6. [Reportando Bugs](#reportando-bugs)
7. [Sugerindo Melhorias](#sugerindo-melhorias)

## 📜 Código de Conduta

Este projeto segue um Código de Conduta que todos os contribuidores devem seguir. Por favor, leia [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) para detalhes.

## 🛠️ Como Contribuir

1. Faça um Fork do projeto
2. Clone o seu Fork: `git clone https://github.com/seu-usuario/simulador-cofrinho.git`
3. Crie uma branch para sua feature: `git checkout -b feature/nome-da-feature`
4. Faça suas alterações
5. Execute os testes e linters: `npm run lint && npm run test`
6. Commit suas mudanças: `git commit -m 'feat: Minha nova feature'`
7. Push para a branch: `git push origin feature/nome-da-feature`
8. Abra um Pull Request

## 💻 Padrões de Código

### JavaScript

```javascript
// Use const para valores que não serão reatribuídos
const PI = 3.14;

// Use let para valores que serão reatribuídos
let contador = 0;

// Classes com PascalCase
class MinhaClasse {
  // Métodos com camelCase
  meuMetodo() {
    // ...
  }
}

// Funções com camelCase
function minhaFuncao() {
  // ...
}
```

### CSS

```css
/* Use kebab-case para classes */
.meu-componente {
  /* Propriedades organizadas por categoria */
  /* Posicionamento */
  position: relative;
  z-index: 1;

  /* Box model */
  display: flex;
  margin: 0;

  /* Cores e visual */
  background: #fff;
  border: 1px solid #ddd;
}
```

### HTML

```html
<!-- Use tags semânticas -->
<header>
  <nav>
    <!-- ... -->
  </nav>
</header>

<!-- IDs e classes descritivos -->
<div id="meu-componente" class="container principal">
  <!-- ... -->
</div>
```

## 📝 Commits

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação
- `refactor`: Refatoração
- `test`: Testes
- `chore`: Manutenção

Exemplo:
```bash
git commit -m "feat: Adiciona novo botão de reset"
git commit -m "fix: Corrige cálculo do total"
git commit -m "docs: Atualiza README"
```

## 🔄 Pull Requests

1. Use o template de PR fornecido
2. Descreva claramente as mudanças
3. Inclua screenshots se relevante
4. Referencie issues relacionadas
5. Aguarde review de pelo menos um mantenedor

## 🐛 Reportando Bugs

1. Use o template de issue para bugs
2. Descreva o comportamento esperado
3. Descreva o comportamento atual
4. Forneça passos para reprodução
5. Inclua informações do ambiente
6. Adicione screenshots se possível

## 💡 Sugerindo Melhorias

1. Use o template de issue para features
2. Descreva o problema que sua feature resolve
3. Explique a solução proposta
4. Considere alternativas
5. Forneça exemplos de uso

## ✅ Checklist antes de Contribuir

- [ ] Leu o guia de contribuição
- [ ] Testou as mudanças localmente
- [ ] Atualizou a documentação
- [ ] Seguiu os padrões de código
- [ ] Adicionou testes se necessário
- [ ] Verificou o lint e formatação 