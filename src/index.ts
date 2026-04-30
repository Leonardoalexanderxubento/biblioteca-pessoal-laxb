// ============ DADOS (Arrays Paralelos) ============
const titulos: string[] = [];
const autores: string[] = [];
const anos: number[] = [];
const paginas: number[] = [];
const lido: boolean[] = [];
const avaliacoes: number[] = [];

// ============ POPULANDO COM DADOS INICIAIS ============
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

// ============ FUNÇÕES ============

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

    // Cria a string de status (LIDO ou PENDENTE)
    let status = estaLido ? `LIDO (${avaliacao}/5)` : 'PENDENTE';

    // Template literal (com ${...}) para formatar a saída
    // Índice começa em 0, mas exibimos como 1, 2, 3...
    console.log(
      `${indice + 1}. "${titulo}" (${ano}) - ${autor} - ${pagina} pag - ${status}`
    );
  });
}

// ============ EXECUTAR ============
exibirBiblioteca();
