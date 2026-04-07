// App.js — Ponto de entrada
// NÃO alterar — definido pelo professor
//
// A navegação aqui é simples: um useState controla qual tela está visível.
// Cada tela recebe a função navegarPara(tela) como prop.

import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { CarrinhoProvider, useCarrinho } from './src/data/CarrinhoContext';

import LoginScreen    from './src/screens/Login/LoginScreen';
import HomeScreen     from './src/screens/Home/HomeScreen';
import ProdutosScreen from './src/screens/Produtos/ProdutosScreen';
import CarrinhoScreen from './src/screens/Carrinho/CarrinhoScreen';
import PerfilScreen   from './src/screens/Perfil/PerfilScreen';

// Abas visíveis após o login
const ABAS = ['Home', 'Produtos', 'Carrinho', 'Perfil'];

function BarraDeAbas({ telaAtual, navegarPara }) {
  const { quantidade } = useCarrinho();

  return (
    <View style={styles.barra}>
      {ABAS.map(aba => (
        <TouchableOpacity
          key={aba}
          style={styles.aba}
          onPress={() => navegarPara(aba)}
        >
          <Text style={telaAtual === aba ? styles.abaAtiva : styles.abaTexto}>
            {aba}{aba === 'Carrinho' && quantidade > 0 ? ` (${quantidade})` : ''}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function AppConteudo() {
  const [telaAtual, setTelaAtual] = useState('Login');

  function navegarPara(tela) {
    setTelaAtual(tela);
  }

  const mostrarBarra = telaAtual !== 'Login';

  return (
    <SafeAreaView style={styles.container}>
      {/* Renderiza a tela atual */}
      <View style={styles.conteudo}>
        {telaAtual === 'Login'    && <LoginScreen    navegarPara={navegarPara} />}
        {telaAtual === 'Home'     && <HomeScreen     navegarPara={navegarPara} />}
        {telaAtual === 'Produtos' && <ProdutosScreen navegarPara={navegarPara} />}
        {telaAtual === 'Carrinho' && <CarrinhoScreen navegarPara={navegarPara} />}
        {telaAtual === 'Perfil'   && <PerfilScreen   navegarPara={navegarPara} />}
      </View>

      {/* Barra de abas — só aparece depois do login */}
      {mostrarBarra && (
        <BarraDeAbas telaAtual={telaAtual} navegarPara={navegarPara} />
      )}
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <CarrinhoProvider>
      <AppConteudo />
    </CarrinhoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  conteudo: {
    flex: 1,
  },
  barra: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  aba: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  abaTexto: {
    color: '#999',
    fontSize: 13,
  },
  abaAtiva: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
