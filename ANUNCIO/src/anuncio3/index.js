import { View, Image,Text } from 'react-native';
import {styles} from './styles'

function Anuncio3(){
    let img = 'https://www.aarquiteta.com.br/blog/wp-content/uploads/2023/12/milionario-faz-tour-mansao-futurista-surpreende01.jpg';

  return( 
     <View>
      <Image  source={{uri:img}}
          style={styles.imagem}
        />
        <Text style={styles.titulo}>MANSÃO R$1.800.000,00 </Text>
        </View>
        
      )
}
export default Anuncio3;