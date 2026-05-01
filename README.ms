 ## Biblioteca Pessoal

 ## Curso de Análise e Desenvolvimento de Sistemas

---

## Aluno

Leonardo Alexander Xu Bento

---

##  Descrição

Aplicação de console desenvolvida em **TypeScript** que simula um gerenciador de biblioteca pessoal. O sistema permite cadastrar livros, acompanhar o status de leitura, buscar por título ou autor e gerar estatísticas da coleção.

O projeto consolida os conceitos estudados nas primeiras seis aulas da disciplina: Git, Node.js, TypeScript, controle de fluxo, funções e arrays.

---

##  Funcionalidades

- Cadastro e remoção de livros com validação de dados;
- Exibição formatada de toda a biblioteca;
- Busca por título e listagem por autor;
- Controle de leitura — marcar livros como lidos e registrar avaliação (1 a 5);
- Estatísticas — total de livros, percentual lido, média de avaliações, livro mais bem avaliado e total de páginas lidas;
- Classificação por década** de publicação;

---


## Estrutura do Projeto

```
biblioteca-pessoal/
├── src/
│   └── index.ts       # código
├── dist/             
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md          # este arquivo
```

---

## Como executar

- Node.js 18 ou superior instalado
- npm (incluído com o Node.js)

-Clone o repositório e instale as dependências:

bash
git clone https://github.com/seu-usuario/biblioteca-pessoal.git
cd biblioteca-pessoal
npm install
```

### Execução

**Compilar e executar (modo padrão):**

```bash
npm run start
```

**Executar com dois terminais(node e cmd)**

Terminal 1 — compilação automática ao salvar:
```bash
npx tsc --watch
```

Terminal 2 — execução com watch do Node:
```bash
npm run dev
```

---

##  Exemplo de Saída

```
================================================
       BEM-VINDO À BIBLIOTECA PESSOAL
================================================

=== MINHA BIBLIOTECA ===

1. "O Hobbit" (1937) - J.R.R. Tolkien - 310 pag - LIDO (5/5)
2. "Clean Code" (2008) - Robert C. Martin - 464 pag - LIDO (4/5)
3. "1984" (1949) - George Orwell - 328 pag - PENDENTE
4. "Dom Casmurro" (1899) - Machado de Assis - 256 pag - LIDO (5/5)
5. "O Nome do Vento" (2007) - Patrick Rothfuss - 662 pag - PENDENTE

=== ESTATISTICAS ===

Total de livros: 5
Livros lidos: 3 (60.00%)
Media das avaliacoes: 4.67
Livro melhor avaliado: O Hobbit
Total de paginas lidas: 1030

=== POR DECADA ===

1890s: Dom Casmurro
1930s: O Hobbit
1940s: 1984
2000s: Clean Code, O Nome do Vento
```

---

##  Conceitos Aplicados

| Aula  Conceito  Aplicação no Projeto 
|--------------------------------------
| 01 - Git e GitHub - Commits por etapa, push para repositório remoto;
| 02 - Node.js e npm - `package.json`, scripts, execução via terminal;
| 03 - TypeScript - Tipagem explícita, `const`/`let`, `tsconfig.json`;
| 04 - Controle de fluxo - `if/else` nas validações e classificações;
| 05 - Funções - Lógica decomosta em funções tipadas e reutilizáveis;
| 06 - Arrays - `map`, `filter`, `reduce` e `forEach` nas operações;

---
