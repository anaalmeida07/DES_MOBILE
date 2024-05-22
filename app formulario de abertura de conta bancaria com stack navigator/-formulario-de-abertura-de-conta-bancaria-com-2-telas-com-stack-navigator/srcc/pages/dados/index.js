import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const ExibirDadosScreen = ({ route }) => {
  const { dados } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados Pessoais</Text>
      <View style={styles.dadosContainer}>
        <Text style={styles.dadosText}>{dados}</Text>
      </View>
    </View>
  );
};

export default ExibirDadosScreen;
