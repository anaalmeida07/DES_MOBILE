
import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'
import {styles } from './styleDI';

function Contagem() {
  const [valorContagem, definirContagem] = useState(0);

  function aumentarDiminuir(acao) {
    if (acao === '+')
      definirContagem(valorContagem + 1);
    else if (valorContagem > 0)
      definirContagem(valorContagem - 1);
  }

  return (
    <View style={styles.area}>
      <Text style={styles.titulo}>CONTADOR DE PESSOAS</Text>
      <Text style={styles.contador}>{valorContagem}</Text>
      <Button title='+' color='#6cd453' onPress={() => aumentarDiminuir('+')} />
      <Button title='-' color='#f54922' onPress={() => aumentarDiminuir('-')} />
    </View>
  );
}

export default Contagem;
