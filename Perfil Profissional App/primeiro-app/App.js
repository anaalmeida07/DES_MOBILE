import { View, Text, Image } from 'react-native';

import Imagem from './src/imagem/index'
import Dado from './src/dado/index'
import Experiencia from './src/experiencia/index'
import Formacao from './src/formacao/index'
import Projeto from './src/projeto/index'

function App(){


  return( 
     <View>
     
      <Imagem/>
      <Dado/>
      <Experiencia/>
      <Formacao/>
      <Projeto/>
    </View>
  )
}


export default App;
