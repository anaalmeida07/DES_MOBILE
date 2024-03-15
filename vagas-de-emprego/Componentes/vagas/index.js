import { View, Text, ScrollView, Image } from 'react-native'
import {styles} from './styles'

function Emprego(props){
  return(
    <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.vaga}>{props.titulo}</Text>
          <Text style={styles.textoVaga}>{props.salario}</Text>
           <Text style={styles.textoVaga}>{props.descricao}</Text>
           <Text style={styles.textoVaga}>{props.contato}</Text>
          
        </View>

        
    </View>
  )
}

export default Emprego