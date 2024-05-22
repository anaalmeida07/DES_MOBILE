import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';

const Banco = () => {
  const [valor, setValor] = useState('');
  const [moedaDestino, setMoedaDestino] = useState('dolar');
  const [exibirDados, setExibirDados] = useState('');

  const taxaConversao = {
    dolar: 5.06,
    euro: 0.93,
    bitcoin: 0.000021
  };

  const converterMoeda = () => {
    const valorFloat = parseFloat(valor.replace(',', '.'));
    const valorConvertido = valorFloat * taxaConversao[moedaDestino];

    const resultadoFormatado = 'Valor: ' + valor + '\n' +
                               'Para: ' + moedaDestino.toUpperCase() + '\n' +
                               'Valor Convertido: ' + valorConvertido.toFixed(2).replace('.', ',');

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
      <Button title="Real -> Dólar" onPress={() => setMoedaDestino('dolar')} />
      <Button title="Real -> Euro" onPress={() => setMoedaDestino('euro')} />
      <Button title="Real -> BitCoin" onPress={() => setMoedaDestino('bitcoin')} />
      <Button title="CONFIRMAR" onPress={converterMoeda} />
      <View style={styles.exibirDadosContainer}>
        <Text style={styles.exibirDados}>{exibirDados}</Text>
      </View>
    </View>
  );
}

export default Banco;
