import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { styles } from './styles'; // Importe os estilos

import DadosPessoaisScreen from './componentes/DadosPessoais/index';
import ExperienciaScreen from './componentes/experiencia/index';
import FormacaoScreen from './componentes/Formacao/index';
import ProjetosScreen from './componentes/projetos/index';
import ImagemScreen from './componentes/imagem/index';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: styles.tabBar, // Aplicando o estilo da barra de guias
          labelStyle: styles.tabItem, // Aplicando o estilo de cada aba
        }}
      >
        <Tab.Screen name="Dados" component={DadosPessoaisScreen} />
        <Tab.Screen name="Experiência" component={ExperienciaScreen} />
        <Tab.Screen name="Formação" component={FormacaoScreen} />
        <Tab.Screen name="Projetos" component={ProjetosScreen} />
        <Tab.Screen name="Imagem" component={ImagemScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
