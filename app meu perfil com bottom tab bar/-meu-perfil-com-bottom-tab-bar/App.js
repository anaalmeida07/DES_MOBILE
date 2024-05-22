import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DadosPessoaisScreen from './componentes/DadosPessoais/index' ;
import ExperienciaScreen from './componentes/experiencia/index';
import FormacaoScreen from './componentes/Formacao/index';
import ProjetosScreen from './componentes/projetos/index';
import ImagemScreen from './componentes/imagem/index';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dados Pessoais" component={DadosPessoaisScreen} />
        <Tab.Screen name="Experiência" component={ExperienciaScreen} />
        <Tab.Screen name="Formação" component={FormacaoScreen} />
        <Tab.Screen name="Projetos" component={ProjetosScreen} />
        <Tab.Screen name="Imagem" component={ImagemScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
