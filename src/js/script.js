class Cofrinho {
  constructor() {
    this.valores = [];
    this.filtroAtual = 'todos';
    this.inicializar();
  }

  inicializar() {
    this.carregarDoLocalStorage();
    this.configurarEventos();
    this.atualizarInterface();
  }

  configurarEventos() {
    // Eventos dos botões de valores
    document.querySelectorAll('button[data-valor]').forEach((botao) => {
      botao.addEventListener('click', () => {
        const valor = parseFloat(botao.dataset.valor);
        const tipo = botao.dataset.tipo;
        this.adicionarValor(valor, tipo);
      });
    });

    // Eventos dos botões de filtro
    document.querySelectorAll('button[data-filtro]').forEach((botao) => {
      botao.addEventListener('click', () => {
        this.filtroAtual = botao.dataset.filtro;
        this.atualizarBotoesFiltro();
        this.atualizarLista();
      });
    });

    // Evento do botão esvaziar
    document.getElementById('esvaziar').addEventListener('click', () => {
      this.esvaziarCofrinho();
    });
  }

  adicionarValor(valor, tipo) {
    this.valores.push({ valor, tipo });
    this.salvarNoLocalStorage();
    this.atualizarInterface();
    this.animarAdicao(tipo);
  }

  esvaziarCofrinho() {
    this.valores = [];
    this.salvarNoLocalStorage();
    this.atualizarInterface();
  }

  calcularTotal() {
    return this.valores.reduce((total, item) => total + item.valor, 0);
  }

  agruparValores() {
    const grupos = {};
    this.valores.forEach((item) => {
      const chave = `${item.valor}`;
      grupos[chave] = grupos[chave] || {
        valor: item.valor,
        tipo: item.tipo,
        quantidade: 0,
      };
      grupos[chave].quantidade++;
    });
    return Object.values(grupos);
  }

  atualizarInterface() {
    this.atualizarTotal();
    this.atualizarLista();
  }

  atualizarTotal() {
    const total = this.calcularTotal();
    document.getElementById('total-valor').textContent =
      `R$ ${total.toFixed(2).replace('.', ',')}`;
  }

  atualizarLista() {
    const listaElement = document.getElementById('lista-itens');
    listaElement.innerHTML = '';

    const valoresFiltrados = this.filtrarValores();
    const valoresAgrupados = this.agruparValores(valoresFiltrados);

    valoresAgrupados.forEach((grupo) => {
      if (this.filtroAtual === 'todos' || this.filtroAtual === grupo.tipo) {
        const li = document.createElement('li');
        li.textContent =
          `${grupo.quantidade}x R$ ${grupo.valor.toFixed(2).replace('.', ',')} ` +
          `(${grupo.tipo === 'moeda' ? 'Moeda' : 'Cédula'})`;
        listaElement.appendChild(li);
      }
    });
  }

  atualizarBotoesFiltro() {
    document.querySelectorAll('button[data-filtro]').forEach((botao) => {
      botao.classList.toggle(
        'ativo',
        botao.dataset.filtro === this.filtroAtual
      );
    });
  }

  filtrarValores() {
    if (this.filtroAtual === 'todos') return this.valores;
    return this.valores.filter((item) => item.tipo === this.filtroAtual);
  }

  animarAdicao(tipo) {
    // Criar elemento de animação
    const animacao = document.createElement('div');
    animacao.className = `animacao-${tipo}`;
    document.body.appendChild(animacao);

    // Remover após a animação
    setTimeout(() => {
      animacao.remove();
    }, 1000);
  }

  salvarNoLocalStorage() {
    localStorage.setItem('cofrinho-valores', JSON.stringify(this.valores));
  }

  carregarDoLocalStorage() {
    const dados = localStorage.getItem('cofrinho-valores');
    if (dados) {
      this.valores = JSON.parse(dados);
    }
  }
}

// Inicializar o cofrinho quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  new Cofrinho();
});
