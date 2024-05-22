import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';

const Dolar = () => {
  const [valor, setValor] = useState('');
  const [exibirDados, setExibirDados] = useState('');

  const taxaConversao = 5.06; // Taxa de conversão de Real para Dólar

  const converterMoeda = () => {
    const valorFloat = parseFloat(valor.replace(',', '.'));
    const valorConvertido = valorFloat * taxaConversao;

    const resultadoFormatado = 'Valor: ' + valor + '\n' +
                               'Para: DÓLAR\n' +
                               'Valor Convertido: $' + valorConvertido.toFixed(2);

    setExibirDados(resultadoFormatado);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CONVERSOR DE MOEDAS </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>VALOR:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setValor}
          value={valor}
          placeholder="Digite o valor"
          keyboardType="numeric"
        />
      </View>
      <Button title="CONFIRMAR" onPress={converterMoeda} />
      <View style={styles.exibirDadosContainer}>
        <Text style={styles.exibirDados}>{exibirDados}</Text>
      </View>
    </View>
  );
}

export default Dolar;
