# 💰 Simulador de Cofrinho

![Versão](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Status](https://img.shields.io/badge/status-MVP-success.svg)
![Licença](https://img.shields.io/badge/license-MIT-green.svg)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

Um simulador de cofrinho virtual que permite adicionar e gerenciar moedas e cédulas, com funcionalidades de filtragem e persistência de dados.

[📚 Documentação Completa](docs/ARCHITECTURE.md) | [🤝 Como Contribuir](docs/CONTRIBUTING.md) | [📝 Changelog](docs/CHANGELOG.md)

## 🎯 Funcionalidades

- ✅ Adicionar moedas (R$ 0,05 a R$ 1,00)
- ✅ Adicionar cédulas (R$ 2,00 a R$ 100,00)
- ✅ Calcular total acumulado
- ✅ Filtrar por tipo (moedas/cédulas)
- ✅ Persistência com localStorage
- ✅ Interface responsiva
- ✅ Animações de interação

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS e Grid Layout)
- JavaScript (ES6+)
- LocalStorage para persistência
- ESLint para qualidade de código
- Prettier para formatação
- Husky para hooks do git

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/LuisCarlos01/simulador-cofrinho.git
cd simulador-cofrinho
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
- Abra o arquivo `public/index.html` em seu navegador
- Ou use um servidor local como o Live Server do VS Code

## 🛠️ Scripts Disponíveis

- `npm run lint`: Executa o ESLint para verificar o código
- `npm run format`: Formata o código usando Prettier
- `npm run prepare`: Configura os hooks do Husky

## 🤝 Contribuindo

1. Faça o fork do projeto
2. Crie sua branch de feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Minha nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

Para mais detalhes, consulte nosso [Guia de Contribuição](docs/CONTRIBUTING.md).

## 📝 Convenções de Commit

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação
- `refactor`: Refatoração de código
- `test`: Testes
- `chore`: Manutenção

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🎉 Agradecimentos

- Equipe de desenvolvimento
- Contribuidores
- Comunidade open source

---

⭐️ Se este projeto te ajudou, considere dar uma estrela! 