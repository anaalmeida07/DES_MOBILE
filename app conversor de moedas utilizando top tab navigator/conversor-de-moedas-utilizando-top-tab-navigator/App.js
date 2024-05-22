import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Dolar from './src/componentes/Dolar';
import Euro from './src/componentes/Euro';
import BitCoin from './src/componentes/BitCoin';

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Real -> Dólar" component={Dolar} />
        <Tab.Screen name="Real -> Euro" component={Euro} />
        <Tab.Screen name="Real -> BitCoin" component={BitCoin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;