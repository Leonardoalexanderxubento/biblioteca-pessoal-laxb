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

// Executa a função para exibir a biblioteca no console
exibirBiblioteca();

/* FUNCIONALIDADES DINAMICAS:adicionar novos livros e remover existentes;
Manipular arrays com push() e splice()
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

// ============ TESTES ============
console.log('\n--- TESTE 1: Exibir biblioteca inicial ---');
exibirBiblioteca();

console.log('\n--- TESTE 2: Adicionar um novo livro ---');
adicionarLivro('A Revolução dos Bichos', 'George Orwell', 1945, 152);

console.log('\n--- TESTE 3: Exibir biblioteca com novo livro ---');
exibirBiblioteca();

console.log('\n--- TESTE 4: Remover um livro (índice 2) ---');
removerLivro(2);

console.log('\n--- TESTE 5: Exibir biblioteca após remoção ---');
exibirBiblioteca();