import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { styles } from './styles';
import Job from '.././programador/index.js';
import { useNavigation } from '@react-navigation/native';

function Jobs() {
 
  return (
    <View style={styles.tela}>
  
      <ScrollView showsVerticalScrollIndicator={false}> 
        <Job foto='https://s1.static.brasilescola.uol.com.br/vestibular/2023/09/programador.jpg' titulo='PROGRAMADOR' linha1 = ' Salário = R$6.000' linha2= 'Estamos em busca de um programador apaixonado por tecnologia e inovação para se juntar à nossa equipe. O candidato ideal será responsável por desenvolver e implementar software de alta qualidade, participar no ciclo de vida completo do desenvolvimento de software, desde a concepção até a entrega. Além disso, esperamos que o candidato esteja sempre atualizado com as últimas tendências e tecnologias do mercado, contribuindo para a melhoria contínua de nossos produtos e processos. Se você é proativo, colaborativo e está pronto para enfrentar desafios emocionantes, esta pode ser a oportunidade perfeita para você!'/>
     
      </ScrollView>
    </View>
  );
}

export default Jobs;
