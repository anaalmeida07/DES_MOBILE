import { View, Text, ScrollView } from 'react-native'
import {styles} from './styles'
import Emprego from './styles'

function Empregos(){
  return(
    <View style={styles.tela}>

      <Text style={styles.titulo}>IMOBILIÁRIA</Text>

      <View>      
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Emprego titulo='MANSÃO DO NEYMAR JR' linha1='R$ 20.000.000,00'/>

          <Emprego foto='https://conteudo.imguol.com.br/c/entretenimento/21/2021/01/13/the-one-e-anunciada-como-a-maior-mansao-do-mundo-e-podera-ser-a-mais-cara-ja-vendida-na-america-1610544079895_v2_4x3.jpg'  titulo='MANSÃO DO CR7' linha1='R$ 50.000.000,00'/>

          <Emprego foto='https://www.aarquiteta.com.br/blog/wp-content/uploads/2023/12/milionario-faz-tour-mansao-futurista-surpreende01.jpg' titulo='MANSÃO ' linha1='3.000.000,00' />

          <Emprego foto='https://img.olhardigital.com.br/wp-content/uploads/2023/06/FzlH4HUXgAIu5Tv.jpg' titulo='CASA DA BARBIE' linha1='120.000.000,00' />
        </ScrollView>
      </View>
    </View>
  )
}

export default Empregos