import { View, Image,Text } from 'react-native';
import {styles} from './styles'

function Anuncio3(){
    let img = 'https://img.olhardigital.com.br/wp-content/uploads/2023/06/FzlH4HUXgAIu5Tv.jpg';

  return( 
     <View>
      <Image  source={{uri:img}}
          style={styles.imagem}
        />
        <Text style={styles.titulo}>CASA DA BARBIE R$5.000.000,00</Text>
        </View>
        
      )
}
export default Anuncio3;