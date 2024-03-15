import { View, Image,Text } from 'react-native';
import {styles} from './styles'

function Anuncio2(){
    let img = 'https://conteudo.imguol.com.br/c/entretenimento/21/2021/01/13/the-one-e-anunciada-como-a-maior-mansao-do-mundo-e-podera-ser-a-mais-cara-ja-vendida-na-america-1610544079895_v2_4x3.jpg';

  return( 
     <View>
      <Image  source={{uri:img}}
          style={styles.imagem}
        />
        <Text style={styles.titulo}>MANSÃO - R$1.500.000,00 </Text>
        </View>
        
      )
}
export default Anuncio2;