// GRUPO 4 — Tela de Carrinho
// Responsabilidade: exibir itens, calcular total e finalizar pedido
//
// Props recebidas:
//   navegarPara(tela) → função para trocar de tela

import React from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import { useCarrinho } from '../../data/CarrinhoContext';

export default function CarrinhoScreen({ navegarPara }) {
  const { itens, removerItem, limparCarrinho, total } = useCarrinho();

  function handleFinalizar() {
    if (itens.length === 0) {
      Alert.alert('Carrinho vazio', 'Adicione itens antes de finalizar.');
      return;
    }
    Alert.alert('Pedido realizado!', `Total: R$ ${total.toFixed(2)}`, [
      { text: 'OK', onPress: limparCarrinho },
    ]);
  }

  if (itens.length === 0) {
    return (
      <View style={styles.tela}>
        <Text>Seu carrinho está vazio.</Text>
        <Button title="Ir ao Cardápio" onPress={() => navegarPara('Produtos')} />
      </View>
    );
  }

  return (
    <View style={styles.tela}>
      <FlatList
        data={itens}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text>Qtd: {item.quantidade}</Text>
              <Text>Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}</Text>
            </View>
            <Button title="Remover" color="red" onPress={() => removerItem(item.id)} />
          </View>
        )}
      />

      <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
      <Button title="Finalizar Pedido" onPress={handleFinalizar} />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 16,
    gap: 8,
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
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginVertical: 16,
  },
});
