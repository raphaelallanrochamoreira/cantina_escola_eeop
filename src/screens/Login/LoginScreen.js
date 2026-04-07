// GRUPO 1 — Tela de Login
// Responsabilidade: validar e-mail e senha e navegar para o app
//
// Props recebidas:
//   navegarPara(tela) → função para trocar de tela

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { usuario } from '../../data/mock';

export default function LoginScreen({ navegarPara }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin() {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (email === usuario.email && senha === '1234') {
      navegarPara('Home');
    } else {
      Alert.alert('Erro', 'E-mail ou senha inválidos.\nDica: joao@escola.com / 1234');
    }
  }

  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Cantina Escolar</Text>

      <Text>E-mail:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="joao@escola.com"
      />

      <Text>Senha:</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholder="1234"
      />

      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    gap: 8,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    marginBottom: 8,
  },
});
