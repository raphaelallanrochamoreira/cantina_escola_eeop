// GRUPO 5 — Tela de Perfil
// Responsabilidade: exibir dados do usuário e histórico de pedidos
//
// Props recebidas:
//   navegarPara(tela) → função para trocar de tela

import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { usuario, historicoPedidos } from '../../data/mock';

export default function PerfilScreen({ navegarPara }) {
  return (
    <View style={styles.tela}>

      {/* Dados do usuário */}
      <Text style={styles.titulo}>{usuario.nome}</Text>
      <Text>E-mail: {usuario.email}</Text>
      <Text>Turma: {usuario.turma}</Text>

      {/* Histórico */}
      <Text style={styles.secao}>Histórico de Pedidos:</Text>

      <FlatList
        data={historicoPedidos}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.pedido}>
            <Text style={styles.pedidoId}>Pedido #{item.id} — {item.data}</Text>
            {item.itens.map((i, index) => (
              <Text key={index}>  • {i.nome} x{i.quantidade}</Text>
            ))}
            <Text style={styles.pedidoTotal}>Total: R$ {item.total.toFixed(2)}</Text>
          </View>
        )}
      />

      <Button title="Sair" color="red" onPress={() => navegarPara('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 16,
    gap: 4,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  secao: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  pedido: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  pedidoId: {
    fontWeight: '600',
    marginBottom: 4,
  },
  pedidoTotal: {
    fontWeight: 'bold',
    marginTop: 4,
  },
});
