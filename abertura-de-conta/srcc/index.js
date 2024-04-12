import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

function Banco() {
  const [idade, setIdade] = useState('');
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState(0);
  const [status, setStatus] = useState(false);
  const [escolaridade, setEscolaridade] = useState(1);
  const [sexo, setSexo] = useState(1);
  const [exibirDados, setExibirDados] = useState('');

  const atualizarExibirDados = () => {
    setExibirDados(
      'Nome: ' + nome + '\n' +
      'Idade: ' + idade + '\n' +
      'Sexo: ' + (sexo === 1 ? 'Feminino' : 'Masculino') + '\n' +
      'Escolaridade: ' + escolaridade + '\n' +
      'Limite: ' + valor.toFixed(0) + '\n' +
      'Nacionalidade: ' + (status ? 'Brasileiro' : 'Estrangeiro')
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ABERTURA DE CONTA </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>NOME:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNome}
          value={nome}
          placeholder="Digite seu nome"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>IDADE:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setIdade}
          value={idade}
          placeholder="Digite sua idade"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>SEXO:</Text>
        <Picker
          style={styles.input}
          selectedValue={sexo}
          onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>
          <Picker.Item key={1} value={1} label="FEMININO" />
          <Picker.Item key={2} value={2} label="MASCULINO" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>ESCOLARIDADE:</Text>
        <Picker
          style={styles.input}
          selectedValue={escolaridade}
          onValueChange={(itemValue, itemIndex) => setEscolaridade(itemValue)}>
          <Picker.Item key={1} value={1} label="Ensino Médio Completo" />
          <Picker.Item key={2} value={2} label="Ensino Médio Incompleto" />
          <Picker.Item key={3} value={3} label="Ensino Superior Completo" />
          <Picker.Item key={4} value={4} label="Ensino Superior Incompleto" />
          <Picker.Item key={5} value={5} label="Pós-graduação" />
          <Picker.Item key={6} value={6} label="Mestrado" />
          <Picker.Item key={7} value={7} label="Doutorado" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>LIMITE:</Text>
        <Slider
          style={styles.slider}
          minimumValue={500}
          maximumValue={5000}
          onValueChange={valorSelecionado => setValor(valorSelecionado)}
          value={valor}
        />
        <Text style={styles.valor}>R$ {valor.toFixed(0)}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>NACIONALIDADE:</Text>
        <Switch
          value={status}
          onValueChange={valorSwitch => setStatus(valorSwitch)}
        />
        <Text style={status ? styles.nacionalidadeBrasileiro : styles.nacionalidadeEstrangeiro}>
          {status ? "Brasileiro" : "Estrangeiro"}
        </Text>
      </View>
      <Button style={styles.confirmar} title="CONFIRMAR" onPress={atualizarExibirDados} />
      <View style={styles.exibirDadosContainer}>
        <Text style={styles.exibirDados}>{exibirDados}</Text>
      </View>
    </View>
  );
}


export default Banco;
