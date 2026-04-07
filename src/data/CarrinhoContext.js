// Gerencia o estado do carrinho para todas as telas
// NÃO alterar — definido pelo professor

import React, { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

  function adicionarItem(produto) {
    setItens(prev => {
      const jaExiste = prev.find(i => i.id === produto.id);
      if (jaExiste) {
        return prev.map(i =>
          i.id === produto.id ? { ...i, quantidade: i.quantidade + 1 } : i
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  }

  function removerItem(produtoId) {
    setItens(prev => prev.filter(i => i.id !== produtoId));
  }

  function limparCarrinho() {
    setItens([]);
  }

  const total = itens.reduce((acc, i) => acc + i.preco * i.quantidade, 0);
  const quantidade = itens.reduce((acc, i) => acc + i.quantidade, 0);

  return (
    <CarrinhoContext.Provider
      value={{ itens, adicionarItem, removerItem, limparCarrinho, total, quantidade }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
