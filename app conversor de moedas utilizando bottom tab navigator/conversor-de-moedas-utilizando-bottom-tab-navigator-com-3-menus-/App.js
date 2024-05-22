import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Dolar from './src/componentes/Dolar/index';
import Euro from './src/componentes/Euro/index';
import BitCoin from './src/componentes/BitCoin/index';

const Tab = createBottomTabNavigator();

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
