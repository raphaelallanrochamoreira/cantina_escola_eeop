// GRUPO 3 — Tela de Produtos (Cardápio)
// Responsabilidade: listar produtos, filtrar por categoria e adicionar ao carrinho
//
// Props recebidas:
//   navegarPara(tela) → função para trocar de tela

import React, { useState } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import { produtos } from '../../data/mock';
import { useCarrinho } from '../../data/CarrinhoContext';

const categorias = ['Todos', 'Lanches', 'Bebidas', 'Salgados', 'Doces'];

export default function ProdutosScreen({ navegarPara }) {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const { adicionarItem } = useCarrinho();

  const lista = categoriaAtiva === 'Todos'
    ? produtos
    : produtos.filter(p => p.categoria === categoriaAtiva);

  function handleAdicionar(produto) {
    adicionarItem(produto);
    Alert.alert('Adicionado!', `${produto.nome} foi ao carrinho.`);
  }

  return (
    <View style={styles.tela}>

      {/* Filtro de categorias */}
      <View style={styles.filtros}>
        {categorias.map(cat => (
          <Button
            key={cat}
            title={cat}
            onPress={() => setCategoriaAtiva(cat)}
            color={categoriaAtiva === cat ? '#000' : '#999'}
          />
        ))}
      </View>

      {/* Lista de produtos */}
      <FlatList
        data={lista}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.categoria}>{item.categoria}</Text>
              <Text>R$ {item.preco.toFixed(2)}</Text>
            </View>
            <Button title="+ Adicionar" onPress={() => handleAdicionar(item)} />
          </View>
        )}
      />

      <Button title="Ver Carrinho" onPress={() => navegarPara('Carrinho')} />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 16,
  },
  filtros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginBottom: 12,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  nome: {
    fontSize: 15,
    fontWeight: '600',
  },
  categoria: {
    color: '#888',
    fontSize: 12,
  },
});
