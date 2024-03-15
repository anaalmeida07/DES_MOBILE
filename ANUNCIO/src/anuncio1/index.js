import { View, Image,Text } from 'react-native';
import {styles} from './styles'

function Anuncio1(){
    let img = 'https://fotos.vivadecora.com.br/decoracao-fachada-de-casa-casa-sao-jose-design-de-interiores-iara-kilaris-iarakilaris-292434-square_cover_xsmall.jpg';

  return( 
     <View>
      <Image  source={{uri:img}}
          style={styles.imagem}
        />
        <Text style={styles.titulo}>MANSÃO R$1.000.000,00</Text>
        </View>
        
      )
}
export default Anuncio1;