import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { styles } from './styles';
import Anuncio from '../../components/anuncio';
import { useNavigation } from '@react-navigation/native';

function Anuncios() {
  const navigation = useNavigation();
 
  function irVerMais() {
    navigation.navigate('Vermais');
  }

  return (
    <View style={styles.tela}>
  
      <ScrollView showsVerticalScrollIndicator={false}> 
        <Anuncio foto='https://s1.static.brasilescola.uol.com.br/vestibular/2023/09/programador.jpg' titulo='PROGRAMADOR'/>
        <Button
          title="Ver Mais"
          onPress={irVerMais}
          style={styles.botaoVerMais}
        />

        <Anuncio foto='https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/846843234ManualQATester.jpg=ws1280x960'  titulo='QA TESTER' />
        <Button
          title="Ver Mais"
          onPress={irVerMais}
          style={styles.botaoVerMais} // Adicione um estilo para o botão
        />

        <Anuncio foto='https://www.pentalog.com/wp-content/uploads/2017/06/scrum-master.png' titulo='SCRUM MASTER '  />
        <Button
          title="Ver Mais"
          onPress={irVerMais}
          style={styles.botaoVerMais} // Adicione um estilo para o botão
        />

        <Anuncio foto='https://www.findup.com.br/wp-content/uploads/2022/08/Prancheta-1-20.jpg' titulo='SUPORTE TÉCNICO' />
        <Button
          title="Ver Mais"
          onPress={irVerMais}
          style={styles.botaoVerMais} // Adicione um estilo para o botão
        />
      </ScrollView>
    </View>
  );
}

export default Anuncios;
