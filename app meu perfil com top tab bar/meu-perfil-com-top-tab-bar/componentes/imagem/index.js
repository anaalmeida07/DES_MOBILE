import { View, Image } from 'react-native';
import {styles} from './styles'

function Imagem(){
    let img = 'https://avatars.githubusercontent.com/u/144036501?v=4';

  return( 
     <View>
      <Image  source={{uri:img}}
          style={styles.imagem}
        />
        </View>
        
      )
}
export default Imagem;


