import { View, Text } from 'react-native';
import {styles} from './styles'

function Dado(){
  
  return(
     <View>
     
      <Text style={styles.textoPrincipal}>Dados pessoais: </Text>
      <Text  style={styles.nome}>Ana Carla Garcia de Almeida </Text>
      <Text  style={styles.idade}>19 anos </Text>
      </View>
        
      )
}

export default Dado;


