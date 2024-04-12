import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

function Banco() {
  const [valor, setValor] = useState('');
  const [moedaOrigem, setMoedaOrigem] = useState('dolar');
  const [moedaDestino, setMoedaDestino] = useState('real');
  const [exibirDados, setExibirDados] = useState('');

  const taxaConversao = {
    dolar: { real: 5.06, euro: 0.93 },
    real: { dolar: 0.20, euro: 0.18 },
    euro: { dolar: 1.07, real: 5.43 }
  };

  const converterMoeda = () => {
    const valorFloat = parseFloat(valor.replace(',', '.'));
    let valorConvertido;

    if (moedaOrigem === moedaDestino) {
      valorConvertido = valorFloat;
    } else {
      valorConvertido = valorFloat * taxaConversao[moedaOrigem][moedaDestino];
    }

    const resultadoFormatado = 'Valor: ' + valor + '\n' +
                               'DE: ' + moedaOrigem.toUpperCase() + '\n' +
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
      <View style={styles.inputContainer}>
        <Text style={styles.label}>DE:</Text>
        <Picker
          style={styles.input}
          selectedValue={moedaOrigem}
          onValueChange={(itemValue, itemIndex) => setMoedaOrigem(itemValue)}>
          <Picker.Item key={1} value="real" label="REAL" />
          <Picker.Item key={2} value="dolar" label="DOLAR" />
          <Picker.Item key={3} value="euro" label="EURO" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>PARA:</Text>
        <Picker
          style={styles.input}
          selectedValue={moedaDestino}
          onValueChange={(itemValue, itemIndex) => setMoedaDestino(itemValue)}>
          <Picker.Item key={1} value="real" label="REAL" />
          <Picker.Item key={2} value="dolar" label="DOLAR" />
          <Picker.Item key={3} value="euro" label="EURO" />
        </Picker>
      </View>
      
      <Button style={styles.confirmar} title="CONFIRMAR" onPress={converterMoeda} />
      <View style={styles.exibirDadosContainer}>
        <Text style={styles.exibirDados}>{exibirDados}</Text>
      </View>
    </View>
  );
}

export default Banco;
