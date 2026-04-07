// Dados compartilhados entre todos os grupos
// NÃO alterar a estrutura deste arquivo

export const usuario = {
  id: 1,
  nome: 'João Silva',
  email: 'joao@escola.com',
  turma: '3º Informática',
};

export const produtos = [
  { id: 1,  nome: 'X-Burguer',       preco: 18.90, categoria: 'Lanches'  },
  { id: 2,  nome: 'X-Frango',        preco: 16.50, categoria: 'Lanches'  },
  { id: 3,  nome: 'Hot Dog',         preco: 12.00, categoria: 'Lanches'  },
  { id: 4,  nome: 'Coca-Cola 350ml', preco:  6.00, categoria: 'Bebidas'  },
  { id: 5,  nome: 'Suco de Laranja', preco:  7.50, categoria: 'Bebidas'  },
  { id: 6,  nome: 'Água 500ml',      preco:  3.00, categoria: 'Bebidas'  },
  { id: 7,  nome: 'Coxinha',         preco:  5.00, categoria: 'Salgados' },
  { id: 8,  nome: 'Enroladinho',     preco:  4.50, categoria: 'Salgados' },
  { id: 9,  nome: 'Brownie',         preco:  6.50, categoria: 'Doces'    },
  { id: 10, nome: 'Brigadeiro',      preco:  3.00, categoria: 'Doces'    },
];

export const historicoPedidos = [
  {
    id: 101,
    data: '05/04/2025',
    itens: [
      { nome: 'X-Burguer',     quantidade: 1, preco: 18.90 },
      { nome: 'Coca-Cola',     quantidade: 1, preco:  6.00 },
    ],
    total: 24.90,
  },
  {
    id: 102,
    data: '03/04/2025',
    itens: [
      { nome: 'Coxinha',        quantidade: 2, preco: 5.00 },
      { nome: 'Suco de Laranja',quantidade: 1, preco: 7.50 },
    ],
    total: 17.50,
  },
];
