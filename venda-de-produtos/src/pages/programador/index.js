import { View, Text, ScrollView, Image } from 'react-native'
import {styles} from './styles'


function Job(props){
  return(
    <View style={styles.container}>
        <View style={styles.box}>
          <Image 
            source={{uri: props.foto}}
            style={styles.imagem}
          />
          <Text style={styles.titulo}>{props.titulo}</Text>
          <Text style={styles.texto}>{props.linha1}</Text>
          <Text style={styles.texto}>{props.linha2}</Text>
        </View>
    </View>
  )
}

export default Job