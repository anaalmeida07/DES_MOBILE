import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  useEffect(() => {
    const recuperarCepSalvo = async () => {
      const cepSalvo = await AsyncStorage.getItem('cepSalvo');
      if (cepSalvo) {
        consultaCep(cepSalvo);
      }
    };

    recuperarCepSalvo();
  }, []);

  const consultaCep = async (cepConsulta) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepConsulta}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setCep(data.cep);
        setLogradouro(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setEstado(data.uf);

        await AsyncStorage.setItem('cepSalvo', cepConsulta);
        Keyboard.dismiss();
      } else {
        alert('CEP não encontrado.');
      }
    } catch (error) {
      console.error('Erro ao consultar o CEP:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        placeholder="Digite o CEP"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.botao} onPress={() => consultaCep(cep)}>
        <Text style={{ color: '#FFF' }}>Consultar</Text>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>CEP:</Text>
        <Text>{cep}</Text>

        <Text style={styles.label}>Logradouro:</Text>
        <Text>{logradouro}</Text>

        <Text style={styles.label}>Bairro:</Text>
        <Text>{bairro}</Text>

        <Text style={styles.label}>Cidade:</Text>
        <Text>{cidade}</Text>

        <Text style={styles.label}>Estado:</Text>
        <Text>{estado}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  infoContainer: {
    marginTop: 20,
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
});
