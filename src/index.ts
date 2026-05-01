// ETAPA 2

// Arrays para armazenar os dados dos livros
const titulos: string[] = [];
const autores: string[] = [];
const anos: number[] = [];
const paginas: number[] = [];
const lido: boolean[] = [];
const avaliacoes: number[] = [];

// Dados iniciais - usando push() para adicionar elementos aos arrays
titulos.push(
  'O Hobbit',
  'Clean Code',
  '1984',
  'Dom Casmurro',
  'O Nome do Vento',
);
autores.push(
  'J.R.R. Tolkien',
  'Robert C. Martin',
  'George Orwell',
  'Machado de Assis',
  'Patrick Rothfuss',
);
anos.push(1937, 2008, 1949, 1899, 2007);
paginas.push(310, 464, 328, 256, 662);
lido.push(true, true, false, true, false);
avaliacoes.push(5, 4, 0, 5, 0);

// Funções para manipular a biblioteca (adicionar, remover, marcar como lido, avaliar)

// Exibe todos os livros formatados
function exibirBiblioteca(): void {
  console.log('\n=== MINHA BIBLIOTECA ===\n');
  
  // forEach: itera cada elemento do array
  // (elemento, indice) => { código }
  titulos.forEach((titulo, indice) => {
    // Acessa todos os dados do livro pelo mesmo índice
    const autor = autores[indice];
    const ano = anos[indice];
    const pagina = paginas[indice];
    const estaLido = lido[indice];
    const avaliacao = avaliacoes[indice];

    // Cria a string de status (lido ou pendente)
    let status = estaLido ? `LIDO (${avaliacao}/5)` : 'PENDENTE';

    // Template literal (com ${...}) para formatar a saída
    // Índice começa em 0, mas exibimos como 1, 2, 3...
    console.log(
      `${indice + 1}. "${titulo}" (${ano}) - ${autor} - ${pagina} pag - ${status}`
    );
  });
}

// ETAPA 3

// Executa a função para exibir a biblioteca no console
exibirBiblioteca();

/* FUNCIONALIDADES DINAMICAS:adicionar novos livros e remover existentes;
Manipular arrays com push() e splice() (splice é usado para remover elementos);
Validação com if (ano > 0, páginas > 0)
Testes das funções                                                          */

function adicionarLivro(titulo: string, autor: string, ano: number, numPaginas: number): void {
  if (ano > 0 && numPaginas > 0 && titulo.trim() !== '' && autor.trim() !== '') {
    titulos.push(titulo);
    autores.push(autor);
    anos.push(ano);
    paginas.push(numPaginas);
    lido.push(false);
    avaliacoes.push(0);
    console.log(`✓ Livro "${titulo}" adicionado com sucesso!`);
  } else {
    console.log('❌ Dados inválidos. Certifique-se de que o título e autor não estão vazios, e que o ano e páginas são positivos.');
  }
}

// Remove um livro pelo índice
function removerLivro(indice: number): void {
  if (indice >= 0 && indice < titulos.length) {
    const tituloRemovido = titulos[indice];
    titulos.splice(indice, 1);
    autores.splice(indice, 1);
    anos.splice(indice, 1);
    paginas.splice(indice, 1);
    lido.splice(indice, 1);
    avaliacoes.splice(indice, 1);
    console.log(`✓ Livro "${tituloRemovido}" removido com sucesso!`);
  } else {
    console.log('❌ Índice inválido. O livro não existe na biblioteca.');
  }
}

// ETAPA 4

// Retorna os índices dos livros que contém o termo no título

function buscarPorTitulo(termo: string): number[] {
  const termoMinusculo = termo.toLowerCase();
  const indices: number[] = [];

  titulos.forEach((titulo, indice) => {
    if (titulo.toLowerCase().includes(termoMinusculo)) {
      indices.push(indice);
    }
  });

  return indices;
}

// Retorna os títulos dos livros de um autor específico

function listarPorAutor(autor: string) : string[] {
  const autorMinusculo = autor.toLowerCase();
  
  return autores
    .map((_, indice) => indice)
    .filter((indice) => autores[indice]!.toLowerCase().includes(autorMinusculo))
    .map((indice) => titulos[indice]!);
}

// ETAPA 5

// Status de Leitura: Marca um livro como lido e registra a avaliação (1 a 5)
function marcarComoLido(indice: number, avaliacao: number): void {
  if (indice < 0 || indice >= titulos.length) {
    console.log('❌ Índice inválido.');
    return;
  }
  // Valida que a avaliação está entre 1 e 5
  if (avaliacao < 1 || avaliacao > 5) {
    console.log('❌ Avaliação inválida. Informe um valor entre 1 e 5.');
    return;
  }
  lido[indice] = true;
  avaliacoes[indice] = avaliacao;
  console.log(`✓ "${titulos[indice]}" marcado como lido com avaliação ${avaliacao}/5!`);
}

// Retorna os títulos de todos os livros lidos
function listarLidos(): string[] {
  return titulos.filter((_, indice) => lido[indice]);
}

// Retorna os títulos de todos os livros ainda não lidos
function listarPendentes(): string[] {
  return titulos.filter((_, indice) => !lido[indice]);
}

// ETAPA 6

// Retorna o número total de livros na biblioteca
function totalLivros(): number {
  return titulos.length;
}

// Retorna quantos livros foram lidos
function totalLidos(): number {
  // filter cria um novo array só com os lidos; length conta os elementos
  return lido.filter((estaLido) => estaLido).length;
}

// Retorna o percentual de livros lidos (ex: 60.00)
function percentualLidos(): number {
  if (totalLivros() === 0) return 0;
  return (totalLidos() / totalLivros()) * 100;
}

// Retorna a média das avaliações apenas dos livros lidos
function mediaAvaliacoes(): number {
  // filter: pega só os índices dos livros lidos
  const indicesLidos = avaliacoes
    .map((_, i) => i)
    .filter((i) => lido[i]);

    if (indicesLidos.length === 0) return 0;
    const somaAvaliacoes = indicesLidos.reduce(
    (soma, i) => soma + avaliacoes[i]!,
    0   // valor inicial do acumulador
  );

    return somaAvaliacoes / indicesLidos.length;
}

// Retorna o título do livro com maior avaliação
function livroMaiorAvaliacao(): string {
  if (titulos.length === 0) return 'Nenhum livro cadastrado';

    // reduce compara avaliações e guarda o índice do maior
  const indiceMelhor = avaliacoes.reduce((indiceMelhor, avaliacaoAtual, indiceAtual) => {
    return avaliacaoAtual > avaliacoes[indiceMelhor]! ? indiceAtual : indiceMelhor;
  }, 0);
 
  return titulos[indiceMelhor]!;
}

// Retorna o total de páginas dos livros lidos
function totalPaginasLidas(): number {
  return paginas
    .filter((_, indice) => lido[indice])          // mantém só as páginas dos livros lidos
    .reduce((soma, paginasDoLivro) => soma + paginasDoLivro, 0); // soma todas
}

// ETAPA 7 

// Agrupa e exibe os livros por década de publicação
function exibirPorDecada(): void {
  console.log('\n=== POR DECADA ===\n');
 
  // Calcula a década de cada livro: Math.floor(1937 / 10) * 10 = 1930
  const decadas = anos.map((ano) => Math.floor(ano / 10) * 10);
 
  // Cria um array com as décadas únicas, ordenadas
  // Set elimina duplicatas; Array.from converte de volta para array
  const decadasUnicas = Array.from(new Set(decadas)).sort((a, b) => a - b);
 
  // Para cada década, filtra e exibe os livros correspondentes
  decadasUnicas.forEach((decada) => {
    // filter: retorna os títulos cujo índice pertence a esta década
    const livrosDaDecada = titulos.filter((_, indice) => decadas[indice] === decada);
    console.log(`${decada}s: ${livrosDaDecada.join(', ')}`);
  });
}

// ETAPA 8

console.log('================================================');
console.log('       BEM-VINDO À BIBLIOTECA PESSOAL');
console.log('================================================');
 
// --- Exibição inicial ---
exibirBiblioteca();
 
// --- Cadastro ---
console.log('\n=== ADICIONANDO LIVROS ===\n');
adicionarLivro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954, 1178);
adicionarLivro('', 'Autor Inválido', 2020, 200); // deve mostrar erro
 
// --- Remoção ---
console.log('\n=== REMOVENDO LIVRO ===\n');
removerLivro(5); // remove "O Senhor dos Anéis" (índice 5)
removerLivro(99); // índice inválido — deve mostrar erro
 
// --- Marcar como lido ---
console.log('\n=== MARCANDO COMO LIDO ===\n');
marcarComoLido(2, 5); // marca "1984" com nota 5
marcarComoLido(2, 9); // avaliação inválida — deve mostrar erro
 
// --- Exibição após alterações ---
exibirBiblioteca();
 
// --- Busca e filtros ---
console.log('\n=== BUSCA POR TITULO: "o" ===\n');
const resultadosBusca = buscarPorTitulo('o');
resultadosBusca.forEach((i) => console.log(`  - "${titulos[i]}" (índice ${i})`));
 
console.log('\n=== LIVROS DE TOLKIEN ===\n');
const tolkien = listarPorAutor('tolkien');
tolkien.forEach((t) => console.log(`  - ${t}`));
 
// --- Status de leitura ---
console.log('\n=== LIVROS LIDOS ===\n');
listarLidos().forEach((t) => console.log(`  ✓ ${t}`));
 
console.log('\n=== LIVROS PENDENTES ===\n');
listarPendentes().forEach((t) => console.log(`  • ${t}`));
 
// --- Estatísticas ---
console.log('\n=== ESTATISTICAS ===\n');
console.log(`Total de livros: ${totalLivros()}`);
console.log(`Livros lidos: ${totalLidos()} (${percentualLidos().toFixed(2)}%)`);
console.log(`Media das avaliacoes: ${mediaAvaliacoes().toFixed(2)}`);
console.log(`Livro melhor avaliado: ${livroMaiorAvaliacao()}`);
console.log(`Total de paginas lidas: ${totalPaginasLidas()}`);
 
// --- Por década ---
exibirPorDecada();
 