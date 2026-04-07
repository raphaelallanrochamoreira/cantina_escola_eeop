// GRUPO 2 — Tela Home
// Responsabilidade: exibir boas-vindas e destaques do cardápio
//
// Props recebidas:
//   navegarPara(tela) → função para trocar de tela

import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { usuario, produtos } from '../../data/mock';

const destaques = produtos.slice(0, 4);

export default function HomeScreen({ navegarPara }) {
  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Olá, {usuario.nome}!</Text>
      <Text style={styles.subtitulo}>Turma: {usuario.turma}</Text>

      <Text style={styles.secao}>Destaques do dia:</Text>

      <FlatList
        data={destaques}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome}</Text>
            <Text>R$ {item.preco.toFixed(2)}</Text>
          </View>
        )}
      />

      <Button
        title="Ver cardápio completo"
        onPress={() => navegarPara('Produtos')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 16,
    gap: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitulo: {
    color: '#666',
    marginBottom: 8,
  },
  secao: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});
